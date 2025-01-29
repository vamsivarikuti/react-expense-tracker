import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LeftNavbar } from "../components";
import { Outlet } from "react-router";
import { PageHeader } from "../components";

export const AppLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <PageHeader toggle={toggle} opened={opened} />
      </AppShell.Header>

      <AppShell.Navbar>
        <LeftNavbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
