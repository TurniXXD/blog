import { Suspense, lazy, useEffect, useState } from "react";
import type { ReactNode } from "react";

//@ts-ignore
//let Terminal = lazy(() => import('~/utils/xterm.server').then(module => ({ default: module.Terminal })));
//let Xterm = lazy(() => import("~/utils/xterm.server"));

//import Terminal from '~/utils/xterm.server'

export default function Termi() {
  // let [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  //   if (typeof window !== "undefined" && typeof document !== "undefined") {
  //     //@ts-ignore
  //     var term = new Terminal();
  //     term.open(document.getElementById('terminal') as HTMLElement);
  //     term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  //   }
  // }, []);

  // return mounted ? <Suspense><div id="terminal"></div></Suspense> : null;
  return <div>Terminal</div>
}
