/* Compact, defensive packets shared by the browser and protocol tests. */
export const PROTOCOL_VERSION = 1;
export const STATE_PACKET_BYTES = 52;

export const PACKET_KIND = Object.freeze({
  STATE: 1,
  CONTROL: 2
});

export const STATE_FLAGS = Object.freeze({
  CROUCHING: 1 << 0,
  ON_GROUND: 1 << 1,
  WALKING: 1 << 2,
  FIRING: 1 << 3,
  RELOADING: 1 << 4,
  SCOPED: 1 << 5,
  ALIVE: 1 << 6
});

// The index is part of the wire format. Keep this list append-only.
export const WEAPON_IDS = Object.freeze([
  'knife', 'glock', 'usps', 'p2000', 'p250', 'fiveseven', 'tec9', 'cz75',
  'deagle', 'r8', 'dualies', 'ak47', 'm4a4', 'm4a1s', 'famas', 'galil',
  'aug', 'sg553', 'awp', 'ssg08', 'g3sg1', 'scar20', 'mac10', 'mp9', 'mp7',
  'mp5sd', 'ump45', 'p90', 'bizon', 'nova', 'xm1014', 'sawedoff', 'mag7',
  'm249', 'negev', 'zeus', 'he', 'flash', 'smoke', 'molotov', 'incend',
  'decoy', 'c4', 'defkit'
]);

const WEAPON_INDEX = new Map(WEAPON_IDS.map((id, index) => [id, index]));
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

function finite(value, fallback = 0) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

function clamp(value, min, max, fallback = min) {
  return Math.min(max, Math.max(min, finite(value, fallback)));
}

function asBytes(data) {
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  return null;
}

export function weaponIndex(id) {
  return WEAPON_INDEX.has(id) ? WEAPON_INDEX.get(id) : 255;
}

export function weaponId(index) {
  return Number.isInteger(index) && index >= 0 && index < WEAPON_IDS.length
    ? WEAPON_IDS[index]
    : 'knife';
}

export function makeFlags(state = {}) {
  let flags = 0;
  if (state.crouching) flags |= STATE_FLAGS.CROUCHING;
  if (state.onGround) flags |= STATE_FLAGS.ON_GROUND;
  if (state.walking) flags |= STATE_FLAGS.WALKING;
  if (state.firing) flags |= STATE_FLAGS.FIRING;
  if (state.reloading) flags |= STATE_FLAGS.RELOADING;
  if (state.scoped) flags |= STATE_FLAGS.SCOPED;
  if (state.alive !== false) flags |= STATE_FLAGS.ALIVE;
  return flags;
}

export function encodeState(state = {}) {
  const buffer = new ArrayBuffer(STATE_PACKET_BYTES);
  const view = new DataView(buffer);
  view.setUint8(0, PROTOCOL_VERSION);
  view.setUint8(1, PACKET_KIND.STATE);
  view.setUint8(2, clamp(state.slot, 0, 31));
  view.setUint8(3, 0);
  view.setUint32(4, finite(state.sequence) >>> 0, true);
  view.setUint32(8, finite(state.tick) >>> 0, true);
  view.setFloat32(12, clamp(state.x, -10000, 10000), true);
  view.setFloat32(16, clamp(state.y, -1000, 1000), true);
  view.setFloat32(20, clamp(state.z, -10000, 10000), true);
  view.setFloat32(24, clamp(state.vx, -100, 100), true);
  view.setFloat32(28, clamp(state.vy, -100, 100), true);
  view.setFloat32(32, clamp(state.vz, -100, 100), true);
  view.setFloat32(36, clamp(state.yaw, -Math.PI * 8, Math.PI * 8), true);
  view.setFloat32(40, clamp(state.pitch, -Math.PI * 2, Math.PI * 2), true);
  view.setUint16(44, makeFlags(state), true);
  view.setUint8(46, weaponIndex(state.weapon));
  view.setUint8(47, clamp(state.health, 0, 100));
  view.setUint8(48, clamp(state.armor, 0, 100));
  view.setUint8(49, clamp(state.ammo, 0, 255));
  view.setUint8(50, state.alive === false ? 0 : 1);
  view.setUint8(51, 0);
  return buffer;
}

export function decodeState(data) {
  const bytes = asBytes(data);
  if (!bytes || bytes.byteLength !== STATE_PACKET_BYTES) return null;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (view.getUint8(0) !== PROTOCOL_VERSION || view.getUint8(1) !== PACKET_KIND.STATE) return null;
  const state = {
    slot: view.getUint8(2),
    sequence: view.getUint32(4, true),
    tick: view.getUint32(8, true),
    x: view.getFloat32(12, true),
    y: view.getFloat32(16, true),
    z: view.getFloat32(20, true),
    vx: view.getFloat32(24, true),
    vy: view.getFloat32(28, true),
    vz: view.getFloat32(32, true),
    yaw: view.getFloat32(36, true),
    pitch: view.getFloat32(40, true),
    flags: view.getUint16(44, true),
    weapon: weaponId(view.getUint8(46)),
    health: view.getUint8(47),
    armor: view.getUint8(48),
    ammo: view.getUint8(49),
    alive: view.getUint8(50) !== 0
  };
  if (![state.x, state.y, state.z, state.vx, state.vy, state.vz, state.yaw, state.pitch].every(Number.isFinite)) return null;
  if (state.slot > 31 || state.health > 100 || state.armor > 100) return null;
  state.crouching = !!(state.flags & STATE_FLAGS.CROUCHING);
  state.onGround = !!(state.flags & STATE_FLAGS.ON_GROUND);
  state.walking = !!(state.flags & STATE_FLAGS.WALKING);
  state.firing = !!(state.flags & STATE_FLAGS.FIRING);
  state.reloading = !!(state.flags & STATE_FLAGS.RELOADING);
  state.scoped = !!(state.flags & STATE_FLAGS.SCOPED);
  state.alive = state.alive && !!(state.flags & STATE_FLAGS.ALIVE);
  return state;
}

export function encodeControl(message = {}) {
  const payload = JSON.stringify({ v: PROTOCOL_VERSION, ...message });
  const body = textEncoder.encode(payload);
  const bytes = new Uint8Array(body.byteLength + 1);
  bytes[0] = PACKET_KIND.CONTROL;
  bytes.set(body, 1);
  return bytes.buffer;
}

export function decodeControl(data) {
  if (typeof data === 'string') {
    try {
      const message = JSON.parse(data);
      return message && message.v === PROTOCOL_VERSION && typeof message.type === 'string' ? message : null;
    } catch (error) {
      return null;
    }
  }
  const bytes = asBytes(data);
  if (!bytes || bytes.byteLength < 2 || bytes[0] !== PACKET_KIND.CONTROL) return null;
  try {
    const message = JSON.parse(textDecoder.decode(bytes.subarray(1)));
    return message && message.v === PROTOCOL_VERSION && typeof message.type === 'string' ? message : null;
  } catch (error) {
    return null;
  }
}
