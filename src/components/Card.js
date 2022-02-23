export default function Card({ name, src, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="img" src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}
