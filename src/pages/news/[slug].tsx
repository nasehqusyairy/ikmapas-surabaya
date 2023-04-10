import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import MainNavbar from "@/components/navbars/mainNavbar";
import Link from "next/link";
import img1 from '../../images/about.jpg';
import photo from '../../images/galeri-item (7).jpg';
import ad from '../../images/adv.png';
import Image from "next/image";
import MainFooter from "@/components/footers/mainFooter";
import { CSSProperties } from "react";
import ThemeOptions from "@/components/themeOptions";

function newsDetail() {
  // eslint-disable-next-line
  const router: NextRouter = useRouter();
  const { slug }: ParsedUrlQuery = router.query;
  const jumbotronStyle: CSSProperties = {
    position: 'relative',
    minHeight: '400px',
    // backgroundImage: `url(${img1.src})`,
    backgroundImage: `url(https://picsum.photos/1600/1000)`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  const jumbotronOverlayStyle: CSSProperties = {
    width: '100%',
    height: '75%',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
    position: 'absolute',
    bottom: 0,
    borderRadius: '0 0 0.375rem 0.375rem'
  }
  const dropcapStyle: CSSProperties = {
    fontSize: '4em',
    fontWeight: 'bold',
    display: 'block',
    float: 'left',
    margin: '0.04em 0.2em 0 0',
    lineHeight: 1
  }

  return (
    <main>
      <MainNavbar>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link text-center" href="/">Beranda</Link>
            <Link className="nav-link text-center" href="/news">Berita</Link>
            <ThemeOptions />
            <form className="d-flex mb-3 mb-lg-0 me-lg-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Ketik di Sini..." />
              <button className="btn btn-outline-primary" type="submit">Cari</button>
            </form>
            <Link href="/auth" className="btn btn-primary">Masuk</Link>
          </div>
        </div>
      </MainNavbar>
      <section className="mt-5 mb-3">
        <div className="container">
          <div className="row justify-content-center align-items-center rounded">
            <div className="col">
              <div className="card border-0" style={jumbotronStyle}>
                <div className="overlay" style={jumbotronOverlayStyle}></div>
                <div className="card-body d-flex justify-content-center align-items-center" style={{ position: 'relative', zIndex: '1' }}>
                  <div className="text-white text-center">
                    <p><span className="badge bg-primary">Berita Terkini</span></p>
                    <h2 className="fw-bold">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</h2>
                    <div className="d-flex justify-content-center align-items-center flex-wrap p-0">
                      {/* <p className="text-white"><img width={40} src={photo.src} className="me-2 rounded-circle" alt="" /></p> */}
                      <p className="text-white"><img width={40} src='https://picsum.photos/100' className="me-2 rounded-circle" alt="" /></p>
                      <p className="text-white">by Fairuzul Wafy</p>
                      <p className="text-white mx-1">•</p>
                      <p className="text-white">08 April 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-9">
              <div style={{ textAlign: 'justify' }}>
                <p>
                  <span style={dropcapStyle} className="dropcap bg-dark text-white px-2">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsu.ius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedi.ta corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card border-0 mb-3" style={{ backgroundColor: 'var(--bs-primary-bg-subtle)' }}>
                <div className="card-body p-3">
                  <p>Subscribe untuk informasi konten lebih banyak</p>
                  <form>
                    <input type="email" name="email" placeholder="Email..." className="form-control mb-3" />
                  </form>
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
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
