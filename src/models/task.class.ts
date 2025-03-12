export class Task {
  task: string;
  done: boolean;

  constructor (obj?: any) {
    this.task = obj? obj.task : '';
    this.done = obj? obj.done : '';
  }
}
