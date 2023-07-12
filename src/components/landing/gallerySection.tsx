import ImageOverlay from '../overlays/imageOverlay/ImageOverlay';
import { PreviewImageContext, PreviewImageContextProvider } from '../../context/previewImage/previewImageContext';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useGlobalStateContext } from '@/context/globalContext';
import { decrypt } from '@/helpers/encrypter';

function InnerSection() {
  const { instagramResponses, setInstagramResponses } = useGlobalStateContext();

  const encryptedData = { "iv": "4163d81bcebe78bd163e4d9c963cae02", "key": "3850983b58ace169621147ac087c2597e3d37a0b81f8cd85dd0b968cd3dd170e", "encrypted": "7f817d9cca5cb49da9004ca0f0e4459b3ce71fad84c55db1c6b1dea6ca79307517091d1aec4a2ab6993f0e44eecc52828affb555540cfe8fad7c2a12055f0e6795dd7f822a71e4f7cd655859f6bd875a9fe8e97d5c2c659b337d1ab4a413e2e8ac2ac546dbe79261fe6f22221e575165569c20fce784746a6adbedc3d5f3b66aa80ae6970c4753111137cd4e4df63d54d333db4d426b99433a95f5e51fdcc4a8072fe70d994ae3b9d4cdae97ba1a5b26" }

  const getData = async () => {
    if (instagramResponses.length === 0) {
      const { data } = (await axios.get('https://graph.instagram.com/me/media?fields=media_type, media_url, caption, timestamp, children{media_url}&access_token=' + decrypt(encryptedData))).data
      setInstagramResponses(data)
    }
  }

  useEffect(() => { getData() }, []);

  const { preview, isPreviewing } = useContext(PreviewImageContext)
  return (<section id="gallery" className='py-5'>
    <div className="container">
      <h1 className="text-center text-light fw-bold mb-5">Aktivitas IKMAPAS</h1>
      <div className="row">
        {instagramResponses.filter(e => e.media_type != 'VIDEO').slice(0, 9).map((img, i) => (
          <div key={i} className="col-6 col-md-4 px-1">
            <img onClick={() => { preview(true, img) }} style={{ cursor: 'pointer' }} src={img.media_url} alt={'Foto ' + (i + 1)} className="img-fluid mb-2 rounded" />
          </div>
        ))}
      </div>
    </div>
    {isPreviewing && (
      <ImageOverlay />
    )}
  </section>)
}

function GallerySection() {
  return (
    <PreviewImageContextProvider><InnerSection /></PreviewImageContextProvider>
  );
}

export default GallerySection;