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
    "",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "News",
  gitHubUsername: "weishunzhong", //i.e."johnDoe12Gh"
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
    // { 
    //   img: require("../assets/img/quantum.png"), 
    //   label: "", 
    //   paragraph: "" 
    // },
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
    "If you want to chat about science, or do some rock-climbing together, please feel free to email me at",
  email: "wszhong AT ias DOT edu",
};

const experiences = {
  show: true,
  heading: "Employment & Education",
  data: [
    {
      role: 'Member, School of Natural Sciences <br /> Institute for Advanced Study',
      companylogo: require('../assets/img/IAS_small.png'),
      date: 'Sep. 2023 – ',
    }, 
  {
    role: 'Ph.D. Fellow, Center for Brain Sciences <br /> Harvard University',
    companylogo: require('../assets/img/Harvard_small.png'),
    date: 'Sep. 2019 – Jun. 2023',
  }, 
    {
      role: 'Research Intern, IBM Quantum <br /> IBM',
      companylogo: require('../assets/img/IBM_small.png'),
      date: 'May 2022 – Aug 2022',
    },
  {
    role: 'Ph.D. Department of Physics (<a href="https://arxiv.org/abs/2308.01538" target="_blank">thesis</a>) <br />  Massachusetts Institute of Technology',
    companylogo: require('../assets/img/MIT_small.png'),
    date: 'Sep. 2017 – Jun. 2023',
    // thesis: 'Thesis: Non-equilibrium physics: from spin glasses to machine and neural learning'
  },
 {
    role: 'M.S. Physical Sciences Division - Physics <br /> University of Chicago',
    companylogo: require('../assets/img/chicago_small.png'),
    date: 'Sep. 2016 – Jun.2017',
    // thesis: 'Thesis: Associative pattern recognition through macro-molecular self-assembly'
  },
  {
    role: 'B.S. Physics and Mathematics <br /> University of Michigan',
    companylogo: require('../assets/img/michigan_small.png'),
    date: 'Sep. 2013 – May. 2016',
    // thesis: 'Thesis: A Holographic c-Theorem for Schrödinger Spacetimes'
  },
  ]
}

const portfolio = {
  show: true,
  heading: "Recent Projects",
  note: "",
   list: [
    {
    category: "Mobile App",
    title: "Quantum neural networks for quantum error correction",
    url: "https://arxiv.org/abs/2401.06300",
    notes: "Quantum neural networks (QNNs) are inspired by their classical counterparts, but beyond heuristic considerations, the usefulness of such a concept \
            has yet to be rigorously demonstrated. We show that in the case of decoding quantum information from quantum error-correcting codes, \
            QNNs can provide an almost quadratic improvement in readout error over traditional stabilizer-based quantum error correction, \
            thus establishing a clear scenario where quantum AI methods such as QNNs are proven to provide an advantage over conventional non-AI methods.",
    thumbnail:require("../editable-stuff/QNN.png"), 
   },
   {
    category: "Mobile App",
    title: "Weight-distribution constrained feedforward neural networks",
    url: "https://arxiv.org/abs/2206.08933",
    present:require("../editable-stuff/Disco_2022_neurips.png"),
    notes: "We constructed a statistical mechanical theory that quantified the effect of imposing arbitrary network weight-distribution constraints. \
            Our theory predicted that the network capacity was proportional to the geodesic distance between the imposed and the original distribution on the Wasserstein statistical manifold, \
            and further predicted optimal prior distributions for achieving the best generalization performance. Our theory and the accompanying algorithm provided a geometric approach to study learning under constraints. ",
    thumbnail:require("../editable-stuff/disco.png"), 
   },
   
   {
    category: "Machine Learning",
    title: "Generative modeling by disordered quantum systems",
    url:"https://arxiv.org/abs/2207.02346",
    present:require("../editable-stuff/MBL_Born_poster.png"),
    notes: "We proposed a class of quantum generative models that we have named “MBL hidden Born machines”. We proved that the trainability of basic Born machines could be tremendously improved by including hidden units, \
            and that the MBL Born machine possessed more expressive power than classical models. Our work revealed relationships between learning and physical dynamics that could serve as guiding principles for designing quantum generative models. ",
    thumbnail:require("../editable-stuff/MBL.png"), 
    // repo: "https://github.com/xunxdd/ILML---Google-Deep-Dream",
   },
   {
    category: "Machine Learning", 
    title: "Discriminative learning by out-of-equilibrium many-body systems",
    url:"https://arxiv.org/abs/2001.03623",
    notes: "We demonstrated that driven spin-glasses could perform a wide range of discriminative learning tasks that were usually only seen in digital systems, such as classification, memory, and novelty detection. \
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
