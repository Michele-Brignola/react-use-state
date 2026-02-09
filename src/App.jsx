import { useState } from "react";

import Button from "./components/Button";
import Card from "./components/Card";

import languages from "./data/languages";

export default function App() {
  const [activeId, setActiveId] = useState(1);
  const activeLanguage = languages.find((lang) => lang.id === activeId);

  return (
    <section className="container">
      <h1>Learn Web Development</h1>
      <div className="d-flex gap-3 py-3">
        {languages.map(({ id, title, description }) => (
          <Button
            key={id}
            isActive={activeId === id}
            onClick={() => setActiveId(id)}>
            {title}
          </Button>
        ))}
      </div>

      {activeLanguage && (
        <Card
          title={activeLanguage.title}
          description={activeLanguage.description}
        />
      )}
    </section>
  );
}
