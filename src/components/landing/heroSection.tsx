import Image from "next/image";
import img1 from "../../images/about.jpg";
import img2 from "../../images/peresmian-web-ikmapas.jpg";
import img3 from "../../images/wafy.jpg";
function HeroSection() {
  return (
    <section id="hero" className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg d-flex align-items-center" >
            <div>
              <h1 className="fw-bold">Selamat Datang di IKMAPAS Surabaya!</h1>
              <p className="text-justify">
                Selamat datang di website resmi Ikatan Mahasiswa Pasuruan Surabaya (IKMAPAS)!
                Terima kasih telah mengunjungi website resmi IKMAPAS. Mari bersama-sama membangun dan mengembangkan potensi mahasiswa Pasuruan demi masa depan yang lebih baik.
              </p>
              <p>
                <a href="#about" className="btn btn-primary btn-lg" >
                  Penasaran? Gas Kepoin🔥
                </a>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-md-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <Image src={img1} alt="" className="img-fluid rounded" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <Image src={img2} alt="" className="img-fluid rounded" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <Image src={img3} alt="" className="img-fluid rounded" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default HeroSection;