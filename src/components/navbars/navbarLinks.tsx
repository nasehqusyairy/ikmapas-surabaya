import Link from "next/link";
import ThemeOptions from "../themeOptions";

function NavbarLinks() {
  return (
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-center" href="#">Beranda</a>
        <a className="nav-link text-center" href="#about">Tentang</a>
        <a className="nav-link text-center" href="#gallery">Galeri</a>
        <a className="nav-link text-center" href="#contact">Kontak</a>
        <a className="nav-link text-center" href="#news">Berita</a>
        <ThemeOptions />
      </div>
      <Link href="/admin" className="btn btn-primary me-2">Admin</Link>
      <Link href="/auth" className="btn btn-secondary">Keluar</Link>
    </div>
  );
}

export default NavbarLinks;