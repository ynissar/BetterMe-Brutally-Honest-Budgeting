interface goal {
  _id: number;
  goalAmount: number;
}

interface individualBudget {
  subBudgets: individualBudget[];
  budgetedAmount: number;
}

interface accountRecord {
  date: Date;
  amount: number;
}

interface account {
  _id: number;
  accountRecord: accountRecord[];
  name: string;
  notes: string;
}

interface expenseAccount extends account {
  expenseCategory: string;
}

interface incomeAccount extends account {
  incomeCategory: string;
}

interface investmentAccount extends account {
  investmentCategory: string;
}

interface debtAccount extends account {
  debtCategory: string;
}

export {
  goal,
  individualBudget,
  incomeAccount,
  expenseAccount,
  debtAccount,
  investmentAccount,
  account,
  accountRecord,
};
