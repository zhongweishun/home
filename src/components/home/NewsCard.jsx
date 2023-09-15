import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Skeleton from "react-loading-skeleton";
import defenseImage from "./defense.png";

const NewsCard = ({ value }) => {
  const { title, description, link, date, present } = value;

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          <hr />
          <div className="mb-3">
            {link && 
              <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary mr-3"
              >
                  <i className="fas fa-link" />
              </a>
            }
            {present && 
              <button
                  onClick={handleShow}
                  className="btn btn-outline-secondary mr-3"
              >
                  <i className="fab fa-instagram" />
              </button>
            }
          </div>
          <p>
            Published on {date}
          </p>
        </Card.Body>
      </Card>
      
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Defense Presentation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={defenseImage} alt="Defense Presentation" width="100%" />
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default NewsCard;




// import React from "react";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Skeleton from "react-loading-skeleton";

// const NewsCard = ({ value }) => {
//   const { title, description, link, date, present } = value;
//   return (
//     <Col md={6}>
//       <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
//         <Card.Body>
//           <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
//           <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
//           <hr />
//           <div className="mb-3">
//             {link && 
//               <a
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-outline-secondary mr-3"
//               >
//                   <i className="fas fa-link" />
//               </a>
//             }
//             {present && 
//               <a
//                   href={present}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-outline-secondary mr-3"
//               >
//                   <i className="fab fa-instagram" />
//               </a>
//             }
//           </div>
//           <p>
//             Published on {date}
//           </p>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default NewsCard;
