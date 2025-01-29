import { Menu, Text } from "@mantine/core";
import {
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";

const IconSize = 14;

export const LeftNavbar = () => {
  return (
    <>
      <Menu shadow="md">
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={IconSize} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={IconSize} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={IconSize} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={IconSize} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>
        <Menu.Divider />
      </Menu>
    </>
  );
};
