import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";  // Assuming migration is in the same directory, adjust if necessary
import Row from "react-bootstrap/Row";
import NewsCard from "./NewsCard";  // Adjust the path if you store NewsCard in a different directory

const dummyNews = {
  title: null,
  description: null,
  link: null,
  date: null,
};

const newsArray = [
  {
    title: "(Latest) New preprint",
    description: (
      <>
        Our new preprint&nbsp;
        <em>“Semantic Chunking and the Entropy of Natural Language”</em>&nbsp;ties the information rate of natural language to how meaning is organized in a text! Also check out the very cool podcast that discusses our paper. &nbsp;
      </>
    ),
    link: "https://arxiv.org/abs/2602.13194",
    tweet: "https://x.com/guifav/status/2023366990220361852",
    videoUrl: "https://www.youtube.com/watch?v=yVgmHT-1fa4",
    date: "2026-02-25"
  },
  {
    title: "Highlights of the Year 2025 by APS Physics!",
    description: (
      <>
        Our <em>PRL</em> paper&nbsp;
        <em>“Random Tree Model of Meaningful Memory”</em>&nbsp;is chosen as one of the ten
        highlights of the year by APS  <em>Physics Magazine</em>! Check out the press below. &nbsp;
      </>
    ),
    link: "https://physics.aps.org/articles/v18/191",
    tweet: "https://x.com/PhysicsMagazine/status/2001286126762393655",
    date: "2025-12-24"
  },
  {
    title: "Paper chosen as Editor's Suggestion at PRL",
    description: (
      <>
        Our new paper&nbsp;
        <em>“Random Tree Model of Meaningful Memory”</em>&nbsp;is published in <em>Physical&nbsp;Review&nbsp;Letters</em> and chosen as
        an Editor’s Suggestion! Moreover, it is featured in the <em>Physics</em> magazine article&nbsp;
        <em>
          <a
            href="https://physics.aps.org/articles/v18/117"
            target="_blank"
            rel="noopener noreferrer"
          >
            “How we remember stories”
          </a>
        </em>{" "}
        .
      </>
    ),
    link: "https://journals.aps.org/prl/abstract/10.1103/g1cz-wk1l",
    tweet: "https://x.com/WeishunZhong/status/1935470330660983045",
    date: "2025-06-18"
  },
  {
    title: "IAS press release highlights our recent work on memory",
    description: "The IAS Communications team, along with guest writer Devorah Fischler, published a press release showcasing our recent work on memory. The article is also featured across IAS social media channels. Check it out!",
    link: "https://www.ias.edu/ideas/ias-scholars-discover-universal-law-memory",
    tweet: "https://x.com/the_IAS/status/1934984755658752207",
    instagram: "https://www.instagram.com/p/DLAXCjYxTqv/",
    date: "2025-06-17"
  }, 
  {
    title: "See you at Cosyne 2025!",
    description: "I’ll be in Montreal from March 27 to April 2, 2025 for Cosyne 2025 (Computational and Systems Neuroscience). Please drop by my posters at 1-089, 2-029, and 3-046!",
    tweet: "https://x.com/WeishunZhong/status/1905063980197896195",
    date: "2025-03-26"
},
  {
    title: "Zoom seminar on Quantum Neural Networks",
    description: "I had the pleasure of presenting my recent work on QNNs during a zoom seminar hosted by OSU and Harvard. Many thanks to Kaifeng for the kind invitation!",
    videoUrl: "/QNN_talk.mp4",
    date: "2025-01-28"
  }, 
  {
    title: "Paper published",
    description: "My work on many-body localized hidden generative models has been published in Physical Review Research. Check it out!",
    link: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.043041",
    tweet: "https://x.com/WeishunZhong/status/1848535500392460561",
    date: "2024-10-21"
  }, 
  {
    title: "Preprint with video illustrations",
    description: "Check out the tweet and instagram posts below for video illustrations of my new preprint 'Hierarchical Working Memory and a New Magic Number'.",
    link: "https://arxiv.org/abs/2408.07637",
    tweet: "https://x.com/WeishunZhong/status/1827237443386397145",
    instagram: "https://www.instagram.com/p/C_0j_SgR7MN/",
    date: "2024-09-12"
  }, 
  {
    title: "New preprint",
    description: "Check out my new preprint on quantum neural networks.",
    link: "https://arxiv.org/abs/2401.06300",
    tweet: "https://x.com/WeishunZhong/status/1746974293500551486",
    date: "2024-01-14"
  }, 
  {
    title: "New Journey",
    description: "I just started my postdoc at the IAS, and am excited to be featured in IAS social media!",
    link: "https://www.ias.edu/ideas/qa-weishun-zhong",
    tweet: "https://x.com/the_IAS/status/1706685697044676633",
    date: "2023-09-27"
  }, 
  {
    title: "Thesis",
    description: "My PhD thesis is on arXiv now. Check it out!",
    link: "https://arxiv.org/abs/2308.01538",
    tweet: "https://x.com/nicoleyh11/status/1688924015975702529",
    date: "2023-08-03"
  },  
  {
    title: "Graduation",
    description: "Passed my defense and got my PhD! Check out the tweet below and a picture taken after my defense.",
    tweet: "https://x.com/FakhriLab/status/1664025114294272003",
    date: "2023-06-02",
    present: "/images/defense.png"
  }
];

const NewsSection = ({ heading }) => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Set the news directly. If you have an API or some other mechanism in the future, fetch the news here.
    setNewsItems(newsArray);
  }, []);

  return (
    <Jumbotron fluid id="news" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {newsItems.length
            ? newsItems.map((news, index) => (
                <NewsCard
                  key={`news-card-${index}`}
                  id={`news-card-${index}`}
                  value={news}
                />
              ))
            : new Array(10).fill(dummyNews).map((news, index) => (
                <NewsCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={news}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default NewsSection;

