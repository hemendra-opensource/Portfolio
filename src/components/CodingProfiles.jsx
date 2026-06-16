import { motion } from "framer-motion";
import { ExternalLink, Code, Flame } from "lucide-react";

// Generate mock heatmap data (52 weeks x 7 days)
function generateHeatmapData(activeDays = 180) {
  const totalCells = 52 * 7;
  const data = Array(totalCells).fill(0);
  const activeCells = new Set();
  while (activeCells.size < activeDays) {
    activeCells.add(Math.floor(Math.random() * totalCells));
  }
  activeCells.forEach(i => {
    data[i] = Math.floor(Math.random() * 4) + 1;
  });
  return data;
}

function Heatmap({ data, color }) {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    weeks.push(data.slice(w * 7, w * 7 + 7));
  }

  const intensityColors = {
    0: "bg-white/5 dark:bg-white/5 light:bg-slate-100",
    1: `opacity-30`,
    2: `opacity-55`,
    3: `opacity-75`,
    4: `opacity-100`
  };

  return (
    <div className="flex gap-[3px] overflow-x-auto pb-2">
      {weeks.map((week, w) => (
        <div key={w} className="flex flex-col gap-[3px]">
          {week.map((val, d) => (
            <div
              key={d}
              className={`w-[10px] h-[10px] rounded-sm transition-transform hover:scale-150 cursor-default ${val === 0 ? "bg-white/5 dark:bg-white/5 light:bg-slate-100" : ""}`}
              style={val > 0 ? {
                backgroundColor: color,
                opacity: [0, 0.3, 0.55, 0.75, 1][val],
                boxShadow: val >= 3 ? `0 0 4px ${color}` : "none"
              } : {}}
              title={`${val} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

const PROFILES = [
  {
    platform: "LeetCode",
    handle: "hemendra-opensource",
    url: "https://leetcode.com/u/hemendra-opensource/",
    color: "#ff6b00",
    icon: "⚡",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Contest Rating", value: "1400+" },
      { label: "Global Rank", value: "Top 25%" },
      { label: "Streak", value: "45 days" }
    ],
    heatmapData: generateHeatmapData(200),
    description: "Consistently solving algorithmic challenges focusing on Dynamic Programming, Trees, Graphs, and Binary Search."
  },
  {
    platform: "GeeksforGeeks",
    handle: "sharmahem54se",
    url: "https://www.geeksforgeeks.org/profile/sharmahem54se",
    color: "#2f8d46",
    icon: "🌿",
    stats: [
      { label: "Problems Solved", value: "250+" },
      { label: "Institution Rank", value: "Top 10%" },
      { label: "Articles Read", value: "500+" },
      { label: "Score", value: "800+" }
    ],
    heatmapData: generateHeatmapData(150),
    description: "Active learner on GFG covering Data Structures, System Design concepts, and CS fundamentals comprehensively."
  }
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xs uppercase tracking-widest text-accent-cyan font-bold mb-2">DSA & Problem Solving</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-800 tracking-tight">
          Coding Profiles
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-cyan mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROFILES.map((profile, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-panel rounded-3xl border p-8 relative overflow-hidden group"
            style={{ borderColor: `${profile.color}25` }}
          >
            {/* Background glow */}
            <div
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 -z-10"
              style={{ backgroundColor: profile.color }}
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl border"
                  style={{ backgroundColor: `${profile.color}15`, borderColor: `${profile.color}30` }}
                >
                  {profile.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-800">{profile.platform}</h4>
                  <p className="text-xs font-mono" style={{ color: profile.color }}>@{profile.handle}</p>
                </div>
              </div>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold border px-3 py-2 rounded-xl hover:opacity-80 transition-opacity"
                style={{ color: profile.color, borderColor: `${profile.color}30`, backgroundColor: `${profile.color}10` }}
              >
                <ExternalLink size={12} /> View Profile
              </a>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary-dark dark:text-text-secondary-dark light:text-slate-500 mb-6 leading-relaxed">
              {profile.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {profile.stats.map((stat, i) => (
                <div key={i} className="glass-panel py-3 px-4 rounded-xl border text-center">
                  <div className="text-lg font-bold" style={{ color: profile.color }}>{stat.value}</div>
                  <div className="text-[10px] font-mono text-text-secondary-dark mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Activity Heatmap */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Flame size={14} style={{ color: profile.color }} />
                <span className="text-xs font-mono tracking-wider text-text-secondary-dark uppercase">Activity Heatmap (Past Year)</span>
              </div>
              <Heatmap data={profile.heatmapData} color={profile.color} />
              <div className="flex items-center gap-2 mt-2 text-[10px] font-mono text-text-secondary-dark">
                <span>Less</span>
                {[0.2, 0.4, 0.6, 0.8, 1].map((op, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: profile.color, opacity: op }} />
                ))}
                <span>More</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
