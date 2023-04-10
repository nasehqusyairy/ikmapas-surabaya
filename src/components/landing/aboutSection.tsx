import Image from 'next/image';
import img from '../../images/hero.png';
import Link from 'next/link';
function AboutSection() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row flex-lg-row-reverse">
          <div className="col-12 col-lg d-flex align-items-center">
            <div>
              <h1 className="fw-bold text-center text-lg-start">Sekilas Tentang IKMAPAS Surabaya</h1>
              <div className="text-muted text-justify">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit repellat esse vero ab quam minus ratione nobis, sunt
                  error autem qui excepturi quo maiores tempore repudiandae
                  fuga, molestias quisquam ipsa! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
                <p><Link href="/about">Baca lebih banyak</Link></p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg">
            <Image src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;