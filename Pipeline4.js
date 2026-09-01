3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆ …

cycle() {

    // 3-MODUS
    if (Runtime.mode === 3) {
        Pipeline4.start();
        Pipeline3.generate(Pipeline4.build);
        Runtime.mode = "◎";
    }

    // NEUTRALRAUM
    else if (Runtime.mode === "◎") {
        Runtime.mode = 9;
    }

    // 9-MODUS
    else if (Runtime.mode === 9) {
        Pipeline2.generate();
        Runtime.mode = "△";
    }

    // ÜBERGANG
    else if (Runtime.mode === "△") {
        Runtime.mode = 81;
    }

    // 81-MODUS
    else if (Runtime.mode === 81) {
        Pipeline9.ees || Pipeline12.ees;
        Runtime.mode = "27";
    }

    // ZWISCHENRAUM
    else if (Runtime.mode === "27") {
        Runtime.mode = 3;
    }
}
