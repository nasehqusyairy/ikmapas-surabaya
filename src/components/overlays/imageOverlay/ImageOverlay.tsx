import { useContext, useEffect } from "react";
import PreviewImageContext from "./previewImageContext";
import datetime from "@/helpers/datetime";
import filterstring from "@/helpers/filterstring";

function ImageOverlay() {

  const { preview, opacity, image, caption, timestamp } = useContext(PreviewImageContext)

  const previewFunction = (e: any) => {
    e.preventDefault()
    preview()
  }

  useEffect(() => {
    window.addEventListener('popstate', previewFunction);

    return () => {
      window.removeEventListener('popstate', previewFunction);
    };
  }, []);

  return (
    <div id="image_preview" className="position-fixed top-0 start-0" style={{ transition: 'all .5s', zIndex: 1060, width: '100vw', opacity: opacity }}>
      <div className="container-md h-100 overflow-auto">
        <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div className="p-0 col-12 col-md-8">
            <div className="card rounded-0" style={{ position: 'relative', zIndex: 1062 }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <img className="img-fluid" src={image} alt='Image Preview' />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between">
                  <div className="card-header">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                      <span>Detail</span>
                      <button onClick={() => { preview() }} className="btn btn-link bi-x-lg"></button>
                    </h5>
                  </div>
                  <div className="card-body caption">
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: filterstring(caption) }}></p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">{datetime(timestamp)}</small>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={() => { preview() }} className="overlay" style={{ backgroundColor: 'rgba(0,0,0,.8)', width: '100vw', height: '100vh', position: 'absolute', zIndex: 1061, top: 0, left: 0 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageOverlay;