import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const PortfolioCard = ({ value, imgHeight }) => {
  const {
    title,
    url,
    notes,
    videoUrl,
    thumbnail,
    repo,
    present
  } = value;

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleShow = (image) => {
    setModalImage(image);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title}</Card.Title>
          <img className="card-img-top" height={imgHeight} src={thumbnail} alt={title}></img>
          <hr />
          <Card.Text>{notes}</Card.Text>
          <CardButtons video_url={videoUrl} link={url} repo={repo} present={present} onShowModal={handleShow} />
        </Card.Body>
      </Card>
      
      <Modal show={showModal} onHide={handleClose} centered size="xl">
        <Modal.Body>
          <img src={modalImage} alt="Presentation" width="100%" />
        </Modal.Body>
      </Modal>
    </Col>
  );
};

const CardButtons = ({ video_url, link, repo, present, onShowModal }) => {
  return (
    <>
      {video_url &&
        <a href={video_url} target=" _blank" className="btn btn-outline-secondary mr-3">
          <i className="fab fa-youtube" />
        </a>
      }
      {present &&
        <button onClick={() => onShowModal(present)} className="btn btn-outline-secondary mr-3">
          <i className="fab fa-instagram" />
        </button>
      }
      {link &&
        <a href={link} target=" _blank" className="btn btn-outline-secondary">
          <i className="fas fa-link " />
        </a>
      }
      {repo &&
        <a href={repo} target=" _blank" className="btn btn-outline-secondary">
          <i className="fab fa-github" />
        </a>
      }
    </>
  );
};

export default PortfolioCard;


// import React from "react";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

// const PortfolioCard = ({ value, imgHeight }) => {
//   const {
//     title,
//     url,
//     notes,
//     videoUrl,
//     thumbnail, 
//     repo,
//     present,
//   } = value;

//   return (
//     <Col md={6}>
//       <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
//         <Card.Body>
//           <Card.Title as="h5">{title } </Card.Title>
//           <img className="card-img-top" height={imgHeight} src={thumbnail} alt={title}></img>
//           <hr></hr>
//           <Card.Text>{notes}</Card.Text>
//           <CardButtons video_url={videoUrl} link={url} repo={repo} present={present} />
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// const CardButtons = ({ video_url, link, repo, present }) => {
//   return (
//     <>
//       {video_url &&
//         <a
//             href={video_url}
//             target=" _blank"
//             className="btn btn-outline-secondary mr-3"
//         >
//             <i className="fab fa-youtube" /> 
//           </a>
//       }
//       {present &&
//         <a
//             href={present}
//             target=" _blank"
//             className="btn btn-outline-secondary mr-3"
//         >
//             <i className="fab fa-instagram" /> 
//           </a>
//       }
//       {link &&
//         <a
//             href={link}
//             target=" _blank"
//             className="btn btn-outline-secondary"
//         >
//             <i className="fas fa-link " /> 
//           </a>
//       }
//      {repo &&
//         <a
//             href={repo}
//             target=" _blank"
//             className="btn btn-outline-secondary"
//         >
//             <i className="fab fa-github" /> 
//           </a>
//       }

//     </>
//   );
// };

// export default PortfolioCard;
