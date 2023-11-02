export default function CoreConcept({ text }) {
  return (
    <div className="listBorders">
      <li>
        <p>{text.title}</p>
        <p>{text.description}</p>
      </li>
    </div>
  );
}
