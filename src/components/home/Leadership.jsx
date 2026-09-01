import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

// Each entry renders as: [num] title (link), then authors and venue flowing
// naturally below it. No manual line breaks — text wraps to fit any screen.
const publications = [
  {
    num: 12,
    isNew: true,
    href: "https://arxiv.org/abs/2602.13194",
    title: "Semantic Chunking and the Entropy of Natural Language",
    authors: (
      <>
        <b>WZ</b>, Doron Sivan, Tankut Can, Mikhail Katkov, Misha Tsodyks
      </>
    ),
    venue: "arXiv:2602.13194",
  },
  {
    num: 11,
    href: "https://journals.aps.org/prl/abstract/10.1103/g1cz-wk1l",
    title: "Random Tree Model of Meaningful Memory",
    authors: (
      <>
        <b>WZ</b>, Tankut Can, Antonis Georgiou, Ilya Shnayderman, Mikhail
        Katkov, Misha Tsodyks
      </>
    ),
    venue: "Physical Review Letters 134.23 (2025): 237402.",
  },
  {
    num: 10,
    href: "https://elifesciences.org/reviewed-preprints/109538",
    title: "Synaptic Theory of Chunking in Working Memory",
    authors: (
      <>
        <b>WZ</b>, Mikhail Katkov, Misha Tsodyks
      </>
    ),
    venue: "eLife 15 (2026).",
  },
  {
    num: 9,
    href: "https://arxiv.org/abs/2401.06300",
    title: "Advantage of Quantum Neural Networks as Quantum Information Decoders",
    authors: (
      <>
        <b>WZ</b>, Oles Shtanko, Ramis Movassagh
      </>
    ),
    venue: "arXiv:2401.06300",
  },
  {
    num: 8,
    href: "https://arxiv.org/abs/2206.08933",
    title: "A Theory of Weight Distribution-constrained Learning",
    authors: (
      <>
        <b>WZ</b>, Ben Sorscher, Daniel D Lee, Haim Sompolinsky
      </>
    ),
    venue: "NeurIPS 2022",
  },
  {
    num: 7,
    href: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.043041",
    title: "Many-body Localized Hidden Generative Models",
    authors: (
      <>
        <b>WZ</b>, Xun Gao, Susanne Yelin, Khadijeh Najafi
      </>
    ),
    venue: "Physical Review Research 6.4 (2024): 043041.",
  },
  {
    num: 6,
    href: "https://www.nature.com/articles/s41598-021-88311-7",
    title:
      "Machine Learning Outperforms Thermodynamics in Measuring how well a Many-body System Learns a Drive",
    authors: (
      <>
        <b>WZ*</b>, Jacob M Gold*, Sarah Marzen, Jeremy L England, Nicole
        Yunger Halpern
      </>
    ),
    venue: "Scientific reports 11.1 (2021): 1-11",
  },
  {
    num: 5,
    href: "https://arxiv.org/abs/2004.03604",
    title: "Learning about Learning by Many-body Systems",
    authors: (
      <>
        <b>WZ*</b>, Jacob M Gold*, Sarah Marzen, Jeremy L England, Nicole
        Yunger Halpern
      </>
    ),
    venue: "ICML workshop (2020)",
  },
  {
    num: 4,
    href: "https://direct.mit.edu/neco/article/32/6/1033/95586",
    title: "Non-equilibrium Statistical Mechanics of Continuous Attractors",
    authors: (
      <>
        <b>WZ</b>, Zhiyue Lu, David J. Schwab†, and Arvind Murugan†
      </>
    ),
    venue: "Neural computation (2020) 32 (6)",
  },
  {
    num: 3,
    href: "https://arxiv.org/abs/1912.05127",
    title: "A Closer Look at Disentangling in beta-VAE",
    authors: (
      <>
        Harshvardhan Sikka*, <b>WZ*</b> (alphabetical order), Jun Yin, Cengiz
        Pehlevan
      </>
    ),
    venue: "53rd Asilomar Conference on Signals, Systems, and Computers (2019)",
  },
  {
    num: 2,
    href: "https://arxiv.org/abs/1701.01769",
    title: "Associative Pattern Recognition in Macro-Molecular Self-Assembly",
    authors: (
      <>
        <b>WZ</b>, David J. Schwab, and Arvind Murugan
      </>
    ),
    venue: "J Stat Phys (2017) 167: 806",
  },
  {
    num: 1,
    href: "https://link.springer.com/article/10.1007/JHEP12(2015)179",
    title: "A Holographic c-Theorem for Schrodinger Spacetimes",
    authors: (
      <>
        James T. Liu* and <b>WZ*</b> (alphabetical order)
      </>
    ),
    venue: "JHEP 1512 (2015) 179",
  },
];

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          {publications.map((pub) => (
            <div className="publication-entry" key={pub.num}>
              <span className="publication-num">
                <b>[{pub.num}]</b>
              </span>
              <span className="publication-body">
                {pub.isNew && <span style={{ color: "red" }}>(new) </span>}
                <a href={pub.href} target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
                <span className="publication-authors">
                  {pub.authors}, <i>{pub.venue}</i>
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 publication-fig"
                    src={value.img}
                    alt="First slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
