import { useGlobalStateContext } from "@/context/globalContext";

function ProfileVideoSection() {
  const { videoResponse, channelResponse } = useGlobalStateContext();
  const { videoId, title, description } = videoResponse;
  const { channel, subscriber } = channelResponse;

  return (
    <section id="profileVideo" className="pt-5 pb-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <iframe className="mb-3 w-100" src={`https://www.youtube.com/embed/${videoId}`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-around" style={{ textAlign: 'justify' }}>
            <div>
              <h2 className="text-primary fw-bold text-start">{title}</h2>
              <p>{description}</p>
              <p className="m-0"><b>{channel}</b></p>
              {subscriber && (<p className="m-0">{subscriber} Subscribers </p>)}
              <a href="https://www.youtube.com/@ikmapassurabaya1213" target="_blank" className="badge text-bg-danger">Subscribe</a>
            </div>

          </div>
        </div>
        <hr className="dashed" />
        <div className="d-flex justify-content-between flex-column flex-lg-row">
          <p>Instagram : <a target="_blank" href="https://instagram.com/ikmapas_surabaya">@ikmapas_surabaya</a></p>
          <p>Gmail : <a target="_blank" href="mailto:sbyikmapas@gmail.com">sbyikmapas@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}

export default ProfileVideoSection;