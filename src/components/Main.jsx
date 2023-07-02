// import React from 'react'
import "./Main.scss"
import PropTypes from 'prop-types';
import ReactMarkdown from 'https://esm.sh/react-markdown@7'

function Main(props) {

  // 編集
  const onEditNote = (key, value) => {
    props.onUpdateNote({
      ...props.activeNote,
      [key]: value,
      modDate: Date.now()
    });
  }


  if (!props.activeNote) {
    return <div className="main p-5 d-flex justify-content-center align-items-center h-100">ノートが選択されていません</div>
  }
  return (
    <div className="main h-100 p-5">
      <div className="input-area d-flex flex-column">
        <div className="form-group">
          <label id="title">タイトル</label>
          <input
            id="title"
            name="title"
            value={props.activeNote.title}
            type="text"
            onChange={(e) => onEditNote("title", e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label id="content">本文</label>
          <textarea
            id="content"
            name="content"
            onChange={(e) => onEditNote("content", e.target.value)}
            value={props.activeNote.content}
            >
          </textarea>
        </div>
      </div>
      <div className="output-area mt-5 p-4">
        <div className="mb-4">{props.activeNote.title}</div>
        <ReactMarkdown className="font-xs" >{props.activeNote.content}</ReactMarkdown>
      </div>
    </div>
  )
}

Main.propTypes = {
  activeNote: PropTypes.object,
  onUpdateNote: PropTypes.func,
}

export default Main
