// Pipeline2.js
// Entsteht NUR wenn Pipeline 4 einen Build auslöst
// Kaskade 0 / 1 / 2
// EES kommt von Pipeline 9 oder Pipeline 12

import { Pipeline4 } from "./Pipeline4.js";
import { Pipeline9 } from "./Pipeline9.js";
import { Pipeline12 } from "./Pipeline12.js";

export const Pipeline2 = {

    id: 2,
    type: "bind-cascade",
    mode: "reactive",

    // Pipeline 2 entsteht nur aus Pipeline 4
    source() {
        return Pipeline4.build;   // [0,1,2]
    },

    // EES-Signal aus Pipeline 9 oder 12
    ees() {
        return Pipeline9.ees || Pipeline12.ees;
    },

    // Kaskade erzeugen
    cascade() {
        const builds = this.source();
        const ees = this.ees();

        return builds.map(b => ({
            bind: b,
            ees: ees,
            state: "generated"
        }));
    },

    // Pipeline 2 wird NICHT automatisch gestartet
    // Sie wird nur erzeugt, wenn Pipeline 4 aktiv ist
    generate() {
        return this.cascade();
    }
};
