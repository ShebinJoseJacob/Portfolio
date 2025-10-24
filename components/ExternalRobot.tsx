"use client";

import { useEffect, useRef } from "react";

export default function ExternalRobot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load the robot HTML
    fetch("/robot.html")
      .then((res) => res.text())
      .then((html) => {
        if (!containerRef.current) return;

        // Create a sandboxed container
        const container = containerRef.current;
        container.innerHTML = html;

        // Execute scripts
        const scripts = container.querySelectorAll("script");
        scripts.forEach((oldScript) => {
          const newScript = document.createElement("script");
          Array.from(oldScript.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value);
          });
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode?.replaceChild(newScript, oldScript);
        });
      })
      .catch((error) => {
        console.error("Failed to load robot:", error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full text-text-muted">
              Robot unavailable
            </div>
          `;
        }
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden bg-primary-900/30 border border-primary-700/50"
      style={{ minHeight: "500px" }}
    />
  );
}
