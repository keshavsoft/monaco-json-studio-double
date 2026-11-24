#!/usr/bin/env node
import { HEADER_TYPES, FOOTER_TYPES } from 'monaco-json-studio-base';
import { createDoubleStudio } from '../src/index.js';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Monaco JSON Studio · Double

Usage:
  npx monaco-json-studio-double [pane1] [pane2]

Each pane uses <header>:<footer?> (defaults: file-picker:cursor):
  header : ${HEADER_TYPES.join(' | ')}
  footer : ${FOOTER_TYPES.join(' | ')}

Examples:
  npx monaco-json-studio-double
  npx monaco-json-studio-double file-picker:cursor select:note
  npx monaco-json-studio-double title:none
`);
    process.exit(0);
}

const pane1 = args[0] ?? 'file-picker:cursor';
const pane2 = args[1] ?? pane1;

try {
    const targetDir = createDoubleStudio({ pane1, pane2 });
    console.log(`Generated Double Studio (${pane1} | ${pane2}).`);
    console.log(`Open: ${targetDir}/index.html`);
} catch (error) {
    console.error(`Could not generate Double Studio: ${error.message}`);
    process.exit(1);
}
