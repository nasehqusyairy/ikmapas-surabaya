import axios from "axios";
import { useEffect, useState } from "react";

function ProfileVideoSection() {

  const [id, setId] = useState('TIAmKnN53xk');
  const [title, setTitle] = useState("Ikmapas Adalah Sebuah Primordialisme Positif | Latar Belakang Ikmapas - Ikmatalk 3 | Sesepuh Ikmapas");
  const [description, setDescription] = useState('');

  const [channel, setChannel] = useState('IKMAPAS Surabaya');
  const [subscriber, setSubscriber] = useState('');

  const getData = async () => {
    try {
      const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqzdIrm7ET6UECCpNQLgkyg&maxResults=1&order=date&key=AIzaSyB7FrGiFZn7QmgKb6GQNpJPhfVrwQiydaQ'
      const url2 = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=UCqzdIrm7ET6UECCpNQLgkyg&maxResults=1&key=AIzaSyB7FrGiFZn7QmgKb6GQNpJPhfVrwQiydaQ'

      const { items: [{ id: { videoId }, snippet: { title, description } }] } = (await axios.get(url)).data
      const { items: [{ statistics: { subscriberCount: subscriber }, snippet: { title: channel } }] } = (await axios.get(url2)).data

      setId(videoId)
      setTitle(title)
      setDescription(description)
      setChannel(channel)
      setSubscriber(subscriber)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <section id="profileVideo" className="pt-5 pb-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <iframe className="mb-3" style={{ width: '100%', minHeight: '350px' }} src={`https://www.youtube.com/embed/${id}`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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