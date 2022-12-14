import { projects } from "~/data/models";
import { Image } from "remix-image";

export default function Work() {
  return (
    <div className="flex-row flex-wrap gap-4 lg:flex-nowrap">
      {projects.map((project, i) => (
        <div
          key={i}
          className="work-card border-sky-400 w-work-card max-h-full flex-col overflow-hidden border-2"
        >
          <div className="relative">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="overflow-hidden"
            >
              <div className="relative">
                <Image
                  loaderUrl="/api/image"
                  src={project.imgUrl}
                  dprVariants={[1, 3]}
                  className="w-full"
                />
                <div className="work-card-cover absolute top-0 hidden h-48 w-full 2xl:h-56">
                  <span className="absolute bottom-8 left-8 text-lg font-semibold">
                    {project.name}
                  </span>
                </div>
              </div>
            </a>
            {project.isRocket && (
              <a
                className="absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center bg-[#1e1a49]"
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
          {i === 0 && (
            <div className="border-r-sky-400 bg-main t-01 l-01 absolute hidden h-8 w-8 rotate-45 border-r-2 sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}
