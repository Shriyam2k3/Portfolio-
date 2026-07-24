import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiGitPullRequest, FiStar, FiEye, FiBookOpen } from 'react-icons/fi';

const USERNAME = 'Shriyam2k3';

const defaultProfile = {
  avatar_url: 'https://avatars.githubusercontent.com/u/120286824?v=4',
  name: 'Shriyam Rastogi',
  bio: 'Full Stack MERN Developer | AI Enthusiast',
  public_repos: 24,
  followers: 12,
  following: 15,
  html_url: `https://github.com/${USERNAME}`
};

const defaultRepos = [
  {
    id: 1,
    name: 'ai-code-reviewer',
    description: 'An AI-powered automated code review tool executing static analysis and refactoring metrics using Groq API.',
    stargazers_count: 5,
    forks_count: 2,
    language: 'JavaScript',
    html_url: `https://github.com/${USERNAME}/ai-code-reviewer`
  },
  {
    id: 2,
    name: 'wanderlust',
    description: 'A responsive lodging marketplace featuring listings, maps, user reviews, and comprehensive image uploads.',
    stargazers_count: 8,
    forks_count: 3,
    language: 'JavaScript',
    html_url: `https://github.com/${USERNAME}/wanderlust`
  },
  {
    id: 3,
    name: 'leetcode-solutions',
    description: 'My personal archive of daily data structures and algorithms challenges resolved on LeetCode.',
    stargazers_count: 12,
    forks_count: 1,
    language: 'C++',
    html_url: `https://github.com/${USERNAME}/leetcode-solutions`
  },
  {
    id: 4,
    name: 'mern-blog',
    description: 'A feature-rich blogging system with Markdown support, text search, content categorizations, and JWT admin control.',
    stargazers_count: 4,
    forks_count: 0,
    language: 'JavaScript',
    html_url: `https://github.com/${USERNAME}/mern-blog`
  }
];

export default function GitHubStats() {
  const [profile, setProfile] = useState(defaultProfile);
  const [repos, setRepos] = useState(defaultRepos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Fetch user profile
        const profileRes = await fetch(`https://api.github.com/users/${USERNAME}`);
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch repositories
        const reposRes = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=4`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposRes.json();
        
        // Filter out forks or take first 4 clean ones
        const cleanRepos = reposData.filter(repo => !repo.fork).slice(0, 4);
        if (cleanRepos.length > 0) {
          setRepos(cleanRepos);
        }
      } catch (err) {
        console.warn('GitHub API failed (likely rate-limited). Using premium backup data.', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Generate 53 weeks x 7 days contributions mock grid
  const renderContributions = () => {
    const grid = [];
    const colorLevels = [
      'bg-gray-100 dark:bg-gray-800',
      'bg-brand-cyan/20 dark:bg-brand-cyan/10',
      'bg-brand-cyan/45 dark:bg-brand-cyan/30',
      'bg-brand-purple/60 dark:bg-brand-purple/50',
      'bg-brand-purple dark:bg-brand-purple/90'
    ];
    
    // Create columns of 7 days
    for (let w = 0; w < 40; w++) { // 40 weeks to fit nicely in cards
      const week = [];
      for (let d = 0; d < 7; d++) {
        // Random level with bias towards lower values
        const rand = Math.random();
        let level = 0;
        if (rand > 0.85) level = 4;
        else if (rand > 0.7) level = 3;
        else if (rand > 0.5) level = 2;
        else if (rand > 0.25) level = 1;
        
        week.push(
          <div 
            key={`${w}-${d}`} 
            className={`w-[10px] h-[10px] rounded-[2px] transition-all hover:scale-125 duration-100 cursor-pointer ${colorLevels[level]}`}
            title={`${level * 2 + 1} contributions`}
          />
        );
      }
      grid.push(
        <div key={w} className="flex flex-col gap-[3px]">
          {week}
        </div>
      );
    }

    return (
      <div className="flex gap-[3px] overflow-x-auto pb-2 scrollbar-thin max-w-full justify-center">
        {grid}
      </div>
    );
  };

  return (
    <div className="p-6 rounded-3xl bg-gray-50/50 dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 glassmorphism shadow-md flex flex-col justify-between h-full">
      <div>
        {/* Profile Card Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <img 
            src={profile.avatar_url} 
            alt={profile.name} 
            className="w-20 h-20 rounded-2xl border border-brand-purple shadow-sm object-cover"
          />
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1 justify-center sm:justify-start">
              <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white">
                {profile.name || USERNAME}
              </h3>
              <a 
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-purple dark:text-brand-cyan hover:underline self-center"
              >
                @{USERNAME}
              </a>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{profile.bio}</p>
            
            <div className="flex gap-4 text-xs font-semibold justify-center sm:justify-start text-gray-600 dark:text-gray-300">
              <div>
                <span className="text-brand-cyan font-bold">{profile.public_repos}</span> Repos
              </div>
              <div>
                <span className="text-brand-cyan font-bold">{profile.followers}</span> Followers
              </div>
              <div>
                <span className="text-brand-cyan font-bold">{profile.following}</span> Following
              </div>
            </div>
          </div>
        </div>

        {/* Repos Grid Title */}
        <div className="flex items-center gap-2 mb-4">
          <FiBookOpen className="text-brand-cyan" />
          <h4 className="text-sm font-bold font-display text-gray-800 dark:text-gray-200">
            Recent Repositories
          </h4>
        </div>

        {/* Repos List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white dark:bg-dark-card/50 border border-gray-200 dark:border-white/5 hover:border-brand-cyan/30 dark:hover:border-brand-cyan/30 hover:scale-[1.01] hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h5 className="font-bold text-xs text-gray-900 dark:text-white mb-1 truncate">
                  {repo.name}
                </h5>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-normal mb-3">
                  {repo.description || 'No description provided.'}
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] font-semibold text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  {repo.language || 'Code'}
                </span>
                <span className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5"><FiStar size={10} /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-0.5"><FiGitPullRequest size={10} /> {repo.forks_count}</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Contributions Matrix */}
        <div className="mt-6 border-t border-gray-150 dark:border-gray-800/60 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FiGithub className="text-brand-purple" />
              <h4 className="text-sm font-bold font-display text-gray-800 dark:text-gray-200">
                Contribution Calendar
              </h4>
            </div>
            <span className="text-[10px] font-medium text-gray-400">
              Mocked live metrics
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card/50 border border-gray-200 dark:border-white/5 overflow-hidden">
            {renderContributions()}
            <div className="flex justify-between items-center text-[10px] text-gray-400 mt-3 px-1">
              <span>Less</span>
              <div className="flex gap-1.5">
                <div className="w-[10px] h-[10px] rounded-[2px] bg-gray-100 dark:bg-gray-800" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-brand-cyan/20 dark:bg-brand-cyan/10" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-brand-cyan/45 dark:bg-brand-cyan/30" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-brand-purple/60 dark:bg-brand-purple/50" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-brand-purple dark:bg-brand-purple/90" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
