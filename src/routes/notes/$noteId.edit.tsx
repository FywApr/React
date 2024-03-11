import { createFileRoute } from "@tanstack/react-router";
import { NoteForm } from "../../pages/notes/NoteForm";

export const Route = createFileRoute("/notes/$noteId/edit")({
  component: NotesFromRoute,
  staticData: {
    title: "Редактировать заметку",
  },
});

function NotesFromRoute() {
  return <NoteForm />;
}
