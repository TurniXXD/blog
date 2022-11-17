// import {
//   router
// } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function InputLine({
  focusOnInput,
  setOutput,
  commandHistory,
  setCommandHistory,
}: {
  focusOnInput: boolean;
  commandHistory: string[];
  setCommandHistory: React.Dispatch<React.SetStateAction<string[]>>;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [historyLookback, setHistoryLookback] = useState(0);
  const [disableInput, setDisableInput] = useState(false);
  const [command, setCommand] = useState("");

  //on enter press add to command History and set output based on input

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      console.log(commandHistory);
      if (commandHistory.length !== historyLookback) {
        setCommand(commandHistory[historyLookback]);
        console.log(command);
        setHistoryLookback((value) => value + 1);
      }
    }
    if (e.key === "ArrowDown") {
      if (historyLookback !== 0) {
        setCommand(commandHistory[historyLookback - 1]);
        console.log(command);
        setHistoryLookback((value) => value - 1);
      } else {
        setCommand("");
      }
    }
    if (e.key === "Enter") {
      console.log("kek");
      if (command !== "") {
        setCommandHistory((data) => {
          const dataCommandHistory = data && [...data];
          dataCommandHistory.push(command);
          return dataCommandHistory || [];
        });
        setOutput(command);
        setDisableInput(true);
      }
    }
  };

  return (
    <div className="flex-row gap-2">
      <div className="flex-col">
        <span className="text-sm">[ vantuch@dev ~ ] $</span>
      </div>
      <div className="flex-auto flex-col">
        <input
          type="text"
          disabled={disableInput}
          autoFocus={focusOnInput}
          spellCheck="false"
          className="w-full bg-gray-900 text-sm outline-none"
          onChange={(value) => setCommand(value.target.value)}
          value={command}
          onKeyDown={(e) => handleKeyEvent(e)}
        />
      </div>
    </div>
  );
}
