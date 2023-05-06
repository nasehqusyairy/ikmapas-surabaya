import Image from 'next/image';
import logo from '../../images/logo.png';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MainNavbarProps { children: ReactNode }

function MainNavbar({ children }: MainNavbarProps) {

  return (
    <div className="navbar-fixed">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow">
        <div className="container">
          <Link className="navbar-brand text-primary" href="/" >
            <Image src={logo} height={50} alt="Logo IKMAPAS Surabaya" className="me-3" />
            IKMAPAS
          </Link>
          {children}
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;