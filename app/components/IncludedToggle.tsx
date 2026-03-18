"use client";

import { useState } from "react";

export default function IncludedToggle({ items, twoCol = false }: { items: string[]; twoCol?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: 10 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          color: "#2563eb",
          padding: 0,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        What&apos;s included
        <span style={{
          display: "inline-block",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease",
          fontSize: 11,
        }}>▾</span>
      </button>

      {open && (
        <ul
          style={{
            marginTop: 10,
            padding: 0,
            listStyle: "none",
            display: twoCol ? "grid" : "flex",
            gridTemplateColumns: twoCol ? "1fr 1fr" : undefined,
            flexDirection: twoCol ? undefined : "column",
            gap: twoCol ? "4px 20px" : "4px 0",
          }}
        >
          {items.map((item) => (
            <li
              key={item}
              style={{
                fontSize: 13,
                color: "#334155",
                fontWeight: 600,
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
              }}
            >
              <span style={{ color: "#2563eb", flexShrink: 0, marginTop: 1 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
