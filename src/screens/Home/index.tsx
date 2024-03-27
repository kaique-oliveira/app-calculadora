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
import AllClear from "../../assets/AllClear";
import Sun from "../../assets/Sun";
import Moon from "../../assets/Moon";
import { StatusBar } from "react-native";

type TypeOperator = "*" | "/" | "+" | "-" | "=";

export function Home() {
  const { getTheme, onChangeTheme } = useChangeTheme();

  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

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
      setInput(`${input}${key}`);
    } else if (key.match(/[\'+\=\/\*\-]/)) {
      if (key === "=") {
        handleFinishOperation();
      } else {
        handleDefineOperator(key as TypeOperator);
      }
    } else {
      return;
    }
  }

  function handleDefineOperator(operator: TypeOperator) {
    if (input.match(/\d+/)) {
      setInput(`${input} ${operator} `);
    }
  }

  function handleFinishOperation() {
    if (
      input
        .replaceAll(",", ".")
        .match(/^\s*(-?\d*\.?\d+)\s*([-+*/]\s*-?\d*\.?\d+\s*)+$/)
    ) {
      const result = eval(input.replace(/,/g, "."));
      setHistory([
        input.replaceAll(".", ","),
        "=",
        `${result}`.includes(".")
          ? Number(`${result}`).toFixed(2).replace(".", ",")
          : `${result}`,
      ]);

      if (`${result}`.includes(".")) {
        setInput(Number(`${result}`).toFixed(2).replace(".", ","));
      } else {
        setInput(`${result}`);
      }
    }
  }

  function handleClearAll() {
    setHistory([]);
    setInput("");
  }

  function backHistory() {
    const his = history.map((x) => ` ${x} `);

    setInput(his.slice(0, his.indexOf(" = ")).join(" ").trim());
    setHistory([]);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <ThemeProvider theme={getTheme === "dark" ? theme.dark : theme.light}>
      <StatusBar
        barStyle={getTheme === "light" ? "dark-content" : "light-content"}
        backgroundColor={"transparent"}
        translucent
      />

      <Container>
        <WrapperHistory>
          <History onPress={backHistory}>
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
            showSoftInputOnFocus={false}
          />
        </WrapperPrompt>

        <WrapperButtons>
          <GroupButtonsDefault>
            <Button
              icon={getTheme === "dark" ? <Sun /> : <Moon />}
              variant="OUTLINED"
              onPress={handleChangeTheme}
            />
            <Button
              icon={
                <ArrowLeft
                  color={getTheme === "dark" ? "#E9E9E9" : "#212327"}
                />
              }
              variant="CONTAINED"
              onPress={handleDeleteCharacter}
            />
            <Button
              icon={
                <Divide color={getTheme === "dark" ? "#E9E9E9" : "#212327"} />
              }
              variant="CONTAINED"
              onPress={() => handleDefineOperator("/")}
            />
            <Button
              icon={<X color={getTheme === "dark" ? "#E9E9E9" : "#212327"} />}
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
              icon={
                <Minus color={getTheme === "dark" ? "#E9E9E9" : "#212327"} />
              }
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
              icon={
                <Plus color={getTheme === "dark" ? "#E9E9E9" : "#212327"} />
              }
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
                  icon={<AllClear />}
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
              icon={<Equals color="#E9E9E9" />}
              variant="HIGHLIGHT"
              onPress={handleFinishOperation}
            />
          </ColumnsGroupButtons>
        </WrapperButtons>
      </Container>
    </ThemeProvider>
  );
}
