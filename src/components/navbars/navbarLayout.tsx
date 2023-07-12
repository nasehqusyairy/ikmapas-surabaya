import Image from 'next/image';
import logo from '../../images/logo.png';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavbarLayoutProps { children: ReactNode }

function NavbarLayout({ children }: NavbarLayoutProps) {

  return (
    <div className="navbar-fixed">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow">
        <div className="container">
          <Link className="navbar-brand text-body" href="/" >
            <Image src={logo} height={50} alt="Logo IKMAPAS Surabaya" className="me-3" />
            IKMAPAS
          </Link>
          {children}
        </div>
      </nav>
    </div>
  );
}

export default NavbarLayout;