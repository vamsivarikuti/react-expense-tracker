import { NavLink } from "@mantine/core";
import {
  Icon,
  IconActivity,
  IconFingerprint,
  IconGauge,
  IconProps,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent } from "react";

interface NavItem {
  icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  path: string;
  description?: string;
  rightSection?: JSX.Element;
}

const data: NavItem[] = [
  {
    icon: IconGauge,
    label: "Dashboard",
    path: "/",
    description: "Item with description",
  },
  {
    icon: IconFingerprint,
    label: "Security",
    path: "/about",
  },
  { icon: IconActivity, label: "Activity", path: "/set" },
];

export const LeftNavbar = () => {
  return (
    <>
      {data.map((item) => (
        <NavLink
          href={`#${item.label}`}
          key={item.label}
          label={item.label}
          description={item.description}
          rightSection={item.rightSection}
          leftSection={<item.icon size={20} stroke={1.5} />}
        />
      ))}
    </>
  );
};
