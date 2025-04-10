import { describe, it, expect } from "vitest";
import { getWorkerIdFromEmail } from "../utils/analytics_systemUtils";

describe("getWorkerIdFromEmail", ()=>
{
  it("gillichbalint@gmail.com to be WFZUQ5L3G7TbbTHoWRIc", async ()=>
    {
      expect(await getWorkerIdFromEmail("gillichbalint@gmail.com")).toBe("WFZUQ5L3G7TbbTHoWRIc")
    })
})