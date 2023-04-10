import AuthLayout from "@/layouts/authLayout";
import Link from "next/link";

function Register() {
  return (
    <AuthLayout title='Registrasi'>
      <label htmlFor="nama">Nama</label>
      <input type="text" name="nama" id="nama" className="form-control mb-3" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" className="form-control mb-3" />
      <label htmlFor="password">Kata Sandi</label>
      <input type="password" name="password" id="password" className="form-control mb-3" />
      <label htmlFor="passwordConfirm">Konfirmasi Kata Sandi</label>
      <input type="password" name="passwordConfirm" id="passwordConfirm" className="form-control mb-3" />
      <div className="d-grid gap-2">
        <button className="btn btn-primary">Kirim</button>
      </div>
      <p className="text-center m-0 mt-3"><Link href="/auth" className="text-primary">Kembali ke Autantikasi</Link></p>
    </AuthLayout>
  );
}

export default Register;