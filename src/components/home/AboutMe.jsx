import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    setProfilePicUrl(link);
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-left">{"Hi! I am currently finishing up my Ph.D. in physics at MIT, and will join the Institute for Advanced Study (Princeton) as a "}
          <a href="https://www.ias.edu/scholars/weishun-zhong">postdoctoral member</a> {"in September 2023. I am fortunate to be supervised by "} 
          <a href="https://en.wikipedia.org/wiki/Haim_Sompolinsky">Haim Sompolinsky</a> {"(Harvard) and "} 
          <a href="https://en.wikipedia.org/wiki/Mehran_Kardar">Mehran Kardar</a> 
          {" (MIT). My research area is in statistical mechanics of disordered systems, with applications toward machine learning, neuroscience, and many-body physics. I aim to understand both natural and artificial intelligence through the lens of statistical physics."} <p></p>
          {"During my time at MIT and Harvard, I also enjoyed collaborations with and guidances from many great people, including "} <a href="https://en.wikipedia.org/wiki/Susanne_Yelin">Susanne Yelin</a>{", "}<a href="https://ramismovassagh.wordpress.com/">Ramis Movassagh</a>{", "} 
          <a href="https://quics.umd.edu/people/nicole-yunger-halpern">Nicole Yunger Halpern</a>
          {", "} <a href="https://en.wikipedia.org/wiki/Jeremy_England">Jeremy England</a>{", and "} <a href="https://pehlevan.seas.harvard.edu/people/cengiz-pehlevan">Cengiz Pehlevan</a>{"."}  <p></p>
          {"Prior to MIT, I spent a year at University of Chicago as a masters student, where I embarked on my stat-mech voyage with "}<a href="http://muruganlab.uchicago.edu/">Arvind Murugan</a>{" and David Schwab."} <p></p>
          {"Before my journey in statistical physics, I started as an undergraduate student at University of Michigan-Ann Arbor studying high energy theory with "}<a href="https://scholar.google.com/citations?user=h31FiQgAAAAJ&hl=en">James Liu</a>{"."}
          </p>
          
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
