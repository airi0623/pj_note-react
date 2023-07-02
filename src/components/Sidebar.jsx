import "./Sidebar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Sidebar(props) {
  const sortedNotes = props.notes.sort(((a, b) => b.modDate - a.modDate));

  return (
    <div className="comp-sidebar p-2">
      <div className="header d-flex justify-content-between align-items-center m-3">
        <h1>note</h1>
        <div><button className="btn-normal" onClick={props.onAddNote}>Add</button></div>
      </div>
      <div className="body m-3">
        {sortedNotes.map((note) => (
          <div className={`note p-2 d-flex justify-content-between ${note.id === props.activeNoteId ?? 'active'}`}
              key={note.id}
              onClick={() => props.setActiveNoteId(note.id)}
            >
              <div>
                <div className="title">{note.title}</div>
                <div className="content">{note.content}</div>
                <div className="mod-date">{new Date(note.modDate).toLocaleDateString("ja-JP")}</div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn-delete" onClick={() => props.onDeleteNote(note.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

// プロップの型を定義
Sidebar.propTypes = {
  notes: PropTypes.array.isRequired,
  onAddNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  activeNoteId: PropTypes.string.isRequired,
  setActiveNoteId: PropTypes.func.isRequired,
};

export default Sidebar
