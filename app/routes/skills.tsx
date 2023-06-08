import { EnumSkills, skills } from "~/data/models";
// import { Image } from "remix-image";
import Golang from "~/components/skills/golang";
import Nextjs from "~/components/skills/nextjs";
import Typescript from "~/components/skills/typescript";
import Linux from "~/components/skills/linux";
import Postgresql from "~/components/skills/postgresql";
import Figma from "~/components/skills/figma";

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-20 md:grid-cols-3 xl:grid-cols-4 2xl:gap-40">
      {skills.map((skill, i) => (
        <a
          key={i}
          href={skill.skillUrl}
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="skills-card col-span-1 row-span-1 grid"
        >
          {skill.skillSvg === EnumSkills.Golang && <Golang/>}
          {skill.skillSvg === EnumSkills.Figma && <Figma/>}
          {skill.skillSvg === EnumSkills.Typescript && <Typescript/>}
          {skill.skillSvg === EnumSkills.NextJs && <Nextjs/>}
          {skill.skillSvg === EnumSkills.Linux && <Linux/>}
          {skill.skillSvg === EnumSkills.PostgreSql && <Postgresql/>}
          {/* <Image
            loaderUrl="/api/image"
            src={skill.imgUrl}
            dprVariants={[1, 3]}
            className="h-full w-full"
          /> */}
        </a>
      ))}
    </div>
  );
}
