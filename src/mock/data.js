import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryan Chesla', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ryan Chesla',
  subtitle: 'Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'prof2.jpg',
  paragraphOne:
    "Hello, my name is Ryan Chesla and I am a 4th year student at Oregon State University. In June of 2021, I will be graduating with a Bachelor's Degree in Computer Science with a Minor in Business & Entrepreneurship. After graduation, I hope to work for a startup tech company where I can utilize my software skills and my business skills.",
  paragraphTwo:
    'While I have experience in many different realms of software, I plan to specialize in mobile and front end development.',
  paragraphThree: ' ',
  resume: 'images/ResumeNovember20.jpg', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'VideoPrev.jpg',
    title: 'Video Preview Transfer Tool',
    info:
      'Read and displayed a preview of videos from an SD card and allowed a faster transfer of client files into their respective client backup folders. Saved the employees of the facility around 15 minutes each week',
    info2: '',
    url: 'https://github.com/cobidev/react-simplefolio',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fmcweb.png',
    title: 'Faculty Media Center Website',
    info:
      'The current website for the Faculty Media Center of Oregon State University. Built using Drupal Content Management System. Building this has allowed many clients find out our facility and learn about the services that we provide.',
    info2: '',
    url: 'https://is.oregonstate.edu/fmc',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'heatmap.jpg',
    title: 'Disc Golf Heat Map',
    info:
      'A disc golf shot heat map that can be used to determine where a disc golfer should be aiming on a given hole. The application takes an aerial photo of the hole and data points that hold the location of where the first throw went and what the disc golfer eventually scored on the hole. The result is a heat map that can reveal important insights in regards to how a disc golfer should play the hole.',
    info2: '',
    url: 'https://github.com/cheslar/Disc-Golf-Heat-Map',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'cheslar@oregonstate.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: '',
      url: '',
    },
    {
      id: nanoid(),
      name: '',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryan-chesla-b58290192/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/cheslar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
