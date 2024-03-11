import { FC } from "react";
import { Button } from "../../shared/ui/Button";
import { Card } from "../../shared/ui/Card";
import { COLORS_BORDERS } from "../../shared/ui/colors";
import { Typography } from "../../shared/ui/Typography";

interface Props {}

export const NotesList: FC<Props> = function NoteList() {
  return (
    <div className="gap-6">
      <Button mode={"dark"}>{"+"}</Button>
      <ul className="flex gap-4 flex-wrap">
        <li className="w-full">
          <Card className={`${COLORS_BORDERS.secondary100} border-2`}>
            <Typography size={20} weight={600}>
              {"Заголовок"}
            </Typography>
            <Typography size={16}>{"Описание заметки"}</Typography>
          </Card>
        </li>
      </ul>
    </div>
  );
};
