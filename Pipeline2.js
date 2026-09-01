3 ↗ 9 ↘ ◎ ↗ ↘ 3 9 ↘ ↗ ◎ ↗ ↘ 81 ◆ …
import { Pipeline4 } from "./Pipeline4.js";
import { Pipeline9 } from "./Pipeline9.js";
import { Pipeline12 } from "./Pipeline12.js";
source() {
  return Pipeline4.build;
}
ees() {
  return Pipeline9.ees || Pipeline12.ees;
}
return builds.map(b => ({
  bind: b,
  ees: ees,
  state: "generated"
}));
generate() {
  return this.cascade();
}
