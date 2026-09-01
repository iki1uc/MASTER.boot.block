// ============================================================
// ip6.js – RFC 8200-konformes IPv6 Header-Modul
// Legal & Standardkonform nach IETF STD 86 (RFC 8200)
// Entwickler: iki1uc
// ============================================================

const vtf = (this.version << 28) |
            (this.trafficClass << 20) |
            (this.flowLabel & 0xFFFFF);

version = 3

trafficClass = 9

flowLabel = 81

3 ↗ 9 ↘ 81

IPv6Header.axis = "LAXIO.CENTER";


this.axiom = {
    base: 3,
    expand: 9,
    full: 81,
    axis: "CENTER"
};

validateAxiom() {
    return (
        this.version === 6 &&
        this.axiom.base === 3 &&
        this.axiom.expand === 9 &&
        this.axiom.full === 81
    );
}

toAxiom() {
    return {
        axis: this.axiom.axis,
        impulse: this.axiom.expand / this.axiom.base,     // 9 → 3
        expansion: this.axiom.full / this.axiom.expand,   // 81 → 9
        completion: this.axiom.full / this.axiom.base     // 81 → 3
    };
}

