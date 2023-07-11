import Image from 'next/image';
import img from '../../images/about.png';
import Link from 'next/link';
function AboutSection() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row flex-lg-row-reverse">
          <div className="col-12 col-lg d-flex align-items-center">
            <div>
              <h1 className="fw-bold text-start">Sekilas Tentang IKMAPAS Surabaya</h1>
              <div className="text-muted text-justify">
                <p>
                  IKMAPAS Surabaya merupakan organisasi mahasiswa yang berasal dari Pasuruan dan berkuliah di Surabaya.
                  Organisasi ini didirikan dengan tujuan untuk membawa misi dan visi dari mahasiswa Pasuruan ke lingkungan kampus di Surabaya.
                  IKMAPAS Surabaya berkomitmen untuk menjadi wadah bagi para mahasiswa Pasuruan yang ingin mempererat hubungan sosial,
                  meningkatkan kualitas diri, serta berpartisipasi aktif dalam kegiatan-kegiatan yang positif.
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