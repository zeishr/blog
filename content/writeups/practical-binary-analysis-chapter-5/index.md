---
title: "Practical Binary Analysis - Chapter 5"
date: 2024-07-27
categories: ["Writeup"]
tags: ["pwn", "binary-exploitation", "ctf"]
series: ["practical-binary-analysis"]
series_order: 1
---

Chapter 5 of Practical Binary Analysis features a short CTF to put into practice the knowledge acquired in previous chapters. The aim is to find a flag hidden in a binary, using the tools and techniques seen previously.

The chapter provides us with the following files:

```bash
 ➜ exa -T
.
├── levels.db
├── oracle
└── payload

 ➜ find . | xargs -I {} file {}
./levels.db: ASCII text, with very long lines (12832)
./oracle: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.32, BuildID[sha1]=083d1ffa7acfcf775c1e5f95dd870c8106aaf1f0, stripped
./payload: ASCII text
```

The most interesting file seems to be `payload`, which contains plain text encoded in base64 :

```bash
 ➜ head payload
H4sIABzY61gAA+xaD3RTVZq/Sf+lFJIof1r+2aenKKh0klJKi4MmJaUvWrTSFlgR0jRN20iadpKX
UljXgROKjbUOKuOfWWfFnTlzZs/ZXTln9nTRcTHYERhnZ5c/R2RGV1lFTAFH/DNYoZD9vvvubd57
bcBl1ln3bL6e9Hvf9+733e/+v+/en0dqId80WYAWLVqI3LpooUXJgUpKFy6yEOsCy6KSRQtLLQsW
EExdWkIEyzceGVA4JLmDgkCaA92XTXel9/9H6ftVNcv0Ot2orCe3E5RiJhuVbUw/fH3SxkbKSS78
v47MJtkgZynS2YhNxYeZa84NLF0G/DLhV66X5XK9TcVnsXSc6xQ8S1UCm4o/M5moOCHCqB3Geny2
rD0+u1HFD7I4junVdnpmN8zshll6zglPr1eXL5P96pm+npWLcwdL51CkR6r9UGrGZ8O1zN+1NhUv
ZelKNXb3gl02+fpkZnwFyy9VvQgsfs55O3zH72sqK/2Ov3m+3xcId8/vLi+bX1ZaHOooLqExmVna
6rsbaHpejwKLeQqR+wC+n/ePA3n/duKu2kNvL175+MxD7z75W8GC76aSZLv1xgSdkGnLRV0+/KbD
7+UPnnhwadWbZ459b/Wsl/o/NZ468olxo3P9wOXK3Qe/a8fRmwhvcTVdl0J/UDe+nzMp9M4U+n9J
oX8jhT5HP77+ZIr0JWT8+NvI+OnvTpG+NoV/Qwr9Vyn0b6bQkxTl+ixF+p+m0N+qx743k+wWGlX6

 ➜ cat payload | base64 -d | file -
/dev/stdin: gzip compressed data, last modified: Mon Apr 10 19:08:12 2017, from Unix
```

You can see that it's actually a gzip file. It can be decompressed to view its contents:

```bash
 ➜ cat payload | base64 -d > archive.tar.gz
 ➜ tar -xzf archive.tar.gz
 ➜ l
.rw-rw-r-- 786k abel abel 10 avril  2017  67b8601
.rwxrwxr-x  11k abel abel 10 avril  2017  ctf
.rw-rw-r-- 6,4k abel abel 27 juil. 11:58  archive.tar.gz
.rw-rw-r-- 8,7M abel abel  1 déc.   2018  levels.db
.rwxr-xr-x  11k abel abel 30 nov.   2018  oracle
.rw-rw-r-- 8,6k abel abel 19 avril  2018  payload
```

The result is two interesting files, an executable `ctf` and an image file `67b8601`.

```bash
 ➜ file ctf
ctf: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.32, BuildID[sha1]=29aeb60bcee44b50d1db3a56911bd1de93cd2030, stripped

 ➜ file 67b8601
67b8601: PC bitmap, Windows 3.x format, 512 x 512 x 24, image size 786434, resolution 7872 x 7872 px/m, 1165950976 important colors, cbSize 786488, bits offset 54
```

We can't run `ctf` because of a missing library:

```bash
 ➜ ./ctf
./ctf: error while loading shared libraries: lib5ae9b7f.so: cannot open shared object file: No such file or directory

 ➜ ldd ctf
    linux-vdso.so.1 (0x00007ffc0ebf3000)
    lib5ae9b7f.so => not found
    libstdc++.so.6 => /lib/x86_64-linux-gnu/libstdc++.so.6 (0x0000777a10e00000)
    libgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x0000777a110ce000)
    libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x0000777a10a00000)
    libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x0000777a10d19000)
    /lib64/ld-linux-x86-64.so.2 (0x0000777a11111000)
```

The only way to find this library is to find it in the files we have, in particular that image we retrieved earlier, which makes the least sense. It's easy to “fool” `file`, if you take a closer look at the image's magic-byte :

```bash
 ➜ xxd 67b8601 | head
00000000: 424d 3800 0c00 0000 0000 3600 0000 2800  BM8.......6...(.
00000010: 0000 0002 0000 0002 0000 0100 1800 0000  ................
00000020: 0000 0200 0c00 c01e 0000 c01e 0000 0000  ................
00000030: 0000 0000 7f45 4c46 0201 0100 0000 0000  .....ELF........
...
```

This is strangely similar to the magic of an ELF. With `dd` we will extract its content:

```bash
 ➜ binwalk 67b8601

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             PC bitmap, Windows 3.x format,, 512 x 512 x 24
52            0x34            ELF, 64-bit LSB shared object, AMD x86-64, version 1 (SYSV)

 ➜ dd if=67b8601 of=elf.bin skip=52 bs=1 status=progress
786436+0 records in
786436+0 records out
786436 bytes (786 kB, 768 KiB) copied, 0,876232 s, 898 kB/s

 ➜ file elf.bin
elf.bin: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, BuildID[sha1]=5279389c64af3477ccfdf6d3293e404fd9933817, stripped
```

By analyzing the new binary with [bingrep](https://github.com/m4b/bingrep), we know that it's a shared object, a priori our missing library:

```bash
 ➜ bingrep -D elf.bin | rg is_lib
is_lib: true
```

After renaming it `lib5ae9b7f.so` and to be able to use it from the current directory, we need to tell the linker (`ld`) where the :

```bash
 ➜ export LD_LIBRARY_PATH=$(pwd)
 ➜ ldd ctf
    linux-vdso.so.1 (0x00007ffccc7e7000)
    lib5ae9b7f.so => /home/abel/learning/practical-binary-analysis/code/chapter5/lib5ae9b7f.so (0x00007ce128e00000)
    ...
```

Several symbols are exported, and can be listed with `nm`. Note functions related to [RC4](https://fr.wikipedia.org/wiki/RC4), a deprecated symmetrical encryption algorithm.

```bash
 ➜ nm -D --demangle lib5ae9b7f.so
0000000000202058 B __bss_start
                 w __cxa_finalize@GLIBC_2.2.5
0000000000202058 D _edata
0000000000202060 B _end
0000000000000d20 T _fini
                 w __gmon_start__
00000000000008c0 T _init
                 w _ITM_deregisterTMCloneTable
                 w _ITM_registerTMCloneTable
                 w _Jv_RegisterClasses
                 U malloc@GLIBC_2.2.5
                 U memcpy@GLIBC_2.14
                 U __stack_chk_fail@GLIBC_2.4
0000000000000c60 T rc4_decrypt(rc4_state_t*, unsigned char*, int)
0000000000000c70 T rc4_decrypt(rc4_state_t*, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >&)
0000000000000b40 T rc4_encrypt(rc4_state_t*, unsigned char*, int)
0000000000000bc0 T rc4_encrypt(rc4_state_t*, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >&)
0000000000000cb0 T rc4_init(rc4_state_t*, unsigned char*, int)
                 U std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >::_M_create(unsigned long&, unsigned long)@GLIBCXX_3.4.21
                 U std::__throw_logic_error(char const*)@GLIBCXX_3.4
```

For the moment, we don't know any more. We can try running `ctf` :

```bash
 ➜ ./ctf
 ➜ ./ctf test
checking 'test'
```

We can see that binary takes an argument, let's look at the result of `strings` truncated to see if there are any :

```bash
 ➜ strings -6 ctf
...
DEBUG: argv[1] = %s
checking '%s'
show_me_the_flag
...
flag = %s
guess again!
It's kinda like Louisiana. Or Dagobah. Dagobah - Where Yoda lives!
...
```

We can therefore try to execute `ctf` with the `show_me_the_flag` argument:

```bash
 ➜ ./ctf show_me_the_flag
checking 'show_me_the_flag'
ok
```

Still no flag, but we seem to be on the right track. You can trace calls to dynamically imported functions with `ltrace` :

```bash
 ➜ ltrace -Cir ./ctf show_me_the_flag
  0.000000 [0x400fe9] __libc_start_main(0x400bc0, 2, 0x7ffe50b72f08, 0x4010c0 <unfinished ...>
  0.000159 [0x400c44] __printf_chk(1, 0x401158, 0x7ffe50b73759, 256checking 'show_me_the_flag'
)                                                      = 28
  0.000203 [0x400c51] strcmp("show_me_the_flag", "show_me_the_flag")                                                      = 0
  0.000189 [0x400cf0] puts("ok"ok
)                                                                                          = 3
  0.000123 [0x400d07] rc4_init(rc4_state_t*, unsigned char*, int)(0x7ffe50b72ca0, 0x4011c0, 66, 0x7e99c7114887)           = 0
  0.000123 [0x400d14] std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >::assign(char const*)(0x7ffe50b72be0, 0x40117b, 58, 3) = 0x7ffe50b72be0
  0.000143 [0x400d29] rc4_decrypt(rc4_state_t*, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >&)(0x7ffe50b72c40, 0x7ffe50b72ca0, 0x7ffe50b72be0, 0x7e889f91) = 0x7ffe50b72c40
  0.000121 [0x400d36] std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >::_M_assign(std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const&)(0x7ffe50b72be0, 0x7ffe50b72c40, 0x7ffe50b72c50, 0) = 0
  0.000122 [0x400d53] getenv("GUESSME")                                                                                   = nil
  0.000411 [0xffffffffffffffff] +++ exited (status 1) +++
```

Note the call to `basic_string`, which at first glance may contain the data decrypted by RC4, and there's also `getenv`, which could be a hint to provide an environment variable.

```bash
 ➜ GUESSME=test ./ctf show_me_the_flag
checking 'show_me_the_flag'
ok
guess again!
```

Bingo! Now we just need to find the expected value for `GUESSME`. Let's see how `ltrace` behaves with the environment variable.

```bash
 ➜ GUESSME=test ltrace -Ci ./ctf show_me_the_flag
[0x400fe9] __libc_start_main(0x400bc0, 2, 0x7ffd5a2a51c8, 0x4010c0 <unfinished ...>
[0x400c44] __printf_chk(1, 0x401158, 0x7ffd5a2a574c, 256checking 'show_me_the_flag'
)                                                                 = 28
[0x400c51] strcmp("show_me_the_flag", "show_me_the_flag")                                                                 = 0
[0x400cf0] puts("ok"ok
)                                                                                                     = 3
[0x400d07] rc4_init(rc4_state_t*, unsigned char*, int)(0x7ffd5a2a4f60, 0x4011c0, 66, 0x748678f14887)                      = 0
[0x400d14] std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >::assign(char const*)(0x7ffd5a2a4ea0, 0x40117b, 58, 3) = 0x7ffd5a2a4ea0
[0x400d29] rc4_decrypt(rc4_state_t*, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >&)(0x7ffd5a2a4f00, 0x7ffd5a2a4f60, 0x7ffd5a2a4ea0, 0x7e889f91) = 0x7ffd5a2a4f00
[0x400d36] std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >::_M_assign(std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const&)(0x7ffd5a2a4ea0, 0x7ffd5a2a4f00, 0x7ffd5a2a4f10, 0) = 0
[0x400d53] getenv("GUESSME")                                                                                              = "test"
[0x400d6e] std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >::assign(char const*)(0x7ffd5a2a4ec0, 0x401183, 5, 0xffffffe0) = 0x7ffd5a2a4ec0
[0x400d88] rc4_decrypt(rc4_state_t*, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >&)(0x7ffd5a2a4f20, 0x7ffd5a2a4f60, 0x7ffd5a2a4ec0, 49) = 0x7ffd5a2a4f20
[0x400d9a] std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >::_M_assign(std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const&)(0x7ffd5a2a4ec0, 0x7ffd5a2a4f20, 0x1e0a330, 0) = 0
[0x400db4] operator delete(void*)(0x1e0a330, 0x1e0a330, 21, 0)                                                            = 0
[0x400dd7] puts("guess again!"guess again!
)                                                                                           = 13
[0x400c8d] operator delete(void*)(0x1e0a2e0, 1, 1, 0x748678f14887)                                                        = 0
[0xffffffffffffffff] +++ exited (status 1) +++
```

We can see that the `GUESSME` variable is decrypted and compared with a value. The call to `puts` is made at address `0x400dd7`, so we can disassemble the binary to see what's going on around this address.

```bash
 ➜ objdump -M intel -d ctf
  ...
  400dc0:       0f b6 14 03             movzx  edx,BYTE PTR [rbx+rax*1]
  400dc4:       84 d2                   test   dl,dl
  400dc6:       74 05                   je     400dcd <__gmon_start__@plt+0x21d>
  400dc8:       3a 14 01                cmp    dl,BYTE PTR [rcx+rax*1]           # test if the decoded character is equal to the expected one
  400dcb:       74 13                   je     400de0 <__gmon_start__@plt+0x230>
  400dcd:       bf af 11 40 00          mov    edi,0x4011af
  400dd2:       e8 d9 fc ff ff          call   400ab0 <puts@plt>                 # puts("guess again!")
  400dd7:       e9 84 fe ff ff          jmp    400c60 <__gmon_start__@plt+0xb0>  # direction end of program
  400ddc:       0f 1f 40 00             nop    DWORD PTR [rax+0x0]
  400de0:       48 83 c0 01             add    rax,0x1
  400de4:       48 83 f8 15             cmp    rax,0x15
  400de8:       75 d6                   jne    400dc0 <__gmon_start__@plt+0x210>
  ...
```

We know that the comparison is performed at address `0x400dc8`. By running GDB, we can set a breakpoint at this address and see the expected value:

```bash
gef➤  b *0x400dc8
Breakpoint 1 at 0x400dc8
gef➤  set env GUESSME=test
gef➤  run show_me_the_flag
gef➤  display/i $pc          # prints current instruction
1: x/i $pc
=> 0x400dc8:    cmp    dl,BYTE PTR [rcx+rax*1]
gef➤  i reg rcx
rcx            0x6152e0            0x6152e0
gef➤  i reg rax
rax            0x0                 0x0
gef➤  x/s 0x6152e0
0x6152e0:       "Crackers Don't Matter"
```

We can see that the expected value is `Crackers Don't Matter`. We can therefore launch the binary with this value:

```bash
 ➜ GUESSME="Crackers Don't Matter" ./ctf show_me_the_flag
checking 'show_me_the_flag'
ok
flag = 84b34c124b2ba5ca224af8e33b077e9e
```

And now we've found the `84b34c124b2ba5ca224af8e33b077e9e` flag!
