import { test } from "node:test";
import assert from "node:assert/strict";
import { isLikelyBot, MIN_FILL_MS } from "./spam-guard.ts";

test("a filled honeypot is a bot", () => {
  assert.equal(isLikelyBot({ _hp: "http://spam.example", _elapsed: 9000 }), true);
});

test("a submission faster than the minimum is a bot", () => {
  assert.equal(isLikelyBot({ _hp: "", _elapsed: MIN_FILL_MS - 1 }), true);
});

test("a normal submission passes", () => {
  assert.equal(isLikelyBot({ _hp: "", _elapsed: MIN_FILL_MS + 500 }), false);
});

test("missing guard values never block a lead", () => {
  assert.equal(isLikelyBot({ name: "A", phone: "1" }), false);
  assert.equal(isLikelyBot({ _hp: "   ", _elapsed: undefined }), false);
});
