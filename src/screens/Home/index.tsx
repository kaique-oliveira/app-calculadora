import { ThemeProvider, useTheme } from "styled-components";
import {
  ColumnsGroupButtons,
  Container,
  GroupButtonsDefault,
  GroupButtonsThreeColumns,
  RowsGroupButtons,
  WrapperButtons,
  WrapperHistory,
  History,
  WrapperPrompt,
  Input,
} from "./styles";
import { useChangeTheme } from "../../hooks/ChangeTheme";
import theme from "../../theme/index";
import { Button } from "../../components/Button";
import {
  Divide,
  X,
  Minus,
  Plus,
  Equals,
  ClockCounterClockwise,
  ArrowLeft,
} from "phosphor-react-native";
import React, { useEffect, useRef, useState } from "react";
import SunSvg from "../../assets/SunSvg.svg";
import AllClearSvg from "../../assets/AllClearSvg.svg";
import MoonSvg from "../../assets/MoonSvg.svg";

type TypeOperator = "*" | "/" | "+" | "-" | "=";

export function Home() {
  const { getTheme, onChangeTheme } = useChangeTheme();

  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [lineOperation, setLineOperation] = useState<string[]>([]);

  function handleChangeTheme() {
    if (getTheme === "light") {
      onChangeTheme("dark");
    } else {
      onChangeTheme("light");
    }
  }

  function handleDeleteCharacter() {
    setInput(input.slice(0, -1));
  }

  function handleDefineNumbers(key: string) {
    if (key.match(/\d+/) || key.match(/[,]/)) {
      setInput(input + key);
    } else if (key.match(/[\'+\=\/\*\-]/) || key === "Enter") {
      if (key === "=" || key === "Enter") {
        handleFinishOperation();
      } else {
        handleDefineOperator(key as TypeOperator);
      }
    } else if (key === "Backspace") {
      handleDeleteCharacter();
    } else {
      return;
    }
  }

  function handleDefineOperator(operator: TypeOperator) {
    setHistory([input, operator]);
    setLineOperation([...lineOperation, input, operator]);
    setInput("");
  }

  function handleFinishOperation() {
    const operation = lineOperation.reduce(
      (prev, his) => prev + his.replace(/,/g, "."),
      ""
    );

    const result = eval(operation + input.replace(/,/g, "."));
    setHistory([
      ...history,
      input.replace(/,/g, "."),
      "=",
      `${result}`.replace(".", ","),
    ]);

    setInput(`${result}`.replace(".", ","));
    setLineOperation([]);
  }

  function handleClearAll() {
    setHistory([]);
    setInput("");
    setLineOperation([]);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <ThemeProvider theme={getTheme === "dark" ? theme.dark : theme.light}>
      <Container>
        <WrapperHistory>
          <History>
            {history.length > 0 && history.map((x) => ` ${x} `)}
          </History>
          <ClockCounterClockwise
            color={
              getTheme === "dark"
                ? "rgba(250, 253, 255, 0.33)"
                : "rgba(186, 187, 188, 0.70)"
            }
            size={22}
          />
        </WrapperHistory>

        <WrapperPrompt>
          <Input
            ref={inputRef}
            autoFocus
            type="text"
            value={input}
            onChange={() => {}}
            onKeyUp={(e) => handleDefineNumbers(e.key)}
          />
        </WrapperPrompt>

        <WrapperButtons>
          <GroupButtonsDefault>
            <Button
              icon={getTheme === "dark" ? <SunSvg /> : <MoonSvg />}
              variant="OUTLINED"
              onPress={handleChangeTheme}
            />
            <Button
              icon={<ArrowLeft />}
              variant="CONTAINED"
              onPress={handleDeleteCharacter}
            />
            <Button
              icon={<Divide />}
              variant="CONTAINED"
              onPress={() => handleDefineOperator("/")}
            />
            <Button
              icon={<X />}
              variant="CONTAINED"
              onPress={() => handleDefineOperator("*")}
            />
          </GroupButtonsDefault>

          <GroupButtonsDefault>
            <Button
              text="7"
              variant="TEXT"
              onPress={() => handleDefineNumbers("7")}
            />
            <Button
              text="8"
              variant="TEXT"
              onPress={() => handleDefineNumbers("8")}
            />
            <Button
              text="9"
              variant="TEXT"
              onPress={() => handleDefineNumbers("9")}
            />
            <Button
              icon={<Minus />}
              variant="CONTAINED"
              onPress={() => handleDefineOperator("-")}
            />
          </GroupButtonsDefault>

          <GroupButtonsDefault>
            <Button
              text="4"
              variant="TEXT"
              onPress={() => handleDefineNumbers("4")}
            />
            <Button
              text="5"
              variant="TEXT"
              onPress={() => handleDefineNumbers("5")}
            />
            <Button
              text="6"
              variant="TEXT"
              onPress={() => handleDefineNumbers("6")}
            />
            <Button
              icon={<Plus />}
              variant="CONTAINED"
              onPress={() => handleDefineOperator("+")}
            />
          </GroupButtonsDefault>

          <ColumnsGroupButtons>
            <RowsGroupButtons>
              <GroupButtonsThreeColumns>
                <Button
                  variant="TEXT"
                  text="1"
                  onPress={() => handleDefineNumbers("1")}
                />
                <Button
                  variant="TEXT"
                  text="2"
                  onPress={() => handleDefineNumbers("2")}
                />
                <Button
                  variant="TEXT"
                  text="3"
                  onPress={() => handleDefineNumbers("3")}
                />
              </GroupButtonsThreeColumns>

              <GroupButtonsThreeColumns>
                <Button
                  variant="TEXT"
                  icon={<AllClearSvg />}
                  onPress={handleClearAll}
                />
                <Button
                  variant="TEXT"
                  text="0"
                  onPress={() => handleDefineNumbers("0")}
                />
                <Button
                  variant="TEXT"
                  text=","
                  onPress={() => handleDefineNumbers(",")}
                />
              </GroupButtonsThreeColumns>
            </RowsGroupButtons>
            <Button
              icon={<Equals />}
              variant="HIGHLIGHT"
              onPress={handleFinishOperation}
            />
          </ColumnsGroupButtons>
        </WrapperButtons>
      </Container>
    </ThemeProvider>
  );
}
