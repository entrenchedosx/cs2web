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
| `src/joinscreen.js` | Asset warm-up and match loading progress screen. |
| `src/vera-brand.js` | Runtime Vera brand layer for the dynamically created menu and HUD. It changes labels and links only. |
| `src/vera-performance.js` | Runtime performance guard that keeps bot simulation from running redundantly at display refresh rate. |
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

Bot simulation is stepped at 30 Hz rather than once for every display refresh. On the lowest quality tier it uses a 20 Hz cadence. Rendering, input, collision rules, weapons, damage, objectives, round timing, and the number of bots remain the same; only redundant high-refresh AI updates are removed.

If a device still struggles, open the F8 panel and use `LOW-SPEC` to allow the final fallback to five bots, or use `LITE MAPS` for a lower-cost map variant when one is available. These are persisted locally under Vera's settings keys and can be reversed by the player.

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
