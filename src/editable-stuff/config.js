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
  message: " A statistical physicist wondering about intelligence.. ",
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
      paragraph: "" 
    },
    { 
      img: require("../assets/img/quantum.png"), 
      label: "", 
      paragraph: "" 
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
    { name: "Mathematica", value: 90 },
    { name: "High Performance Computing", value: 80 },
    { name: "Tensorflow", value: 80 },
    { name: "Pytorch", value: 70 },
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
  heading: "Recent Projects",
  note: "",
   list: [{
    category: "Mobile App",
    title: "Quantum neural network for quantum error correction",
    // url: "https://play.google.com/store/apps/details?id=com.powerrecruiter.com",
    notes: "We developed a theoretical framework for decoding imperfect stabilizer codes. \
            We proved that the standard decoding procedure’s error-scaling is independent of the underlying code distance—suggesting that stabilizer codes, \
            although robust to errors in physical qubits, are vulnerable to errors in the code-preparation process. \
            We further proved that QNNs can achieve decoding errors that are exponentially small in code distance, outperforming the distance-independent scaling law in the standard decoding procedure. \
            Our work suggests a practical advantage of using quantum machine learning for decoding realistic codes in near-term devices. ",
    thumbnail:require("../editable-stuff/QNN.png"), 
   },
   {
    category: "Mobile App",
    title: "Weight-distribution constrained feedforward neural networks",
    url: "https://arxiv.org/abs/2206.08933",
    notes: "We constructed a statistical mechanical theory that quantified the effect of imposing arbitrary network weight-distribution constraints. \
            Our theory predicted that the network capacity was proportional to the geodesic distance between the imposed and the original distribution on the Wasserstein statistical manifold, \
            and further predicted optimal prior distributions for achieving the best generalization performance. Our theory and the accompanying algorithm provided a geometric approach to study learning under constraints. ",
    thumbnail:require("../editable-stuff/disco.png"), 
   },
   
   {
    category: "Machine Learning",
    title: "Many-body localized hidden Born machine",
    url:"https://arxiv.org/abs/2207.02346",
    notes: "We proposed a class of quantum generative models that we have named “MBL hidden Born machines”. We proved that the trainability of basic Born machines could be tremendously improved by including hidden units, \
            and that the MBL Born machine possessed more expressive power than classical models. Our work revealed relationships between learning and physical dynamics that could serve as guiding principles for designing quantum generative models. ",
    thumbnail:require("../editable-stuff/MBL.png"), 
    // repo: "https://github.com/xunxdd/ILML---Google-Deep-Dream",
   },
   {
    category: "Machine Learning",
    title: "Learning by out-of-equilibrium many-body systems",
    url:"https://arxiv.org/abs/2001.03623",
    notes: "We demonstrated that driven spin-glasses could perform a wide range of learning tasks that were usually only seen in digital systems, such as classification, memory, and novelty detection. \
            We further demonstrated that traditional thermodynamic variables were no longer effective in characterizing these novel many-body learning phenomena, \
            and that machine learning could make better predictions by using macroscopic variables constructed from nonlinear combination of traditional ones.",
    thumbnail:require("../editable-stuff/spin_glass.png"), 
    repo: "https://github.com/smarzen/Statistical-Physics", 
    // videoUrl:""
   }
  ]

};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, portfolio };
