import fs from 'fs';
import path from 'path';

export function readMarkdown(name: string) {
  try {
    return fs.readFileSync(
      path.join('markdown', name.concat('.mdx')),
      'utf8'
    );
  } catch {}
  return undefined;
}
