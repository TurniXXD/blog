import { skills } from "~/data/models";
import { Image } from "remix-image";

export default function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-20">
      {skills.map((skill, i) => (
        <a
          key={i}
          href={skill.skillUrl}
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="skills-card grid col-span-1 row-span-1"
        >
          <Image
            loaderUrl="/api/image"
            src={skill.imgUrl}
            dprVariants={[1, 3]}
            className="w-full h-full"
          />
        </a>
      ))}
    </div>
  );
}