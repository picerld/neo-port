import Avatar from '@/components/ui/avatar'
import Badge from '@/components/ui/badge'

export default function Page() {
  const SKILLS = [
    {
      text: 'HTML',
    },
    {
      text: 'CSS',
    },
    {
      text: 'Javascript',
    },
    {
      text: 'React.js',
    },
    {
      text: 'Next.js',
    },
    {
      text: 'Tailwind',
    },
    {
      text: 'Node.js',
    },
    {
      text: 'PHP',
    },
    {
      text: 'Laravel',
    },
  ]

  return (
    <div className="mx-auto flex w-full">
      <div className="mt-7 flex flex-col items-center">
        <Avatar imageUrl="https://neobrutalism-bento.netlify.app/pfp.png" />
        <h1 className="mt-2 text-4xl font-bold">
          <span className="rounded-sm bg-black px-2 py-1 text-white">Rafi</span>{' '}
          Cahyadi
        </h1>
        <p className="mt-2 text-lg">Fullstack Developer 🚀</p>
        <div className="my-3 flex flex-wrap justify-center gap-2">
          {SKILLS.map((skill, i) => (
            <Badge text={skill.text} key={i} />
          ))}
        </div>
        <p className="mx-10 mt-2 text-center text-lg">
          Passionate about crafting seamless, scalable applications that blend
          innovation with user-centered design, bringing ideas to life through
          efficient and impactful solutions.
        </p>
      </div>
    </div>
  )
}
