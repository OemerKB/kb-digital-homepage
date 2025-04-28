import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonProps {
  darkMode: boolean;
}

export function ComparisonTable({ darkMode }: ComparisonProps) {
  const features = [
    { name: 'Individuelle Lösungen', kb: true, others: false },
    { name: 'Persönliche Betreuung', kb: true, others: false },
    { name: '24/7 Support', kb: true, others: false },
    { name: 'Faire Preisgestaltung', kb: true, others: false },
    { name: 'Modernste Technologien', kb: true, others: false },
  ];

  return (
    <div className={`overflow-x-auto rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <table className="w-full">
        <thead>
          <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <th className="px-6 py-4 text-left">Feature</th>
            <th className="px-6 py-4 text-center">KB Digital</th>
            <th className="px-6 py-4 text-center">Andere Agenturen</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr 
              key={index}
              className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
            >
              <td className="px-6 py-4">{feature.name}</td>
              <td className="px-6 py-4 text-center">
                <Check className="w-6 h-6 text-green-500 mx-auto" />
              </td>
              <td className="px-6 py-4 text-center">
                <X className="w-6 h-6 text-red-500 mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}