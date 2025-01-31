import "@mantine/core/styles.css";

import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { AppRouter } from "./utils/routes";

const theme = createTheme({});

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="auto" theme={theme}>
        <AppRouter />
      </MantineProvider>
    </>
  );
}

export default App;
