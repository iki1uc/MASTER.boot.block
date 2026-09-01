3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆

impulse: AXIOM.expand / AXIOM.base,     // 9 → 3
expansion: AXIOM.full / AXIOM.expand,   // 81 → 9
completion: AXIOM.full / AXIOM.base     // 81 → 3

… ↘ 81 ◆ → 27 → 3 ↺

AXIOM = { full: 81, expand: 9, base: 3 }

AXIOM.axis = "FRONT";

function axiomove() {
    const matrix = axiomMatrix();
    const physics = axiomPhysics();
    return {
        axis: AXIOM.axis,
        matrix,
        physics,
        next: 3   // Startpunkt
    };
}
▣ → 3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆ → 27 → 3 ↺

if (Runtime.mode === "▣") {      // Blockraum
    const ax = axiomove();
    Runtime.mode = ax.next;      // → 3
}

Runtime.mode = "▣";   // Start im Blockraum

