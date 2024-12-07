import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface TipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export default function TipCard({ icon: Icon, title, description, actionText, onAction }: TipCardProps) {
  return (
    <button
      onClick={onAction}
      className="w-full text-left bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:translate-y-[-2px] group"
    >
      <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {actionText && (
        <div className="flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
          {actionText}
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </button>
  );
}