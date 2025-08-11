'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='px-2 md:px-12 max-w-7xl mx-auto rounded-full z-40 fixed top-6 inset-x-4'>
      <nav className='h-16 bg-card border border-border rounded-full'>
        <div className='h-full flex items-center justify-between mx-auto px-4'>
          <div className='flex items-center gap-2 md:gap-6'>
            <Link
              href={'/'}
              className='bg-primary text-foreground w-10 h-10 grid place-items-center rounded-full font-bold'
            >
              PN
            </Link>
            <div className='relative hidden md:block'>
              <Search className='h-5 w-5 absolute inset-y-0 my-auto left-2.5' />
              <Input
                className='pl-10 flex-1 bg-slate-100/70 dark:bg-slate-800 border-none shadow-none w-[280px] rounded-full'
                placeholder='Search'
              />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Button
              size='icon'
              className='bg-muted text-foreground hover:bg-accent shadow-none rounded-full md:hidden'
            >
              <Search className='!h-5 !w-5' />
            </Button>
            <Button
              variant='outline'
              className='hidden sm:inline-flex rounded-full bg-transparent'
            >
              Subscribe
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('blogContainer');
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
              effect={'ringHover'}
              className='rounded-full'
            >
              News
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
