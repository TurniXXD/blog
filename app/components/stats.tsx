import { useEffect } from "react";
import { StatusBar } from './svg'
import { bipolarRandomState } from './../utils'

export default function Stats() {
  useEffect(() => {
    const cpuStatusBar = document.getElementsByClassName("cpu")
    const memStatusBar = document.getElementsByClassName("mem")
    const netStatusBar = document.getElementsByClassName("net")
    const diskStatusBar = document.getElementsByClassName("disk")

    let cpuStatusBarIndex = 0,
      memStatusBarIndex = 0,
      netStatusBarIndex = 0,
      cpuStatusBarOffset = 13,
      diskStatusBarIndex = 0,
      memStatusBarOffset = 15,
      netStatusBarOffset = 10,
      diskStatusBarOffset = 20;

    const setStartingStatusBarPosition = (timer: NodeJS.Timer, statusBar: HTMLCollectionOf<Element>, i: number, statusEnd: number) => {
      statusBar[i].classList.remove("hidden")
      statusBar[i].classList.add("block")
      if (i === statusBar.length - statusEnd) {
        clearInterval(timer)
        i = statusBar.length - statusEnd - 2
        statusEnd = 1
      };
    }

    const cpuIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(cpuIntervalStart, cpuStatusBar, cpuStatusBarIndex, cpuStatusBarOffset)
      cpuStatusBarIndex++
    }, 50);

    const memIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(memIntervalStart, memStatusBar, memStatusBarIndex, memStatusBarOffset)
      memStatusBarIndex++
    }, 50);

    const netIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(netIntervalStart, netStatusBar, netStatusBarIndex, netStatusBarOffset)
      netStatusBarIndex++
    }, 50);

    const diskIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(diskIntervalStart, diskStatusBar, diskStatusBarIndex, diskStatusBarOffset)
      diskStatusBarIndex++
    }, 50);

    const randomStatusBarState = (statusBar: HTMLCollectionOf<Element>, statusIndex: number, statusEnd: number) => {
      let y = bipolarRandomState()
      if (statusEnd === 1) {
        y = true
        statusEnd = 0
      }

      if (!y) {
        statusIndex > 0 && statusIndex--
        for (let i = statusIndex; i < statusBar.length; i++) {
          statusBar[i]?.classList.remove("block")
          statusBar[i]?.classList.add("hidden")
        }
      } else if (y) {
        statusIndex !== statusBar.length && statusIndex++
        for (let i = statusIndex; i > 0; i--) {
          statusBar[i]?.classList.remove("hidden")
          statusBar[i]?.classList.add("block")
        }
      }
    }

    setInterval(() => randomStatusBarState(cpuStatusBar, cpuStatusBarIndex, cpuStatusBarOffset), 1000);
    setInterval(() => randomStatusBarState(memStatusBar, memStatusBarIndex, memStatusBarOffset), 1000);
    setInterval(() => randomStatusBarState(netStatusBar, netStatusBarIndex, netStatusBarOffset), 1000);
    setInterval(() => randomStatusBarState(diskStatusBar, diskStatusBarIndex, diskStatusBarOffset), 1000);
  }, [])

  return (
    <>
      <div className="flex-row justify-between">
        <span className="text-lg">CPU</span>
        <div className="pt-01"><StatusBar id="cpu" /></div>
      </div>
      <div className="flex-row justify-between">
        <span className="text-lg">MEM</span>
        <div className="pt-01"><StatusBar id="mem" /></div>
      </div>
      <div className="flex-row justify-between">
        <span className="text-lg">NET</span>
        <div className="pt-01"><StatusBar id="net" /></div>
      </div>
      <div className="flex-row justify-between">
        <span className="text-lg">DISK</span>
        <div className="pt-01"><StatusBar id="disk" /></div>
      </div>
    </>
  );
}
