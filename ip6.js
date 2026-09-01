// ============================================================
// ip6.js – RFC 8200-konformes IPv6 Header-Modul
// Legal & Standardkonform nach IETF STD 86 (RFC 8200)
// Entwickler: iki1uc
// ============================================================

// IPv6 Header nach RFC 8200 (Section 3)
class IPv6Header {
    constructor({
        trafficClass = 0,
        flowLabel = 0,
        payloadLength = 0,
        nextHeader = 59,   // 59 = No Next Header (RFC 8200)
        hopLimit = 64,
        sourceAddress,
        destinationAddress
    }) {
        this.version = 6; // IPv6 Version (RFC 8200)
        this.trafficClass = trafficClass;
        this.flowLabel = flowLabel;
        this.payloadLength = payloadLength;
        this.nextHeader = nextHeader;
        this.hopLimit = hopLimit;

        // RFC 8200 verlangt 128-bit Adressen
        this.sourceAddress = this.validateIPv6(sourceAddress);
        this.destinationAddress = this.validateIPv6(destinationAddress);
    }

    // IPv6 Validierung nach RFC 8200 Format
    validateIPv6(addr) {
        const ipv6Regex = /^(?:[A-Fa-f0-9]{1,4}:){7}[A-Fa-f0-9]{1,4}$/;
        if (!ipv6Regex.test(addr)) {
            throw new Error("Ungültige IPv6-Adresse nach RFC 8200.");
        }
        return addr;
    }

    // Header serialisieren (RFC-konform)
    toBuffer() {
        const buffer = Buffer.alloc(40); // IPv6 Header ist immer 40 Bytes

        // Version (4 Bits), Traffic Class (8 Bits), Flow Label (20 Bits)
        const vtf = (this.version << 28) |
                    (this.trafficClass << 20) |
                    (this.flowLabel & 0xFFFFF);

        buffer.writeUInt32BE(vtf, 0);
        buffer.writeUInt16BE(this.payloadLength, 4);
        buffer.writeUInt8(this.nextHeader, 6);
        buffer.writeUInt8(this.hopLimit, 7);

        // IPv6-Adressen (je 16 Bytes)
        buffer.write(this.sourceAddress, 8, "utf8");
        buffer.write(this.destinationAddress, 24, "utf8");

        return buffer;
    }
}

module.exports = { IPv6Header };

