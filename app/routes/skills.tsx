import { useState, useEffect } from "react";
import { skills } from "~/data/models";
import { Image } from "remix-image";
import { Loader } from "../components/svg";

export default function Skills() {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const images = document.querySelectorAll("img")
  //   document
  //     .getElementById("terminal-container")
  //     ?.addEventListener("click", () =>
  //       document.getElementById("terminal-input")?.focus()
  //     )
  // }, [])

  return (
    <div className="grid grid-cols-2 gap-20 sm:grid-cols-3 xl:grid-cols-4 2xl:gap-40">
      {isLoading ? (
        <Loader />
      ) : (
        skills.map((skill, i) => (
          <a
            key={i}
            href={skill.skillUrl}
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="skills-card col-span-1 row-span-1 grid"
          >
            <Image
              loaderUrl="/api/image"
              src={skill.imgUrl}
              dprVariants={[1, 3]}
              className="h-full w-full"
              // onLoad={() => {
              //   setIsLoading(false)
              // }}
            />
          </a>
        ))
      )}
    </div>
  );
}
