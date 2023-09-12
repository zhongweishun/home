import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-5 text-center">
        <img className="bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          <span dangerouslySetInnerHTML={{ __html: data.role }} />
          <br />
          {data.date}
          <br />
          {data.thesis}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;



// import React from 'react';

// import {
//   Col,
// } from "react-bootstrap";

// const ExperienceCard = ({ data }) => {
//   return (
//     <Col lg="4">
//       <div className="pb-5 text-center">
//         <img className=" bg-white mb-3" src={data.companylogo} alt="" />
//         <p className="lead">
//           {data.role}
//           <br />
//           {data.date}
//           <br />
//           {data.thesis}
//         </p>

//       </div>
//     </Col>
//   );
// }

// export default ExperienceCard;