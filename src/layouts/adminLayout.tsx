import MainFooter from "@/components/footers/mainFooter";
import NavbarLayout from "@/components/navbars/navbarLayout";
import ThemeOptions from "@/components/themeOptions";
import Link from "next/link";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode
}

function AdminLayout({ children }: AdminLayoutProps) {

  return (<>
    <NavbarLayout>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link text-center" href="/admin">Dashboard</Link>
          <Link className="nav-link text-center" href="/admin/contents">Konten</Link>
          <Link className="nav-link text-center" href="/admin/comments">Komentar</Link>
          <Link className="nav-link text-center" href="/admin/notifications">Notifikasi</Link>
          <Link className="nav-link text-center" href="/admin/settings">Pengaturan</Link>
          <ThemeOptions />
        </div>
        <Link href="/auth" className="btn btn-primary">Keluar</Link>
      </div>
    </NavbarLayout>

    <main style={{ minHeight: '100vh' }}>{children}</main>

    <MainFooter></MainFooter>
  </>);
}

export default AdminLayout;