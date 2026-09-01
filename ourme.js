DOO → DOOR → TRANS → WARB → KANAL → API
↓
▣ → 3 ↗ 9 ↘ ◎ ↗ ↘ 81 ◆ → △ → 27 → 3 ↺

USER
↓
DOO.activate()
↓
DOOR.openDoor()
↓
DOOR.trans()
↓
DOOR.warb()
↓
DOOR.kanal()
↓
DOOR.api()
↓
routeInteraction(axis, move)
↓
▣ → 3 ↗ 9 ↘ ◎ ↗ ↘ 81 ◆ → △ → 27 → 3 ↺
import { AXIS, MOVES, routeInteraction } from './ourme.js';
import DOOR_DOO from './door-doo-bridge.js';

export function USER_START(axis, move, payload) {
    // USER setzt Achse & Bewegung
    const interaction = routeInteraction(axis, move);

    // Vor-Orbit starten
    const preOrbit = DOOR_DOO.fullPipeline();

    // Übergang in den goldenen 6-Orbit
    return {
        user: { axis, move, payload },
        preOrbit,
        interaction,
        orbit: "▣ → 3 ↗ 9 ↘ ◎ ↗ ↘ 81 ◆ → △ → 27 → 3 ↺",
        state: "GOLDENE_6_READY"
    };
}
