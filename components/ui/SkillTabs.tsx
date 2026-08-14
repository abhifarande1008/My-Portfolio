"use client";

import { useState } from "react";
import { skills, skillTabs } from "@/lib/skillsData";
import { SkillBar } from "./SkillBar";

export function SkillTabs() {
  const [active, setActive] = useState<(typeof skillTabs)[number]["id"]>("language");
  const visible = skills.filter((skill) => skill.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {skillTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            data-cursor="interactive"
            onClick={() => setActive(tab.id)}
            className={`rounded-full px-4 py-2 font-mono text-[length:var(--text-mono)] transition-colors ${
              active === tab.id
                ? "bg-accent text-void"
                : "border border-white/10 text-text-secondary hover:text-text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="space-y-5">
        {visible.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}
