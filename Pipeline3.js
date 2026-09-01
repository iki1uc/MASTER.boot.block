3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆ …
source() {
    return Pipeline4.build;
}
cycle() {

    // 3-MODUS
    if (Runtime.mode === 3) {
        const build = Pipeline4.build;
        const tasks = Pipeline3.generate(build);
        Runtime.mode = 9;
    }

    // 9-MODUS
    else if (Runtime.mode === 9) {
        const cascade = Pipeline2.generate();
        Runtime.mode = 81;
    }

    // 81-MODUS
    else if (Runtime.mode === 81) {
        const ees = Pipeline9.ees || Pipeline12.ees;
        Runtime.mode = 3;
    }
}
