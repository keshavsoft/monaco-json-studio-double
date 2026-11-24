# monaco-json-studio-double

Dedicated 2-pane side-by-side static Monaco JSON Studio generator built on `monaco-json-studio-base`.

- **npm**: [https://www.npmjs.com/package/monaco-json-studio-double](https://www.npmjs.com/package/monaco-json-studio-double)
- **Suite Story & Docs**: [https://keshavsoft.github.io/monaco-json-studio-docs/double.html](https://keshavsoft.github.io/monaco-json-studio-docs/double.html)
- **Repo Docs**: [./docs/index.html](./docs/index.html) | [https://keshavsoft.github.io/monaco-json-studio-double/](https://keshavsoft.github.io/monaco-json-studio-double/)

## Why It Exists

Side-by-side comparison or input/output workflows need two independent panes, each with its own header controls (`file-picker`, `select`, `title`, `none`) and footer (`cursor`, `note`, `none`). Isolating the 2-pane layout into its own package keeps the CLI direct and outputs to non-overwriting folders.

## CLI Usage

```bash
npx monaco-json-studio-double
npx monaco-json-studio-double file-picker:cursor select:note
npx monaco-json-studio-double title:none
```

## Programmatic Usage

```js
import { createDoubleStudio } from 'monaco-json-studio-double';

createDoubleStudio({ pane1: 'file-picker:cursor', pane2: 'select:note' });
```
