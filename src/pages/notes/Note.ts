import { formatDistanceToNow } from "date-fns";

type TNote = {
  title: string;
  description: string;
};

export default class Note {
  title: string;
  description: string;
  private date: Date;
  differentsDate: string;
  id: number;

  constructor(params: TNote) {
    this.title = params.title;
    this.description = params.description;
    this.date = new Date();
    this.differentsDate = this.generateDate();
    this.id = notes.length;
  }

  private generateDate() {
    const result = formatDistanceToNow(this.date);
    return result;
  }
}

export const notes: Note[] = [];
