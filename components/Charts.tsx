
import React from 'react';

// A simple placeholder for a bar chart
// In a real app, this would use a library like Chart.js or Recharts

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

interface BarChartProps {
  labels: string[];
  data: number[];
  label?: string;
  horizontal?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ labels, data, label = "Value", horizontal = false }) => {
  const maxValue = Math.max(...data) * 1.1; // Add 10% buffer

  if (horizontal) {
    return (
        <div className="w-full h-full flex flex-col space-y-3">
            {data.map((value, index) => (
                <div key={index} className="flex items-center">
                    <div className="w-28 text-right text-sm text-gray-500 pr-3 truncate">{labels[index]}</div>
                    <div className="flex-1 bg-slate-100 rounded-md h-6">
                        <div
                            className="h-6 rounded-md flex items-center justify-end pr-2"
                            style={{ width: `${(value / maxValue) * 100}%`, backgroundColor: COLORS[index % COLORS.length] }}
                        >
                            <span className="text-xs font-bold text-white">{value}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-around items-end border-b-2 border-l-2 border-slate-100 p-4 space-x-2">
      {data.map((value, index) => (
        <div key={index} className="flex flex-col items-center flex-1" title={`${labels[index]}: ${value}`}>
          <div className="text-xs font-bold text-gray-700">{value}</div>
          <div
            className="w-3/4 mt-1 rounded-t-sm hover:opacity-80 transition-opacity"
            style={{ height: `${(value / maxValue) * 90}%`, backgroundColor: COLORS[index % COLORS.length] }}
          ></div>
          <div className="text-xs text-gray-500 mt-2 text-center font-medium">{labels[index]}</div>
        </div>
      ))}
    </div>
  );
};

interface DoughnutChartProps {
    labels: string[];
    data: number[];
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({ labels, data }) => {
    const total = data.reduce((a, b) => a + b, 0);
    let cumulativePercent = 0;
    const gradients = data.map((value, index) => {
        const percent = (value / total) * 100;
        const start = cumulativePercent;
        cumulativePercent += percent;
        const end = cumulativePercent;
        return `${COLORS[index % COLORS.length]} ${start}% ${end}%`;
    });

    return (
         <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <div 
                className="w-48 h-48 rounded-full"
                style={{ background: `conic-gradient(${gradients.join(', ')})` }}
            ></div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                {labels.map((label, index) => (
                    <div key={index} className="flex items-center">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        <span className="ml-2 text-sm text-gray-600">{label} ({((data[index]/total)*100).toFixed(0)}%)</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
