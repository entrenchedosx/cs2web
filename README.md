# Project Vera

Project Vera is a self-contained, static browser FPS with a tactical menu, offline-friendly local progression, and two playable modes: bomb defusal and team deathmatch. The public-facing short name is **Vera**.

This repository is a rebrand and presentation layer update of the existing game client. The match loop, movement, weapons, bots, maps, HUD, cases, inventory, and local progression remain implemented by the existing client. The Vera work adds a cohesive violet identity, generated V iconography, refreshed install metadata, a legal notice, and project documentation.

## What is included

- Tactical first-person gameplay with mouse/keyboard and touch-oriented UI paths.
- Bomb defusal flow with planting, defending, and defusing objectives.
- Team deathmatch flow with respawns and elimination scoring.
- Local loadout, inventory, case, challenge, sensitivity, graphics, and progress state.
- Responsive menu layout with map previews, performance diagnostics, loading progress, and reduced-motion support.
- Vera icon assets for browser tabs, install prompts, and the in-game brand layer.
- Privacy, terms, contact, partners, and legal-disclaimer pages.

## Project layout

| Path | Purpose |
| --- | --- |
| `index.html` | Game shell, HUD/menu styles, metadata, and menu enhancement scripts. |
| `src/main.js` | Main bundled game client: rendering, input, simulation, HUD wiring, weapons, bots, and progression. |
| `src/joinscreen.js` | Match loading progress screen; normal launches use the game's streaming loader to avoid background asset spikes. |
| `src/vera-brand.js` | Runtime Vera brand layer for the dynamically created menu and HUD. It changes labels and links only. |
| `src/vera-performance.js` | Runtime performance guard that keeps bot simulation from running redundantly at display refresh rate. |
| `src/vera-network-config.js` | Static LAN WebRTC configuration with optional ICE/TURN entries. |
| `src/network/protocol.js` | Compact binary player-state packets. |
| `src/network/webrtc.js` | Direct WebRTC peer connection with manual offer/answer exchange. |
| `src/network/game-adapter.js` | Multiplayer bridge that reuses the existing player, bot-slot, collision, weapon, and rendering systems. |
| `src/network/multiplayer.js` | Vera LAN multiplayer menu, manual handshake flow, state pump, combat events, and match synchronization. |
| `manifest.json` | Progressive-web-app name, colors, launch mode, and install icons. |
| `vera-icon.png` | Source Vera V monogram generated for this rebrand. |
| `favicon.svg`, `favicon.ico`, `favicon-*.png`, `icon-*.png`, `apple-touch-icon.png` | Browser and device icon variants. |
| `ui/`, `textures/`, `models/`, `sounds/` | Game UI, visual, model, and audio assets. |
| `privacy.html`, `terms.html`, `legal.html`, `contact.html`, `partners.html` | Public-facing policy and support pages. |

## Run locally

Because the game loads ES modules and many binary assets, serve the repository over HTTP rather than opening `index.html` directly.

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/` in a modern Chromium- or Firefox-based browser. The game is designed for a landscape viewport; a desktop window or a tablet-sized browser gives the best first-run experience.

## Controls

The exact bindings are editable in Settings and are stored in the browser. The default tactical FPS controls are:

| Action | Default |
| --- | --- |
| Move | `W` `A` `S` `D` |
| Look | Mouse |
| Fire | Left mouse button |
| Aim / secondary fire | Right mouse button |
| Jump | `Space` |
| Crouch | `Ctrl` / configured alternate |
| Use / interact | `E` |
| Buy menu | `B` |
| Drop weapon or objective | `G` |
| Pause / release cursor | `Esc` |
| Performance panel | `F8` |

If the cursor is not captured, click the game viewport before using mouse look. On touch devices, use the on-screen controls supplied by the client.

## Performance and tuning

Vera keeps the adaptive graphics director enabled by default. It measures recent frame times during live rounds and makes reversible changes only when sustained performance is below the target:

1. Render scale is reduced first because it lowers the number of pixels shaded every frame.
2. Quality is reduced next, which can disable expensive post-processing and shadow work.
3. Texture anisotropy is reduced after the settings that affect the whole frame.
4. Bot count is never changed automatically unless the player explicitly enables `LOW-SPEC` in the F8 panel.

The director reacts after a short sustained warning and waits before recovering a setting, preventing rapid quality oscillation. The F8 panel shows the current FPS, average/P95/max frame time, render scale, quality, anisotropy, pixel ratio, draw calls, triangles, texture counts, heap usage, and recent automatic actions. Use it to distinguish a GPU-heavy scene from a CPU-heavy simulation problem.

Bot simulation is stepped at 30 Hz rather than once for every display refresh. On the lowest quality tier it uses a 20 Hz cadence. The guard also drops stale AI backlog after a long frame and can reduce post-processing/quality after sustained slow frames, preventing a catch-up spiral from freezing the tab. Rendering, input, collision rules, weapons, damage, objectives, round timing, and the number of bots remain the same; only redundant high-refresh AI updates are removed.

The custom asset cache warmer is disabled on normal launches. Vera now streams the match through the engine's existing loader instead of downloading large map/model sets in the background while the menu is idle. The old preloader remains available only for diagnostics with `?preload=1`.

If a device still struggles, open the F8 panel and use `LOW-SPEC` to allow the final fallback to five bots, or use `LITE MAPS` for a lower-cost map variant when one is available. These are persisted locally under Vera's settings keys and can be reversed by the player.

## Multiplayer architecture

Multiplayer is an optional layer around the existing game. A normal offline launch still uses the original local player, bots, weapons, maps, collision, HUD, audio, and match loop. Multiplayer replaces one existing bot slot with a `RemotePlayer` adapter only after a room is connected; it does not create bots that pretend to be people.

The browser frontend is entirely static and GitHub Pages-compatible. Two players connect directly over WebRTC:

1. The host creates a six-character room code as a human-readable session label.
2. The host creates an ICE-complete WebRTC offer in the browser.
3. The two players exchange the temporary invite/answer text through their chosen LAN channel.
4. Both browsers connect directly over the LAN; the room code is not a server lookup key.
5. Unordered, unreliable `vera-state` DataChannel packets carry a compact 52-byte player snapshot at roughly 22 Hz.
6. Reliable ordered `vera-control` packets carry match start, round state, and unique firing events.
7. Remote snapshots are sequence-checked, buffered, interpolated, and briefly extrapolated so rendering does not wait for the network.
8. The host owns the first prototype's remote health/alive state. Guests receive host corrections for their own health and position. Packet fields are range-checked before entering the game.

Combat still uses the existing raycast and damage functions. A shot is transmitted as a compact event with a unique ID, direction, origin, and weapon identifier; each peer de-duplicates event IDs before applying it.

The initial LAN mode supports two players. A TURN service is not required for devices on the same local network, but optional ICE/TURN entries can be configured for more restrictive networks.

## Local multiplayer development

For GitHub Pages, open the deployed Vera URL on both devices. Choose `LAN MULTIPLAYER`.

On device A:

1. Choose `HOST LAN GAME`.
2. Note the displayed six-character `ROOM CODE` and tell device B which session it identifies.
3. Choose `COPY OFFER` and send the offer text to device B using any method convenient for your LAN session.
4. Paste device B's answer into `FRIEND'S ANSWER`.
5. Choose `START LAN MATCH`.

On device B:

1. Choose `JOIN LAN GAME`.
2. Enter the six-character room code shown by device A.
3. Paste device A's offer into `HOST INVITE`.
4. Choose `CREATE REPLY`.
5. Choose `COPY REPLY` and send it back to device A.

After the direct link is established, the host starts the selected map and mode for both clients. The room code is only a friendly label: GitHub Pages has no shared registry, so a static page cannot make a code discoverable across devices by itself.

## Production and GitHub Pages deployment

GitHub Pages hosts the complete multiplayer frontend. No Node.js process, signaling server, database, API key, or backend deployment is required. GitHub Pages supplies HTTPS, which is required for WebRTC on deployed devices.

Optional ICE servers can be configured before `src/vera-network-config.js` runs:

```html
<script>
  window.VERA_NETWORK_CONFIG = {
    iceServers: []
  };
</script>
```

The default configuration uses no external service. Devices on the same LAN should normally establish a direct host candidate. If a browser or network blocks that path, the session can require configured STUN/TURN infrastructure; that is optional and outside the GitHub Pages application itself.

## Multiplayer test procedure

The browser smoke test is:

1. Open the deployed GitHub Pages URL in two fresh browser clients on the same LAN.
2. Create a host offer in client A and confirm the offer text is generated.
3. Create an answer in client B and apply it in client A.
4. Confirm both clients show `CONNECTED` / `MATCH READY`.
5. Move and look in either client; the other client should show the interpolated remote model and aim direction.
6. Fire at the other player and confirm the existing hit, health, death, and respawn path changes on both clients.
7. Close one tab and confirm the remaining client shows `PLAYER DISCONNECTED` and removes the remote entity.
8. Repeat with two physical devices on the same LAN and with browser throttling or simulated latency when available.

Protocol and WebRTC behavior are intentionally browser-side because the project has no Node.js runtime or server component. Rendering, NAT behavior, hit placement, animation appearance, and device-to-device behavior remain manual tests.

## Known multiplayer limitations

- The first implementation is intentionally limited to two players.
- The host is the authority for remote health/alive state, but this is a LAN prototype rather than a fully authoritative dedicated game server.
- Automatic reconnect is not implemented; leaving and rejoining a room is the recovery path.
- Direct WebRTC connectivity may need optional STUN/TURN configuration on restrictive networks.
- The adapter reuses the current entity and match systems. Core movement, weapons, shooting, damage, death, respawn, HUD, and round timing are synchronized, while complex objective interactions should be verified manually for the selected map/mode.
- GitHub Pages remains playable offline/single-player even when LAN multiplayer is not used.

## Gameplay notes

### Bomb defusal

Attackers take the objective to a marked site, plant it, and protect it until detonation. Defenders can eliminate the attacking team before a plant or defuse the planted objective. A round can also end when a team is eliminated or the round timer expires. Use the buy phase to select weapons, armor, grenades, and utility appropriate to the round plan.

### Team deathmatch

Teams fight through a respawn-enabled elimination loop. The match favors coordinated movement, readable sightlines, and deliberate weapon selection. Respawn behavior, score flow, and the HUD remain owned by the existing game client.

### Local progression

Player name, settings, coins, cases, skins, loadouts, challenge progress, and performance preferences are stored in the browser's local storage. Clearing site data, changing browser profiles, or moving devices can reset this state. There is no account recovery system in this static build.

## Brand system

Vera uses a dark indigo/near-black base with electric violet accents:

- Primary violet: `#a855f7`
- Bright violet: `#c084fc`
- Deep indigo: `#4f46e5`
- Ink: `#0c0718`

The V monogram is used as the primary visual identifier. `src/vera-brand.js` is intentionally small and isolated so the branding can be changed without touching simulation code. It observes the client-created menu, normalizes any legacy visible label, adds the Vera mark, and appends the legal link.

## Documentation and policy pages

- [Legal disclaimer](./legal.html) — independence, third-party material, warranty, and virtual-item notice.
- [Terms and Conditions](./terms.html) — fair play, conduct, third parties, and service rules.
- [Privacy Policy](./privacy.html) — local storage, hosting logs, advertising, and contact data.
- [Contact](./contact.html) — support and community links.

## Verification checklist

Before publishing a build:

1. Serve the repository over HTTP and open the home screen.
2. Confirm the browser title, menu wordmark, HUD badge, favicon, and install metadata all read Vera or Project Vera.
3. Open Settings and verify bindings, audio, graphics, touch, and sensitivity controls still respond.
4. Start one bomb-defusal round and one team-deathmatch round; verify the player can move, aim, fire, buy, and pause.
5. Open Terms, Privacy, Legal, Contact, and Partners from the menu/footer.
6. Test a narrow viewport and a reduced-motion browser preference.
7. Clear browser site data only after confirming that local progress is disposable for the test session.

## Legal reminder

Read [`legal.html`](./legal.html) before redistributing the project. Project Vera is an independent browser game and is not affiliated with or endorsed by Valve or other third-party rights holders. Asset rights are not automatically transferred by this repository.
