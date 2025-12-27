
import { ProtocolStep, MethodologyAxis, Phase } from './types';

export const COLORS = {
  purple: '#7C3AED',
  pink: '#DB2777',
  teal: '#0D9488',
  orange: '#F59E0B',
  gray: '#9CA3AF',
  dark: '#1F2937'
};

export const METHODOLOGY_AXES: MethodologyAxis[] = [
  {
    title: 'Prevención Masiva',
    description: 'Campañas de sensibilización sobre violencia, género y gestión emocional para toda la comunidad.',
    icon: '📢',
    color: 'border-pink-500'
  },
  {
    title: 'Círculos Grupales',
    description: 'Talleres vivenciales para el manejo del estrés, autoestima y construcción de proyecto de vida.',
    icon: '⭕',
    color: 'border-teal-500'
  },
  {
    title: 'Terapias Holísticas',
    description: 'Contención individual, Medicina Floral Andina (51 esencias), reflexología y relajación.',
    icon: '🌿',
    color: 'border-purple-500'
  },
  {
    title: 'Enfoque Ancestral',
    description: 'Recuperación de saberes, identidad y conexión con la naturaleza (Amparo Const. Art. 360).',
    icon: '🌎',
    color: 'border-orange-500'
  }
];

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    id: 1,
    title: 'Fase Preparatoria',
    description: 'Tamizaje preventivo anónimo y mapeo con tutores para identificar necesidades.',
    color: 'bg-teal-500',
    icon: '📋'
  },
  {
    id: 2,
    title: 'Atención Individual (Filtro Verde/Amarillo)',
    description: 'Ansiedad leve o estrés. Escucha activa, herramientas de respiración y Terapia Floral.',
    color: 'bg-purple-500',
    icon: '🧘'
  },
  {
    id: 3,
    title: 'Detección de Riesgo (Filtro Rojo)',
    description: 'Violencia, Suicidio, Drogas.',
    color: 'bg-pink-600',
    icon: '⚠️',
    details: [
      'Contención Inmediata (Primeros Auxilios).',
      'Derivación Oficial al DECE (Ficha de Referencia).'
    ]
  }
];

export const TIMELINE_PHASES: Phase[] = [
  { time: 'ENERO', title: 'Fase 1: Preparación', description: 'Alianzas universitarias, Socialización y Diagnóstico.', color: 'border-teal-500' },
  { time: 'Q1', title: 'Fase 2: Herramientas', description: 'Talleres de regulación emocional y manejo de estrés.', color: 'border-purple-500' },
  { time: 'RECESO', title: 'Fase 3: Evaluación', description: 'Ajuste metodológico con el DECE.', color: 'border-orange-500' },
  { time: 'Q2', title: 'Fase 4: Resiliencia', description: 'Proyecto de Vida y cierre de ciclos (3ro Bachillerato).', color: 'border-pink-500' },
  { time: 'FIN AÑO', title: 'Fase 5: Resultados', description: 'Informe final y certificación.', color: 'border-gray-800' }
];
