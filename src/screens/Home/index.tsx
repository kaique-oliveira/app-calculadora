import { ThemeProvider } from "styled-components";
import { Container } from "./styles";
import { useChangeTheme } from "../../hooks/ChangeTheme";
import theme from "../../theme/index";

export function Home() {
  const { getTheme, onChangeTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={getTheme === "dark" ? theme.dark : theme.light}>
      <Container></Container>
    </ThemeProvider>
  );
}
