import useYouTubeData from '@/hooks/youtubeData/youtubeDataHooks';
import { ReactNode, createContext, useContext, useState } from 'react';

// Definisikan tipe data untuk state global
interface GlobalStateContextType {
  instagramResponses: any[]
  setInstagramResponses: (value: any[]) => void
  videoResponse: any
  channelResponse: any
}

// Buat context baru
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

// Buat custom hook untuk menggunakan context
export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalStateContext must be used within a GlobalStateProvider');
  }
  return context;
};

// Buat provider untuk menyediakan state global
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const { videoResponse, channelResponse } = useYouTubeData();
  const [instagramResponses, setInstagramResponses] = useState<any[]>([]);

  return (
    <GlobalStateContext.Provider value={{ instagramResponses, setInstagramResponses, videoResponse, channelResponse }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
