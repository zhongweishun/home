import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Skeleton from "react-loading-skeleton";
import { Tweet } from "react-tweet";

const NewsCard = ({ value }) => {
  const {
    title,
    description,
    link,
    date,
    present,
    tweet,
    instagram,
    videoUrl,
  } = value;

  // State for modal usage (not for video anymore)
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // Handle opening video in a new tab
  const handleOpenVideo = () => {
    // If your videoUrl is a relative path, prepend process.env.PUBLIC_URL
    window.open(process.env.PUBLIC_URL + videoUrl, "_blank", "noopener,noreferrer");
  };

  // Helper function to extract Instagram post ID from the URL
  const getInstagramPostId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>{description || <Skeleton count={3} />}</Card.Text>
          <hr />
          <div className="mb-3">
            {/* Link button */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary mr-3"
              >
                <i className="fas fa-link" />
              </a>
            )}

            {/* Twitter (modal) */}
            {tweet && (
              <button
                onClick={() => handleShow("twitter")}
                className="btn btn-outline-secondary mr-3"
              >
                <i className="fab fa-twitter" />
              </button>
            )}

            {/* Instagram (modal) */}
            {instagram && (
              <button
                onClick={() => handleShow("instagram")}
                className="btn btn-outline-secondary mr-3"
              >
                <i className="fab fa-instagram" />
              </button>
            )}

            {/* Image (modal) */}
            {present && (
              <button
                onClick={() => handleShow("image")}
                className="btn btn-outline-secondary mr-3"
              >
                <i className="fas fa-image" />
              </button>
            )}

            {/* Video -> open in new tab (no modal) */}
            {videoUrl && (
              <button
                onClick={handleOpenVideo}
                className="btn btn-outline-secondary mr-3"
              >
                <i className="fas fa-video" />
              </button>
            )}
          </div>
          <p>Published on {date}</p>
        </Card.Body>
      </Card>

      {/* Modal for image, Twitter, Instagram ONLY */}
      <Modal show={showModal} onHide={handleClose} centered>
        {modalContent === "image" && present && (
          <Modal.Body>
            <img
              src={process.env.PUBLIC_URL + present}
              alt="Presentation"
              width="100%"
            />
          </Modal.Body>
        )}
        {modalContent === "twitter" && tweet && (
          <Modal.Body>
            <Tweet id={tweet.split("/status/")[1].split("/")[0]} />
          </Modal.Body>
        )}
        {modalContent === "instagram" && instagram && (
          <Modal.Body>
            <div
              style={{
                position: "relative",
                paddingBottom: "125%",
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                src={`https://www.instagram.com/p/${getInstagramPostId(
                  instagram
                )}/embed`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allowFullScreen
              />
            </div>
          </Modal.Body>
        )}
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
// import { Tweet } from "react-tweet";

// const NewsCard = ({ value }) => {
//   const { title, description, link, date, present, tweet, instagram } = value;

//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   const handleShow = (content) => {
//     setModalContent(content);
//     setShowModal(true);
//   };

//   const handleClose = () => setShowModal(false);

//   // Helper function to extract Instagram post ID from the URL
//   const getInstagramPostId = (url) => {
//     const regex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)/i;
//     const match = url.match(regex);
//     return match ? match[1] : null;
//   };

//   return (
//     <Col md={6}>
//       <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
//         <Card.Body>
//           <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
//           <Card.Text>{description || <Skeleton count={3} />} </Card.Text>
//           <hr />
//           <div className="mb-3">
//             {link && (
//               <a
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-outline-secondary mr-3"
//               >
//                 <i className="fas fa-link" />
//               </a>
//             )}
//             {tweet && (
//               <button
//                 onClick={() => handleShow("twitter")}
//                 className="btn btn-outline-secondary mr-3"
//               >
//                 <i className="fab fa-twitter" />
//               </button>
//             )}
//             {instagram && (
//               <button
//                 onClick={() => handleShow("instagram")}
//                 className="btn btn-outline-secondary mr-3"
//               >
//                 <i className="fab fa-instagram" />
//               </button>
//             )}
//             {present && (
//               <button
//                 onClick={() => handleShow("image")}
//                 className="btn btn-outline-secondary mr-3"
//               >
//                 <i className="fas fa-image" />
//               </button>
//             )}
//           </div>
//           <p>Published on {date}</p>
//         </Card.Body>
//       </Card>

//       <Modal show={showModal} onHide={handleClose} centered>
//         {modalContent === "image" && present && (
//           <Modal.Body>
//             <img
//               src={process.env.PUBLIC_URL + present}
//               alt="Presentation"
//               width="100%"
//             />
//           </Modal.Body>
//         )}
//         {modalContent === "twitter" && tweet && (
//           <Modal.Body>
//             <Tweet id={tweet.split("/status/")[1].split("/")[0]} />
//           </Modal.Body>
//         )}
//         {modalContent === "instagram" && instagram && (
//           <Modal.Body>
//             <div style={{ position: "relative", paddingBottom: "125%", height: 0, overflow: "hidden" }}>
//               <iframe
//                 src={`https://www.instagram.com/p/${getInstagramPostId(instagram)}/embed`}
//                 style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//                 frameBorder="0"
//                 scrolling="no"
//                 allowTransparency="true"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </Modal.Body>
//         )}
//       </Modal>
//     </Col>
//   );
// };

// export default NewsCard;
