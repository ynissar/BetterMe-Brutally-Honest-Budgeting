import { expenseAccount } from "../types";
import { expenseCategories } from "../categories";
import { inputError } from "../errorHandling/errors";

class individualExpenseCategoryManager {
  expenseCategory: string;
  expenseList: expenseAccount[];
  totalExpense: number;

  constructor(expenseCategory: string, expenseList: expenseAccount[]) {
    this.expenseList = expenseList;

    if (!expenseCategories.includes(expenseCategory)) {
      inputError("incorrect expense category name");
      throw Error("incorrect expense category name");
    }

    this.expenseCategory = expenseCategory;

    this.totalExpense = 0;
    for (expense in expenseList) {
      this.totalExpense += expense.amount;
    }
  }

  addExpense(newExpense: expenseAccount): void {
    if (newExpense.expenseCategory != this.expenseCategory) {
      inputError("expense not in same category");
      throw Error("expense not in same category");
    }

    this.expenseList.push(newExpense);

    this.totalExpense = 0;
    for (expense in this.expenseList) {
      this.totalExpense += expense.amount;
    }
  }

  removeExpense(expense: expenseAccount): expenseAccount {
    //! SQL methods

    if (this.expenseList.includes(expense)) {
      // let removedExpense = this.expenseList.
    }

    this.totalExpense = 0;
    for (expense in this.expenseList) {
      this.totalExpense += expense.amount;
    }
  }

  updateExpense(expense: expenseAccount): void {}
}
