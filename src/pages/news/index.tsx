import Link from "next/link";
import img1 from '../../images/news (1).jpg';
import img2 from '../../images/wafy.jpg';
import img3 from '../../images/peresmian-web-ikmapas.jpg';
import img4 from '../../images/galeri-item (1).jpg';
import MainFooter from "@/components/footers/mainFooter";
import NavbarLinks from "@/components/navbars/mainNavbar";

function News() {
  return (
    <main>
      <NavbarLinks />
      <section className="py-5" style={{ minHeight: '100vh' }}>
        <div className="container">
          <h1 className="fw-bold">Berita Terkini</h1>
          <hr />
          <div className="row">
            <div className="col-12 col-lg-8 mb-3">
              <div className="row">
                <div className="col-12 col-lg-8 mb-3">
                  <Link className="text-decoration-none" href='/news/judul-artikel-1'>
                    <div className="card news-preview main-news" style={{ backgroundImage: `url('${img1.src}')` }}>
                      <div className="card-body d-flex flex-column justify-content-end text-white">
                        <p><span className="badge bg-primary">#Berita Terkini</span></p>
                        <p className='fw-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.</p>
                        <small>1 hari lalu</small>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-lg-4">
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
            <div className="col">
              <ul className="list-group list-group-flush" style={{ maxHeight: '420px', overflow: 'auto' }}>
                {[0, 1, 2, 3, 4].map((e, i) => (
                  <li className="list-group-item" key={i}>
                    <Link className="text-decoration-none text-body" href='/news/judul-artikel-4'>
                      <p className='fw-bold'>Lorem Ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <small className='text-muted'>1 hari lalu</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h1 className="fw-bold">Blog dan Artikel Lain</h1>
          <hr />
          <div className="row">
            {[0, 1, 2, 3, 4].map((e, i) => (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
                <div className="card text-bg-dark border-0 mb-3">
                  <img src={img3.src} className="card-img" alt="..." />
                  <div className="card-img-overlay d-flex flex-column-reverse">
                    <p className="card-subtitle"><span className="badge bg-warning">#Blog</span></p>
                  </div>
                </div>
                <h5 className="card-title mb-3"> <Link className="text-decoration-none text-body" href='/news/blog-1'>Lorem ipsum dolor sit amet consectetur</Link> </h5>
                <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <span ><img width={40} src={img4.src} className="me-3 rounded-circle" alt="" /></span>
                <span >by Fairuzul Wafy</span>
                <span className="mx-1">•</span>
                <span >08 April 2023</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}

export default News;