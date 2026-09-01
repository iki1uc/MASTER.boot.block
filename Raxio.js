LAXIO.LEFT
Konstellation_1 … Konstellation_9

function buildSuperpositions() {
    const structure = {};

    AXES.forEach(axis => {
        FILES_9.forEach((file, index) => {
            const key = `${axis}:${file}`;
            structure[key] = {
                matrix3x3: matrixLeft(index),
                axis,
                option: `Konstellation_${index + 1}`
            };
        });
    });

    return structure;
}

module.exports = {
    buildSuperpositions
};

3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆ …
