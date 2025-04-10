import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { readHRWorkers } from "../utils/crudUtil";
import { useState } from "react";


vi.mock("../utils/crudUtil", () => 
({
  readHRWorkers: vi.fn()
}))

describe("getHRWorkers", () => 
{
  it("should return 3 HR workers", async () => {
    
    const mockHRWorkers = [
      { id: 1, name: "HR 1" },
      { id: 2, name: "HR 2" },
      { id: 3, name: "HR 3" }
    ]
    
    readHRWorkers.mockImplementation((setter) =>
    {
      setter(mockHRWorkers);
    })

    const { result } = renderHook(() => 
    {
      const [hr, setHr] = useState(null)
      return { hr, setHr }
    })

    await act(async () => 
    {
      await readHRWorkers(result.current.setHr)
    })

    expect(result.current.hr).toEqual(mockHRWorkers)
    expect(result.current.hr.length).toBe(3)
  })
})