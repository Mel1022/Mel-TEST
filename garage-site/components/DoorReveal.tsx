import type { ReactNode } from "react";
/** Garage-door panels cover the content, then lift away on scroll to reveal it. */
export default function DoorReveal({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden" data-door>
      {children}
      <div aria-hidden="true" className="absolute inset-0 flex flex-col pointer-events-none z-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} data-door-panel className="flex-1 bg-gradient-to-b from-[#1b2227] to-[#12171b] border-b border-black/60 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
            {i === 2 && <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-24 h-1.5 bg-black/60 rounded-full" />}
          </div>
        ))}
      </div>
    </div>
  );
}
