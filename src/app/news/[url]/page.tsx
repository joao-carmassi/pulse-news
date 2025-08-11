import { H1 } from '@/components/ui/h1';
import noticias from '@/db/noticias.json';
import { unstable_ViewTransition as ViewTransition } from 'react';
import Image from 'next/image';
import MarkdownToHtml from '@/components/ui/markdownToHtml';

interface Props {
  params: Promise<{ url: string }>;
}

const buscaNoticia = (url: string) => {
  const noticia = noticias.data.find((noticia) => noticia.url === url);
  return noticia;
};

type INews = (typeof noticias.data)[0];

export const generateMetadata = async ({ params }: Props) => {
  const { url } = await params;
  const news = buscaNoticia(url) as INews;

  return {
    title: `${news.title} | Pulse News`,
    description: news.title,
    openGraph: {
      images: [news.image],
    },
  };
};

const News = async ({ params }: Props) => {
  const { url } = await params;
  const news = buscaNoticia(url) as INews;

  return (
    <article className='p-6 md:p-12 max-w-7xl mx-auto min-h-screen pt-28 md:pt-28'>
      <ViewTransition name={`${news.url}-title`}>
        <H1 className='mb-4 text-center md:text-start'>{news.title}</H1>
      </ViewTransition>
      <div className='flex items-center justify-center md:justify-start text-sm text-muted-foreground mb-6'>
        <ViewTransition name={`${news.url}-tag`}>
          <span className='mr-4'>{news.tag}</span>
        </ViewTransition>
        <ViewTransition name={`${news.url}-author`}>
          <span className='mr-4'>
            By {news.author} ({news.author_abbr})
          </span>
        </ViewTransition>
        <ViewTransition name={`${news.url}-date`}>
          <span>{new Date(news.created_at).toLocaleDateString('en-US')}</span>
        </ViewTransition>
      </div>
      <ViewTransition name={`${news.url}-img`}>
        <Image
          width={1100}
          height={600}
          alt={news.title}
          src={news.image}
          className='aspect-video bg-muted rounded-lg w-full mb-6 object-cover'
        />
      </ViewTransition>
      <MarkdownToHtml markdown={news.content_markdown} />
    </article>
  );
};

export async function generateStaticParams() {
  return noticias.data.map((news) => ({
    nome: news.url,
  }));
}

export default News;
