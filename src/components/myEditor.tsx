import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function MyEditor() {
  const [value, setValue] = useState('');
  const [adjusted, setAdjusted] = useState('');

  function wrapIframesAndImages(htmlString: string): string {
    const wrappedHtml = htmlString.replace(/<iframe[^>]*>[^<]*(?:(?!<\/iframe)<[^<]*)*<\/iframe>/g, wrapMultipleIframes);
    return wrappedHtml;
  }

  function wrapMultipleIframes(match: string): string {
    const iframes = match.split('</iframe>').slice(0, -1);
    const wrappedIframes = iframes.map((iframe) => {
      return `<div class="col-12 col-md-6">${iframe}</div>`;
    });
    return `<div class="row justify-content-center">${wrappedIframes.join('')}</div>`;
  }

  function logVal(e: string) {
    // console.log(e)
    // console.log(wrapIframesAndImages(e));
    setValue(e)
    setAdjusted(wrapIframesAndImages(e))
  }

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'align': [] }],
      [{ 'direction': 'rtl' }],
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote', 'code-block'],

      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],

      ['clean']
    ],
  }

  return (
    <main>
      <div className="container">

        <h1>Add news</h1>
        <div className="row">
          <div className="col-12 mb-3">
            <ReactQuill theme="snow" modules={modules} value={value} onChange={logVal} />
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h3>Output :</h3>
                {/* {value} */}
                <div className="ql-snow">
                  <div className="ql-editor" dangerouslySetInnerHTML={{ __html: adjusted }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyEditor;