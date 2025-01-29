import "@mantine/core/styles.css";

import "./App.css";
import { AppLayout } from "./layout/AppLayout";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="auto" theme={theme}>
        <AppLayout />
      </MantineProvider>
    </>
  );
}

export default App;
