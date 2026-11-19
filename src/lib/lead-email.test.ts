// Run with: npm test   (Node's built-in test runner; Node 22 strips the TypeScript types)
import { test } from "node:test";
import assert from "node:assert/strict";
import { escapeHtml, row, wrap } from "./lead-email.ts";

test("escapeHtml turns markup into text", () => {
  assert.equal(escapeHtml(`<script>alert("x")</script>`), "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;");
  assert.equal(escapeHtml("<b>bold</b> & 'q'"), "&lt;b&gt;bold&lt;/b&gt; &amp; &#39;q&#39;");
});

test("row() renders <script> and <b> from a visitor as visible text", () => {
  const html = row("Message", `<script>alert(1)</script> <b>hi</b>`);
  assert.ok(!html.includes("<script>"), "no live <script> tag");
  assert.ok(!html.includes("<b>"), "no live <b> tag");
  assert.ok(html.includes("&lt;script&gt;alert(1)&lt;/script&gt;"));
  assert.ok(html.includes("&lt;b&gt;hi&lt;/b&gt;"));
});

test("row() leaves out empty values", () => {
  assert.equal(row("Email", ""), "");
  assert.equal(row("Email", undefined), "");
});

test("wrap() escapes the heading and keeps the escaped rows", () => {
  const html = wrap("<i>Quote</i>", row("Name", "<img src=x onerror=alert(1)>"));
  assert.ok(!html.includes("<i>Quote</i>"));
  assert.ok(!html.includes("<img"));
  assert.ok(html.includes("&lt;img src=x onerror=alert(1)&gt;"));
});
