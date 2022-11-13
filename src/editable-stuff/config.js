// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Weishun",
  middleName: "",
  lastName: "Zhong",
  message: " A statistical physicist wandering in the wild.. ",
    icons: [
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/weishunzhong.JPG"),
  imageSize: 375,
  message:
    "My name is Weishun Zhong. I am a Ph.D. student in physics at MIT, supervised by Haim Sompolinsky and Mehran Kardar.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Publications",
  message:
    "",
  images: [
    { 
      img: require("../assets/img/quenched.png"), 
      label: "", 
      paragraph: "My research aims to understand learning as a physical phenomona." 
    },
    { 
      img: require("../assets/img/quantum.png"), 
      label: "", 
      paragraph: "My research aims to understand learning as a physical phenomona." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "High Performance Computing", value: 80 },
    { name: "Mathematica", value: 60 },
    { name: "Qiskit", value: 70 },
  ],
  softSkills: [
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for postdoctoral positions! If you know of any positions available, or if you just want to say hi, please feel free to email me at",
  email: "wszhong AT mit DOT edu",
};

const experiences = {
  show: true,
  heading: "Education & Experiences",
  data: [
  {
    role: 'Ph.D. Department of Physics, Massachusetts Institute of Technology',
    companylogo: require('../assets/img/MIT_small.png'),
    date: 'Sep. 2017 – May. 2023',
  },
 {
    role: 'M.S. Physical Sciences Division - Physics, University of Chicago',
    companylogo: require('../assets/img/chicago_small.png'),
    date: 'Sep. 2016 – Jun.2017',
  },
  {
    role: 'B.S. Physics and Mathematics, University of Michigan',
    companylogo: require('../assets/img/michigan_small.png'),
    date: 'Sep. 2013 – May. 2016',
  },
  {
    role: 'Ph.D. Fellow in Center for Brain Sciences, Harvard University',
    companylogo: require('../assets/img/Harvard_small.png'),
    date: 'Sep. 2019 – May. 2023',
  }, 
    {
      role: 'Research Intern, IBM Quantum',
      companylogo: require('../assets/img/IBM_small.png'),
      date: 'May 2022 – Aug 2022',
    },
  ]
}

const portfolio = {
  show: true,
  heading: "Some of My Personal Work",
  note: "All of the following has been done in my personal capacity. Work for my current or previous employers is not listed for proprietary reasons",
   list: [{
    category: "Mobile App",
    title: "Power Recruiter",
    url: "https://play.google.com/store/apps/details?id=com.powerrecruiter.com",
    notes: "Built on request of a friend. Real time recruiting data",
    thumbnail:require("../editable-stuff/weishunzhong.JPG"), 
   },
   {
    category: "Machine Learning",
    title: "Google Deep Dream",
    videoUrl:"https://youtu.be/SygFid1D1ro",
    notes: "Had a little fun with Googlenet model and Places365-CNN model",
    thumbnail:require("../editable-stuff/weishunzhong.JPG"), 
    repo: "https://github.com/xunxdd/ILML---Google-Deep-Dream",
   }
  ]

};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, portfolio };
