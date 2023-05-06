import Image, { StaticImageData } from "next/image";

interface CommentProps {
  img: StaticImageData | string,
  name: string,
  datetime: string,
  body: string,
  isReplying?: boolean | undefined
}

function Comment({ img, name, datetime, body, isReplying }: CommentProps) {
  return (
    <div className={"my-4 d-flex " + (isReplying ? ' ms-5' : '')}>
      <Image className="avatar avatar-md rounded-circle float-start me-3" width={35} src={img} alt="avatar" />
      <div>
        <div className="mb-2">
          <h5 className="m-0">{name}</h5>
          <span className="me-3 small">{datetime}</span>
          {isReplying || (<a href="#" className="text-body fw-normal">Balas</a>)}
        </div>
        <p className="text-justify">{body}</p>
      </div>
    </div>
  );
}

export default Comment;