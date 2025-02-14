import { Button, Flex, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AddExpenseModal } from "../components/AddExpenseModal";
import { ExpenseItemList } from "../components/ExpenseItemList";

const HomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Flex justify={"center"}>
        <Title>Expenses</Title>
        <Button
          onClick={open}
          mr={"md"}
          style={{ position: "absolute", right: 0 }}
        >
          Add Expense
        </Button>
      </Flex>
      <Flex justify={"center"}>
        <ExpenseItemList />
      </Flex>
      {opened ? <AddExpenseModal onClose={close} /> : null}
    </>
  );
};

export default HomePage;
