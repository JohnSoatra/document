import { Libs } from '@/constants/libs';
import fs from 'fs';
import path from 'path';

export function readMarkdown(name: Libs) {
  return fs.readFileSync(
    path.join('markdown', name.concat('.mdx')),
    'utf8'
  );
}
