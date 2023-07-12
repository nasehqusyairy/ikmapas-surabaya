import Link from "next/link";
import ThemeOptions from "../themeOptions";

function NavbarItems() {
  return (
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link text-center" href="/">Beranda</Link>
        <Link className="nav-link text-center" href="/about">Tentang</Link>
        <Link className="nav-link text-center" href="/gallery">Galeri</Link>
        <Link className="nav-link text-center" href="/contact">Kontak</Link>
        <Link className="nav-link text-center" href="/news">Berita</Link>
        <ThemeOptions />
      </div>
      <Link href="/admin" className="btn btn-primary me-2">Admin</Link>
      <Link href="/auth" className="btn btn-secondary">Keluar</Link>
    </div>
  );
}

export default NavbarItems;