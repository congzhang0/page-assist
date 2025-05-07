import { a1 as T, a2 as l } from "./SaveButton-B6h4W40A.js";
const t = new T(), p = new T({ area: "local" }), y = "browser", v = async () => {
  const e = await t.get("ttsProvider");
  return !e || e.length === 0 ? y : e;
}, b = async (e) => {
  await t.set("ttsProvider", e);
}, w = async () => (await speechSynthesis.getVoices()).map((s) => ({ voiceName: s.name, lang: s.lang })), u = async () => await t.get("voice"), L = async (e) => {
  await t.set("voice", e);
}, E = async () => {
  const e = await t.get("isTTSEnabled");
  return !e || e.length === 0 ? true : e === "true";
}, m = async (e) => {
  await t.set("isTTSEnabled", e.toString());
}, R = async () => await t.get("isSSMLEnabled") === "true", h = async (e) => {
  await t.set("isSSMLEnabled", e.toString());
}, V = async () => await t.get("elevenLabsApiKey"), M = async (e) => {
  await t.set("elevenLabsApiKey", e);
}, P = async () => await t.get("elevenLabsVoiceId"), f = async (e) => {
  await t.set("elevenLabsVoiceId", e);
}, A = async () => await t.get("elevenLabsModel"), x = async (e) => {
  await t.set("elevenLabsModel", e);
}, I = async () => {
  const e = await t.get("ttsResponseSplitting");
  return !e || e.length === 0 || e === "" ? "punctuation" : e;
}, K = async () => {
  const e = await p.get("removeReasoningTagTTS");
  return !e || e.length === 0 || e === "" ? true : e === "true";
}, k = async (e) => {
  await t.set("ttsResponseSplitting", e);
}, _ = async (e) => {
  await p.set("removeReasoningTagTTS", e.toString());
}, j = async () => {
  const [e, s, a, n, o, i, c, r, g, S] = await Promise.all([E(), v(), w(), u(), R(), V(), P(), A(), I(), K()]);
  return { ttsEnabled: e, ttsProvider: s, browserTTSVoices: a, voice: n, ssmlEnabled: o, elevenLabsApiKey: i, elevenLabsVoiceId: c, elevenLabsModel: r, responseSplitting: g, removeReasoningTagTTS: S };
}, B = async ({ ttsEnabled: e, ttsProvider: s, voice: a, ssmlEnabled: n, elevenLabsApiKey: o, elevenLabsVoiceId: i, elevenLabsModel: c, responseSplitting: r, removeReasoningTagTTS: g }) => {
  await Promise.all([m(e), b(s), L(a), h(n), M(o), f(i), x(c), k(r), _(g)]);
}, d = "https://api.elevenlabs.io/v1", D = async (e) => (await l.get(`${d}/voices`, { headers: { "xi-api-key": e } })).data.voices, U = async (e) => (await l.get(`${d}/models`, { headers: { "xi-api-key": e } })).data, C = async (e, s, a, n) => (await l.post(`${d}/text-to-speech/${a}`, { text: s, model_id: n }, { headers: { "xi-api-key": e, "Content-Type": "application/json" }, responseType: "arraybuffer" })).data;
export {
  v as a,
  K as b,
  V as c,
  A as d,
  P as e,
  C as f,
  u as g,
  j as h,
  R as i,
  D as j,
  U as k,
  B as s
};
