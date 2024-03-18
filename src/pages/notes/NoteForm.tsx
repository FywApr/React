import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Button } from "../../shared/ui/Button";
import Note, { notes } from "./Note";
import { Link, useNavigate } from "@tanstack/react-router";

interface Props {}

type Form = {
  title: string;
  description: string;
};

export const NoteForm: FC<Props> = function NoteForm() {
  let navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<Form>({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  return (
    <form
      className="gap-6 flex flex-col pt-4"
      onSubmit={handleSubmit((form) => {
        let note = new Note(form);
        notes.push(note);
        navigate({to: "/notes"})
      })}
    >
      <Controller
        name={"title"}
        control={control}
        rules={{
          required: "Это поле обязательное",
          validate: (value) => value.length > 5 || "Минимум 6 символов",
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            label={"Заголовок"}
            error={Boolean(error?.message)}
            helperText={error?.message}
            value={value}
            onChange={onChange}
            fullWidth={true}
            multiline={true}
            maxRows={4}
          />
        )}
      ></Controller>

      <Controller
        name={"description"}
        control={control}
        rules={{
          required: "Это поле обязательное",
          validate: (value) => value.length > 5 || "Минимум 6 символов",
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            label={"Описание"}
            error={Boolean(error?.message)}
            helperText={error?.message}
            value={value}
            onChange={onChange}
            fullWidth={true}
            multiline={true}
            maxRows={4}
          />
        )}
      ></Controller>
      <Button type="submit" disabled={!isValid}>
        {"Добавить"}
      </Button>
    </form>
  );
};
