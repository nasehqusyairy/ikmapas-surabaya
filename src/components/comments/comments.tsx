import Image from "next/image";
import img from "../../images/galeri-item (1).jpg";
import Comment from "./comment";
function Comments() {

  const data = [
    {
      img: img,
      name: 'Ace',
      datetime: 'June 11, 2022 at 6:01 am ',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, saepe. Rerum at eos temporibus cum deserunt dicta porro voluptate facere culpa, ullam numquam modi magnam nisi reiciendis. Optio, officiis deleniti.',
      replies: [
        {
          img: img,
          name: 'Aan',
          datetime: 'June 11, 2022 at 6:01 am ',
          body: 'Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.'
        },
      ]
    },
    {
      img: img,
      name: 'Allen Smith',
      datetime: 'June 11, 2022 at 6:01 am ',
      body: 'Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
      replies: []
    },
  ]

  return (
    <div className="py-5">
      <h3>5 Komentar</h3>
      {data.map((el, i) => (
        <div key={i}>
          <Comment img={el.img} name={el.name} datetime={el.datetime} body={el.body} />
          {el.replies.map((eli, i) => (
            <Comment key={i} img={eli.img} name={eli.name} datetime={eli.datetime} body={eli.body} isReplying={true} />
          ))}
        </div>
      ))}

      <div>
        <h3>Tinggalkan Komentar</h3>
        <small>Alamat email tidak akan disebar. Bidang yang wajib diisi ditandai dengan *</small>
        <form className="row g-3 mt-2">
          <div className="col-md-6">
            <label className="form-label">Nama *</label>
            <input type="text" className="form-control" aria-label="First name" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email *</label>
            <input type="email" className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">Komentar Anda *</label>
            <textarea className="form-control" rows={3}></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Posting Komentar</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Comments;