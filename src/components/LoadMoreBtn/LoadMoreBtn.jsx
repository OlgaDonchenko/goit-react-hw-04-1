import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.box}>
      <button className={css.btn} onClick={onClick}>
        Load more images
      </button>
    </div>
  );
}
