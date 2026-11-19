import { test } from "node:test";
import assert from "node:assert/strict";
import { normaliseEmail, normalisePhone } from "./user-data.ts";

test("UAE phone formats become E.164", () => {
  for (const v of ["050 123 4567", "0501234567", "50 123 4567", "+971 50 123 4567", "971501234567", "00971501234567", "+971-50-123-4567"]) {
    assert.equal(normalisePhone(v), "+971501234567", v);
  }
});

test("bad phones are dropped", () => {
  assert.equal(normalisePhone(""), undefined);
  assert.equal(normalisePhone("12"), undefined);
  assert.equal(normalisePhone("call me"), undefined);
});

test("email is trimmed and lower-cased, invalid dropped", () => {
  assert.equal(normaliseEmail("  Ali@Example.COM "), "ali@example.com");
  assert.equal(normaliseEmail("not-an-email"), undefined);
  assert.equal(normaliseEmail(undefined), undefined);
});
