export class Task {
  task: string;
  done: boolean;
  id: string;

  constructor (obj?: any) {
    this.task = obj? obj.task : '';
    this.done = obj? obj.done : '';
    this.id = obj? obj.id : '';
  }
}
