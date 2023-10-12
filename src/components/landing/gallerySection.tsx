import ImageOverlay from '../overlays/imageOverlay/ImageOverlay';
import { PreviewImageContext, PreviewImageContextProvider } from '../../context/previewImage/previewImageContext';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useGlobalStateContext } from '@/context/globalContext';
import { decrypt, encrypt } from '@/helpers/encrypter';

function InnerSection() {
  const { instagramResponses, setInstagramResponses } = useGlobalStateContext();

  const encryptedData = { "iv": "c1f80df633079ae78711e8d200f0e80e", "key": "29c25e5af97aad9414bc07c697df9d21d2097c16ae75d2d97ebd70adb9b4b7a0", "encrypted": "a3eb30dbfe618f12e8a76fd8ca5eea6d1e4c3053a9bfc532a0ff23e57996e87a91973ee267fc76ae6200ede3965e30dea8cf9d403ca54cb3f8f57039395fa264c2b11e9e2e7085d9bee299dc7d94620f2fd35340d86826f9ab4c7408a6ee17bffffc8ec10ea1bb3387e243e6b6435f6aa57a3215430504c28f7c2bd8e118aeed8f9e054d1f1e8309d7ddd3490c8335e806fe17fdb890b718f078f11fb4548b33e4e4836e76dbf11998b8bb581a41c117" }


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