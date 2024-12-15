import React, { useState } from 'react';
import TipCard from '../components/tips/TipCard';
import TipCategory from '../components/tips/TipCategory';
import Modal from '../components/ui/Modal';
import { budgetingTips, savingTips, investingTips, generalTips } from '../data/financialTips';
import { tipDetails } from '../data/tipDetails';

export default function FinancialTips() {
  const [selectedTip, setSelectedTip] = useState<string | null>(null);

  const handleAction = (title: string) => {
    setSelectedTip(title);
  };

  const closeModal = () => {
    setSelectedTip(null);
  };

  const selectedTipDetails = selectedTip ? tipDetails[selectedTip] : null;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Financial Tips & Resources</h1>
        <p className="text-indigo-100 max-w-2xl">
          Discover practical advice and strategies to help you make informed financial decisions
          and achieve your money goals. From budgeting basics to investment insights, we've got
          you covered.
        </p>
      </div>

      <TipCategory
        title="Budgeting Basics"
        description="Master the fundamentals of budgeting to take control of your finances."
      >
        {budgetingTips.map((tip, index) => (
          <TipCard
            key={index}
            {...tip}
            onAction={() => handleAction(tip.title)}
          />
        ))}
      </TipCategory>

      <TipCategory
        title="Smart Saving Strategies"
        description="Build your savings with proven strategies and expert tips."
      >
        {savingTips.map((tip, index) => (
          <TipCard
            key={index}
            {...tip}
            onAction={() => handleAction(tip.title)}
          />
        ))}
      </TipCategory>

      <TipCategory
        title="Investment Insights"
        description="Learn the basics of investing and growing your wealth over time."
      >
        {investingTips.map((tip, index) => (
          <TipCard
            key={index}
            {...tip}
            onAction={() => handleAction(tip.title)}
          />
        ))}
      </TipCategory>

      <TipCategory
        title="General Financial Wisdom"
        description="Essential knowledge for maintaining good financial health."
      >
        {generalTips.map((tip, index) => (
          <TipCard
            key={index}
            {...tip}
            onAction={() => handleAction(tip.title)}
          />
        ))}
      </TipCategory>

      {selectedTipDetails && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={selectedTipDetails.title}
        >
          {selectedTipDetails.content}
        </Modal>
      )}
    </div>
  );
}