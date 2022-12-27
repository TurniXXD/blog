import { useEffect } from "react";
import { bipolarRandomState } from "./../utils";

export const StackedElements = ({
  count,
  className,
}: {
  count: number;
  className?: string;
}) => {
  const elements: JSX.Element[] = [];
  for (let i = 0; i <= count; i++) {
    elements.push(<div key={i} className={className} />);
  }

  return <>{elements}</>;
};

export const Matrix = () => {
  const cols: JSX.Element[] = [];
  const colsCount = 30;
  const rowsCount = 20;
  useEffect(() => {
    const matrixCols: number[] = [];

    let colIndex = 0;
    let level = 10;

    setInterval(() => {
      if (matrixCols.length === colsCount) {
        for (let i = 0; i < matrixCols.length; i++) {
          const matrixColRowsShift = document.querySelectorAll(
            `div#matrix-col-${i} > div.matrix-row`
          );
          matrixColRowsShift[matrixCols[i]]?.classList.remove("bg-blue");
          matrixColRowsShift[matrixCols[i]]?.classList.add("bg-main");
        }

        matrixCols.shift();
        matrixCols.push(level);

        for (let i = 0; i < matrixCols.length; i++) {
          const matrixColRowsShift = document.querySelectorAll(
            `div#matrix-col-${i} > div.matrix-row`
          );
          matrixColRowsShift[matrixCols[i]]?.classList.remove("bg-main");
          matrixColRowsShift[matrixCols[i]]?.classList.add("bg-blue");
        }
      } else {
        const matrixColRows = document.querySelectorAll(
          `div#matrix-col-${colIndex} > div.matrix-row`
        );
        matrixCols.push(level);
        matrixColRows[matrixCols[colIndex]]?.classList.remove("bg-main");
        matrixColRows[matrixCols[colIndex]]?.classList.add("bg-blue");
      }

      bipolarRandomState()
        ? level !== rowsCount && (level += 1)
        : level !== 0 && (level -= 1);
      colIndex < colsCount ? colIndex++ : (colIndex = 0);
    }, 125);
  }, []);

  for (let i = 1; i <= colsCount; i++) {
    cols.push(
      <div
        id={`matrix-col-${i}`}
        className="matrix-col col-span-1 grid justify-items-center gap-1"
        key={i}
      >
        <StackedElements
          count={15}
          className="matrix-row bg-main row-span-1 grid h-1 w-1 justify-items-center"
        />
      </div>
    );
  }
  return (
    <div className="nav-matrix grid-cols-30 grid-rows-15 grid h-full w-full">
      {cols}
    </div>
  );
};
