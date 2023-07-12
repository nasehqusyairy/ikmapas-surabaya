import Link from 'next/link';
import img1 from '../../images/news (1).jpg';
import img2 from '../../images/news (2).jpg';
import img3 from '../../images/news (3).jpg';
function NewsSection() {

  return (
    <section id="news" className="py-3">
      <div className="container">
        <h3 className="fw-bold">Berita Terkini</h3>
        <p><Link href="/news">selengkapnya</Link></p>
        <div className="row flex-lg-row-reverse">
          <div className="col-12 col-lg-8 mb-3">
            <div className="row">
              <div className="col-12 col-lg-8 mb-3">
                <Link className='text-decoration-none' href='/news/judul-artikel-1'>
                  <div className="card news-preview main-news" style={{ backgroundImage: `url('${img1.src}')` }}>
                    <div className="card-body d-flex flex-column justify-content-end text-white">
                      <p className='fw-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.</p>
                      <small>1 hari lalu</small>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card news-preview mb-3" style={{ backgroundImage: `url('${img2.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <small>1 hari lalu</small>
                  </div>
                </div>
                <div className="card news-preview" style={{ backgroundImage: `url('${img3.src}')` }}>
                  <div className="card-body d-flex flex-column justify-content-end text-white">
                    <p className='fw-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <small>1 hari lalu</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-3">
            <ul className="list-group list-group-flush">
              {[0, 1, 2, 3].map((e, i) => (
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
      </div>
    </section>
  );
}

export default NewsSection;