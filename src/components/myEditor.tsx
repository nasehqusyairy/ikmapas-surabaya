import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function MyEditor() {
  const [value, setValue] = useState('');

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
      ['link', 'image'],

      ['clean']
    ],
  }

  return (
    <main>
      <div className="container">
        <h1>Add news</h1>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <ReactQuill theme="snow" modules={modules} value={value} onChange={setValue} />
          </div>
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h3>Output :</h3>
                {/* {value} */}
                <div className="ql-snow">
                  <div className="ql-editor" dangerouslySetInnerHTML={{ __html: value }} />
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