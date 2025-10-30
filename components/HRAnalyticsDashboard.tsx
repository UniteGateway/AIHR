
import React from 'react';
import { BarChart, DoughnutChart } from './Charts';

const HRAnalyticsDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">HR Analytics</h1>
        <p className="text-gray-500 mt-1">Deep dive into your hiring process and performance metrics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h3 className="font-bold text-gray-800 mb-4">Hiring Funnel Conversion Rates</h3>
          <div style={{ height: '300px' }}>
            <BarChart
              labels={['Screening', 'Interview', 'Offer', 'Hired']}
              data={[66, 56, 33, 53]} // Percentages
              label="Conversion %"
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h3 className="font-bold text-gray-800 mb-4">Diversity & Inclusion</h3>
          <div style={{ height: '300px' }}>
            <DoughnutChart
              labels={['Female', 'Male', 'Non-binary', 'Prefer not to say']}
              data={[42, 48, 4, 6]}
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-slate-200">
        <h3 className="font-bold text-gray-800 mb-4">Time to Fill (by Department)</h3>
        <div style={{ height: '350px' }}>
            <BarChart
                labels={['Engineering', 'Product', 'Design', 'Marketing', 'Sales']}
                data={[45, 32, 28, 25, 38]}
                label="Days to Fill"
                horizontal={true}
            />
        </div>
      </div>
      
    </div>
  );
};

export default HRAnalyticsDashboard;
