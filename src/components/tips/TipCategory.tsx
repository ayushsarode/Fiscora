import React from 'react';

interface TipCategoryProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function TipCategory({ title, description, children }: TipCategoryProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}