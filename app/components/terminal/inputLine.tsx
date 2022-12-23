import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type ICommon from "@locales/common/types";
import { fieldWithValue } from "@locales/fields";

export default function InputLine({
  t,
  output,
  setOutput,
  commandHistory,
  setCommandHistory,
}: {
  t: ICommon;
  commandHistory: string[];
  setCommandHistory: React.Dispatch<React.SetStateAction<string[]>>;
  output: string;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const [historyLookback, setHistoryLookback] = useState(0);
  const [disableInput, setDisableInput] = useState(false);
  const [command, setCommand] = useState("");

  useEffect(() => document.getElementById("terminal-input")?.focus(), []);
  useEffect(() => {
    const terminalInput = document.getElementById("terminal-input");
    disableInput && terminalInput?.removeAttribute("id");
  }, [disableInput]);

  const handleOutput = (newOutput: string) => {
    if (output === newOutput) {
      setOutput(commandHistory[historyLookback]);
      setOutput(newOutput + " ");
    } else setOutput(newOutput);
  };

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
        const commandProcessed = command.split(" ");
        setCommandHistory((data) => {
          const dataCommandHistory = data && [...data];
          dataCommandHistory.push(command);
          return dataCommandHistory || [];
        });

        if (commandProcessed[0] === "cd") {
          if (!commandProcessed[1]) handleOutput(t.terminal.messages.noDir);
          else if (/.txt/g.test(commandProcessed[1])) {
            if (commandProcessed[1] === t.terminal.commands.ls.meTxt)
              handleOutput(
                fieldWithValue(t.terminal.messages.isFile, {
                  file: commandProcessed[1],
                })
              );
            else
              handleOutput(
                fieldWithValue(t.terminal.messages.cannotFind, {
                  dir: commandProcessed[1],
                })
              );
          } else if (
            commandProcessed[1] === t.terminal.commands.ls.about ||
            commandProcessed[1] === t.terminal.commands.ls.work ||
            commandProcessed[1] === t.terminal.commands.ls.skills ||
            commandProcessed[1] === t.terminal.commands.ls.contact
          ) {
            navigate(
              commandProcessed[1] === t.terminal.commands.ls.about
                ? "/"
                : commandProcessed[1]
            );
            handleOutput("no_output_line");
          } else
            handleOutput(
              fieldWithValue(t.terminal.messages.cannotFind, {
                dir: commandProcessed[1],
              })
            );
        } else if (commandProcessed[0] === "ls") {
          if (commandProcessed[1]) {
            handleOutput(t.terminal.messages.lsNoParam);
          } else {
            const dirs = `
              <a href="/"><strong>${t.terminal.commands.ls.about}</strong></a> <br/>
              <a href="/work"><strong>${t.terminal.commands.ls.work}</strong></a> <br/>
              <a href="/skills"><strong>${t.terminal.commands.ls.skills}</strong></a> <br/>
              <a href="/contact"><strong>${t.terminal.commands.ls.contact}</strong></a> <br/>
              ${t.terminal.commands.ls.meTxt}
            `;
            handleOutput(dirs);
          }
        } else if (commandProcessed[0] === "cat") {
          if (commandProcessed[1] === t.terminal.commands.ls.meTxt)
            handleOutput(t.terminal.commands.cat.meTxt);
          else if (!commandProcessed[1])
            handleOutput(t.terminal.messages.noFile);
          else if (
            commandProcessed[1] === t.terminal.commands.ls.about ||
            commandProcessed[1] === t.terminal.commands.ls.work ||
            commandProcessed[1] === t.terminal.commands.ls.skills ||
            commandProcessed[1] === t.terminal.commands.ls.contact
          )
            handleOutput(
              fieldWithValue(t.terminal.messages.isDir, {
                dir: commandProcessed[1],
              })
            );
          else
            handleOutput(
              fieldWithValue(t.terminal.messages.cannotFind, {
                dir: commandProcessed[1],
              })
            );
        } else if (commandProcessed[0] === "help")
          handleOutput(t.terminal.commands.help);
        else {
          handleOutput(t.terminal.commands.help);
        }
        setDisableInput(true);
      }
    }
  };

  return (
    <div className="flex-row gap-2">
      <div className="flex-col">
        <span className="text-2xs sm:text-sm">[ {t.terminal.user} ~ ] $</span>
      </div>
      <div className="flex-auto flex-col">
        <input
          type="text"
          disabled={disableInput}
          spellCheck="false"
          autoCorrect="off"
          autoCapitalize="none"
          id="terminal-input"
          className="text-2xs word-spacing-lg bg-main w-full outline-none sm:text-sm"
          onChange={(value) => setCommand(value.target.value)}
          value={command}
          onKeyDown={(e) => handleKeyEvent(e)}
        />
      </div>
    </div>
  );
}
