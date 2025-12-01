import { getMDXComponent } from 'mdx-bundler/client';
import { compileMDX } from '@/lib/mdx';
import { readMarkdown } from '@/utils/file';
import CopyBlock from '@/components/CodeBlock';
import { Libs } from '@/constants/libs';

export default async function Markdown({ name }: { name: Libs }) {
  const source = readMarkdown(name);
  const { code } = await compileMDX(source);
  const Markdown = getMDXComponent(code);

  return (
    <div className="prose mx-auto py-6 px-3 md:px-0">
      <Markdown components={{
        code: CopyBlock
      }} />
    </div>
  );
}
