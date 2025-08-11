'use client';

import Aurora from '@/blocks/Backgrounds/Aurora/Aurora';
import { H1 } from '../ui/h1';
import { H2 } from '../ui/h2';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className='relative '>
      <div className='relative z-10 p-6 md:p-12 mx-auto max-w-7xl flex items-center justify-center flex-col gap-6 min-h-screen text-center'>
        <H1 className='drop-shadow-sm shadow-black text-5xl font-bold'>
          Pulse News
        </H1>
        <H2 className='drop-shadow-sm shadow-black text-xl text-muted-foreground max-w-2xl'>
          Stay ahead, stay informed. Get the latest stories and insights, all in
          one place.
        </H2>
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <Button
            onClick={() => {
              const element = document.getElementById('blogContainer');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            effect={'ringHover'}
            size='lg'
          >
            Read Latest News
          </Button>
          <Button className='bg-transparent' variant='outline' size='lg'>
            Subscribe
          </Button>
        </div>
      </div>
      <div className='absolute w-full top-0 z-0 h-full'>
        <Aurora
          colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
    </section>
  );
};

export default Hero;
