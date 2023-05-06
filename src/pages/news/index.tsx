import Link from "next/link";
import img1 from '../../images/news (1).jpg';
import img2 from '../../images/wafy.jpg';
import img3 from '../../images/peresmian-web-ikmapas.jpg';
import MainFooter from "@/components/footers/mainFooter";
import NavbarLinks from "@/components/navbars/navbarLinks";

function News() {
  return (
    <main>
      <NavbarLinks />
      <section className="py-5" style={{ minHeight: '100vh' }}>
        <div className="container">
          <h1 className="fw-bold text-primary">IKMAPAS Surabaya News</h1>
          <hr />

          <form>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="bi bi-search"></i></span>
              <input type="text" className="form-control" placeholder="Cari di Sini..." />
            </div>
          </form>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="text-decoration-none" href='/news/judul-artikel-dua'>
                <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img2.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Diduga Seorang Mahasiswa Kehilanagn HP saat Satu Abad NU</p>
                    <small>1 hari lalu</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="text-decoration-none" href='/news/judul-artikel-tiga'>
                <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img3.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Dulur Faris dan Dulur Dzulfikar Terpilih sebagai Ketum dan Waketum 2023-2024</p>
                    <small>1 hari lalu</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Link className="text-decoration-none" href='/news/judul-artikel-satu'>
                <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img1.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Usut Tuntas Tragedi Kanjuruhan 1 Oktober 2022</p>
                    <small>1 hari lalu</small>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}

export default News;