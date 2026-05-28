"use client";

import { useState } from "react";
import type { Tool } from "../content";
import ToolsTable from "./ToolsTable";
import Collapsible from "./Collapsible";

/**
 * Collapsible wrapper for the "Product & visual toolkit" section.
 * Matches the existing `.disclosure` pattern used by Licenses &
 * credentials and Motion tools — same affordance, same look.
 *
 * Defaults closed so the page opens compact and the user expands the
 * tools they actually need.
 */
export default function ToolkitDisclosure({
  heading,
  body,
  tools,
}: {
  heading: string;
  body: string;
  tools: Tool[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="disclosure"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="h-sec">{heading}</span>
        <span className="disclosure-ind">{open ? "[ − ]" : "[ + ]"}</span>
      </button>
      <p style={{ margin: "8px 0 0" }}>{body}</p>

      <Collapsible open={open}>
        <ToolsTable tools={tools} />
      </Collapsible>
    </div>
  );
}
