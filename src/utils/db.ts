import Dexie, { type EntityTable } from "dexie";

type Category =
  | "Food"
  | "Home"
  | "Shopping"
  | "Entertainment"
  | "Transportation"
  | "Pets"
  | "Other";

interface Expense {
  id: number;
  name: string;
  category: Category;
}

const db = new Dexie("ExpenseDatabase") as Dexie & {
  expenses: EntityTable<
    Expense,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  expenses: "++id, name, note, category", // primary key "id" (for the runtime!)
});

export type { Expense, Category };
export { db };
