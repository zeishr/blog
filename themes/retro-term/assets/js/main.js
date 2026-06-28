document.documentElement.dataset.js = "enabled";

const copyCode = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.inset = "0 auto auto -9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
};

const getCodeText = (block) => {
  const code = block.querySelector(".lntd:last-child code, code");
  return code?.innerText.replace(/\n$/, "") ?? "";
};

const getLineNumbers = (block) => {
  return [...block.querySelectorAll(".lnt, .ln")].filter((line) =>
    /^\d+$/.test(line.textContent.trim()),
  );
};

const getRelativeAnchor = (block, numbers) => {
  const highlightedLine = block.querySelector(".lntd:last-child .hl");
  if (!highlightedLine) {
    return Number(
      numbers[0]?.dataset.absoluteLine ?? numbers[0]?.textContent.trim() ?? 1,
    );
  }

  const codeLines = [...block.querySelectorAll(".cl")];
  const highlightedIndex = codeLines.findIndex(
    (line) => line.contains(highlightedLine) || line === highlightedLine,
  );
  return Number(
    numbers[highlightedIndex]?.dataset.absoluteLine ??
      numbers[0]?.dataset.absoluteLine ??
      1,
  );
};

const renderLineNumbers = (block) => {
  const numbers = getLineNumbers(block);
  if (numbers.length === 0) return;

  numbers.forEach((line) => {
    if (!line.dataset.absoluteLine) {
      line.dataset.absoluteLine = line.textContent.trim();
    }
  });

  const isRelative = block.dataset.lineMode === "relative";
  const anchor = getRelativeAnchor(block, numbers);

  numbers.forEach((line) => {
    const absolute = Number(line.dataset.absoluteLine);
    const rendered = isRelative
      ? String(Math.abs(absolute - anchor))
      : String(absolute);
    line.textContent = line.classList.contains("lnt")
      ? `${rendered}\n`
      : rendered;
  });
};

document.querySelectorAll("[data-code-block]").forEach((block) => {
  renderLineNumbers(block);

  const copyButton = block.querySelector("[data-code-copy]");
  copyButton?.addEventListener("click", async () => {
    const label = copyButton.querySelector(".code-block__copy-text");
    const original = label?.textContent ?? "copy";

    try {
      await copyCode(getCodeText(block));
      if (label) label.textContent = "copied";
      copyButton.dataset.copied = "true";
      setTimeout(() => {
        if (label) label.textContent = original;
        delete copyButton.dataset.copied;
      }, 1400);
    } catch {
      if (label) label.textContent = "failed";
    }
  });

  const lineToggle = block.querySelector("[data-code-line-toggle]");
  lineToggle?.addEventListener("click", () => {
    const nextMode =
      block.dataset.lineMode === "relative" ? "absolute" : "relative";
    block.dataset.lineMode = nextMode;
    lineToggle.setAttribute("aria-pressed", String(nextMode === "relative"));
    lineToggle.textContent = nextMode === "relative" ? "abs" : "rel";
    renderLineNumbers(block);
  });

  lineToggle?.setAttribute(
    "aria-pressed",
    String(block.dataset.lineMode === "relative"),
  );
  if (lineToggle && block.dataset.lineMode === "relative") {
    lineToggle.textContent = "abs";
  }
});
