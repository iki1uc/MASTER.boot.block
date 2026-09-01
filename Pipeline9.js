… ↘ 81 ◆ → 27 → 3 ↺
3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆ …
export const Runtime = {
    mode: 3,        // 3 | 9 | 81 | ◎ | △ | 27
    state: {},      // optional
    tick: 0         // clock
};
export const Neutral = {
    enter() { return "◎"; }
};

export const Transition = {
    enter() { return "△"; }
};

export const Between27 = {
    enter() { return 27; }
};

cycle() {

    // 3-MODUS
    if (Runtime.mode === 3) {
        Pipeline4.start();
        Pipeline3.generate(Pipeline4.build);
        Pipeline6.reset();
        Runtime.mode = Neutral.enter();   // ◎
    }

    // NEUTRALRAUM
    else if (Runtime.mode === "◎") {
        Runtime.mode = 9;
    }

    // 9-MODUS
    else if (Runtime.mode === 9) {
        Pipeline2.generate();
        Runtime.mode = Transition.enter(); // △
    }

    // ÜBERGANG
    else if (Runtime.mode === "△") {
        Runtime.mode = 81;
    }

    // 81-MODUS
    else if (Runtime.mode === 81) {
        Pipeline9.ees || Pipeline12.ees;
        Runtime.mode = Between27.enter(); // 27
    }

    // ZWISCHENRAUM
    else if (Runtime.mode === 27) {
        Runtime.mode = 3;  // ↺
    }
}
