export default function Banner({ handleClick }) {
  return (
    <div>
      <h1>
        <span>Coffee</span>
        <span>Connoisseur</span>
      </h1>
      <p>Discover local coffee shops</p>
      <button onClick={handleClick}>View nearby stores</button>
    </div>
  );
}
