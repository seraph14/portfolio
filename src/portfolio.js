const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'SK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Surafel K',
  role: 'Software Engineer',
  description:
    "A software engineer with a strong foundation in cross-platform mobile development and E-Commerce solutions. Armed with a Bachelor's degree in Software Engineering and a proven track record in leading successful projects, I bring technical expertise and innovation to every endeavor, fostering positive impact.",
  resume: 'https://flowcv.com/resume/vosr0lswn1',
  social: {
    linkedin: 'https://www.linkedin.com/in/surafel-kassahun/',
    github: 'https://github.com/seraph14',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Gojo',
    description:
      'A Flutter-powered mobile app connecting landlords and tenants. Streamlining property management with user-friendly design and real-time communication features for instant interaction.',
    stack: ['Django', 'Flutter', 'Dart', 'Bloc'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Safe Send',
    description:
      'Built a Native Android application with Kotlin that blocks spammy SMS messages. Implemented a broadcast receiver and push notification for new SMS messages.',
    stack: ['Native Android', 'Kotlin'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Zembil',
    description:
      'A full-stack E-Commerce website, employing Flask for the RESTful API backend, Vue.js for the frontend, and PostgreSQL for the database.',
    stack: ['Flask', 'Vue.js', 'PostgreSQL'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const experiences = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Software Engineer, A2SV',
    description:
      'Participated in the development of a mobile app called Hakimhub a medical information and an appointment system for Hospitals in Ethiopia.',
    stack: ['Django', 'Flutter', 'Dart', 'Bloc'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Head of Education',
    description:
      'Managing project development for Atrons: a platform developed by the group to share educational resources for free.',
    stack: ['Flutter', 'Dart', 'Vue.js', 'Leadership', 'DSA'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://github.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Flutter',
  'Android',
  'React',
  'HTML',
  'CSS',
  'Python',
  'JavaScript',
  'TypeScript',
  'Dart',
  'Kotlin',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'se.surafel.kassahun@gmail.com',
}

export { header, about, projects, experiences, skills, contact }
