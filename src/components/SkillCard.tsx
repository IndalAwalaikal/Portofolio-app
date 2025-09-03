'use client';

import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  ChevronRight, 
  TrendingUp 
} from 'lucide-react';

// === INTERFACES ===
interface Skill {
  name: string;
  level: number;
  category: string;
  technologies: string[];
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// === KOMPONEN UTAMA ===
const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate progress bar
      const progressTimer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, 300 + index * 100);

      return () => clearTimeout(progressTimer);
    }, 100 + index * 150);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="w-6 h-6" />;
      case 'backend':
        return <Database className="w-6 h-6" />;
      case 'devops':
        return <Cloud className="w-6 h-6" />;
      case 'design':
        return <Palette className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return {
          bg: 'from-blue-600/20 to-cyan-600/20',
          border: 'border-blue-500/30',
          icon: 'text-blue-400',
          progress: 'from-blue-500 to-cyan-500',
          glow: 'shadow-blue-500/25',
        };
      case 'backend':
        return {
          bg: 'from-green-600/20 to-emerald-600/20',
          border: 'border-green-500/30',
          icon: 'text-green-400',
          progress: 'from-green-500 to-emerald-500',
          glow: 'shadow-green-500/25',
        };
      case 'devops':
        return {
          bg: 'from-purple-600/20 to-violet-600/20',
          border: 'border-purple-500/30',
          icon: 'text-purple-400',
          progress: 'from-purple-500 to-violet-500',
          glow: 'shadow-purple-500/25',
        };
      case 'design':
        return {
          bg: 'from-pink-600/20 to-rose-600/20',
          border: 'border-pink-500/30',
          icon: 'text-pink-400',
          progress: 'from-pink-500 to-rose-500',
          glow: 'shadow-pink-500/25',
        };
      default:
        return {
          bg: 'from-blue-600/20 to-cyan-600/20',
          border: 'border-blue-500/30',
          icon: 'text-blue-400',
          progress: 'from-blue-500 to-cyan-500',
          glow: 'shadow-blue-500/25',
        };
    }
  };

  const colors = getCategoryColor(skill.category);

  const getLevelDescription = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div
      className={`group relative bg-gradient-to-br ${colors.bg} backdrop-blur-lg border ${colors.border} rounded-2xl p-6 hover:border-opacity-60 hover:shadow-2xl hover:${colors.glow} transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      role="article"
      aria-label={`${skill.name} - ${getLevelDescription(skill.level)}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 bg-white/5 rounded-lg ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
            {getCategoryIcon(skill.category)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              {skill.name}
            </h3>
            <p className={`text-sm ${colors.icon} font-medium`}>
              {getLevelDescription(skill.level)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className={`w-4 h-4 ${colors.icon}`} />
          <ChevronRight
            className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform duration-300"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">Proficiency</span>
          <span className="text-sm font-bold text-white">{animatedLevel}%</span>
        </div>
        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${colors.progress} rounded-full transition-all duration-1000 ease-out relative`}
            style={{ width: `${animatedLevel}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <Code className="w-4 h-4" />
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 ${colors.icon} 
                transform opacity-0 group-hover:animate-fadeInScale`}
              style={{
                animationDelay: `${index * 0.1 + 0.3}s`,
                animationFillMode: 'forwards',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Skill Level Indicator */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Skill Level</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < Math.floor(skill.level / 20)
                    ? `bg-gradient-to-r ${colors.progress}`
                    : 'bg-gray-600'
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: isVisible ? 'fadeIn 0.3s ease-out forwards' : 'none',
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl pointer-events-none`}
      />
    </div>
  );
};

export default SkillCard;