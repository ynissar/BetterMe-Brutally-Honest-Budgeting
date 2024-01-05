import { account, accountRecord } from "../types";

class individualAccountManager {
  accountRecord: accountRecord[];
  name: string;
  notes: string;
  totalAmount: number;

  constructor(amount: number, name: string, notes: string, date: Date) {
    this.accountRecord = [];
    this.accountRecord.push({ amount, date });

    this.name = name;
    this.notes = notes;

    this.totalAmount = amount;
  }

  addEvent(amount: number, date: Date) {
    this.accountRecord.push({ amount, date });
    this.totalAmount += amount;
  }

  removeEvent(_id: string) {
    //! remove SQL
  }

  updateEvent(_id: string) {
    //! update SQL
  }
}
