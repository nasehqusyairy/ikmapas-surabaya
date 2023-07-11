import Link from "next/link";
import img1 from '../../images/news (1).jpg';
import img2 from '../../images/wafy.jpg';
import img3 from '../../images/peresmian-web-ikmapas.jpg';
import MainFooter from "@/components/footers/mainFooter";
import NavbarLinks from "@/components/navbars/mainNavbar";

function News() {
  return (
    <main>
      <NavbarLinks />
      <section className="py-5" style={{ minHeight: '100vh' }}>
        <div className="container">
          <h1 className="fw-bold text-primary">IKMAPAS Surabaya Blogs</h1>
          <hr />
          <div className="row">
            <div className="col-12 col-lg-6 mb-3">
              <Link href='/news/judul-artikel-1'>
                <div className="card news-preview main-news" style={{ backgroundImage: `url('${img1.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p><span className="badge bg-primary">#Berita Terkini</span></p>
                    <p className='fw-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.</p>
                    <small>1 hari lalu</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img2.src}')` }}>
                    <div className="card-body d-flex flex-column justify-content-end text-white">
                      <p><span className="badge bg-primary">#Berita Terkini</span></p>
                      <p className='fw-bold text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <small>1 hari lalu</small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <div className="card news-preview" style={{ backgroundImage: `url('${img3.src}')` }}>
                    <div className="card-body d-flex flex-column justify-content-end text-white">
                      <p><span className="badge bg-primary">#Berita Terkini</span></p>
                      <p className='fw-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <small>1 hari lalu</small>
                    </div>
                  </div></div>
                <div className="col-12 col-lg-6">
                  <div className="card news-preview" style={{ backgroundImage: `url('${img3.src}')` }}>
                    <div className="card-body d-flex flex-column justify-content-end text-white">
                      <p><span className="badge bg-primary">#Berita Terkini</span></p>
                      <p className='fw-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <small>1 hari lalu</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">

            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}

export default News;