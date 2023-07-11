import img1 from '../../images/about.jpg';
import ad from '../../images/adv.png';
import Image from "next/image";
import MainFooter from "@/components/footers/mainFooter";
import { CSSProperties } from "react";
import NavbarLinks from "@/components/navbars/mainNavbar";

function newsDetail() {
  const jumbotronStyle: CSSProperties = {
    backgroundImage: `url(${img1.src})`
  }

  return (
    <main>
      <NavbarLinks />
      <section className="mt-5 mb-3">
        <div className="container">
          <div className="row justify-content-center align-items-center rounded">
            <div className="col">
              <div className="card border-0 jumbotron" style={jumbotronStyle}>
                <div className="card-body d-flex justify-content-center align-items-center" style={{ position: 'relative', zIndex: '1' }}>
                  <div className="text-white text-center">
                    <p><span className="badge bg-primary">Tentang Kami</span></p>
                    <h2 className="fw-bold">IKMAPAS Surabaya - Dulur Sak Lawase!!!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-9">
              <div className='text-justify'>
                <p>
                  <span className="dropcap bg-dark text-white px-2">I</span>KMAPAS Surabaya merupakan organisasi mahasiswa yang berasal dari Pasuruan dan berkuliah di Surabaya. Organisasi ini didirikan dengan tujuan untuk membawa misi dan visi dari mahasiswa Pasuruan ke lingkungan kampus di Surabaya. IKMAPAS Surabaya berkomitmen untuk menjadi wadah bagi para mahasiswa Pasuruan yang ingin mempererat hubungan sosial, meningkatkan kualitas diri, serta berpartisipasi aktif dalam kegiatan-kegiatan yang positif.
                </p>
                <p>
                  Sebagai organisasi mahasiswa, IKMAPAS Surabaya juga aktif dalam kegiatan sosial kemasyarakatan dan lingkungan. Kami memiliki program-program yang dirancang khusus untuk memberikan dampak positif bagi masyarakat sekitar kampus dan lingkungan hidup. Kami berupaya untuk mengajak seluruh mahasiswa Pasuruan yang berkuliah di Surabaya untuk turut serta dalam kegiatan-kegiatan yang kami selenggarakan.
                </p>
                <p>
                  Salah satu tongkrongan anak muda yang memunculkan sejarah baru.
                  Beginilah awal kisah Ikmapas terbentuk yakni dari pemikir muda  yang ingin mengamalkan keilmuan mahasiswa untuk banyak perubahan terhadap daerah asal, tiga orang pemuda dengan akrab dipanggil dengan sebutan ‘cak’ .
                  Pada tahun 2000 Cak Kaji, Cak Jalaludin serta mengajak Cak Affandi berkumpul pada salah satu hari untuk mencetak generasi, diskusi  lama yang terasa sebentar dengan pembahasan santai namun serius, beliau mulai menyusun strategi mengumpulkan mahasiswa Surabaya yang  berasal dari Pasuruan Jawa timur untuk menjadi satu kesatuan dalam organisasi daerah.
                </p>
                <p>
                  Tepat pada 06 Juni 2001, nama Ikmapas telah resmi sebagai nama organisasi daerah yang mewadahi mahasiswa Surabaya asal Pasuruan, lambat laun pada tahun 2002 diadakan kegiatan dakwah sosial yang menjadi pondasi Ikmapas hingga kini, yaitu Bakti Sosial yang bertempat di NongkoJajar.
                  Tak hanya mahasiswa asal Pasuruan saja yang hadir melainkan siapapun yang mau berbagi kebaikan diperbolehkan kontribusi.
                  Sejak saat itu Ikmapas semakin berkembang sampai pada dua tahun menyedihkan 2014-2015  yang mana Ikmapas lebih memilih untuk vakum organisasi, namun tidak berhenti disitu. Setalah tahun sedih, Ikmapas kembali bangkit dengan sejuta cita dan harapan untuk memberikan perubahan pada Pasuruan, hingga kini Ikmapas mengganti sebutannya dengan Ikmapas Surabaya dengan dalih organisasi ini mencakup keseluruhan universitas yang terdapat di Surabaya.
                </p>
                <h3 className="fw-bold text-primary">Visi</h3>
                <p>
                  Visi IKMAPAS SURABAYA adalah Terwujudnya generasi yang bertakwa kepada Tuhan Yang Maha Esa, kritis, dan aktif berpartisipasi dalam kegiatan sosial maupun masyarakat.
                </p>
                <h3 className="fw-bold text-primary">Misi</h3>
                <p>
                  Misi IKMAPAS SURABAYA adalah:
                </p>
                <ol>
                  <li>Meningkatkan ketakwaan kepada Tuhan Yang Maha Esa.</li>
                  <li>Mempererat rasa kekeluargaan mahasiswa Pasuruan di Surabaya.</li>
                  <li>Menyosialisasikan pendidikan di Surabaya kepada putra-putri di Pasuruan.</li>
                  <li>Menanamkan rasa tanggung jawab dalam diri setiap anggota.</li>
                  <li>Membentuk generasi yang terdidik untuk dikembangkan di Pasuruan.</li>
                </ol>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <Image src={ad} alt="" className="img-fluid mb-3" />
              <Image src={ad} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}


export default newsDetail;