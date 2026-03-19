import { getAPIKey } from "../api/auth";
import { describe, test, expect } from "vitest";

describe("getApiKey", () => {
  test("should return an API key", () => {
    expect(getAPIKey({ authorization: "ApiKey my-secret-key" })).toBe(
      "my-secret-key",
    );
  });
});
