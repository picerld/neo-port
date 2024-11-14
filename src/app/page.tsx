import Avatar from '@/components/ui/avatar'
import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiInstagram,
} from '@icons-pack/react-simple-icons'

export default function Home() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:raficahyadi1221@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/picerld',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/rafi-cahyadi',
    },
    {
      icon: SiInstagram,
      href: 'https://www.instagram.com/picerld/',
    },
  ]

  return (
    <div className="p-10 text-xl leading-[1.7] w600:p-[30px] w600:text-lg w400:p-5 w400:text-base">
      <div className="flex items-center gap-3">
        <Avatar imageUrl="https://neobrutalism-bento.netlify.app/pfp.png" />
        <div className="flex flex-col gap-2">
          <h4 className="text-4xl font-bold">Hello!!!</h4>
          <p className="text-2xl">
            I&#39;am <span className="font-bold">Rafi Cahyadi</span>, as a{' '}
            <span className="font-bold">Fullstack Developer</span>
          </p>
        </div>
      </div>

      <p className="mt-2">
        Dedicated to building impactful, user-friendly applications with a focus
        on performance and innovation! Lorem ipsum dolor sit amet.
      </p>

      <br />

      <p>Nice to meet you!!!</p>

      <p>
        Special thanks to{' '}
        <a
          className="font-semibold underline"
          href="https://www.neobrutalism.dev/"
          target="_blank"
        >
          neobrutalism
        </a>
      </p>

      <div className="mr-auto mt-10 flex w-full flex-wrap items-center gap-10">
        {links.map((link, id) => {
          return (
            <a target="_blank" key={id} href={link.href}>
              <link.icon title="" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
