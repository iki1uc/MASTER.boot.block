// ============================================================
// Axiom Kernel · Laxio.js (Left Axis)
// 9 Dateien · jede Datei enthält eine 3×3 Matrix
// Entwickler: iki1uc
// ============================================================

// 9 HDF-ROM Dateien
const FILES_9 = [
    "d.hdf.rom",
    "e.hdf.rom",
    "i.hdf.rom",
    "n.hdf.rom",
    "o.hdf.rom",
    "r.hdf.rom",
    "s.hdf.rom",
    "u.hdf.rom",
    "w.hdf.rom"
];

// Original 3×3 Matrix (links)
function matrixLeft(seed) {
    const base = seed % 9;
    return [
        [base + 1, base + 2, base + 3],
        [base + 4, base + 5, base + 6],
        [base + 7, base + 8, base + 9]
    ];
}

// Struktur erzeugen
function buildLaxio() {
    const structure = {};

    FILES_9.forEach((file, index) => {
        structure[file] = {
            matrix3x3: matrixLeft(index),
            axis: "LAXIO.LEFT",
            option: `Konstellation_${index + 1}`
        };
    });

    return structure;
}

// Export
module.exports = {
    buildLaxio
};
