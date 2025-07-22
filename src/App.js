import React, { useState, useEffect } from 'react';
import { Package, Truck, Box, Zap, Repeat, Lightbulb, CheckCircle, XCircle, Users, ArrowRight, Factory, DollarSign, Clock, Target, Rocket, RefreshCcw, TrendingUp, BarChart, MapPin, Route, Calendar, Percent, Smile } from 'lucide-react'; // Added Smile icon for thanks

// Main application component
const App = () => {
  // State to control the active section of the dashboard
  const [activeSection, setActiveSection] = useState('overview');

  // Data for Lean principles
  const leanPrinciples = [
    {
      id: 'valor',
      title: '1. Criação de Valor para o Cliente',
      icon: DollarSign,
      description: 'Definir o que o cliente realmente valoriza. Na logística do Mercado Livre, valor é entrega rápida, confiável, frete acessível e produtos em perfeito estado.',
      mercadolivreExample: 'Otimização de cada etapa para garantir que o pacote chegue ao cliente de forma eficiente e segura, agregando valor percebido (ex: Mercado Envios Full, Mercado Pontos).'
    },
    {
      id: 'mapear-fluxo',
      title: '2. Mapeamento do Fluxo de Valor',
      icon: Target,
      description: 'Identificar e visualizar todas as etapas do produto, da origem à entrega, para encontrar desperdícios.',
      mercadolivreExample: 'Mapeamento do ciclo do pedido: compra online, recebimento em CDs, armazenamento, picking, packing, expedição, transporte e entrega final. Cada ponto é analisado para otimização.'
    },
    {
      id: 'fluxo-continuo',
      title: '3. Criação de Fluxo Contínuo',
      icon: Rocket,
      description: 'Garantir que as etapas de valor ocorram sequencialmente, sem interrupções ou gargalos.',
      mercadolivreExample: 'Automação em CDs (robôs, esteiras), layout otimizado, operação 24/7, cross-docking e sincronização de modais (aéreo, rodoviário) para um fluxo suave.'
    },
    {
      id: 'producao-sob-demanda',
      title: '4. Estabelecimento de Produção Sob Demanda (Puxado)',
      icon: Zap,
      description: 'Mover itens apenas com demanda real, evitando superprodução e excesso de estoque.',
      mercadolivreExample: 'Mercado Envios Full opera com estoque mínimo e reposição baseada em vendas reais (Just-in-Time). Algoritmos preditivos posicionam produtos estrategicamente.'
    },
    {
      id: 'melhoria-continua',
      title: '5. Melhoria Contínua (Kaizen)',
      icon: RefreshCcw,
      description: 'Busca incessante pela perfeição, eliminando desperdícios e buscando excelência.',
      mercadolivreExample: 'Investimento contínuo em tecnologia (IA, machine learning), feedback de clientes (NPS), inovação (drones, veículos elétricos) e programas de sugestões de colaboradores.'
    },
  ];

  // Data for the 8 wastes (Muda)
  const leanWastes = [
    {
      id: 'erros-desperdicios',
      title: 'Redução de Erros e Desperdícios', // This will serve as a main heading for this section
      subsections: [
        {
          id: 'transporte',
          title: 'Transporte Desnecessário',
          icon: Truck,
          description: 'Movimento desnecessário de materiais ou produtos.',
          mercadolivreCombat: 'Expansão de CDs próximos, otimização de rotas com IA (30% menos tempo, 25% menos combustível) e frota própria.'
        },
        {
          id: 'inventario',
          title: 'Excesso de Inventário',
          icon: Box,
          description: 'Excesso de estoque sem demanda imediata.',
          mercadolivreCombat: 'Mercado Envios Full centraliza estoque, com gestão eficiente baseada na demanda. Algoritmos preditivos reduzem em 35% produtos parados.'
        },
        {
          id: 'movimentacao',
          icon: Users,
          title: 'Movimentação Desnecessária',
          description: 'Movimentos desnecessários de funcionários.',
          mercadolivreCombat: 'Layout otimizado em CDs, automação (robôs, esteiras) e postos de trabalho ergonômicos minimizam deslocamento.'
        },
        {
          id: 'espera',
          icon: Clock,
          title: 'Espera',
          description: 'Tempo de inatividade de pessoas, produtos ou equipamentos.',
          mercadolivreCombat: 'Processos padronizados e sincronizados, rastreamento em tempo real e Mercado Envios Flex para entregas rápidas.'
        },
        {
          id: 'superproducao',
          icon: Factory,
          title: 'Superprodução',
          description: 'Produzir mais do que o necessário, sem demanda.',
          mercadolivreCombat: 'Operações ativadas pela demanda real (sistema puxado), evitando processamento de itens sem pedido e estoque desnecessário.'
        },
        {
          id: 'superprocessamento',
          icon: Repeat,
          title: 'Superprocessamento',
          description: 'Realizar mais trabalho ou etapas do que o necessário.',
          mercadolivreCombat: 'Embalagem eficiente e padronizada, automação de etiquetas e notas fiscais, e integração de sistemas para evitar redundâncias.'
        },
        {
          id: 'defeitos',
          icon: XCircle,
          title: 'Defeitos',
          description: 'Erros, falhas ou produtos danificados que exigem retrabalho.',
          mercadolivreCombat: 'Controle de qualidade, tecnologia de rastreamento (código de barras, RFID) e automação em CDs (40% menos erros de separação).'
        },
        {
          id: 'talento-nao-utilizado',
          icon: Lightbulb,
          title: 'Talento Não Utilizado',
          description: 'Não aproveitar o potencial, criatividade e conhecimento dos funcionários.',
          mercadolivreCombat: 'Cultura de melhoria contínua (Kaizen), incentivo a soluções, programas de sugestões, treinamento e desenvolvimento.'
        },
      ]
    }
  ];

  // Component for displaying a principle or waste card
  const Card = ({ title, description, icon: Icon, example }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {example && (
        <div className="bg-blue-50 p-4 rounded-lg w-full">
          <p className="font-medium text-blue-800">No Mercado Livre:</p>
          <p className="text-blue-700 text-sm mt-1">{example}</p>
        </div>
      )}
    </div>
  );

  // Component for the interactive flow
  const InteractiveFlow = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [packagePosition, setPackagePosition] = useState({ x: 0, y: 0 });

    const flowSteps = [
      {
        name: '1. Pedido do Cliente',
        icon: Package,
        description: 'O cliente compra online. O sistema processa o pedido em tempo real, verifica o estoque e aloca o produto mais próximo. Início do sistema "Puxado".',
        lean: 'Criação de Valor para o Cliente, Mapeamento do Fluxo de Valor, Estabelecimento de Produção Sob Demanda',
        coords: { x: 10, y: 50 }, // Percentage coordinates for visual layout
      },
      {
        name: '2. Fulfillment Center (CD)',
        icon: Box,
        description: 'No CD, ocorre separação automatizada (picking) e embalagem otimizada. Etiquetagem e roteamento automáticos minimizam erros e movimentação.',
        lean: 'Criação de Fluxo Contínuo, Redução de Erros e Desperdícios',
        coords: { x: 30, y: 50 },
      },
      {
        name: '3. Transporte Primário',
        icon: Truck,
        description: 'Pacotes consolidados por região e rotas otimizadas. Monitoramento GPS em tempo real garante previsibilidade e combate desperdício de transporte.',
        lean: 'Criação de Fluxo Contínuo, Redução de Erros e Desperdícios',
        coords: { x: 50, y: 50 },
      },
      {
        name: '4. Hubs Regionais',
        icon: MapPin,
        description: 'Nos hubs, pacotes redistribuídos para otimização da "última milha". Integração com parceiros locais e cross-docking reduzem tempo de armazenagem.',
        lean: 'Criação de Fluxo Contínuo, Redução de Erros e Desperdícios',
        coords: { x: 70, y: 50 },
      },
      {
        name: '5. Entrega Final',
        icon: CheckCircle,
        description: 'Roteirização dinâmica e tentativas de entrega otimizadas. Alternativas de recebimento (Mercado Pontos, lockers) aumentam flexibilidade e valor percebido.',
        lean: 'Criação de Valor para o Cliente, Melhoria Contínua, Redução de Erros e Desperdícios',
        coords: { x: 90, y: 50 },
      },
    ];

    useEffect(() => {
      // Set initial package position
      setPackagePosition({
        x: flowSteps[currentStep].coords.x,
        y: flowSteps[currentStep].coords.y
      });
    }, [currentStep]); // Only update when currentStep changes

    const handleNext = () => {
      setCurrentStep((prev) => (prev + 1) % flowSteps.length);
    };

    const handlePrev = () => {
      setCurrentStep((prev) => (prev - 1 + flowSteps.length) % flowSteps.length);
    };

    const PackageIcon = Package; // Icon for the moving package

    return (
      <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Fluxo Logístico Interativo do Mercado Livre</h2>
        <p className="text-gray-700 text-center mb-8">
          Acompanhe a jornada de um pacote e descubra como o Lean Manufacturing otimiza cada etapa.
        </p>

        {/* Visualização do Fluxo com SVG para animação de rota */}
        <div className="relative w-full h-64 bg-gray-100 rounded-xl mb-8 flex items-center justify-center overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Base lines for the flow (inactive path) */}
            {flowSteps.slice(0, -1).map((step, index) => (
              <line
                key={`base-line-${index}`}
                x1={step.coords.x}
                y1={step.coords.y}
                x2={flowSteps[index + 1].coords.x}
                y2={flowSteps[index + 1].coords.y}
                stroke="#CBD5E0" // Gray color for inactive path
                strokeWidth="0.5"
              />
            ))}

            {/* Animated path for current step (active path) */}
            {flowSteps.map((step, index) => {
              if (index > 0 && index <= currentStep) {
                return (
                  <path
                    key={`animated-path-${index}`}
                    d={`M ${flowSteps[index - 1].coords.x} ${flowSteps[index - 1].coords.y} L ${flowSteps[index].coords.x} ${flowSteps[index].coords.y}`}
                    stroke="#3B82F6" // Blue color for active path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="path-animation"
                    style={{
                      strokeDasharray: '1000', // Needs to be larger than the longest path
                      strokeDashoffset: '1000',
                      animation: `drawPath 0.7s forwards ease-in-out`,
                      animationDelay: `${(index - 1) * 0.1}s` // Stagger animation for multiple segments
                    }}
                  />
                );
              }
              return null;
            })}
          </svg>

          {/* Stage Icons */}
          {flowSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.id}
                className={`absolute flex flex-col items-center text-center transition-all duration-500 ease-in-out ${index === currentStep ? 'z-20 scale-110' : 'z-10 scale-100'} ${index < currentStep ? 'opacity-70' : ''}`}
                style={{
                  left: `${step.coords.x}%`,
                  top: `${step.coords.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className={`p-3 rounded-full ${index === currentStep ? 'bg-blue-600 text-white shadow-xl' : 'bg-blue-200 text-blue-800'} transition-colors duration-300`}>
                  <StepIcon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                {/* Hide on very small screens to avoid clutter */}
                <span className="text-xs sm:text-sm mt-2 text-gray-700 font-medium whitespace-nowrap px-1 hidden sm:block">{step.name.split('. ')[1]}</span>
              </div>
            );
          })}

          {/* Animated Package */}
          <div
            className="absolute p-3 rounded-full bg-blue-800 text-white shadow-lg z-30 transition-all duration-700 ease-in-out"
            style={{
              left: `${packagePosition.x}%`,
              top: `${packagePosition.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <PackageIcon className="w-8 h-8" />
          </div>
        </div>

        {/* Current Step Description (Moved below the visual flow) */}
        <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 min-h-[180px] flex flex-col justify-center text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">{flowSteps[currentStep].name}</h3>
          <p className="text-gray-700 mb-4">{flowSteps[currentStep].description}</p>
          <p className="text-blue-800 font-medium">
            <span className="font-bold">Princípios Lean em foco:</span> {flowSteps[currentStep].lean}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Próximo
          </button>
        </div>
        <div className="flex justify-center w-full mt-4">
          {flowSteps.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full mx-1 ${index === currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  // Component for the metrics dashboard
  const MetricsDashboard = () => {
    const metricsData = {
      reducaoErrosDesperdicios: [
        { label: 'Redução de erros de separação', value: '40%', icon: XCircle, color: 'red' },
        { label: 'Redução no tempo médio de entrega', value: '30%', icon: Clock, color: 'blue' },
        { label: 'Redução no consumo de combustível', value: '25%', icon: Truck, color: 'green' },
        { label: 'Redução em produtos parados (estoque)', value: '35%', icon: Box, color: 'purple' },
      ],
      criacaoValorCliente: [
        { label: 'Entrega no mesmo dia (principais cidades)', value: 'Mercado Envios Full', icon: Zap, color: 'yellow' },
        { label: 'Pontos de retirada no Brasil', value: '+3.000', icon: MapPin, color: 'orange' },
        { label: 'Rastreamento em tempo real', value: 'Via app e notificações', icon: Package, color: 'cyan' },
      ],
      metricasFluxo: [
        { label: 'Lead time médio (antes)', value: '7-10 dias', icon: Calendar, color: 'gray' },
        { label: 'Lead time médio (agora)', value: '2-3 dias', icon: Calendar, color: 'blue' },
        { label: 'Taxa de entrega no prazo', value: '95%', icon: CheckCircle, color: 'green' },
        { label: 'Redução no tempo de processamento', value: '50%', icon: Clock, color: 'blue' },
      ],
      metricasPullSystem: [
        { label: 'Giro de estoque (Mercado Livre)', value: '12x ao ano', icon: RefreshCcw, color: 'teal' },
        { label: 'Giro de estoque (indústria)', value: '6x ao ano', icon: RefreshCcw, color: 'gray' },
        { label: 'Redução em produtos obsoletos', value: '45%', icon: XCircle, color: 'red' },
        { label: 'Aumento na disponibilidade', value: '30%', icon: CheckCircle, color: 'green' },
      ],
      resultadosKaizen: [
        { label: 'Redução no custo por entrega (últimos 2 anos)', value: '40%', icon: DollarSign, color: 'green' },
        { label: 'Aumento na velocidade de processamento (últimos 2 anos)', value: '50%', icon: Rocket, color: 'blue' },
        { label: 'Melhoria no NPS de logística (últimos 2 anos)', value: '25%', icon: TrendingUp, color: 'purple' },
        { label: 'Expansão de cobertura nacional', value: '95%', icon: MapPin, color: 'orange' },
      ],
    };

    const MetricCard = ({ label, value, icon: Icon, color }) => (
      <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-4">
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`w-8 h-8 text-${color}-600`} />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    );

    return (
      <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Painel de Métricas e Resultados Lean</h2>
        <p className="text-gray-700 text-center mb-8">
          Visualize o impacto tangível da aplicação dos princípios Lean na logística do Mercado Livre, com dados reais de otimização e melhoria.
        </p>

        {/* Redução de Erros e Desperdícios */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-5 flex items-center">
            <XCircle className="w-6 h-6 mr-2" /> Redução de Erros e Desperdícios
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsData.reducaoErrosDesperdicios.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>

        {/* Criação de Valor para o Cliente */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-5 flex items-center">
            <DollarSign className="w-6 h-6 mr-2" /> Criação de Valor para o Cliente
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricsData.criacaoValorCliente.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>

        {/* Métricas do Fluxo */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-5 flex items-center">
            <BarChart className="w-6 h-6 mr-2" /> Métricas do Fluxo
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsData.metricasFluxo.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>

        {/* Métricas de Performance (Pull System) */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-5 flex items-center">
            <Zap className="w-6 h-6 mr-2" /> Métricas de Performance (Sistema Puxado)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsData.metricasPullSystem.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>

        {/* Resultados Mensuráveis (Kaizen) */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-5 flex items-center">
            <RefreshCcw className="w-6 h-6 mr-2" /> Resultados Mensuráveis (Kaizen)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsData.resultadosKaizen.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-900 p-8 sm:p-12">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
          .animate-bounce-slow {
            animation: bounce-slow 2s infinite ease-in-out;
          }
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          /* Ensure path animation uses the correct duration and timing function */
          .path-animation {
            animation: drawPath 0.7s forwards ease-in-out;
          }
          @keyframes drawPath {
            from {
              stroke-dashoffset: 1000; /* Needs to be a value larger than the longest path length */
            }
            to {
              stroke-dashoffset: 0;
            }
          }

          /* Responsive adjustments for smaller screens */
          @media (max-width: 640px) {
            .flow-stage-name {
              display: none; /* Hide stage names on very small screens if they clutter */
            }
            .interactive-flow-container {
              height: 200px; /* Adjust height for smaller screens */
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
          Lean Manufacturing na Logística do Mercado Livre
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubra como os princípios Lean impulsionam a eficiência e a criação de valor na gigante do e-commerce.
        </p>
      </header>

      {/* Dashboard Navigation */}
      <nav className="flex justify-center mb-12">
        <ul className="flex flex-wrap justify-center bg-white p-2 rounded-full shadow-md">
          <li className="mx-2 my-1">
            <button
              onClick={() => setActiveSection('overview')}
              className={`py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
                activeSection === 'overview' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Visão Geral
            </button>
          </li>
          <li className="mx-2 my-1">
            <button
              onClick={() => setActiveSection('principles')}
              className={`py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
                activeSection === 'principles' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Princípios Lean
            </button>
          </li>
          <li className="mx-2 my-1">
            <button
              onClick={() => setActiveSection('wastes')}
              className={`py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
                activeSection === 'wastes' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              8 Desperdícios
            </button>
          </li>
          <li className="mx-2 my-1">
            <button
              onClick={() => setActiveSection('flow')}
              className={`py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
                activeSection === 'flow' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Fluxo Interativo
            </button>
          </li>
          <li className="mx-2 my-1">
            <button
              onClick={() => setActiveSection('metrics')}
              className={`py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
                activeSection === 'metrics' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Métricas e Resultados
            </button>
          </li>
          <li className="mx-2 my-1">
            <button
              onClick={() => setActiveSection('thanks')}
              className={`py-3 px-6 rounded-full font-semibold transition-colors duration-300 ${
                activeSection === 'thanks' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Agradecimentos
            </button>
          </li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <main className="max-w-6xl mx-auto">
        {activeSection === 'overview' && (
          <section className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Visão Geral: Lean e Logística do Mercado Livre</h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                  <Package className="w-7 h-7 mr-2" /> O que é Lean Manufacturing?
                </h3>
                <p className="mb-4">
                  É uma filosofia de gestão focada em maximizar o valor para o cliente e eliminar desperdícios. Originado no Sistema Toyota de Produção, o Lean otimiza processos pela melhoria contínua.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                  <Truck className="w-7 h-7 mr-2" /> A Logística do Mercado Livre
                </h3>
                <p className="mb-4">
                  O Mercado Livre é o maior marketplace da América Latina. Sua logística processa milhões de pedidos mensalmente, sendo um exemplo perfeito de aplicação dos princípios Lean em grande escala.
                </p>
              </div>
            </div>

            {/* Integrantes do Grupo Section */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
                <Users className="w-7 h-7 mr-2" /> Integrantes do Grupo
              </h3>
              <ul className="list-none p-0 m-0 text-gray-700 text-lg flex flex-wrap justify-center gap-x-8 gap-y-2">
                <li className="font-medium">Clailtim</li>
                <li className="font-medium">David</li>
                <li className="font-medium">Gustavo</li>
                <li className="font-medium">Valdecio</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setActiveSection('principles')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore os Princípios Lean
              </button>
            </div>
          </section>
        )}

        {activeSection === 'principles' && (
          <section className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Os 5 Princípios do Lean Manufacturing na Logística</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leanPrinciples.map((principle) => (
                <Card
                  key={principle.id}
                  title={principle.title}
                  description={principle.description}
                  icon={principle.icon}
                  example={principle.mercadolivreExample}
                />
              ))}
            </div>
          </section>
        )}

        {activeSection === 'wastes' && (
          <section className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Redução de Erros e Desperdícios: Os 8 Mudas na Logística do Mercado Livre</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leanWastes[0].subsections.map((waste) => (
                <Card
                  key={waste.id}
                  title={waste.title}
                  description={waste.description}
                  icon={waste.icon}
                  example={waste.mercadolivreCombat}
                />
              ))}
            </div>
          </section>
        )}

        {activeSection === 'flow' && <InteractiveFlow />}

        {activeSection === 'metrics' && <MetricsDashboard />}

        {activeSection === 'thanks' && (
          <section className="bg-white p-8 rounded-xl shadow-lg mb-8 text-center">
            <h2 className="text-4xl font-bold text-blue-800 mb-6 flex items-center justify-center">
              <Smile className="w-10 h-10 mr-3" /> Agradecemos a Sua Atenção!
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Esperamos que esta apresentação tenha proporcionado insights valiosos sobre a aplicação do Lean Manufacturing na logística do Mercado Livre.
            </p>
            <div className="relative inline-block group cursor-pointer">
              {/* GIF do cachorro "Bom Dia". URL direto obtido do Tenor. */}
              <img
                src="https://media.tenor.com/nUolmeC7l14AAAAj/dog-meme.gif" // NOVO URL DO GIF!
                alt="Meme de Agradecimento: Cachorro Bom Dia"
                className="rounded-lg shadow-md transition-transform transform group-hover:scale-105 duration-300 w-full max-w-md mx-auto"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/cccccc/000?text=Meme+Indisponível"; }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                Obrigado por nos acompanhar! 😉
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8">
              Qualquer dúvida, estamos à disposição!
            </p>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>&copy; 2025 Lean Manufacturing e Logística. Todos os direitos reservados.</p>
        <p>Desenvolvido para apresentação - Julho 2025</p>
      </footer>
    </div>
  );
};

export default App;
