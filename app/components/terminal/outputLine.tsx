export default function OutputLine({ output }: { output: string }) {
  return (
    <div className="flex sm:my-2 items-center">
      <span className="text-2xs sm:text-sm" dangerouslySetInnerHTML={{ __html: output }}></span>
    </div>
  );
}
