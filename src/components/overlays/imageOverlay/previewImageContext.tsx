import { ReactNode, createContext, useState } from "react";
import noImage from '@/images/noimage.jpg';

const PreviewImageContext = createContext<PreviewImageContextValue>({
  image: noImage.src,
  caption: '',
  timestamp: '',
  isPreviewing: false,
  opacity: 0,
  preview: () => { },
});

interface PreviewImageContextProviderProps {
  children: ReactNode
}

interface PreviewImageContextValue {
  image: string
  caption: string
  timestamp: string
  isPreviewing: boolean
  opacity: number
  preview: PreviewFunction
}

type PreviewFunction = (isPreviewing?: boolean, image?: any) => void

export const PreviewImageContextProvider = ({ children }: PreviewImageContextProviderProps) => {
  const [image, setImage] = useState(noImage.src);
  const [caption, setCaption] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [isPreviewing, setisPreviewing] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const preview: PreviewFunction = (isPreviewing = false, image = noImage.src) => {
    if (isPreviewing) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    setisPreviewing(isPreviewing);
    setImage(image.media_url);
    setCaption(image.caption)
    setTimestamp(image.timestamp)
    setTimeout(() => {
      setOpacity(isPreviewing ? 1 : 0);
    }, 100);
  };

  const contextValue: PreviewImageContextValue = {
    image,
    caption,
    timestamp,
    isPreviewing,
    opacity,
    preview,
  };

  return (
    <PreviewImageContext.Provider value={contextValue}>{children}</PreviewImageContext.Provider>
  );
};

export default PreviewImageContext;
