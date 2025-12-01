import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

export async function compileMDX(source: string) {
  return bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [
          rehypePrettyCode,
          {
            theme: 'github-dark', // choose theme
            onVisitLine(node: any) {
              // prevent empty lines collapsing
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }];
              }
            },
            onVisitHighlightedLine(node: any) {
              node.properties.className.push('highlighted');
            },
            onVisitHighlightedWord(node: any) {
              node.properties.className = ['word-highlight'];
            },
          },
        ],
      ];
      return options;
    },
  });
}
