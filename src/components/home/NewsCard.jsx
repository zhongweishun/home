import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Skeleton from "react-loading-skeleton";
import { Tweet } from 'react-tweet';

const NewsCard = ({ value }) => {
  const { title, description, link, date, present, tweet } = value;

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>{description || <Skeleton count={3} />} </Card.Text>
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
            {tweet && 
              <button
                  onClick={() => handleShow("twitter")}
                  className="btn btn-outline-secondary mr-3"
              >
                  <i className="fab fa-twitter" />
              </button>
            }
            {present && 
              <button
                  onClick={() => handleShow("image")}
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
      
      <Modal show={showModal} onHide={handleClose} centered>
        {modalContent === "image" && present && 
          <Modal.Body>
            <img src={process.env.PUBLIC_URL + present} alt="Presentation" width="100%" />
          </Modal.Body>
        }
        {modalContent === "twitter" && tweet && 
          <Modal.Body>
            <Tweet id={tweet.split("/status/")[1].split("/")[0]} />
          </Modal.Body>
        }
      </Modal>
    </Col>
  );
};

export default NewsCard;



// import React, { useState } from "react";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Modal from "react-bootstrap/Modal";
// import Skeleton from "react-loading-skeleton";

// const NewsCard = ({ value }) => {
//   const { title, description, link, date, present } = value;

//   const [showModal, setShowModal] = useState(false);
//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   return (
//     <Col md={6}>
//       <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
//         <Card.Body>
//           <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
//           <Card.Text>{description ? description : <Skeleton count={3} />} </Card.Text>
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
//               <button
//                   onClick={handleShow}
//                   className="btn btn-outline-secondary mr-3"
//               >
//                   <i className="fab fa-instagram" />
//               </button>
//             }
//           </div>
//           <p>
//             Published on {date}
//           </p>
//         </Card.Body>
//       </Card>
      
//       <Modal show={showModal} onHide={handleClose} centered size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Defense Presentation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img src={present} alt="Presentation" width="100%" />
//         </Modal.Body>
//       </Modal>
//     </Col>
//   );
// };

// export default NewsCard;

