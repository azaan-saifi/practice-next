"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

function About() {
  const router = useRouter();

  return (
    <div>
      <h1>About</h1>
      <button className="border-2 p-3" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
}

export default About;
