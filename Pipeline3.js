// Pipeline3.js
// NC‑WORK Task‑Stack: erzeugt Mathe‑Frage + Mathe‑Antwort + Formel + Narration
// Pipeline 3 entsteht aus Pipeline 4

import { Pipeline4 } from "./Pipeline4.js";

export const Pipeline3 = {

    id: 3,
    type: "task-stack",
    mode: "passive",

    // Pipeline 4 liefert Build 0,1,2
    source() {
        return Pipeline4.build;
    },

    // Mathe‑Frage erzeugen
    makeQuestion(build) {
        return `Was ist ${build} + ${build}?`;
    },

    // Mathe‑Antwort erzeugen
    makeAnswer(build) {
        return build + build;
    },

    // Formel erzeugen
    makeFormula(build) {
        return `${build} + ${build} = ${this.makeAnswer(build)}`;
    },

    // Narration erzeugen (vernarrativiert)
    makeNarration(build) {
        return `Wenn sich die Zahl ${build} verdoppelt, entsteht ${this.makeAnswer(build)} — 
ein kleiner Schritt für die Zahl, aber ein großer für die Pipeline.`;
    },

    // Komplettes Task‑Objekt
    makeTask(build) {
        return {
            question: this.makeQuestion(build),
            answer: this.makeAnswer(build),
            formula: this.makeFormula(build),
            narration: this.makeNarration(build)
        };
    },

    // Pipeline 3 erzeugt Aufgaben aus Pipeline 4
    generate() {
        const builds = this.source();
        return builds.map(b => this.makeTask(b));
    }
};
