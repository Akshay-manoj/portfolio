---
name: node-nvm-setup
description: Node version setup for the portfolio project — must switch off the default ancient Node
metadata:
  type: project
---

The machine's default `node` on PATH is v10.24.1 (2018, npm 6), which is far too old for Next.js 15. Use `nvm` (installed at `C:\Users\aksha\AppData\Local\nvm`) to switch before any npm/node work:

```
nvm use 24.16.0
```

Available versions: 24.16.0, 24.13.0, 24.12.0, 23.7.0, 22.21.1, 16.20.2, 10.24.1.

Note: the Bash tool's shell still resolves the old v10; run node/npm commands via the **PowerShell tool** after `nvm use`.
