import React, { useEffect, useState, FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className='mx-2 cursor-pointer border-b-4 hover:border-b-4 hover:text-green border-green'
          onClick={() => setActive(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    else if (pathname === '/projects') setActiveItem('Projects');
    else if (pathname === '/resume') setActiveItem('Resume');
    else if (pathname === '/resources') setActiveItem('Resources');
  }, []);

  return (
    <div className='flex items-center justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold border-b-4 md:text-2xl border-green'>
        {activeItem}
      </span>

      <div className='text-base font-normal md:text-xl'>
        <NavItem
          active={activeItem}
          setActive={setActiveItem}
          name='About'
          route='/'
        />

        <NavItem
          active={activeItem}
          setActive={setActiveItem}
          name='Projects'
          route='/projects'
        />

        <NavItem
          active={activeItem}
          setActive={setActiveItem}
          name='Resources'
          route='/resources'
        />
      </div>
    </div>
  );
};

export default Navbar;
