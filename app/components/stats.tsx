import { useEffect } from "react";
import { bipolarRandomState } from "./../utils";
import { StatusBar, StatusBarCol } from "./svg";
import type ICommon from "@locales/common/types";
import { useMedia } from "react-use";

export default function Stats({ t }: { t: ICommon }) {
  const isPC = useMedia("(min-width: 1050px)");
  const isTablet = useMedia("(min-width: 640px)");

  useEffect(() => {
    const setStartingStatusBarPosition = (
      timer: NodeJS.Timer,
      statusBar: HTMLCollectionOf<Element>,
      i: number,
      statusEnd: number
    ) => {
      statusBar[i]?.classList.remove("hidden");
      statusBar[i]?.classList.add("block");
      if (i === statusBar.length - statusEnd) {
        clearInterval(timer);
        i = statusBar.length - statusEnd - 2;
        statusEnd = 1;
      }
    };

    const randomStatusBarState = (
      statusBar: HTMLCollectionOf<Element>,
      statusIndex: number,
      statusEnd: number
    ) => {
      let y = bipolarRandomState();
      if (statusEnd === 1) {
        y = true;
        statusEnd = 0;
      }

      if (!y) {
        statusIndex > 0 && statusIndex--;
        for (let i = statusIndex; i < statusBar.length; i++) {
          statusBar[i]?.classList.remove("block");
          statusBar[i]?.classList.add("hidden");
        }
      } else if (y) {
        statusIndex !== statusBar.length && statusIndex++;
        for (let i = statusIndex; i > 0; i--) {
          statusBar[i]?.classList.remove("hidden");
          statusBar[i]?.classList.add("block");
        }
      }
    };

    const statusProgress = (className: string, delay: number) => {
      const statusBar = document.getElementsByClassName(className);
      let statusBarIndex = 0;

      const intervalStart = setInterval(() => {
        setStartingStatusBarPosition(
          intervalStart,
          statusBar,
          statusBarIndex,
          delay
        );
        statusBarIndex++;
      }, 50);

      setInterval(
        () => randomStatusBarState(statusBar, statusBarIndex, delay),
        1000
      );
    };

    if (isPC) {
      statusProgress("cpu", 13);
      statusProgress("mem", 15);
      statusProgress("net", 10);
      statusProgress("disk", 20);
      return;
    }

    if (isTablet) {
      statusProgress("mobile-stat-1", 10);
      statusProgress("mobile-stat-2", 7);
      statusProgress("mobile-stat-3", 5);
    }
  }, [isPC, isTablet]);

  return (
    <>
      {isPC ? (
        <>
          <div className="flex-row justify-center gap-5 min-[1370px]:justify-between">
            <span className="hidden text-lg min-[1370px]:block">
              {t.stats.cpu}
            </span>
            <div className="pt-01">
              <StatusBar id="cpu" />
            </div>
          </div>
          <div className="flex-row justify-center gap-5 min-[1370px]:justify-between">
            <span className="hidden text-lg min-[1370px]:block">
              {t.stats.mem}
            </span>
            <div className="pt-01">
              <StatusBar id="mem" />
            </div>
          </div>
          <div className="flex-row justify-center gap-5 min-[1370px]:justify-between">
            <span className="hidden text-lg min-[1370px]:block">
              {t.stats.net}
            </span>
            <div className="pt-01">
              <StatusBar id="net" />
            </div>
          </div>
          <div className="flex-row justify-center gap-5 min-[1370px]:justify-between">
            <span className="hidden text-lg min-[1370px]:block">
              {t.stats.disk}
            </span>
            <div className="pt-01">
              <StatusBar id="disk" />
            </div>
          </div>
        </>
      ) : (
        <div className="status-bar-cols flex-row justify-center gap-10">
          <StatusBarCol id="mobile-stat-1" />
          <StatusBarCol id="mobile-stat-2" />
          <StatusBarCol id="mobile-stat-3" />
        </div>
      )}
    </>
  );
}
