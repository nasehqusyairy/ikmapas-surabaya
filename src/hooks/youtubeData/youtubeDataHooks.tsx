import { useEffect, useReducer } from "react";
import { YouTubeDataActionType, initialState, youtubeDataReducer } from "./youtubeDataReducer";
import axios from "axios";
import { decrypt } from "@/helpers/encrypter";

const useYouTubeData = () => {
  const [state, dispatch] = useReducer(youtubeDataReducer, initialState);

  const encryptedData = { "iv": "aaf3fa71f69dffcf964c8f66021ba518", "key": "21b22da3584ae4dd6195c11ccc3291df636e58939d718cd8c6ac350ff761719c", "encrypted": "05664292c746cc507c66084882fff0237f58ee1800aeee05be0208dc57e5d0107d6a2e140dcaaedf1ce25835cf5bbaf2" }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqzdIrm7ET6UECCpNQLgkyg&maxResults=1&order=date&key=${decrypt(encryptedData)}`;
        const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCqzdIrm7ET6UECCpNQLgkyg&maxResults=1&key=${decrypt(encryptedData)}`;

        const [videoResponse, channelResponse] = await Promise.all([
          axios.get(videoUrl),
          axios.get(channelUrl),
        ]);

        const {
          items: [{ id: { videoId }, snippet: { title, description } }],
        } = videoResponse.data;
        const {
          items: [
            { statistics: { subscriberCount: subscriber }, snippet: { title: channel } },
          ],
        } = channelResponse.data;

        dispatch({
          type: YouTubeDataActionType.SET_VIDEO_RESPONSE,
          payload: { videoId, title, description },
        });
        dispatch({
          type: YouTubeDataActionType.SET_CHANNEL_RESPONSE,
          payload: { channel, subscriber },
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return state;
};

export default useYouTubeData;