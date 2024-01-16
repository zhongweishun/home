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
    title: "New preprint",
    description: "Check out my new preprint on quantum neural networks!",
    link: "https://arxiv.org/abs/2401.06300",
    tweet: "https://twitter.com/WeishunZhong/status/1746974293500551486",
    date: "2024-01-14"
  }, 
  {
    title: "New Journey",
    description: "I just started my postdoc at the IAS, and am excited to be featured in IAS social media!",
    link: "https://www.ias.edu/ideas/qa-weishun-zhong",
    tweet: "https://twitter.com/the_IAS/status/1706685697044676633",
    date: "2023-09-27"
  }, 
  {
    title: "Thesis",
    description: "My PhD thesis is on arXiv now. Check it out!",
    link: "https://arxiv.org/abs/2308.01538",
    tweet: "https://twitter.com/nicoleyh11/status/1688924015975702529",
    date: "2023-08-03"
  },  
  {
    title: "Graduation",
    description: "Passed my defense and got my PhD! Check out the tweet below and a picture taken after my defense.",
    tweet: "https://twitter.com/FakhriLab/status/1664025114294272003/photo/1",
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

