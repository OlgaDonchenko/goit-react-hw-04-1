import ReactModal from "react-modal";

export default function ImageModal({ imageUrl, closeModal }) {
  return (
    <ReactModal
      isOpen={!!imageUrl}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
    >
      <div>
        <img src={imageUrl} alt="Large" />
        <button onClick={closeModal}>Close</button>{" "}
      </div>
    </ReactModal>
  );
}
