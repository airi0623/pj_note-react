import './App.scss';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNoteId, setActiveNoteId] = useState('');

  useEffect(() => {
    // ローカルストレージにノート配列を保存する
    // [notes]値が変わるたびにコールバック関数の中身が発火する。
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // 初期だけ実施：noteが選択されていなければ、最初のノートを選択させる
  useEffect(() => {
      setActiveNoteId(notes[0].id)
  }, []);

  // 追加
  const onAddNote = async () => {
    const newNote = {
      id: uuid(),
      name: '新しいノート',
      title: 'タイトル',
      content: 'テキストテキスト',
      modDate: Date.now(),
    }
    setNotes([...notes, newNote]);
  }
  // 削除
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => { return note.id !== id});
    setNotes(filterNotes);
  }
  // 選択されたIDからノートを特定
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNoteId)
  }
  // 更新
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      }
      else {
        return note
      }
    });
    setNotes(updatedNotesArray);
  }

  return(
    <div className="App row">
      <div className="col-md-4 col-sm-12 p-0">
        <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
        />
      </div>
      <div className="col-md-8 col-sm-12 p-0">
        <Main
          activeNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
        />
      </div>
    </div>
  )
}

export default App
