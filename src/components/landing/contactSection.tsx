import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

function ContactSection() {

  const [nama, setNama] = useState('');
  const [subjek, setSubjek] = useState('');
  const [pesan, setPesan] = useState('');

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // isi pesan
    const msg: String =
      "Dari : *" + nama + "*\nPerihal : *" + subjek + "*\n\n" + pesan + "\n\n*NB: Pesan ini dikirim melalui website " + window.location.href + "*";

    // nomer wa
    const nomer_wa: String = "6281230992320";

    window.location.href = "https://api.whatsapp.com/send?phone=" + nomer_wa + "&text=" + encodeURI(msg.trim());
  }

  return (
    <section id="contact" className="py-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h3 className="fw-bold">Lokasi</h3>
            <h6 className="text-muted">Jl. Ahmad Yani No.117, Jemur Wonosari, Kec. Wonocolo, Kota SBY, Jawa Timur 60237</h6>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.280738162043!2d112.72977178735715!3d-7.3223299778661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb6c094d1b87%3A0xbc3def4f4bd2fa7!2sUniversitas%20Islam%20Negeri%20Sunan%20Ampel%20Surabaya!5e0!3m2!1sid!2sid!4v1680364114681!5m2!1sid!2sid" height="400" className="rounded mb-3" style={{ width: '100%', border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="fw-bold">Punya pertanyaan?</h3>
            <p className="text-muted">
              Sampaikan melalui form berikut!
            </p>
            <form className="row" onSubmit={handleOnSubmit}>
              <div className="col-12 col-lg-6">
                <div className="mb-3">
                  <label htmlFor="nama" className="form-label">Nama</label>
                  <input onChange={(e: ChangeEvent<HTMLInputElement>) => { setNama(e.target.value) }} type="text" className="form-control" id="nama" required />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="mb-3">
                  <label htmlFor="subjek" className="form-label">Subjek</label>
                  <input onChange={(e: ChangeEvent<HTMLInputElement>) => { setSubjek(e.target.value) }} type="text" className="form-control" id="subjek" required />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="pesan" className="form-label">Pesan</label>
                  <textarea
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setPesan(e.target.value) }}
                    name="pesan"
                    id="pesan"
                    className="form-control"
                    rows={10}
                    placeholder="Assalamualaikum, ..."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-12 text-end">
                <button className="btn btn-primary">Kirim</button>
              </div>
            </form>
          </div>
        </div>
        <hr className="dashed" />
      </div>
    </section>
  );
}

export default ContactSection;