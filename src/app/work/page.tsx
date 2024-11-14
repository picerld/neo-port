import { AspectRatio } from '@/components/ui/aspect-ratio'
import Badge from '@/components/ui/badge'

export default function Page() {
  const PROJECTS = [
    {
      name: 'Sarana Prasarana Project',
      description:
        'The Facilities Management Application for SMK Negeri 11 Bandung simplifies the management of school facilities and infrastructure.',
      liveLink: 'https://picesarpras.siswa.smkn11bdg.sch.id/',
      previewImage: '/sarpras-web.png',
      repoUrl: 'https://github.com/picerld',
      stack: [
        'PHP',
        'Laravel',
        'MySQL',
        'Tailwind',
        'Livewire',
        'MarrUi',
        'AlphineJs',
      ],
    },
    {
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet',
      liveLink: 'https://google.com',
      previewImage: '/project2.png',
      repoUrl: 'https://github.com/picerld',
    },
  ]

  return (
    <>
      {PROJECTS.map((project, id) => {
        return (
          <div
            className="border-b-4 border-r-4 border-b-black border-r-black bg-bg p-8 py-10 text-text dark:bg-darkBg dark:text-darkText w600:px-[30px] w400:px-5"
            key={id}
          >
            <div className="mx-auto w-3/4 w800:w-full">
              <AspectRatio
                className="shadow-base !-bottom-[2px] rounded-base"
                ratio={2 / 1}
              >
                <img
                  className="w-full rounded-base"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="mt-6">
                <h2 className="text-3xl font-bold w700:text-2xl w450:text-xl">
                  {project.name}
                </h2>

                <p className="mt-5 text-lg w450:text-base">
                  {project.description}
                </p>

                {project.stack && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((stack, id) => {
                      return (
                        <div key={id}>
                          <Badge text={stack} />
                        </div>
                      )
                    })}
                  </div>
                )}

                <div className="mt-8 grid grid-cols-2 gap-5 text-base w400:text-sm">
                  <a
                    className="cursor-pointer rounded-base border-2 border-border bg-main px-4 py-2 text-center uppercase text-text shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:shadow-dark dark:hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="cursor-pointer rounded-base border-2 border-border bg-main px-4 py-2 text-center uppercase text-text shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:shadow-dark dark:hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
