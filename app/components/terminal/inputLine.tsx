// import {
//   router
// } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function InputLine({
  focusOnInput,
  output,
  setOutput,
  commandHistory,
  setCommandHistory,
}: {
  focusOnInput: boolean;
  commandHistory: string[];
  setCommandHistory: React.Dispatch<React.SetStateAction<string[]>>;
  output: string;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const [historyLookback, setHistoryLookback] = useState(0);
  const [disableInput, setDisableInput] = useState(false);
  const [command, setCommand] = useState("");

  const handleOutput = (newOutput: string) => {
    if (output === newOutput) {
      console.log(output)
      console.log("kekek")
      setOutput("x")
      console.log(output)
      setOutput(newOutput + " ")
      console.log(output)

    } else setOutput(newOutput)
    //setOutput(output => { if (output === newOutput) return " "; else return newOutput })
  }

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
        const commandProcessed = command.split(" ")
        console.log(commandProcessed)
        setCommandHistory((data) => {
          const dataCommandHistory = data && [...data];
          dataCommandHistory.push(command);
          return dataCommandHistory || [];
        });

        if (commandProcessed[0] === "cd") {
          if (!commandProcessed[1]) handleOutput("No directory specified")
          else if (/.txt/g.test(commandProcessed[1])) {
            if (commandProcessed[1] === "me.txt") handleOutput('me.txt is a file')
            else handleOutput(`Cannot find ${commandProcessed[1]}`)
          }
          else if (commandProcessed[1] === "about" ||
            commandProcessed[1] === "work" ||
            commandProcessed[1] === "skills" ||
            commandProcessed[1] === "contact") {
            navigate(commandProcessed[1] === "about" ? "/" : commandProcessed[1]);
            handleOutput("no_output_line")
          }
          else handleOutput(`Cannot find ${commandProcessed[1]}`);
        } else if (commandProcessed[0] === "ls") {
          const dirs = `
          <strong>about</strong> <br/>
          <strong>work</strong> <br/>
          <strong>skills</strong> <br/>
          <strong>contact</strong> <br/>
          me.txt
        `
          handleOutput(dirs);
        } else if (commandProcessed[0] === "cat") {
          if (commandProcessed[1] === "me.txt") handleOutput("It's me")
          else if (!commandProcessed[1]) handleOutput("No file specified")
          else if (commandProcessed[1] === "about" ||
            commandProcessed[1] === "work" ||
            commandProcessed[1] === "skills" ||
            commandProcessed[1] === "contact") handleOutput(`${commandProcessed[1]} is a directory`)
          else handleOutput(`Cannot find ${commandProcessed[1]}`);
        } else {
          handleOutput("available commands are cd, ls, cat")
        }
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
