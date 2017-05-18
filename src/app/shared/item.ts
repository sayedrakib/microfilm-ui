export class Item {
  id: string;
  title: string;
 

  constructor(obj?: any) {
    this.id = obj && obj._id || null;
    this.title = obj && obj.thesis_type || null;

  }
}