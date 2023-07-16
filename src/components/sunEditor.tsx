import React, { useState } from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { SunEditorOptions } from 'suneditor/src/options';
import convertDocxToHtml from '@/helpers/docxtohtml';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyComponent = () => {

  const [value, setValue] = useState('');

  const options: SunEditorOptions = {
    "mode": "classic",
    "rtl": false,
    "katex": "window.katex",
    "imageGalleryUrl": "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
    "videoFileInput": false,
    "tabDisable": false,
    "buttonList": [
      [
        "undo",
        "redo",
        "font",
        "fontSize",
        "formatBlock",
        "paragraphStyle",
        "blockquote",
        "bold",
        "underline",
        "italic",
        "strike",
        "subscript",
        "superscript",
        "fontColor",
        "hiliteColor",
        "textStyle",
        "removeFormat",
        "outdent",
        "indent",
        "align",
        "horizontalRule",
        "list",
        "lineHeight",
        "table",
        "link",
        "image",
        "video",
        "audio",
        "math",
        "imageGallery",
        "fullScreen",
        "showBlocks",
        "codeView",
        "preview",
        "print",
        "save",
        "template"
      ]
    ]
  }

  const logVal = (val: string) => {
    // console.log(val);
    setValue(val)
  }

  const convert = (e: any) => {
    convertDocxToHtml(e.target.files[0]).then(setValue);
  }

  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col">
          <p>DOC to HTML</p>
          <input type="file" onChange={convert} name="doc" id="doc" className='form-control mb-3' />
          <p> My Other Contents </p>
          <div className="mb-3">
            <SunEditor setContents={value} setOptions={options} onChange={logVal} />
          </div>
          <p>Output</p>
          <div className="card">
            <div className="card-body" dangerouslySetInnerHTML={{ __html: value }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyComponent;