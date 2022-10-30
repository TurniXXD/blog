export default function OutputLine({ output }: { output: string }) {

  return (
    <div className="container my-2">
      <span className="text-sm sm:text-base">{output}</span>
    </div>
  )
}
