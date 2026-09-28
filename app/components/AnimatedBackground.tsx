"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#f7f3ed]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(39,39,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,39,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(231,122,80,0.18),transparent_30%),radial-gradient(circle_at_78%_10%,rgba(34,125,137,0.15),transparent_28%),linear-gradient(to_bottom,rgba(247,243,237,0.7),rgba(247,243,237,0.96)_62%)]" />
    </div>
  );
}
