import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { MdOutlineClose } from "react-icons/md";
ReactModal.setAppElement("#root");
export default function ImageModal({ imageUrl, imgModal, onModalClose }) {
  return (
    <ReactModal
      isOpen={imgModal}
      onRequestClose={onModalClose}
      contentLabel="Image Modal"
      overlayClassName={css.modalOverlay}
    >
      <div className={css.imageContainer}>
        <img src={imageUrl} alt="Large" />
        <button className={css.closeButton} onClick={onModalClose}>
          <MdOutlineClose />
        </button>{" "}
      </div>
    </ReactModal>
  );
}
