import { FC } from "react";
import { Button } from "../../shared/ui/Button";
import { NoteOne } from "./NoteOne";
import { notes } from "./Note";
import { Link } from "@tanstack/react-router";

interface Props {}

export const NotesList: FC<Props> = function NoteList() {
  console.log(notes);
  const list = notes.map((note) => {
    return <NoteOne key={note.id} noteId={note.id} />;
  });
  return (
    <div className="gap-6">
      <Link to="/notes/add">
        <Button mode={"dark"}>{"+"}</Button>
      </Link>
      <ul className="flex gap-4 flex-wrap">{list}</ul>
    </div>
  );
};
