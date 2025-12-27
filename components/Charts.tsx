
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Sector
} from 'recharts';
import { COLORS } from '../constants';

const contextData = [
  { name: 'Brecha de Atención', demanda: 90, capacidad: 30, aporte: 60 }
];

const budgetData = [
  { name: 'Talento Humano', value: 18000 },
  { name: 'Materiales', value: 3500 },
  { name: 'Logística', value: 2000 },
  { name: 'Gestión', value: 5000 },
];

export const ContextChart: React.FC = () => (
  <div className="h-64 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={contextData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" hide />
        <YAxis unit="%" />
        <Tooltip cursor={{ fill: 'transparent' }} />
        <Legend />
        <Bar name="Demanda Estudiantil" dataKey="demanda" fill={COLORS.pink} radius={[4, 4, 0, 0]} />
        <Bar name="Capacidad DECE" dataKey="capacidad" fill={COLORS.gray} radius={[4, 4, 0, 0]} />
        <Bar name="Aporte Fundación" dataKey="aporte" fill={COLORS.teal} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const BudgetChart: React.FC = () => {
  const chartColors = [COLORS.purple, COLORS.pink, COLORS.orange, COLORS.teal];
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={budgetData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {budgetData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const CostComparisonChart: React.FC = () => {
  const data = [
    { name: 'Aporte Fundación', value: 28500 },
    { name: 'Costo MINEDEC', value: 0 }
  ];
  return (
    <div className="relative h-48 w-48">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={80}
            stroke="none"
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            <Cell fill="#10B981" />
            <Cell fill="#374151" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-2xl font-bold">$0.00</span>
        <span className="text-[10px] uppercase tracking-tighter opacity-70">Para el Estado</span>
      </div>
    </div>
  );
};
