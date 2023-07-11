import ImageOverlay from '../overlays/imageOverlay/ImageOverlay';
import PreviewImageContext, { PreviewImageContextProvider } from '../overlays/imageOverlay/previewImageContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import crypto from 'crypto';

interface InstagramResponse {
  media_url: string
  media_type: string
  caption: string
}

function InnerSection() {
  const defaultResponse: InstagramResponse[] = []
  const [images, setImages] = useState(defaultResponse);

  // Fungsi untuk melakukan dekripsi token akses
  function decryptAccessToken(encryptedData: any) {
    const algorithm = 'aes-256-cbc';
    const iv = Buffer.from(encryptedData.iv, 'hex');
    const key = Buffer.from(encryptedData.key, 'hex');
    const encrypted = encryptedData.encrypted;

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }

  // Enkripsi token akses
  const encryptedData = { "iv": "4163d81bcebe78bd163e4d9c963cae02", "key": "3850983b58ace169621147ac087c2597e3d37a0b81f8cd85dd0b968cd3dd170e", "encrypted": "7f817d9cca5cb49da9004ca0f0e4459b3ce71fad84c55db1c6b1dea6ca79307517091d1aec4a2ab6993f0e44eecc52828affb555540cfe8fad7c2a12055f0e6795dd7f822a71e4f7cd655859f6bd875a9fe8e97d5c2c659b337d1ab4a413e2e8ac2ac546dbe79261fe6f22221e575165569c20fce784746a6adbedc3d5f3b66aa80ae6970c4753111137cd4e4df63d54d333db4d426b99433a95f5e51fdcc4a8072fe70d994ae3b9d4cdae97ba1a5b26" }

  const getData = async () => {
    const { data } = (await axios.get('https://graph.instagram.com/me/media?fields=media_type, media_url, caption, timestamp, children{media_url}&access_token=' + decryptAccessToken(encryptedData))).data
    setImages(data)
  }

  useEffect(() => { getData() }, []);

  const { preview, isPreviewing } = useContext(PreviewImageContext)
  return (<section id="gallery" className='py-5 mb-5'>
    <div className="container">
      <h1 className="text-center text-light fw-bold mb-5">Aktivitas IKMAPAS</h1>
      <div className="row">
        {images.filter(e => e.media_type != 'VIDEO').slice(0, 9).map((img, i) => (
          <div key={i} className="col-6 col-md-4 px-1">
            <img onClick={() => {
              preview(true, img)
              // history.pushState({ img_index: i }, "Gambar " + i, "#")
            }} style={{ cursor: 'pointer' }} src={img.media_url} alt={'Foto ' + (i + 1)} className="img-fluid mb-2 rounded" />
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