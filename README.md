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
| `src/vera-network-config.js` | Static multiplayer configuration with server URL override and a 20-player room limit. |
| `src/network/protocol.js` | Compact binary player-state packets. |
| `src/network/webrtc.js` | Direct WebRTC peer connection with manual offer/answer exchange. |
| `src/network/signaling.js` | Automatic room-code WebSocket client and compact packet relay transport. |
| `src/network/game-adapter.js` | Multiplayer bridge that reuses the existing player, bot-slot, collision, weapon, and rendering systems. |
| `src/network/multiplayer.js` | Vera room-code multiplayer menu, team flow, state pump, combat events, and match synchronization. |
| `server/signaling_server.py` | Dependency-free Python room server for room codes, membership, packet relay, and disconnects. |
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

Multiplayer is optional. Offline Vera still uses the original player, bots, weapons, maps, collision, HUD, audio, and match loop. When a room is active, the adapter reuses existing bot/entity slots for real remote players; those slots are driven by validated network snapshots rather than fake bots.

The deployed frontend stays static on GitHub Pages. A small Python process running on the host PC is the room server:

```text
GitHub Pages (HTTPS frontend)
        |
        | secure WebSocket room connection
        v
Host PC: server/signaling_server.py
        |
        | compact validated state/control packets
        +--> Player 1 browser
        +--> Player 2 browser
        +--> ... up to Player 20
```

The server creates six-character room codes, keeps membership, assigns slots, broadcasts room events, relays 52-byte binary player snapshots as base64 WebSocket payloads, and relays small reliable control events. It does not store accounts or persistent player data. The client keeps rendering/input separate from the network tick: snapshots are sent about 22 times per second, sequence-checked, buffered, interpolated, and briefly extrapolated.

The host starts the endless T-vs-CT match after at least one other player selects a team. Each player can choose either side; team sizes are not balanced or capped by team. Later players can join the room, choose a team, and receive the current match configuration. The host remains the match authority for remote health/alive state, so this is a practical room-server prototype rather than an anti-cheat authoritative service.

## Local multiplayer development

Open two browser clients against the same frontend and run the Python room server:

```powershell
python server/signaling_server.py --host 0.0.0.0 --port 8765
python -m http.server 4173
```

For local testing, open this URL in both clients:

```text
http://127.0.0.1:4173/?signal=ws%3A%2F%2F127.0.0.1%3A8765
```

On the host browser:

1. Choose `LAN MULTIPLAYER` → `CREATE ROOM`.
2. Share the six-character room code.
3. Choose `T` or `CT` when ready.

On each joining browser:

1. Open the same frontend URL.
2. Choose `LAN MULTIPLAYER` → `JOIN ROOM`.
3. Enter the room code and choose `T` or `CT`.

There is no offer/answer, ICE, or WebRTC text to copy. The server accepts up to 20 total players per room, rejects the 21st player cleanly, and broadcasts joins/leaves to the room. `--host 0.0.0.0` allows other devices on the same Wi-Fi to reach the server using the host PC's private LAN address, for example `ws://192.168.1.25:8765`.

## Public access from GitHub Pages

GitHub Pages cannot run Python, and a private PC is not globally reachable merely because it is hosting a process. To let friends outside the host's Wi-Fi join, the Python server needs a public DNS name, a reachable TCP port, and secure WebSockets (`wss://`) when the frontend is opened over HTTPS.

The supported deployment shape is:

1. Run `server/signaling_server.py` on the host PC bound to `0.0.0.0`.
2. Forward the chosen TCP port on the router to that PC, or place the process behind a TLS reverse proxy/tunnel.
3. Use a valid certificate for the public host. The Python server can terminate TLS directly:

```powershell
python server/signaling_server.py --host 0.0.0.0 --port 443 --certfile C:\path\fullchain.pem --keyfile C:\path\privkey.pem
```

4. Open the GitHub Pages build with the public endpoint in its URL:

```text
https://entrenchedosx.github.io/cs2web/?signal=wss%3A%2F%2Fvera.example.com%2Fsignal
```

The `?signal=` value is intentionally configurable so the public server address is not hardcoded into the repository. `ws://` is suitable for local HTTP testing only; browsers block insecure `ws://` connections from an HTTPS GitHub Pages page. Do not commit private TLS keys or router credentials.

## Multiplayer test procedure

1. Start the Python server and static frontend using the commands above.
2. Open two fresh clients with the `?signal=` URL.
3. Create a room in client A; confirm a six-character code appears.
4. Join that code from client B; confirm both clients show a connected room without copy/paste signaling.
5. Choose different teams and confirm both enter the same endless match.
6. Move, look, fire, damage, die, and respawn; verify remote interpolation and combat events.
7. Open additional clients and join the same code; verify uneven teams and a third/fourth player.
8. Close a guest; verify its remote slot disappears. Close the host; verify the room closes for guests.
9. Test a 21st join and confirm the server returns `That room is full.`
10. Start the normal offline game without `?signal=` and verify single-player still works.

The browser/game portions are exercised manually because the repository is a static browser build. The Python server has a standard-library syntax check and a health endpoint; a real two-client browser test is the authoritative multiplayer check.

## Known multiplayer limitations

- The room server supports up to 20 total players; the current browser/entity adapter should be stress-tested on the target hardware before filling every slot.
- The host is the gameplay authority for remote health/alive state, but this is not a full anti-cheat server.
- The Python process must remain running and reachable. Closing the host process closes its rooms.
- Automatic reconnect is not implemented; leaving and rejoining with the room code is the recovery path.
- Global access requires router forwarding, a public host, or a TLS tunnel/reverse proxy. GitHub Pages alone cannot expose a private PC.
- The adapter reuses current entity and match systems. Core movement, weapons, shooting, damage, death, respawn, HUD, and team-deathmatch state are synchronized; complex objective interactions remain outside the endless multiplayer mode.
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
