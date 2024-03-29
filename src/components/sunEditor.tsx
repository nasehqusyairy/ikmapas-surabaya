import React, { useState } from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { SunEditorOptions } from 'suneditor/src/options';
import convertDocxToHtml from '@/helpers/docxtohtml';
// import katex from 'katex';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyComponent = () => {

  const [value, setValue] = useState('');

  const options: SunEditorOptions = {
    "mode": "classic",
    "rtl": false,
    // "katex": katex,
    "imageWidth": "50%",
    "imageSizeOnlyPercentage": true,
    "imageUploadSizeLimit": 3000000,
    "imageResizing": true,
    "imageAlignShow": false,
    "videoFileInput": false,
    "videoResizing": true,
    "videoAlignShow": false,
    "tabDisable": false,
    "buttonList": [
      [
        "undo",
        "redo",
        "font",
        "fontSize",
        "formatBlock",
        // "paragraphStyle",
        "blockquote",
        "bold",
        "underline",
        "italic",
        "strike",
        "subscript",
        "superscript",
        "fontColor",
        "hiliteColor",
        // "textStyle",
        "removeFormat",
        "outdent",
        "indent",
        "align",
        // "horizontalRule",
        "list",
        // "lineHeight",
        "table",
        "link",
        "image",
        "video",
        "audio",
        // "math",
        // "imageGallery",
        "fullScreen",
        "showBlocks",
        // "codeView",
        // "preview",
        "print",
        // "save",
        // "template"
      ]
    ]
  }

  const wrapDivsWithClass = (htmlString: string) => htmlString.replace(/<div[^>]*class="se-component[^>]*"[^>]*>.*?<\/div>/g, (str: string) => `<div class="row justify-content-center"><div class="col-12 col-md-6 mb-3">${str}</div></div>`);

  const logVal = (val: string) => {
    // console.log(val);
    setValue(wrapDivsWithClass(val))
    // setValue(val)
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
            <SunEditor height='300' setContents={value} setOptions={options} onChange={logVal} />
          </div>
          <p>Output</p>
          <div className="card">
            <div className="card-body text-editor-result" dangerouslySetInnerHTML={{ __html: value }}></div>
          </div>
          <p>Output HTML</p>
          <div className="card">
            <div className="card-body">{value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyComponent;