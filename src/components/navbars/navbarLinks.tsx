import Link from "next/link";
import MainNavbar from "./mainNavbar";
import ThemeOptions from "../themeOptions";

function NavbarLinks() {
  return (
    <MainNavbar>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link className="nav-link text-center" href="/">Beranda</Link>
          <Link className="nav-link text-center" href="/about">Tentang</Link>
          <Link className="nav-link text-center" href="/gallery">Galeri</Link>
          <Link className="nav-link text-center" href="/contact">Kontak</Link>
          <Link className="nav-link text-center" href="/news">Berita</Link>
          <ThemeOptions />
          <form className="d-flex mb-3 mb-lg-0 me-lg-3 input-group" role="search">
            <input className="form-control" type="search" placeholder="Cari di Sini..." />
            <button className="btn btn-outline-primary" type="submit"><i className="bi bi-search"></i></button>
          </form>
          <Link href="/auth" className="btn btn-primary">Masuk</Link>
        </div>
      </div>
    </MainNavbar>
  );
}

export default NavbarLinks;