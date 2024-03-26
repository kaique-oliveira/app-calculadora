import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.DEFAULT};
  flex: 1;

  justify-content: flex-end;
  transition: all 0.5s;
`;

export const WrapperButtons = styled.View`
  width: 100%;
  height: 500px;

  border-radius: 32px 32px 0px 0px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  gap: 22px;
  padding: 32px 32px 86px 32px;
  margin-bottom: -36px;
`;

export const GroupButtonsDefault = styled.View`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;

  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

export const ColumnsGroupButtons = styled.View`
  width: 100%;

  display: grid;
  grid-template-columns: 3fr 1fr;
  flex-direction: row;
  justify-content: space-between;
`;

export const RowsGroupButtons = styled.View`
  display: grid;

  grid-template-rows: 1.5fr 1.5fr;
  grid-template-columns: 3fr;
  gap: 22px;
`;

export const GroupButtonsThreeColumns = styled.View`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: row;

  justify-content: space-between;
  gap: 29px;
`;

export const WrapperPrompt = styled.View`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
`;

export const Input = styled.TextInput`
  width: 95%;
  border: none;
  box-shadow: none;
  outline: none;
  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: 28px;
  font-weight: 700;
`;

export const WrapperHistory = styled.View`
  height: 32px;
  width: 100%;

  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;

  padding: 0px 32px;
  gap: 8px;
`;

export const History = styled.Text`
  font-size: 22px;
  font-weight: 300;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
