import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  hasSeenIvshiTransform,
  markIvshiTransformSeen,
  transformSeenCookieName,
} from "@/services/ivshi/transform-seen";

function installCookieJar() {
  const jar = new Map<string, string>();

  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: {
      get cookie() {
        return [...jar.entries()]
          .map(([name, value]) => `${name}=${value}`)
          .join("; ");
      },
      set cookie(raw: string) {
        const segments = raw.split(";").map((part) => part.trim());
        const [nameValue] = segments;
        const eq = nameValue.indexOf("=");
        const name = nameValue.slice(0, eq);
        const value = nameValue.slice(eq + 1);
        jar.set(name, value);
      },
    },
  });

  return jar;
}

describe("Ivshi transform seen flag", () => {
  it("scopes the cookie name to a safe learner id", () => {
    assert.equal(
      transformSeenCookieName("learner-riya-abc12345"),
      "ivshi-transform-seen.learner-riya-abc12345",
    );
    assert.equal(
      transformSeenCookieName("learner/weird@id"),
      "ivshi-transform-seen.learner_weird_id",
    );
  });

  it("keeps Child A and Child B first-time flags independent", () => {
    installCookieJar();
    const childA = "learner-childa-11111111";
    const childB = "learner-childb-22222222";

    assert.equal(hasSeenIvshiTransform(childA), false);
    assert.equal(hasSeenIvshiTransform(childB), false);

    markIvshiTransformSeen(childA);

    assert.equal(hasSeenIvshiTransform(childA), true);
    assert.equal(hasSeenIvshiTransform(childB), false);

    markIvshiTransformSeen(childB);

    assert.equal(hasSeenIvshiTransform(childA), true);
    assert.equal(hasSeenIvshiTransform(childB), true);
  });
});
