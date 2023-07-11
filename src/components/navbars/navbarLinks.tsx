import Link from "next/link";
import ThemeOptions from "../themeOptions";

function NavbarLinks() {
  return (
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link text-center" href="/">Beranda</Link>
        <Link className="nav-link text-center" href="/#about">Tentang</Link>
        <Link className="nav-link text-center" href="/#gallery">Galeri</Link>
        <Link className="nav-link text-center" href="/#contact">Kontak</Link>
        <Link className="nav-link text-center" href="/#news">Berita</Link>
        <ThemeOptions />
        <form className="d-flex mb-3 mb-lg-0 me-lg-3 input-group" role="search">
          <input className="form-control" type="search" placeholder="Cari di Sini..." />
          <button className="btn btn-outline-primary" type="submit"><i className="bi bi-search"></i></button>
        </form>
      </div>
      <Link href="/auth" className="btn btn-primary me-2">Admin</Link>
      <Link href="/auth" className="btn btn-secondary">Keluar</Link>
    </div>
  );
}

export default NavbarLinks;