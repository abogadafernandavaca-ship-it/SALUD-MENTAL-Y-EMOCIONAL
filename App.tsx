
import React from 'react';
import { 
  COLORS, 
  METHODOLOGY_AXES, 
  PROTOCOL_STEPS, 
  TIMELINE_PHASES 
} from './constants';
import { ContextChart, BudgetChart, CostComparisonChart } from './components/Charts';
import { Assistant } from './components/Assistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* HERO SECTION */}
      <header className="bg-gradient-to-r from-purple-700 via-pink-600 to-teal-500 text-white py-16 px-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-4 opacity-90 drop-shadow-md">
            Fundación Raíces de Amor que Sanan
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Brigadas de Salud <br /> 
            <span className="text-teal-200">Mental y Emocional</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8 opacity-95">
            Plan Piloto Integral en la U.E. Técnica Experimental Mitad del Mundo
          </p>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full font-bold shadow-xl">
            <span className="mr-2">📍</span> San Antonio de Pichincha, 2025-2026
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 mt-12 space-y-20">
        
        {/* SECTION 1: CONTEXT */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-purple-600 h-3 w-full"></div>
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <span className="bg-purple-100 p-2 rounded-lg">🚨</span> 
                  El Desafío: Descomprimir el Sistema
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Los Departamentos de Consejería Estudiantil (DECE) enfrentan una <strong className="text-purple-600">demanda histórica</strong>. La sobrecarga administrativa y el alto número de estudiantes limitan el tiempo para la prevención profunda.
                  </p>
                  <p>
                    Nuestro proyecto no busca reemplazar al DECE, sino ser el <strong>soporte estratégico</strong> que gestiona la contención emocional y la prevención primaria, permitiendo que la institución se enfoque en los casos críticos.
                  </p>
                </div>
              </div>
              <div className="flex-1 w-full bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner">
                <h4 className="text-center font-bold text-gray-400 uppercase text-xs mb-6 tracking-widest">Brecha de Atención Preventiva</h4>
                <ContextChart />
                <p className="text-xs text-center text-gray-400 mt-4 italic">
                  Comparativa de capacidad de respuesta vs demanda estudiantil actual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: METHODOLOGY */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold text-teal-800">Nuestra Metodología: Salud Integral</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Un enfoque holístico que fusiona la psicología clínica con la sabiduría ancestral andina.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_AXES.map((axis, i) => (
              <div 
                key={i} 
                className={`bg-white p-8 rounded-2xl shadow-md border-b-8 ${axis.color} hover:translate-y-[-8px] transition-all duration-300 group`}
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{axis.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{axis.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{axis.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PROTOCOL FLOW */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-[12px] border-orange-500">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Protocolo de Actuación y Seguridad</h2>
            <p className="text-gray-600 max-w-3xl">Garantizamos una ruta clara de atención y derivación, respetando las competencias del MINEDUC y asegurando acompañamiento permanente.</p>
          </div>

          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-gray-200 hidden md:block"></div>

            {PROTOCOL_STEPS.map((step, i) => (
              <div key={i} className="relative flex flex-col md:flex-row items-start gap-8 group">
                {/* Circle Number */}
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {step.id}
                </div>
                
                <div className="flex-1 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h4 className={`font-bold text-lg ${step.color.replace('bg-', 'text-')}`}>{step.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  {step.details && (
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h5 className="text-red-700 font-bold text-xs uppercase mb-2">Acciones Inmediatas:</h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.details.map((detail, j) => (
                            <li key={j} className="text-sm flex items-start gap-2 text-red-600">
                              <span className="text-red-400 mt-1">●</span> {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                        <p className="text-xs text-orange-700 font-medium">
                          <strong>🤝 Compromiso de No Abandono:</strong> Veeduría activa y terapias integrativas familiares en la sede de la Fundación.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: BUDGET & VALUE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Inversión Social Gestionada</h3>
              <p className="text-sm text-gray-400 mt-1">Distribución del presupuesto por autogestión ($28,500 total)</p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <BudgetChart />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-3 bg-purple-50 rounded-xl">
                <div className="text-xs text-purple-600 font-bold uppercase">Humano</div>
                <div className="text-xl font-bold">$18k</div>
              </div>
              <div className="text-center p-3 bg-teal-50 rounded-xl">
                <div className="text-xs text-teal-600 font-bold uppercase">Gestión</div>
                <div className="text-xl font-bold">$5k</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 to-black opacity-50"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-bold">Costo para el MINEDUC</h3>
              <CostComparisonChart />
              <div className="space-y-4">
                <p className="text-2xl font-light text-teal-400">Gratuidad Total Garantizada</p>
                <p className="text-sm text-gray-400 max-w-xs mx-auto">
                  La Fundación asume el 100% de la carga operativa mediante cooperaciones universitarias y donantes privados.
                </p>
              </div>
              <div className="pt-4">
                <div className="inline-block px-4 py-2 border border-teal-500/30 bg-teal-500/10 rounded-lg text-xs font-mono text-teal-300">
                  REF: AMPARO CONST. ART. 32 / 360
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: TIMELINE */}
        <section className="bg-teal-50 rounded-3xl p-10 md:p-14 border border-teal-100">
          <h2 className="text-3xl font-bold text-teal-900 mb-10 text-center">Cronograma de Impacto 2025</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {TIMELINE_PHASES.map((phase, i) => (
              <div key={i} className="flex items-center group">
                <div className="w-20 md:w-32 text-right pr-6 font-bold text-teal-600 text-xs md:text-sm tracking-tighter shrink-0">
                  {phase.time}
                </div>
                <div className={`flex-1 bg-white p-5 rounded-2xl shadow-sm border-l-8 ${phase.color} transform group-hover:translate-x-2 transition-transform duration-300`}>
                  <h4 className="font-bold text-gray-800 text-lg mb-1">{phase.title}</h4>
                  <p className="text-sm text-gray-500">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center border-t border-gray-200 pt-12 text-gray-400 space-y-4">
          <div className="flex justify-center gap-6 mb-4">
            <span className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">R</span>
            <span className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">A</span>
            <span className="h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">S</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] font-bold">Fundación Raíces de Amor que Sanan</p>
          <p className="max-w-2xl mx-auto text-sm leading-relaxed">
            Unidad Educativa Técnica Experimental Mitad del Mundo. <br />
            Base Legal: Constitución del Ecuador (Art. 32, 57, 360, 362) y LOEI.
          </p>
          <div className="text-[10px] py-4">© 2025 | San Antonio de Pichincha - Ecuador</div>
        </footer>
      </main>

      {/* AI ASSISTANT STICKY BUTTON */}
      <Assistant />
    </div>
  );
};

export default App;
