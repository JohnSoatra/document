import { getMDXComponent } from 'mdx-bundler/client';
import { compileMDX } from '@/lib/mdx';
import { readMarkdown } from '@/utils/file';
import CopyBlock from '@/components/CodeBlock';

interface Props {
  params: Promise<{ slug: string }>;
}

function NotFoundFile() {
  return (
    <h3 className='text-center text-lg py-6'>
      Sorry, the requested file could not be found.
    </h3>
  );
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug ;
  let source = readMarkdown(slug);
  if (!source) {
    return <NotFoundFile />
  }
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
