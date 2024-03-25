import { FC } from "react";
import { Button } from "../../shared/ui/Button";
import { NoteOne } from "./NoteOne";
import { notes } from "./model/Note";
import { Link, useNavigate } from "@tanstack/react-router";
import { useNotes } from "./store/NotesProvider";

interface Props {}

export const NotesList: FC<Props> = function NoteList() {
  const navigate = useNavigate();
  const {data} = useNotes()

  // Генерация массива из заметок
  const list = data.map((note) => {
    return <NoteOne key={note.id} noteId={note.id} />;
  });

  return (
    <div className="gap-6">
      <Link to="/notes/add">
        <Button mode={"dark"} onClick={()=> navigate({to: "/notes/add"})}>{"+"}</Button>
      </Link>
      <ul className="flex gap-4 flex-wrap">{list}</ul>
    </div>
  );
};
