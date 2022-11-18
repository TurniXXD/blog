import { skills } from "~/data/models";
import { Image } from "remix-image";

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-20 2xl:gap-40 sm:grid-cols-3 xl:grid-cols-4">
      {skills.map((skill, i) => (
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
          />
        </a>
      ))}
    </div>
  );
}
