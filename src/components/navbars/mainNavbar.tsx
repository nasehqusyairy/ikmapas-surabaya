import Image from 'next/image';
import logo from '../../images/logo.png';
import Link from 'next/link';
import ThemeOptions from '../themeOptions';
import { ReactNode } from 'react';
function MainNavbar({ children }: { children: ReactNode | undefined }) {
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