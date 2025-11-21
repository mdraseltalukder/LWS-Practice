import { LevelContext } from "../context/LavelContext";

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext value={level}>{children}</LevelContext>
    </section>
  );
}
