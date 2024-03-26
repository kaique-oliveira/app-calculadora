import { StatusBar } from "react-native";
import { ChangeThemeProvider } from "./src/hooks/ChangeTheme";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <ChangeThemeProvider>
      <>
        <Home />
      </>
    </ChangeThemeProvider>
  );
}
