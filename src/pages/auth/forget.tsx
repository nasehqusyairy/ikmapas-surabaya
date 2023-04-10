import AuthLayout from "@/layouts/authLayout";
import Link from "next/link";

function Forget() {
  return (
    <AuthLayout title='Reset Kata Sandi'>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" className="form-control mb-3" />
      <div className="d-grid gap-2">
        <button className="btn btn-primary">Kirim</button>
      </div>
      <p className="text-center m-0 mt-3">
        <Link href="/auth" className="text-primary">Kembali ke Autentikasi</Link>
      </p>
    </AuthLayout>
  );
}

export default Forget;