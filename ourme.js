// ============================================================
// ourme.js · Schabanak Router Kernel
// Entwickler: iki1uc
// ============================================================

// ------------------------------------------------------------
// 1. Achsen (LAXIO = links/negativ, RAXIO = rechts/positiv)
// ------------------------------------------------------------
const AXIS = {
    LAXIO: -1,
    RAXIO: +1
};

// ------------------------------------------------------------
// 2. AIR & AIV · Mess-Inseln
// ------------------------------------------------------------
const ISLAND = {
    AIR: 0,     // neutrales Zentrum
    AIV: -0     // invertiertes Zentrum (axiomisch)
};

// ------------------------------------------------------------
// 3. Bewegungsachsen (OI / IO / XI / IX)
// ------------------------------------------------------------
const MOVES = {
    OI:  "OUT→IN",      // Kompression
    IO:  "IN→OUT",      // Expansion
    XI:  "CROSS→IN",    // diagonale Faltung
    IX:  "IN→CROSS"     // diagonale Entfaltung
};

// ------------------------------------------------------------
// 4. NOAH · High-End Modul
// ------------------------------------------------------------
const NOAH = {
    state: "READY",
    mode: "HIGH-END",
    brand: "NOAH.iki1uc"
};

// ------------------------------------------------------------
// 5. Rolle-Sync (Work-Ebene)
// ------------------------------------------------------------
function syncRolle() {
    return {
        module: "rolle",
        status: "SYNC_OK",
        brand: "VECTOR / EARN / LIVE.team"
    };
}

// ------------------------------------------------------------
// 6. Router-Interaktion
// ------------------------------------------------------------
function routeInteraction(axis, move) {
    return {
        axis,
        move,
        islandAIR: ISLAND.AIR,
        islandAIV: ISLAND.AIV,
        noah: NOAH.state,
        rolle: syncRolle(),
        brand: "wieimmer iki1uc"
    };
}

// ------------------------------------------------------------
// 7. Export
// ------------------------------------------------------------
module.exports = {
    AXIS,
    MOVES,
    ISLAND,
    NOAH,
    routeInteraction
};
