import AuthLayout from "@/layouts/authLayout";
import Link from "next/link";

function login() {
  return (
    <AuthLayout title='Autentikasi'>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" className="form-control mb-3" />
      <label htmlFor="password">Kata Sandi</label>
      <input type="password" name="password" id="password" className="form-control mb-3" />
      <p><Link href="/auth/forget" className="text-primary">Lupa Sandi ?</Link></p>
      <div className="d-grid gap-2">
        <button className="btn btn-primary">Masuk</button>
        <Link href="/auth/register" className="btn btn-outline-secondary">Daftar</Link>
      </div>
      <p className="text-center m-0 mt-3">
        <Link href="/" className="text-primary">Kembali ke Beranda</Link>
      </p>
    </AuthLayout>
  );
}

export default login;