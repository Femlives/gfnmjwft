import { FCProps } from '@/types/app';
import Image from 'next/image';

import logo from '../../public/images/femlives-logo.svg';
import { Button } from './Button';
const Header: FCProps = () => {
  return (
    <header className='w-full px-36 py-4 bg-quinary flex justify-between items-center sticky top-0'>
      <Image src={logo} alt='Femlives Logo' />
      <div className='flex gap-4'>
        <Button
          buttonLabel='Switch for experts'
          variant='link'
          onClick={() => console.log('Switch to experts clicked')}
        />
        <Button
          buttonLabel='Log In'
          variant='primary-outlined'
          onClick={() => console.log('Log in clicked')}
        />
        <Button
          buttonLabel='Subscribe'
          onClick={() => console.log('Subscribe clicked')}
        />
      </div>
    </header>
  );
};

export default Header;
