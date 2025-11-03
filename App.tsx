
import React, { useState, useEffect } from 'react';
import { CountdownPopup } from './components/CountdownPopup';
import { BenefitCard } from './components/BenefitCard';
import { TestimonialCard } from './components/TestimonialCard';
import { WhatsappIcon, NoDietIcon, NoExerciseIcon, FastResultsIcon, NaturalIcon } from './components/Icons';

const WHATSAPP_LINK = "whatsapp://send?phone=5517981597877&text=Ol%C3%A1,%20quero%20entrar%20no%20grupo!";

const App: React.FC = () => {
  const [countdown, setCountdown] = useState(3);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to ensure user sees it
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          window.location.href = WHATSAPP_LINK;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(countdownTimer);
    };
  }, []);
  
  const benefits = [
    {
      icon: <NoDietIcon />,
      title: 'Sem Dietas Restritivas',
      description: 'Coma o que você ama, sem culpa. Nosso método funciona sem que você precise abrir mão dos seus pratos favoritos.'
    },
    {
      icon: <NoExerciseIcon />,
      title: 'Sem Exercícios Exaustivos',
      description: 'Perca peso de forma eficaz sem precisar passar horas na academia. Ideal para quem tem uma rotina corrida.'
    },
    {
      icon: <FastResultsIcon />,
      title: 'Resultados Rápidos',
      description: 'Veja a diferença na balança e no espelho nas primeiras semanas. Resultados visíveis que te motivam a continuar.'
    },
    {
      icon: <NaturalIcon />,
      title: '100% Natural e Seguro',
      description: 'Fórmula exclusiva com ingredientes naturais, sem efeitos colaterais e aprovada por especialistas da área.'
    }
  ];

  const testimonials = [
    {
      quote: "Nunca imaginei que seria tão fácil perder peso. Já tinha tentado de tudo! Em menos de 2 meses, eliminei 12kg e recuperei minha autoestima. Super recomendo!",
      name: "Maria S.",
      age: 34,
      result: "-12kg"
    },
    {
      quote: "Estava cética no início, mas os resultados falam por si. Perdi 15kg e hoje tenho muito mais energia e disposição. Minha vida mudou completamente!",
      name: "Juliana P.",
      age: 42,
      result: "-15kg"
    },
    {
      quote: "Emagrecer depois dos 40 parecia impossível, mas este produto provou o contrário. Foram 8kg a menos sem sofrimento. Estou me sentindo mais jovem e confiante.",
      name: "Carla M.",
      age: 45,
      result: "-8kg"
    }
  ];

  return (
    <div className="bg-gray-900 text-white font-['Poppins']">
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(16, 24, 40, 0.8), rgba(16, 24, 40, 0.9)), url(https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2070&auto=format&fit=crop)"}}>
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left animate-fade-in-down">
              <span className="text-emerald-400 font-semibold uppercase tracking-widest text-sm">suplemento natural</span>
              <h1 className="text-4xl md:text-6xl font-extrabold my-4 leading-tight">
                O Segredo para Emagrecer Rápido, <span className="text-emerald-500">Sem Passar Fome.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Descubra o 'grão milagroso' que está revolucionando a perda de peso. Mais potente que capsulas e injeçoes famosas, porém 100% natural e seguro.
              </p>
              <a href={WHATSAPP_LINK} className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <WhatsappIcon />
                <span className="ml-3">ENTRE NO GRUPO VIP</span>
              </a>
              <p className="mt-4 text-sm text-gray-400">Vagas limitadas. Garanta a sua agora!</p>
            </div>
            <div className="flex justify-center items-center animate-fade-in-up">
              <img src="https://i.imgur.com/qAGvh3A.jpeg" alt="Frasco do produto de emagrecimento" className="w-full max-w-sm rounded-lg shadow-2xl transform hover:rotate-3 transition-transform duration-500" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Por Que Nosso Método é <span className="text-emerald-500">Infálível?</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-800">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Veja Quem Já <span className="text-emerald-500">Transformou o Corpo</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} quote={testimonial.quote} name={testimonial.name} age={testimonial.age} result={testimonial.result} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-emerald-600 text-white text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Sua Vaga no Grupo VIP Está Expirando!</h2>
            <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8 animate-pulse">
              Restam Apenas 17 Vagas Com o Valor Promocional!
            </p>
            <a href={WHATSAPP_LINK} className="inline-block px-12 py-5 bg-white text-emerald-600 font-bold text-xl rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              SIM, QUERO GARANTIR MINHA VAGA!
            </a>
            <p className="mt-6 text-lg font-medium">A partir de R$197 com frete grátis!</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p className="text-sm">&copy; 2024 Emagrecedor VIP. Todos os direitos reservados.</p>
          <p className="text-xs mt-2 max-w-3xl mx-auto">
            Disclaimer: Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>

      {showPopup && <CountdownPopup seconds={countdown} />}
    </div>
  );
};

export default App;
