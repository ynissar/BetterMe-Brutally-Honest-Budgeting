import { goal } from "../types";
import { inputError } from "../errorHandling/errors";
import { expenseCategories } from "../categories";

class individualGoalManager {
  goalName: string;
  goalCategory: string;
  subgoalList: goal[];
  budgetGoal: number;
  budgetHistory: number[];
  minimumBudgetGoal: number;

  constructor(
    subgoalList: goal[],
    budgetGoal: number,
    goalCategory: string,
    goalName: string
  ) {
    this.goalName = goalName;
    this.subgoalList = subgoalList;

    this.minimumBudgetGoal = 0;
    for (subgoal in subgoalList) {
      this.minimumBudgetGoal += subgoal.amount;
    }

    if (budgetGoal < this.minimumBudgetGoal) {
      inputError("budget goal less than minimum budget required");
      throw Error("budget goal less than minimum budget required");
    }

    this.budgetGoal = budgetGoal;
    this.budgetHistory = [budgetGoal];

    if (!expenseCategories.includes(goalCategory)) {
      inputError("given expense category name does not exist in directory");
      throw Error("incorrect category name for goal");
    }

    this.goalCategory = goalCategory;
  }

  addSubgoal(goal: goal): void {
    //! Alter for SQL
    this.subgoalList.push(goal);

    this.minimumBudgetGoal = 0;
    for (subgoal in this.subgoalList) {
      this.minimumBudgetGoal += subgoal.amount;
    }
  }

  removeSubgoal(goalId: number): goal {
    //! alter for SQL
    this.subgoalList;

    // remove

    this.minimumBudgetGoal = 0;
    for (subgoal in this.subgoalList) {
      this.minimumBudgetGoal += subgoal.amount;
    }

    return null;
  }

  changeBudgetGoal(newBudgetGoal: number): void {
    if (newBudgetGoal < this.minimumBudgetGoal) {
      inputError("new budget goal less than minimum budget required");
      throw Error("budget goal less than minimum budget required");
    }

    this.budgetGoal = newBudgetGoal;
    this.budgetHistory.push(newBudgetGoal);
  }
}

export default individualGoalManager;
