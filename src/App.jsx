import Button from "./components/Button";
import languages from "./data/languages";

export default function App() {
  return (
    <section className="container">
      <h1>Learn Web Development</h1>
      <div className="d-flex gap-3 py-3">
        {languages.map(({ id, title, description }) => (
          <Button key={id}>{title}</Button>
        ))}
      </div>
    </section>
  );
}
