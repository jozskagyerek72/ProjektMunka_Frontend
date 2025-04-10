import { describe, it, expect } from "vitest";
import { readHRWorkers } from "../utils/crudUtil";
import { useState } from "react";

describe("getHRWorkers", ()=>
{
  it("getHRWorkers to be 3 item long array",async ()=>{
    const [hr, setHr] = useState(null)
    await readHRWorkers(setHr)
    expect(hr.length).toBe(3)
  })    
})