import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

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
          <p><b>[1]</b> Decoding Imperfect Stabilizer Codes with Quantum Neural Networks, <br></br>  
          <b>&emsp; &ensp;WZ</b>, Oles Shtanko, Ramis Movassagh, <i>to appear </i><br></br>         
          <b>[2]</b> <a href="https://arxiv.org/abs/2206.08933">A Theory of Weight Distribution-constrained Learning</a>, <br></br>  
          <b>&emsp; &ensp;WZ</b>, Ben Sorscher, Daniel D Lee, Haim Sompolinsky, <i>NeurIPS 2022 </i><br></br>    
          <b>[3]</b> <a href="https://arxiv.org/abs/2207.02346">Many-body Localized Hidden Born Machine</a>, <br></br>  
          <b>&emsp; &ensp;WZ</b>, Xun Gao, Susanne Yelin, Khadijeh Najafi, <i>arXiv: 2207.02346 </i><br></br>    
          <b>[4]</b> <a href="https://www.nature.com/articles/s41598-021-88311-7">Quantifying Many-body Learning far from Equilibrium with </a><br></br>  
          &emsp; &ensp; <a href="https://www.nature.com/articles/s41598-021-88311-7">Representation Learning</a>, <br></br>  
          <b>&emsp; &ensp;WZ*</b>, Jacob M Gold*, Sarah Marzen, Jeremy L England, Nicole Yunger &emsp; &ensp; Halpern, <i>Scientific reports 11.1 (2021): 1-11</i><br></br>
          <b>[5]</b> <a href="https://arxiv.org/abs/2004.03604">Learning about Learning by Many-body Systems</a>, <br></br>  
          <b>&emsp; &ensp;WZ*</b>, Jacob M Gold*, Sarah Marzen, Jeremy L England, Nicole Yunger &emsp; &ensp; Halpern, <i>ICML workshop (2020)</i><br></br>
          <b>[6]</b> <a href="https://direct.mit.edu/neco/article/32/6/1033/95586">Non-equilibrium Statistical Mechanics of Continuous Attractors</a>, <br></br>  
          <b>&emsp; &ensp;WZ</b>, Zhiyue Lu, David J. Schwab, and Arvind Murugan, <i>Neural <br></br>
          &emsp; &ensp; computation (2020) 32 (6) </i><br></br>    
          <b>[7]</b> <a href="https://arxiv.org/abs/1912.05127">A Closer Look at Disentangling in beta-VAE</a>, <br></br>  
          &emsp; &ensp; Harshvardhan Sikka*, <b>WZ*</b>, Jun Yin, Cengiz Pehlevan, <i>53rd Asilomar <br></br> 
          &emsp; &ensp; Conference on Signals, Systems, and Computers (2019) </i><br></br>   
          <b>[8]</b> <a href="https://arxiv.org/abs/1701.01769">Associative Pattern Recognition in Macro-Molecular Self-Assembly</a>, <br></br>  
          <b>&emsp; &ensp;WZ</b>, David J. Schwab, and Arvind Murugan, <i>J Stat Phys (2017) 167: 806 </i><br></br>      
          <b>[9]</b> <a href="https://link.springer.com/article/10.1007/JHEP12(2015)179">A Holographic c-Theorem for Schrodinger Spacetimes</a>, <br></br>  
          &emsp; &ensp; James T. Liu and <b>WZ</b>, <i>JHEP 1512 (2015) 179 </i><br></br>        
          </p>
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
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
