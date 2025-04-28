import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useTheme } from '@/hooks/useTheme';

interface ReviewCardProps {
  name: string;
  company: string;
  review: string;
  rating: number;
}

export function ReviewCard({ name, company, review, rating }: ReviewCardProps) {
  const { darkMode } = useTheme();

  return (
    <div className="glass-card p-6 rounded-lg glass-hover">
      <div className="mb-4">
        <h3 className="font-semibold">{name}</h3>
        <p className={cn(
          "text-sm",
          darkMode ? 'text-gray-400' : 'text-gray-600'
        )}>{company}</p>
      </div>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
      <p className={cn(
        "text-sm leading-relaxed",
        darkMode ? 'text-gray-300' : 'text-gray-600'
      )}>{review}</p>
    </div>
  );
}