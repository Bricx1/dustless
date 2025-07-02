import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const Analytics = () => {
  const revenueRef = useRef(null);
  const leadSourceRef = useRef(null);
  const projectStatusRef = useRef(null);
  const geoRef = useRef(null);

  const [timePeriod, setTimePeriod] = useState('30');
  const [metrics, setMetrics] = useState({});

  const chartInstancesRef = useRef([]);

  const simulateMetrics = (period = '30') => {
    const multiplier = period === '7' ? 0.25 : period === '30' ? 1 : period === '90' ? 2.8 : 12;
    setMetrics({
      totalRevenue: Math.round(247850 * multiplier),
      newLeads: Math.round(186 * multiplier),
      conversionRate: (12.4 + Math.random() * 2).toFixed(1),
      activeProjects: Math.round(23 * Math.sqrt(multiplier)),
      satisfaction: (4.7 + Math.random() * 0.3).toFixed(1),
      avgProjectValue: Math.round(10850 + Math.random() * 2000),
    });
  };

  useEffect(() => {
    simulateMetrics(timePeriod);
    initCharts();

    return () => {
      chartInstancesRef.current.forEach((chart) => chart?.destroy());
      chartInstancesRef.current = [];
    };
  }, [timePeriod]);

  const initCharts = () => {
    chartInstancesRef.current.forEach((chart) => chart?.destroy());
    chartInstancesRef.current = [];

    const revenueChart = new Chart(revenueRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue',
          data: [32000, 45000, 38000, 52000, 48000, 65000],
          borderColor: '#667eea',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          tension: 0.4,
          fill: true,
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });

    const leadSourceChart = new Chart(leadSourceRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Website', 'Referrals', 'Google Ads', 'Social Media', 'Direct'],
        datasets: [{
          data: [124, 43, 28, 19, 12],
          backgroundColor: ['#667eea', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });

    const projectStatusChart = new Chart(projectStatusRef.current, {
      type: 'bar',
      data: {
        labels: ['Planning', 'In Progress', 'Completed', 'On Hold'],
        datasets: [{
          data: [8, 15, 18, 2],
          backgroundColor: ['#f59e0b', '#3b82f6', '#10b981', '#ef4444']
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });

    const geoChart = new Chart(geoRef.current, {
      type: 'polarArea',
      data: {
        labels: ['Toronto', 'Vancouver', 'Calgary', 'Montreal', 'Ottawa'],
        datasets: [{
          data: [89400, 54200, 38900, 31650, 18500],
          backgroundColor: [
            'rgba(102, 126, 234, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(239, 68, 68, 0.8)',
            'rgba(139, 92, 246, 0.8)'
          ]
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });

    chartInstancesRef.current.push(revenueChart, leadSourceChart, projectStatusChart, geoChart);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dustless Solutions Analytics</h1>
            <p className="text-gray-500 text-sm">Real-time business performance dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Time Period:</label>
            <select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="365">Last Year</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <KpiCard title="Total Revenue" icon="💰" value={`$${metrics.totalRevenue?.toLocaleString() || '...'}`} />
        <KpiCard title="New Leads" icon="👥" value={metrics.newLeads || '...'} />
        <KpiCard title="Conversion Rate" icon="📈" value={`${metrics.conversionRate || '...'}%`} />
        <KpiCard title="Active Projects" icon="🏗️" value={metrics.activeProjects || '...'} />
        <KpiCard title="Customer Satisfaction" icon="⭐" value={`${metrics.satisfaction || '...'} / 5`} />
        <KpiCard title="Avg Project Value" icon="💵" value={`$${metrics.avgProjectValue?.toLocaleString() || '...'}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard title="Revenue Trend (Last 6 Months)" chartRef={revenueRef} />
        <ChartCard title="Lead Sources" chartRef={leadSourceRef} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Project Status Overview" chartRef={projectStatusRef} />
        <ChartCard title="Geographic Performance" chartRef={geoRef} />
      </div>
    </div>
  );
};

const KpiCard = ({ title, icon, value }) => (
  <div className="bg-white shadow rounded-2xl p-6">
    <div className="flex items-center justify-between mb-3">
      <div className="text-sm text-gray-500 font-semibold uppercase">{title}</div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-indigo-500 text-xl">
        {icon}
      </div>
    </div>
    <div className="text-2xl font-bold text-gray-800">{value}</div>
  </div>
);

const ChartCard = ({ title, chartRef }) => (
  <div className="bg-white shadow rounded-2xl p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    <canvas ref={chartRef} className="w-full h-64" />
  </div>
);

export default Analytics;
