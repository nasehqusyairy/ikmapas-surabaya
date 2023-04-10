function ProfileVideoSection() {
  return (
    <section id="profileVideo" className="pt-5 pb-3 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <iframe className="mb-3" style={{ width: '100%', minHeight: '350px' }} src="https://www.youtube.com/embed/TIAmKnN53xk" title="Ikmapas Adalah Sebuah Primordialisme Positif | Latar Belakang Ikmapas - Ikmatalk 3 | Sesepuh Ikmapas" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="col-12 col-lg-6" style={{ textAlign: 'justify' }}>
            <h2 className="text-primary fw-bold text-start">Latar Belakang dan Awal Terbentuknya IKMAPAS</h2>
            <figure>
              <blockquote className="blockquote">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet aspernatur deleniti natus eum, tempora recusandae repellendus beatae possimus enim eius.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Presiden pertama IKMAPAS <cite title="Source Title">Cak Jalaluddin Alex</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <hr className="dashed" />
        <div className="d-flex justify-content-between flex-column flex-lg-row">
          <p>YouTube : <a target="_blank" href="https://www.youtube.com/@ikmapassurabaya1213">IKMAPAS Surabaya</a></p>
          <p>Instagram : <a target="_blank" href="https://instagram.com/ikmapas_surabaya">@ikmapas_surabaya</a></p>
          <p>Gmail : <a target="_blank" href="mailto:sbyikmapas@gmail.com">sbyikmapas@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}

export default ProfileVideoSection;