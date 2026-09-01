3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆ …

tasks: []

addTask(task) {
    this.tasks.push(task);
}

… 81 ◆ → 27 → 3 ↺

reset() {
    this.tasks = [];
}

27 ↘ 3 ↺

export const Pipeline6 = {
    type: "task-stack",
    mode: "passive",
    auto: false,
    tasks: [],

    addTask(task) {
        this.tasks.push(task);
    },

    reset() {
        this.tasks = [];
    }
};
