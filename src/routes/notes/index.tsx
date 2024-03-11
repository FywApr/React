import { createFileRoute } from "@tanstack/react-router";
import { NotesList } from "../../pages/notes/NotesList";

export const Route = createFileRoute("/notes/")({
  component: MainRoute,
  staticData: {
    title: "Список заметок",
  },
});

function MainRoute() {
  return <NotesList />;
}