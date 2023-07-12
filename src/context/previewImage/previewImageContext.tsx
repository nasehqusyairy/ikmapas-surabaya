import { ReactNode, createContext, useState } from 'react';
import noImage from '@/images/noimage.jpg';

interface PreviewImageContextValue {
  image: string;
  caption: string;
  timestamp: string;
  isPreviewing: boolean;
  opacity: number;
  preview: PreviewFunction;
}

type PreviewFunction = (isPreviewing?: boolean, image?: any) => void;

export const PreviewImageContext = createContext<PreviewImageContextValue>({
  image: noImage.src,
  caption: '',
  timestamp: '',
  isPreviewing: false,
  opacity: 0,
  preview: () => { },
});

interface PreviewImageContextProviderProps {
  children: ReactNode;
}

export const PreviewImageContextProvider = ({ children }: PreviewImageContextProviderProps) => {
  const [image, setImage] = useState(noImage.src);
  const [caption, setCaption] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const preview: PreviewFunction = (isPreviewing = false, image = noImage.src) => {
    document.body.style.overflow = isPreviewing ? 'hidden' : 'auto';
    setIsPreviewing(isPreviewing);
    setImage(image.media_url);
    setCaption(image.caption);
    setTimestamp(image.timestamp);
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
    <PreviewImageContext.Provider value={contextValue}>
      {children}
    </PreviewImageContext.Provider>
  );
};
