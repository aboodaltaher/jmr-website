import { test } from "node:test";
import assert from "node:assert/strict";
import { normaliseEmail, normalisePhone } from "./user-data.ts";

test("UAE phone formats become E.164", () => {
  for (const v of ["058 557 5987", "0585575987", "58 557 5987", "+971 58 557 5987", "971585575987", "00971585575987", "+971-58-557-5987"]) {
    assert.equal(normalisePhone(v), "+971585575987", v);
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
