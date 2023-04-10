import Link from "next/link";
import ThemeOptions from "../themeOptions";

function NavbarItems() {
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div className="navbar-nav">
        <a className="nav-link text-center" href="#">Beranda</a>
        <a className="nav-link text-center" href="#about">Tentang</a>
        <a className="nav-link text-center" href="#gallery">Galeri</a>
        <a className="nav-link text-center" href="#contact">Kontak</a>
        <a className="nav-link text-center" href="#news">Berita</a>
        <ThemeOptions />
      </div>
      <div className="d-grid gap-2">
        <Link href="/auth" className="btn btn-primary">Masuk</Link>
      </div>
    </div>
  );
}

export default NavbarItems;