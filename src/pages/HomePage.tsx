import { Button, Flex, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AddExpenseModal } from "../components/AddExpenseModal";

const HomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Flex justify={"space-between"}>
        <span></span>
        <Title>Expenses</Title>
        <Button onClick={open}>Add Expense</Button>
      </Flex>

      {opened ? <AddExpenseModal onClose={close} /> : null}
    </>
  );
};

export default HomePage;
