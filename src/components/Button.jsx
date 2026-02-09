export default function Button({ children, description }) {
  return (
    <button className="btn btn-primary" type="button">
      {children}
    </button>
  );
}
