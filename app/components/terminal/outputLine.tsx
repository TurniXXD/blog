export default function OutputLine({ output }: { output: string }) {
  return (
    <div className="container my-2">
      <span className="text-sm" dangerouslySetInnerHTML={{ __html: output }}></span>
    </div>
  );
}
