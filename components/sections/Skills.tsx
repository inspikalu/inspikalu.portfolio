import { Brain, Code2, Terminal } from "lucide-react";
import { useState } from "react";
const skillsTabs = [
  {
    title: "Expertise",
    icon: <Brain className="w-4 h-4" />,
    skills: [
      { text: "User Experience", icon: <Brain className="w-4 h-4" /> },
      { text: "User Interface", icon: <Brain className="w-4 h-4" /> },
      { text: "Project Management", icon: <Brain className="w-4 h-4" /> },
    ],
  },
  {
    title: "Software",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { text: "Figma", icon: <Brain className="w-4 h-4" /> },
      { text: "Arch Linux", icon: <Brain className="w-4 h-4" /> },
      { text: "NeoVim", icon: <Brain className="w-4 h-4" /> },
    ],
  },
  {
    title: "Language",
    icon: <Terminal className="w-4 h-4" />,
    skills: [
      { text: "TypeScript", icon: <Brain className="w-4 h-4" /> },
      { text: "Rust", icon: <Brain className="w-4 h-4" /> },
      { text: "JavaScript", icon: <Brain className="w-4 h-4" /> },
      { text: "HTML and CSS", icon: <Brain className="w-4 h-4" /> },
    ],
  },
];
export default function Skills() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">Skills</h2>
      <section>
        <div className="flex items-start justify-start gap-4 text-textSecondary border-b border-b-gray-600 pb-2">
          {skillsTabs.map((tab, index) => {
            return (
              <div
                className={`flex items-center gap-1 relative cursor-pointer select-none ${
                  activeTabIndex === index && "text-textPrimary font-medium"
                }`}
                key={index}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.icon}
                {tab.title}
                {activeTabIndex === index && (
                  <div className="absolute w-full h-[2px] bg-textPrimary -bottom-[9px]"></div>
                )}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-4 my-3">
          {skillsTabs[activeTabIndex].skills.map((skill, index) => {
            return (
              <div
                className="flex items-center gap-1 bg-secondary p-3"
                key={index}
              >
                {skill.icon} {skill.text}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
