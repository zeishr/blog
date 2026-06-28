+++
title = 'Blackpill'
date = 2024-12-01T00:00:00Z
description = 'A Linux kernel rootkit in Rust using a custom type-2 hypervisor, eBPF XDP, and TC programs.'
tags = ['rust', 'linux', 'kernel', 'rootkit', 'hypervisor']
status = '2024'
+++

Blackpill is a Linux kernel rootkit in Rust using a custom type-2 hypervisor, eBPF XDP, and TC programs.

The rootkit is composed of multiple Rust modules:

- defense evasion: hide files, processes, network connections, and other artifacts
- hooking: hook syscalls and the IDT
- hypervisor: create a virtual machine to execute code
- persistence: make the rootkit persistent after reboot and resilient to suppression
- utils: various utilities

{{< button href="https://github.com/DualHorizon/blackpill" target="_blank" >}}repository{{< /button >}}
