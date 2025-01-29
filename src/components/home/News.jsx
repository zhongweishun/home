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
    title: "Zoom seminar on Quantum Neural Networks",
    description: "I had the pleasure of presenting my recent work on QNNs during a zoom seminar hosted by OSU and Harvard. Many thanks to Kaifeng for the kind invitation!",
    videoUrl: "/QNN_talk.mp4",
    date: "2025-01-28"
  }, 
  {
    title: "See you at Cosyne 2025!",
    description: "Three abstracts has been accepted at Cosyne (Computational and Systems Neuroscience) 2025. I will be in Montreal from 27 March to 1 April 2025. Looking forward to seeing you there!",
    date: "2024-12-23"
  }, 
  {
    title: "(Latest) Preprint out - Scale-invariance in narratives",
    description: "In our new preprint 'Random Tree Model of Meaningful Memory' we discovered scale-invariance in narrative memory,  leading to a surprising prediction about the emergence of semantic abstraction. Details in below!",
    link: "https://arxiv.org/abs/2412.01806",
    tweet: "https://twitter.com/WeishunZhong/status/1866170850640007550",
    date: "2024-12-09"
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

