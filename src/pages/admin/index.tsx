import MainFooter from "@/components/footers/mainFooter";
import NavbarLayout from "@/components/navbars/navbarLayout";
import ThemeOptions from "@/components/themeOptions";
import Link from "next/link";

function Admin() {

  return (<>
    <NavbarLayout>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link text-center" href="/">Dashboard</Link>
          <Link className="nav-link text-center" href="/about">Konten</Link>
          <Link className="nav-link text-center" href="/gallery">Komentar</Link>
          <Link className="nav-link text-center" href="/contact">Notifikasi</Link>
          <Link className="nav-link text-center" href="/news">Pengaturan</Link>
          <ThemeOptions />
        </div>
        <Link href="/auth" className="btn btn-primary">Keluar</Link>
      </div>
    </NavbarLayout>

    <main style={{ minHeight: '100vh' }}></main>

    <MainFooter></MainFooter>
  </>);
}

export default Admin;