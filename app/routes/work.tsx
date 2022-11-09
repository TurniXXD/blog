import { projects } from "~/data/projects";
import { Image } from "remix-image";

export default function Work() {

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.url}
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="work-card h-48 grid col-span-1 row-span-1 border-2 border-sky-400"
        >
          <div className="relative">
            <Image
              loaderUrl="/api/image"
              src={project.imgUrl}
              dprVariants={[1, 3]}
              className="w-full"
            />
            <div className="work-card-cover h-48 w-full hidden absolute top-0">
              <span className="absolute bottom-8 left-8 text-lg font-semibold">{project.name}</span>
            </div>
            {project.isRocket && (
              <a
                className="flex absolute bottom-0 right-0 h-16 w-16 items-center justify-center bg-[#1e1a49]"
                href="https://www.prorocketeers.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <Image
                  loaderUrl="/api/image"
                  src="img/rocket-logo.png"
                  dprVariants={[1, 3]}
                  className="h-10 w-10"
                />
              </a>
            )}
          </div>
          {i === 0 && <div className="absolute t-01 l-01 bg-gray-900 border-r-2 border-r-sky-400 h-8 w-8 rotate-45" />}
        </a>
      ))}
    </div>
  );
}