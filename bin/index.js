#!/usr/bin/env node
import { HEADER_TYPES, FOOTER_TYPES, createDoubleStudio } from '../src/index.js';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Monaco JSON Studio · Double (v3)

Usage:
  npx monaco-json-studio-double [header] [footer] [--url <endpoint>]

Options:
  header : ${HEADER_TYPES.join(' | ')} (default: file-picker)
  footer : ${FOOTER_TYPES.join(' | ')} (default: status)
  --url  : Optional JSON endpoint or path to load initially in Pane 1

Examples:
  npx monaco-json-studio-double
  npx monaco-json-studio-double file-picker status
  npx monaco-json-studio-double select stats --url https://jsonplaceholder.typicode.com/todos/1
`);
    process.exit(0);
}

const urlIndex = args.indexOf('--url');
const url = urlIndex !== -1 ? (args[urlIndex + 1] ?? '') : '';
const positional = args.filter((arg, i) => arg !== '--url' && (urlIndex === -1 || i !== urlIndex + 1));
const [header = 'file-picker', footer = 'status'] = positional;

try {
    const targetDir = createDoubleStudio({ header, footer, url });
    console.log(`Generated Double Studio v3 (${header} / ${footer}${url ? ` / url=${url}` : ''}).`);
    console.log(`Open: ${targetDir}/index.html`);
} catch (error) {
    console.error(`Could not generate Double Studio: ${error.message}`);
    process.exit(1);
}
