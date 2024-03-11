import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";

export const Route = createFileRoute("/notes/add")({
  component: NotesFromRoute,
  staticData: {
    title: "Добавить заметку",
  },
});

function NotesFromRoute() {
  return <NoteForm />;
}
