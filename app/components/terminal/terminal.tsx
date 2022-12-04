import { useState, useEffect } from "react";
import InputLine from "./inputLine";
import OutputLine from "./outputLine";

export default function Terminal() {
  const defaultOutput =
    "Start by typing commands. To see available commands type 'help'.";
  const [output, setOutput] = useState(defaultOutput);
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [lineKey, setLineKey] = useState(0);

  useEffect(() => {
    setLines((data) => {
      const dataLines = data && [...data];
      if (dataLines.length < 1) {
        dataLines.push(<OutputLine key={lineKey} output={output} />);
        dataLines.push(
          <InputLine
            key={lineKey + 1}
            output={output}
            setOutput={setOutput}
            commandHistory={commandHistory}
            setCommandHistory={setCommandHistory}
          />
        );
        setLineKey((lineKey) => lineKey + 1);
      }
      return dataLines || [];
    });
  }, []);

  useEffect(() => {
    if (output !== defaultOutput) {
      setLines((data) => {
        const dataLines = data && [...data];
        const isNotOutputLine =
          output === "no_output_line" || output === "no_output_line ";
        !isNotOutputLine &&
          dataLines.push(<OutputLine key={lineKey} output={output} />);
        dataLines.push(
          <InputLine
            key={isNotOutputLine ? lineKey : lineKey + 1}
            output={output}
            setOutput={setOutput}
            commandHistory={commandHistory}
            setCommandHistory={setCommandHistory}
          />
        );
        setLineKey((lineKey) => lineKey + 2);
        return dataLines || [];
      });
    }
  }, [output]);

  return <div className="p-4">{lines && lines.map((line) => line)}</div>;
}
