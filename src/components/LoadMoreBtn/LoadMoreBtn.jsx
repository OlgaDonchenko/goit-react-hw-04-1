export default function LoadMoreBtn({ onLoadMore, showButton }) {
  return <>{showButton && <button onClick={onLoadMore}>Load more</button>}</>;
}
