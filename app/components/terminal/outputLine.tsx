export default function OutputLine({ output }: { output: string }) {
  return (
    <div className="flex items-center sm:my-2">
      <span
        className="text-2xs sm:text-sm"
        dangerouslySetInnerHTML={{ __html: output }}
      ></span>
    </div>
  );
}
