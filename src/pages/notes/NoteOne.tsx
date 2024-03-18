import { FC } from "react";
import { Typography } from "../../shared/ui/Typography";
import { Card } from "../../shared/ui/Card";
import { COLORS_BORDERS } from "../../shared/ui/colors";
import { notes } from "./Note";

interface Props {
  noteId: number
}

export const NoteOne: FC<Props> = function NoteOne(props) {

  const note = notes.find((note) => note.id === props.noteId);

  return (
    <li className="w-full">
      <Card className={`${COLORS_BORDERS.secondary100} border-2`}>
        <Typography size={20} weight={600}>
          {note?.title}
        </Typography>
        <Typography size={16}>{note?.description}</Typography>
      </Card>
    </li>
  );
};
