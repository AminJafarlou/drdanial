import { Check } from 'lucide-react'; // ✅ tick icon
import React from 'react';

type Step = {
  title: string
  description: string
}

type StepperProps = {
  items: Step[]
}

export const VerticalStepper: React.FC<StepperProps> = ({ items }) => {
  return (
    <div className="relative flex flex-col">
      {items.map((step, idx) => (
        <div key={idx} className="flex items-start relative pb-8 md:pb-12 last:pb-0">
          {idx !== items.length - 1 && <div className="absolute start-4 top-6 w-px h-full bg-gray-300" />}

          <div className="stepper-indicator">
            <Check size={16} className="text-white" />
          </div>

          <div className="ms-6">
            <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
