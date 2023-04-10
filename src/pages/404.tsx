import Image from "next/image";
import img from '../images/404.png';
import Link from "next/link";

function custom404() {
  return (
    <main className="text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <Image src={img} alt="404 Illustration Image" className="img-fluid" />
            <h1>Loh, kok ilang... 🗿</h1>
            <p className="text-primary"><Link href="/">{'<<'} Kembali</Link></p>
          </div>
        </div>
      </div>
    </main >
  );
}

export default custom404;
