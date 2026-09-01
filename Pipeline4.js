// Pipeline4.js
// NC‑WORK Build‑Generator (aktive Pipeline)

import { AxiomVectorMap } from "../axiom.map.js";

export const Pipeline4 = {

    id: 4,
    type: "build-generator",
    mode: "active",

    // NC‑Build‑Stufen
    build: [0, 1, 2],

    // Auto‑Start aktiv
    autostart: true,

    // RAM‑Tiefe für Pipeline 4
    ram: "ram3.ready",

    // HDF‑Bindung (D = North)
    hdf: "d.hdf.rom",

    // Axiom‑Routing
    axiom: AxiomVectorMap["N"],

    // NC‑Work‑Init
    init() {
        return {
            build: this.build,
            autostart: this.autostart,
            ram: this.ram,
            hdf: this.hdf,
            axiom: this.axiom
        };
    },

    // Pipeline‑Start
    start() {
        const ctx = this.init();
        console.log("Pipeline 4 gestartet:", ctx);
        return ctx;
    }
};
