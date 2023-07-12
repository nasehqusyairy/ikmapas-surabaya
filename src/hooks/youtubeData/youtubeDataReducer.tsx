interface VideoResponse {
  videoId: string;
  title: string;
  description: string;
}

interface ChannelResponse {
  channel: string;
  subscriber: string;
}

interface YouTubeDataState {
  videoResponse: VideoResponse | null;
  channelResponse: ChannelResponse | null;
}

export enum YouTubeDataActionType {
  SET_VIDEO_RESPONSE = 0,
  SET_CHANNEL_RESPONSE = 1,
}

type YouTubeDataAction =
  | { type: YouTubeDataActionType.SET_VIDEO_RESPONSE; payload: VideoResponse }
  | { type: YouTubeDataActionType.SET_CHANNEL_RESPONSE; payload: ChannelResponse };

export const initialState: YouTubeDataState = {
  videoResponse: {
    videoId: 'TIAmKnN53xk',
    title: 'Ikmapas Adalah Sebuah Primordialisme Positif | Latar Belakang Ikmapas - Ikmatalk 3 | Sesepuh Ikmapas',
    description: ''
  },
  channelResponse: {
    channel: 'IKMAPAS Surabaya',
    subscriber: ''
  },
};

export const youtubeDataReducer = (
  state: YouTubeDataState,
  action: YouTubeDataAction
): YouTubeDataState => {
  switch (action.type) {
    case YouTubeDataActionType.SET_VIDEO_RESPONSE:
      return { ...state, videoResponse: action.payload };
    case YouTubeDataActionType.SET_CHANNEL_RESPONSE:
      return { ...state, channelResponse: action.payload };
    default:
      return state;
  }
};

