interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'GeauxWeisbeck4.dev',
    description: `You are actually currently already viewing this project if you can believe that! This is the third version of my portfolio website.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.geauxweisbeck4.dev',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
