import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

interface AddExpenseModalProps {
  onClose: () => void;
}

export const AddExpenseModal = ({ onClose }: AddExpenseModalProps) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      // termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Modal onClose={onClose} opened title="Add Expense">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Add</Button>
        </Group>
      </form>
    </Modal>
  );
};
