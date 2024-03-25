import { FC } from "react";
import { Typography } from "../../shared/ui/Typography";
import { Card } from "../../shared/ui/Card";
import { COLORS_BORDERS } from "../../shared/ui/colors";
import { useNotes } from "./store/NotesProvider";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "../../shared/ui/Button";

interface Props {
  noteId: number;
}

export const NoteOne: FC<Props> = function NoteOne(props) {
  const { data } = useNotes();
  const navigate = useNavigate();
  // Определенная заметка
  const note = data.find((note) => note.id === props.noteId);

  return (
    <li className="w-full">
      <Card className={`${COLORS_BORDERS.secondary100} border-2`}>
        <Typography size={20} weight={600}>
          {note?.title}
        </Typography>
        <Typography size={16}>{note?.description}</Typography>
      </Card>

      <Button
        mode={"border"}
        onClick={() =>
          navigate({
            to: "/notes/edit/$noteId",
            params: { noteId: props.noteId.toString() },
          })
        }
      >
        {"Редактировать"}
      </Button>
    </li>
  );
};
