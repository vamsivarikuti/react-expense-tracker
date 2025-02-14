import { Button, Group, Modal, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

interface AddExpenseModalProps {
  onClose: () => void;
}

export const AddExpenseModal = ({ onClose }: AddExpenseModalProps) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      note: "",
      category: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  return (
    <Modal onClose={onClose} centered opened title="Add Expense">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Item name"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />

        <TextInput
          label="Category"
          placeholder="Select Category"
          key={form.key("category")}
          {...form.getInputProps("category")}
        />

        <Textarea
          label="Note"
          placeholder="Additional Notes"
          key={form.key("note")}
          {...form.getInputProps("note")}
        />

        <Group justify="space-between" mt="md">
          <Button variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </Group>
      </form>
    </Modal>
  );
};
