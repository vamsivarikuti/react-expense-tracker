import { Flex, Group, Text, Title } from "@mantine/core";
import { Expense } from "../utils/db";

interface ExpenseItemProps {
  expense: Expense;
}
export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  const { name, category } = expense;
  return (
    <Flex>
      <Group justify="space-between">
        <Title>{name}</Title>
        <Text>{category}</Text>
      </Group>
    </Flex>
  );
};
