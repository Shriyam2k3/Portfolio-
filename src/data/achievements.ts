export interface AchievementItem {
  id: string;
  metric: string;
  title: string;
  description: string;
  platform: string;
  profileUrl: string;
  badgeText: string;
  verifiedPoints: string[];
}

export const achievementsData: AchievementItem[] = [
  {
    id: "leetcode",
    metric: "270+",
    title: "Data Structures & Algorithms Problems Solved",
    description:
      "Consistent algorithmic problem solver with over 270 verified problems solved on LeetCode covering dynamic programming, graph traversal, trees, arrays, binary search, and data structure design.",
    platform: "LeetCode",
    profileUrl: "https://leetcode.com/u/Shriyam2k3/",
    badgeText: "Verified LeetCode Profile",
    verifiedPoints: [
      "Over 270 DSA challenges solved with clean algorithmic time/space complexity",
      "Hands-on expertise across C++, Java, and Python implementations",
      "Strong conceptual foundation in algorithmic patterns (Two Pointers, Sliding Window, BFS/DFS, DP)",
    ],
  },
];

