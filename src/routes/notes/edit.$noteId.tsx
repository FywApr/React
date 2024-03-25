import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";
import { Typography } from "../../shared/ui/Typography";
import { useNotes } from "../../pages/notes/store/NotesProvider";

export const Route = createFileRoute("/notes/edit/$noteId")({
  component: NotesFromRoute,
  staticData: {
    title: "Редактировать заметку",
  },
});

function NotesFromRoute() {
  const { noteId } = Route.useParams();

  const { data } = useNotes();

  const note = data.find((item) => item.id === Number(noteId));

  if (!note) {
    return <Typography align={"center"}>{"Заметки не существует"}</Typography>;
  }
  return <NoteForm note={note} />;
}
