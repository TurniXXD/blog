export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row"> 
      {children}
    </div>
  );
}
