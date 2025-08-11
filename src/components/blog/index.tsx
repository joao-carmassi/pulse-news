import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import noticias from '@/db/noticias.json';
import { H3 } from '../ui/h3';
import { H2 } from '../ui/h2';
import { unstable_ViewTransition as ViewTransition } from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <section
      id='blogContainer'
      className='relative z-10 p-6 md:p-12 mx-auto max-w-7xl'
    >
      <div className='flex items-end justify-between'>
        <H2>News</H2>
        <Select defaultValue='recommended'>
          <SelectTrigger className='w-[180px]'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='recommended'>Recommended</SelectItem>
            <SelectItem value='latest'>Latest</SelectItem>
            <SelectItem value='popular'>Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {noticias.data.map((news) => (
          <Link key={news.title} href={`/news/${news.url}`}>
            <Card className='shadow-none py-0 gap-0'>
              <CardHeader className='p-2'>
                <ViewTransition name={`${news.url}-img`}>
                  <Image
                    width={500}
                    height={500}
                    alt={news.title}
                    src={news.image}
                    className='aspect-video bg-muted rounded-lg w-full object-cover object-center'
                  />
                </ViewTransition>
              </CardHeader>
              <CardContent className='pt-4 pb-5'>
                <ViewTransition name={`${news.url}-tag`}>
                  <Badge>{news.tag}</Badge>
                </ViewTransition>
                <ViewTransition name={`${news.url}-title`}>
                  <H3 className='mt-4'>{news.title}</H3>
                </ViewTransition>
                <div className='mt-6 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='h-10 w-10 rounded-full bg-muted grid place-items-center font-bold'>
                      {news.author_abbr}
                    </div>
                    <ViewTransition name={`${news.url}-author`}>
                      <span className='text-muted-foreground font-semibold'>
                        {news.author}
                      </span>
                    </ViewTransition>
                  </div>
                  <ViewTransition name={`${news.url}-date`}>
                    <span className='text-muted-foreground text-sm'>
                      {new Date(news.created_at).toLocaleDateString('en-US')}
                    </span>
                  </ViewTransition>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
