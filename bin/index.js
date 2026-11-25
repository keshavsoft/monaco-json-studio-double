#!/usr/bin/env node
import { HEADER_TYPES, FOOTER_TYPES, createDoubleStudio } from '../src/index.js';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Monaco JSON Studio · Double (v2)

Usage:
  npx monaco-json-studio-double [header] [footer]

Options:
  header : ${HEADER_TYPES.join(' | ')} (default: file-picker)
  footer : ${FOOTER_TYPES.join(' | ')} (default: status)

Examples:
  npx monaco-json-studio-double
  npx monaco-json-studio-double file-picker status
  npx monaco-json-studio-double select stats
  npx monaco-json-studio-double actions cursor
`);
    process.exit(0);
}

const [header = 'file-picker', footer = 'status'] = args;

try {
    const targetDir = createDoubleStudio({ header, footer });
    console.log(`Generated Double Studio v2 (${header} / ${footer}).`);
    console.log(`Open: ${targetDir}/index.html`);
} catch (error) {
    console.error(`Could not generate Double Studio: ${error.message}`);
    process.exit(1);
}
