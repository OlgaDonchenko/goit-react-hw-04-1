import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
export default function ImageModal({ imageUrl, imgModal, onModalClose }) {
  return (
    <ReactModal
      isOpen={imgModal}
      onRequestClose={onModalClose}
      contentLabel="Image Modal"
      overlayClassName="overlay"
      className="modal-content"
    >
      <div>
        <img src={imageUrl} alt="Large" />
        <button onClick={onModalClose}>Close</button>{" "}
      </div>
    </ReactModal>
  );
}
