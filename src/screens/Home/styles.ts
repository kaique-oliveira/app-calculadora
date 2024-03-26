import styled, { DefaultTheme } from "styled-components/native";
import theme from "../../theme";
// import t from "../../theme";
// import { useChangeTheme } from "../../hooks/ChangeTheme";

// const { getTheme } = useChangeTheme();

// const theme = getTheme === "dark" ? t.dark : t.light;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  flex: 1;
`;
