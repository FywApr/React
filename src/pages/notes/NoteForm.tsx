import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Button } from "../../shared/ui/Button";
import Note, { TNote, notes } from "./model/Note";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { useNotes } from "./store/NotesProvider";

interface Props {
  note?: TNote;
}

type Form = {
  title: string;
  description: string;
};

export const NoteForm: FC<Props> = function NoteForm(props) {
  const { addNote } = useNotes();
  const { updateNote } = useNotes();
  const { history } = useRouter();

  // // меняет маршрут
  // let navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<Form>({
    defaultValues: {
      title: props.note?.title ?? "",
      description: props.note?.description ?? "",
    },
  });

  return (
    <form
      className="gap-6 flex flex-col pt-4"
      onSubmit={handleSubmit((form) => {
        // Новая версия

        if (props.note) {
          updateNote({ id: props.note.id, ...form });
          history.back();
        } else {
          addNote(form);
          history.back();
        }

        // Старая версия

        // let note = new Note(form);
        // notes.push(note);
        // navigate({ to: "/notes" });
      })}
    >
      {/* Контролирует работу другого компонента */}
      <Controller
        name={"title"}
        // con
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
        {props.note ? "Сохранить" : "Добавить"}
      </Button>
    </form>
  );
};
