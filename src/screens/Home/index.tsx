import { ThemeProvider } from "styled-components";
import { Container } from "./styles";
import { useChangeTheme } from "../../hooks/ChangeTheme";
import theme from "../../theme/index";
import { Button } from "../../components/Button";
import { Horse } from "phosphor-react-native";

export function Home() {
  const { getTheme, onChangeTheme } = useChangeTheme();

  return (
    <ThemeProvider theme={getTheme === "dark" ? theme.dark : theme.light}>
      <Container>
        <Button text="1" variant="CONTAINED" />
      </Container>
    </ThemeProvider>
  );
}
