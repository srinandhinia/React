import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Input from "./Input";

export default function CoreConcepts() {
  return (
    <div className="flex">
      {CORE_CONCEPTS.map((coreConcept) => (
        <CoreConcept text={coreConcept} />
      ))}
      {/* <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" /> */}
    </div>
  );
}
