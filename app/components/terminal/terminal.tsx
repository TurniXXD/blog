import { useState, useEffect } from 'react'
import InputLine from "./inputLine"
import OutputLine from "./outputLine"

export default function Terminal({
  focusOnInput,
}: {
  focusOnInput: boolean,
}) {
  const [output, setOutput] = useState('')
  const [lines, setLines] = useState<JSX.Element[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])

  useEffect(() => {
    setLines((data) => {
      const dataLines = data && [...data];
      dataLines.length < 1 && dataLines.push(
        <InputLine
          focusOnInput={focusOnInput}
          setOutput={setOutput}
          commandHistory={commandHistory}
          setCommandHistory={setCommandHistory}
        />)
      return dataLines || [];
    })
    console.log(lines)
  }, [])

  useEffect(() => {
    console.log("zdar chuju")
    if (output !== '') {
      setLines((data) => {
        const dataLines = data && [...data];
        dataLines.push(<OutputLine output={output} />)
        dataLines.push(
          <InputLine
            focusOnInput={focusOnInput}
            setOutput={setOutput}
            commandHistory={commandHistory}
            setCommandHistory={setCommandHistory}
          />)
        return dataLines || [];
      })
    }
    console.log(lines)
  }, [output])

  return (
    <div className="p-4">
      {lines && lines.map((line) => line)}
    </div>
  )
}
