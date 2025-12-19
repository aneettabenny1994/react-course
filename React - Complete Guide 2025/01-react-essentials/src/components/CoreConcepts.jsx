import { CORE_CONCEPTS } from "../data.js";
import { CoreConcept } from "./CoreConcept";

export function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptitem) => (
                    <CoreConcept key={conceptitem.title} {...conceptitem} />
                ))}
            </ul>
        </section>
    );
}
