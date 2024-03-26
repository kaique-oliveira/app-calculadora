import { TouchableOpacityProps } from "react-native";
import {
  ButtonStyledProp,
  Container,
  Gradient,
  Title,
  Wrapper,
} from "./styles";
import { ReactElement } from "react";

type Props = TouchableOpacityProps & {
  variant?: ButtonStyledProp;
  text?: string;
  icon?: ReactElement;
};

export function Button({ variant = "TEXT", text = "", icon, ...rest }: Props) {
  return (
    <Container {...rest} variant={variant}>
      {variant === "HIGHLIGHT" ? (
        <Gradient colors={["rgba(238,19,145,1)", "rgba(253,86,51,1)"]}>
          {text && <Title variant={variant}>{text}</Title>}
          {icon && icon}
        </Gradient>
      ) : (
        <Wrapper>
          {text && <Title variant={variant}>{text}</Title>}
          {icon && icon}
        </Wrapper>
      )}
    </Container>
  );
}
