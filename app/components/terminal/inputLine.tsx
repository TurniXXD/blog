import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function InputLine({
  output,
  setOutput,
  commandHistory,
  setCommandHistory,
}: {
  commandHistory: string[];
  setCommandHistory: React.Dispatch<React.SetStateAction<string[]>>;
  output: string;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const [historyLookback, setHistoryLookback] = useState(0);
  const [disableInput, setDisableInput] = useState(false);
  const [command, setCommand] = useState("");

  useEffect(() => document.getElementById("terminal-input")?.focus(), [])
  useEffect(() => {
    const terminalInput = document.getElementById("terminal-input")
    disableInput && terminalInput?.removeAttribute('id')
  }, [disableInput])

  const handleOutput = (newOutput: string) => {
    if (output === newOutput) {
      setOutput(commandHistory[historyLookback])
      setOutput(newOutput + " ")
    } else setOutput(newOutput)
  }

  //on enter press add to command History and set output based on input
  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      if (commandHistory.length !== historyLookback) {
        setCommand(commandHistory[historyLookback]);
        setHistoryLookback((value) => value + 1);
      }
    }
    if (e.key === "ArrowDown") {
      if (historyLookback !== 0) {
        setCommand(commandHistory[historyLookback - 1]);
        setHistoryLookback((value) => value - 1);
      } else {
        setCommand("");
      }
    }
    if (e.key === "Enter") {
      if (command !== "") {
        const commandProcessed = command.split(" ")
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
          <a href="/"><strong>about</strong></a> <br/>
          <a href="/work"><strong>work</strong></a> <br/>
          <a href="/skills"><strong>skills</strong></a> <br/>
          <a href="/contact"><strong>contact</strong></a> <br/>
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
        }
        else if (commandProcessed[0] === "help") handleOutput("available commands are help, cd, ls, cat")
        else {
          handleOutput("available commands are help, cd, ls, cat")
        }
        setDisableInput(true);
      }
    }
  };

  return (
    <div className="flex-row gap-2">
      <div className="flex-col">
        <span className="text-2xs sm:text-sm">[ vantuch@dev ~ ] $</span>
      </div>
      <div className="flex-auto flex-col">
        <input
          type="text"
          disabled={disableInput}
          spellCheck="false"
          autoCorrect="off" 
          autoCapitalize="none"
          id="terminal-input"
          className="w-full bg-grey text-2xs sm:text-sm word-spacing-lg outline-none"
          onChange={(value) => setCommand(value.target.value)}
          value={command}
          onKeyDown={(e) => handleKeyEvent(e)}
        />
      </div>
    </div>
  );
}
