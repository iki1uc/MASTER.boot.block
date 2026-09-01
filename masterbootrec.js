// ============================================================
// WirbelBoot.js – 3·9·◎·81·△·27·▣ Orbit-Bootsequenz
// Entwickler: iki1uc
// ============================================================

// Achsenräume
const AXIS = {
    CORE: "◉",
    THREE: 3,
    NINE: 9,
    NEUTRAL: "◎",
    DEPTH: 81,
    STAR: "◆",
    SHIFT: "△",
    BACK: 27,
    BLOCK: "▣"
};

// Wirbel-Graph (Orbit)
const WIRBEL = [
    AXIS.CORE,
    AXIS.THREE, AXIS.NINE,
    AXIS.NEUTRAL,
    AXIS.THREE, AXIS.NINE,
    AXIS.NEUTRAL,
    AXIS.DEPTH, AXIS.STAR,
    AXIS.SHIFT,
    AXIS.BACK, AXIS.BLOCK,
    AXIS.THREE, // ↺
    AXIS.DEPTH, AXIS.STAR,
    AXIS.SHIFT,
    AXIS.BACK, AXIS.BLOCK,
    AXIS.THREE  // ↺
];

// Orbit-Iterator
function wirbelIterator() {
    let index = 0;

    return {
        next() {
            const value = WIRBEL[index];
            index = (index + 1) % WIRBEL.length;
            return value;
        }
    };
}

// Bootsequenz
function wirbelBoot() {
    const orbit = wirbelIterator();
    const sequence = [];

    for (let i = 0; i < WIRBEL.length; i++) {
        sequence.push(orbit.next());
    }

    return {
        orbit: sequence,
        brand: "MASTER.boot.block · iki1uc",
        state: "WIRBEL_READY"
    };
}

module.exports = { wirbelBoot };
