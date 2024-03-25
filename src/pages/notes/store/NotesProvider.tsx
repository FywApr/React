import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { TNote } from "../model/Note";

// DTO - Data Transfer Object
// Pick - выбираем данные свойств
// Partial - необязательные свойства
type AddNoteDTO = Pick<TNote, "title" | "description">;
type UpdateNoteDTO = Partial<AddNoteDTO> & Pick<TNote, "id">;

interface NotesContextValues {
  data: TNote[];
  addNote: (dto: AddNoteDTO) => void;
  updateNote: (dto: UpdateNoteDTO) => void;
}

const NotesContext = createContext<NotesContextValues>({
  data: [],
  addNote: () => {},
  updateNote: () => {},
});

export const useNotes = () => useContext(NotesContext);

// Props with children - обязательные дочерние элементы
export const NotesProvider: FC<PropsWithChildren> = function NotesProvider(
  props
) {
  const [notes, setNotes] = useState<TNote[]>([]);

  const addNote = (dto: AddNoteDTO) => {
    setNotes((prevState) => [
      ...prevState,
      { id: 0, date: new Date(), ...dto },
    ]);
  };

  const updateNote = (dto: UpdateNoteDTO) => {
    const { id, ...nestDTO } = dto;
    setNotes((prevState) =>
      prevState.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...nestDTO,
          };
        }

        return note;
      })
    );
  };

  return (
    <NotesContext.Provider
      value={{
        data: notes,
        addNote,
        updateNote,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
