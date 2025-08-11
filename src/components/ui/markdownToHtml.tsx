import ReactMarkdown from 'react-markdown';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import { H1 } from './h1';
import { H2 } from './h2';
import { H3 } from './h3';
import { P } from './p';
import { Blockquote } from './blockquote';
import { Ul } from './ul';
import { Ol } from './ol';
import MarkdownTable from './markdownTable';
import remarkGfm from 'remark-gfm';
import { Separator } from './separator';

interface Props {
  markdown: string;
}

const MarkdownToHtml = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (props: ReactMarkdownProps) => (
          <H1
            {...props}
            className='text-xl md:text-xl lg:text-2xl mb-6 text-center md:text-start'
          />
        ),
        h2: (props: ReactMarkdownProps) => (
          <H2 {...props} className='text-base md:text-xl' />
        ),
        h3: (props: ReactMarkdownProps) => (
          <H3 {...props} className='text-base md:text-lg' />
        ),
        p: (props: ReactMarkdownProps) => <P {...props} className='mb-4' />,
        blockquote: (props: ReactMarkdownProps) => (
          <Blockquote {...props} className='mb-4' />
        ),
        ul: (props: ReactMarkdownProps) => <Ul {...props} className='mb-4' />,
        ol: (props: ReactMarkdownProps) => <Ol {...props} className='mb-4' />,
        hr: () => <Separator className='mb-4' />,
        ...MarkdownTable,
      }}
      className='prose prose-lg max-w-none'
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownToHtml;
