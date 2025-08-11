import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Overview',
    href: '#',
  },
  {
    title: 'Features',
    href: '#',
  },
  {
    title: 'Pricing',
    href: '#',
  },
  {
    title: 'Careers',
    href: '#',
  },
  {
    title: 'Help',
    href: '#',
  },
  {
    title: 'Privacy',
    href: '#',
  },
];

const Footer = () => {
  return (
    <div className='flex flex-col bg-card'>
      <div className='grow' />
      <footer>
        <div>
          <div className='flex flex-col sm:flex-row items-start justify-between p-6 md:p-12 mx-auto max-w-7xl'>
            <div>
              {/* Logo */}
              <p className='bg-primary text-foreground w-10 h-10 grid place-items-center rounded-full font-bold'>
                PN
              </p>

              <ul className='mt-6 flex items-center gap-4 flex-wrap'>
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className='text-muted-foreground hover:text-foreground'
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className='max-w-xs w-full'>
              <h6 className='font-semibold'>Stay up to date</h6>
              <form className='mt-6 flex items-center gap-2'>
                <Input type='email' placeholder='Enter your email' />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div className='flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-6 md:px-12 mx-auto max-w-7xl'>
            {/* Copyright */}
            <span className='text-muted-foreground'>
              &copy; {new Date().getFullYear()}{' '}
              <Link href='/' target='_blank'>
                Shadcn UI Blocks
              </Link>
              . All rights reserved.
            </span>

            <div className='flex items-center gap-5 text-muted-foreground'>
              <Link href='#' target='_blank'>
                <TwitterIcon className='h-5 w-5' />
              </Link>
              <Link href='#' target='_blank'>
                <DribbbleIcon className='h-5 w-5' />
              </Link>
              <Link href='#' target='_blank'>
                <TwitchIcon className='h-5 w-5' />
              </Link>
              <Link href='#' target='_blank'>
                <GithubIcon className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
