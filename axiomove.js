

AXIOM = { full: 81, expand: 9, base: 3 }
AXIOM.axis = "FRONT";


Runtime.mode = "▣";

if (Runtime.mode === "▣") {
    const ax = axiomove();
    Runtime.mode = ax.next;   // → 3
}



▣ → 3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆ → 27 → 3 ↺


export const BlockRoom = {
    axis: "FRONT",
    enter() { return "▣"; },
    next() { return 3; }
};


export const Between27 = {
    enter() { return 27; },
    next() { return 3; }
};

export const Transition = {
    enter() { return "△"; },
    next() { return 81; }
};

Runtime.mode = BlockRoom.enter();   // ▣

cycle() {

    if (Runtime.mode === "▣") {
        const ax = axiomove();
        Runtime.mode = ax.next;     // → 3
    }

    else if (Runtime.mode === 3) {
        Pipeline4.start();
        Pipeline3.generate(Pipeline4.build);
        Pipeline6.reset();
        Runtime.mode = Neutral.enter();   // ◎
    }

    else if (Runtime.mode === "◎") {
        Runtime.mode = Neutral.next();    // 9
    }

    else if (Runtime.mode === 9) {
        Pipeline2.generate();
        Runtime.mode = Transition.enter(); // △
    }

    else if (Runtime.mode === "△") {
        Runtime.mode = Transition.next();  // 81
    }

    else if (Runtime.mode === 81) {
        Pipeline9.ees || Pipeline12.ees;
        Runtime.mode = Between27.enter();  // 27
    }

    else if (Runtime.mode === 27) {
        Runtime.mode = Between27.next();   // 3 ↺
    }
}
