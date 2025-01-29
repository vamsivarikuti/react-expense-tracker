import {
  ActionIcon,
  Burger,
  Flex,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

interface PageHeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const PageHeader = ({ opened, toggle }: PageHeaderProps) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <Flex
      direction={"row"}
      align={"center"}
      justify={"space-between"}
      p="sm"
      style={{ height: "inherit" }}
    >
      <div>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </div>

      <div>
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          {computedColorScheme === "dark" ? (
            <IconSun stroke={1.5} />
          ) : (
            <IconMoon stroke={1.5} />
          )}
        </ActionIcon>
      </div>
    </Flex>
  );
};
