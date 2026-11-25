# monaco-json-studio-double

2-pane static Monaco JSON Studio generator composing base-header, base-body (double), and base-footer.

- **npm**: [https://www.npmjs.com/package/monaco-json-studio-double](https://www.npmjs.com/package/monaco-json-studio-double)
- **GitHub**: [https://github.com/keshavsoft/monaco-json-studio-double](https://github.com/keshavsoft/monaco-json-studio-double)
- **Docs**: [https://keshavsoft.github.io/monaco-json-studio-double/](https://keshavsoft.github.io/monaco-json-studio-double/) ([Story](./docs/story.html) · [npx](./docs/npx-usage.html) · [npm](./docs/npm-usage.html) · [Dependencies](./docs/dependencies.html))
- **Suite**: [Studio Docs](https://keshavsoft.github.io/monaco-json-studio-docs/double.html)

## CLI (`npx`)

```bash
npx monaco-json-studio-double
npx monaco-json-studio-double file-picker status
npx monaco-json-studio-double select stats
```

## Programmatic (`npm`)

```bash
npm install monaco-json-studio-double
```

```js
import { createDoubleStudio } from 'monaco-json-studio-double';

createDoubleStudio({ header: 'file-picker', footer: 'status' });
```
