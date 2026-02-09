export default function Button({ children, isActive, onClick }) {
  return (
    <button
      className={`btn ${isActive ? "btn-warning" : "btn-primary"}`}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
}
