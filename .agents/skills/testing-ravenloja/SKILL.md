---
name: testing-ravenloja
description: Test the Raven loja static storefront UI locally. Use when verifying product grid, atendimento option selection, terms modal, or other storefront interactions.
---

# Testing Raven Loja

## Devin Secrets Needed

- None for local static storefront testing.

## Local startup

From the repo root, serve the static files with Python:

```bash
python3 -m http.server 4173 --directory /home/ubuntu/repos/ravenloja
```

Open Chrome to `http://127.0.0.1:4173/`. For testing the product/support section directly, use `http://127.0.0.1:4173/#produtos`.

## Useful checks

- Syntax-check JavaScript with:

```bash
node --check /home/ubuntu/repos/ravenloja/script.js
```

- Check whitespace/conflict issues before committing with:

```bash
git diff --check
```

## UI testing notes

- This is a static HTML/CSS/JS site, so no login is required for local UI testing.
- For atendimento option changes, verify the visible selected text and the product CTA labels both update after clicking each option.
- Use the browser console only to inspect final state or errors; perform navigation and clicks through the UI for recordings.
