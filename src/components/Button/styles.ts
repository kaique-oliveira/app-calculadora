import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyledProp = "TEXT" | "CONTAINED" | "OUTLINED" | "HIGHLIGHT";

type Props = {
  variant: ButtonStyledProp;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 70px;
  height: 70px;

  border-radius: 20px;

  justify-content: center;
  align-items: center;
  padding: 8px;

  transition: all 0.2s;

  ${(props) =>
    props.variant === "TEXT"
      ? css`
          background-color: transparent;
        `
      : props.variant === "CONTAINED"
      ? css`
          background-color: ${props.theme.COLORS.GRAY_200};
        `
      : props.variant === "OUTLINED"
      ? css`
          background-color: transparent;
          border: 1px solid ${props.theme.COLORS.GRAY_200};
        `
      : css`
          height: 152px;
        `}
`;

export const Title = styled.Text<Props>`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) =>
    props.variant === "HIGHLIGHT" ? "#fff" : props.theme.COLORS.GRAY_300};
`;

export const Gradient = styled(LinearGradient)`
  width: 70px;
  height: 152px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
