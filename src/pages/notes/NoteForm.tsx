import { FC } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Button } from "../../shared/ui/Button";

interface Props {}

type Form = {
  title: string;
  description: string;
};

export const NoteForm: FC<Props> = function NoteForm() {
  const methods = useForm<Form>();
  return (
    <form className="gap-6 flex flex-col pt-4">
      <TextField label={"Заголовок"} fullWidth={true} variant={"outlined"} />
      <TextField
        label={"Описание"}
        fullWidth={true}
        multiline={true}
        maxRows={4}
      />
      <Button>{"Добавить"}</Button>
    </form>
  );
};
