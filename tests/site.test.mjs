import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const htmlPath = new URL("../index.html", import.meta.url);
const cssPath = new URL("../styles.css", import.meta.url);
const scriptPath = new URL("../script.js", import.meta.url);

async function readPage() {
  return readFile(htmlPath, "utf8");
}

test("the document exposes a complete semantic shell", async () => {
  const html = await readPage();

  assert.match(html, /<html[^>]+lang="ja"/);
  assert.match(html, /<a[^>]+class="skip-link"[^>]+href="#main"/);
  assert.match(html, /<header\b/);
  assert.match(html, /<nav\b[^>]+aria-label="主要ナビゲーション"/);
  assert.match(html, /<main\b[^>]+id="main"/);
  assert.match(html, /<footer\b/);
});

test("navigation targets unique sections that exist", async () => {
  const html = await readPage();
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  const navBlock = html.match(/<nav\b[\s\S]*?<\/nav>/)?.[0] ?? "";
  const targets = [...navBlock.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(duplicates, []);
  assert.ok(targets.length >= 3);
  for (const target of targets) assert.ok(ids.includes(target), `missing #${target}`);
});

test("the first view contains the verified public identity", async () => {
  const html = await readPage();

  assert.match(html, /<h1[^>]*>[\s\S]*ぽっけ[\s\S]*<\/h1>/);
  assert.match(html, /27pokke/);
  assert.match(html, /Software Developer/);
  assert.match(html, /Tokyo/);
  assert.match(html, /href="#work"/);
  assert.match(html, /https:\/\/github\.com\/27pokke/);
});

test("the visual foundation includes focus and no-script-safe content", async () => {
  const css = await readFile(cssPath, "utf8");

  assert.match(css, /:focus-visible/);
  assert.match(css, /\.reveal\s*\{/);
  assert.doesNotMatch(css, /\.reveal\s*\{[^}]*visibility:\s*hidden/s);
  assert.match(css, /overflow-wrap:\s*anywhere/);
});

test("the work section presents factual, clearly labeled public activity", async () => {
  const html = await readPage();
  const projects = html.match(/<article\b[^>]*class="[^"]*project[^"]*"/g) ?? [];

  assert.ok(projects.length >= 4, "expected four project/activity records");
  assert.match(html, /https:\/\/github\.com\/27pokke\/27pokke(?:"|\/)/);
  assert.match(html, /https:\/\/github\.com\/27pokke\/laravel-ddd-practice/);
  assert.match(html, /https:\/\/github\.com\/27pokke\/kataribe/);
  assert.match(html, /https:\/\/github\.com\/27pokke\/danger-ruby-swiftlint/);
  assert.match(html, />自動化</);
  assert.match(html, />学習中</);
  assert.match(html, />構想</);
  assert.match(html, />Fork</);
  assert.match(html, /DDD/);
  assert.match(html, /SwiftLint/);
});

test("public connection links are canonical, accessible, and safe", async () => {
  const html = await readPage();

  assert.match(html, /href="https:\/\/github\.com\/27pokke"/);
  assert.match(html, /href="https:\/\/x\.com\/27pokke"/);
  assert.doesNotMatch(html, /mailto:/);

  const externalLinks = [...html.matchAll(/<a\b([^>]*target="_blank"[^>]*)>/g)];
  assert.ok(externalLinks.length >= 6);
  for (const [, attributes] of externalLinks) {
    assert.match(attributes, /rel="[^"]*noreferrer[^"]*"/);
    assert.match(attributes, /aria-label="[^"]*新しいタブ[^"]*"/);
  }
});

test("all local document assets exist", async () => {
  const html = await readPage();
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((value) => !value.startsWith("#") && !value.includes(":"));

  assert.ok(references.includes("styles.css"));
  assert.ok(references.includes("script.js"));
  assert.ok(references.includes("avatar.png"));
  await Promise.all(references.map((reference) => access(new URL(`../${reference}`, import.meta.url))));
});

test("responsive and motion-safe contracts are encoded in CSS", async () => {
  const css = await readFile(cssPath, "utf8");

  assert.match(css, /@media\s*\(max-width:\s*62rem\)/);
  assert.match(css, /@media\s*\(max-width:\s*42rem\)/);
  assert.match(css, /@media\s*\(min-width:\s*100rem\)/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /overflow-x:\s*clip/);
});

test("JavaScript enhancements expose resilient fallbacks", async () => {
  const script = await readFile(scriptPath, "utf8");

  assert.match(script, /IntersectionObserver/);
  assert.match(script, /matchMedia\("\(prefers-reduced-motion: reduce\)"\)/);
  assert.match(script, /aria-current/);
  assert.match(script, /classList\.add\("is-visible"\)/);
});
