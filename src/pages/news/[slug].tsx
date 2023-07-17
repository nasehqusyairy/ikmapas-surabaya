import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
// import img1 from '../../images/about.jpg';
import photo from '../../images/galeri-item (7).jpg';
import ad from '../../images/adv.png';
import Image from "next/image";
import MainFooter from "@/components/footers/mainFooter";
import { CSSProperties } from "react";
import NavbarLinks from "@/components/navbars/mainNavbar";
// import Comments from "@/components/comments/comments";

function newsDetail() {
  //eslint-disable-next-line
  const router: NextRouter = useRouter();
  const { slug }: ParsedUrlQuery = router.query;
  const jumbotronStyle: CSSProperties = {
    // backgroundImage: `url(${img1.src})`,
    backgroundImage: `url(https://picsum.photos/1600/1000)`
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
                    <p>
                      <span className="badge bg-primary me-1">#Berita Terkini</span>
                      <span className="badge bg-warning">#Olahraga</span>
                    </p>
                    <h2 className="fw-bold">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</h2>
                    <span className="text-white"><Image width={40} src={photo} className="me-2 rounded-circle" alt="" /></span>
                    <span className="text-white">by Fairuzul Wafy</span>
                    <span className="text-white mx-1">•</span>
                    <span className="text-white">08 April 2023</span>
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
              <div style={{ textAlign: 'justify' }}>
                <p>
                  <span className="dropcap bg-dark text-white px-2">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi, sunt laudantium quibusdam esse recusandae corrupti eius quae nulla ut expedita corporis voluptates, officia voluptate nihil possimus dolores tenetur similique?
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
              {/* <Comments /> */}
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card mb-3">
                <div className="card-body p-3">
                  <form>
                    <p>Subscribe untuk informasi konten lebih banyak</p>
                    <input type="email" name="email" placeholder="Masukkan email..." className="form-control mb-3" />
                  </form>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary">Subscribe</button>
                  </div>
                </div>
              </div>
              <Image src={ad} alt="" className="img-fluid mb-3" />
              {/* <Image src={ad} alt="" className="img-fluid mb-3" />
              <Image src={ad} alt="" className="img-fluid" /> */}
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}


export default newsDetail;
