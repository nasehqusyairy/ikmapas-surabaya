import Image from "next/image";
import img from "../../images/about.png";
function HeroSection() {
  return (
    <section id="hero" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg text-center text-lg-start d-flex align-items-center" >
            <div>
              <h1 className="fw-bold">Selamat Datang di IKMAPAS Surabaya!</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum laborum incidunt sequi odio voluptas ipsum vero dicta.
                Nostrum laborum incidunt sequi.
              </p>
              <p>
                <a href="#about" className="btn btn-primary btn-lg" >
                  Selengkapnya</a>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg">
            <Image src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section >
  );
}

export default HeroSection;