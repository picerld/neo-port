import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiInstagram,
} from '@icons-pack/react-simple-icons'

export default function Page() {
  const links: {
    icon: IconType
    href: string
    title: string
    description?: string
  }[] = [
    {
      title: 'My Email',
      description: 'Click to send me an email',
      icon: SiGmail,
      href: 'mailto:raficahyadi1221@gmail.com',
    },
    {
      title: 'My Github',
      icon: SiGithub,
      href: 'https://github.com/picerld',
    },
    {
      title: 'My Linkedin',
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/rafi-cahyadi',
    },
    {
      title: 'My Instagram',
      icon: SiInstagram,
      href: 'https://www.instagram.com/picerld/',
    },
  ]

  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid grid-cols-2 gap-5 p-5">
        {links.map((link) => (
          <Card key={link.title} className="w-80">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{link.title}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <link.icon className="h-6 w-6" />
                <span>{link.href}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
