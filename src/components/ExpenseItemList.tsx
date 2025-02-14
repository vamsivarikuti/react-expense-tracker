import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../utils/db";
import { ExpenseItem } from "./ExpenseItem";
import { List, Text } from "@mantine/core";

export const ExpenseItemList = () => {
  const expenses = useLiveQuery(() => db.expenses.toArray());

  return expenses?.length ? (
    <List center mt={"xl"}>
      {expenses?.map((e) => (
        <List.Item key={e.id}>
          <ExpenseItem expense={e} />
        </List.Item>
      ))}
    </List>
  ) : (
    <Text size="lg" mt={"xl"}>
      No items yet!
    </Text>
  );
};
