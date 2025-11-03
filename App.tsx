

import React, { useState, useEffect } from 'react';
import { CountdownPopup } from './components/CountdownPopup';
import { BenefitCard } from './components/BenefitCard';
import { TestimonialCard } from './components/TestimonialCard';
import { WhatsappIcon, NoDietIcon, NoExerciseIcon, FastResultsIcon, NaturalIcon, CheckIcon } from './components/Icons';

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

  const productEffects = [
    "Diminui o peso e a obesidade",
    "Controla o ressecamento",
    "Previne e trata hemorróidas",
    "Tem ação diurética e laxante",
    "Não deixa flacidez no corpo",
    "Elimina gordura visceral",
    "Acelera o metabolismo",
    "Combate a celulite",
    "Reduz o apetite",
    "Reduz a ansiedade",
    "Reduz inchaço",
    "Regula o intestino"
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
      {/* Transparency Banner */}
      <div className="sticky top-0 z-50 bg-gray-100 text-gray-800 text-xs sm:text-sm text-center p-2 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
          <span>🌿 <strong>Magroo Distribuidora</strong> - CNPJ: 60.881.982/0001-08</span>
          <span className="hidden sm:inline">|</span>
          <span><strong>GrãoKiseca®</strong> | Tratamentos a partir de R$ 197,00</span>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(16, 24, 40, 0.8), rgba(16, 24, 40, 0.9)), url(https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop)"}}>
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left animate-fade-in-down">
              <span className="text-emerald-400 font-semibold uppercase tracking-widest text-sm">suplemento natural</span>
              <h1 className="text-4xl md:text-6xl font-extrabold my-4 leading-tight">
                O Segredo para Emagrecer Rápido, <span className="text-emerald-500">Sem Passar Fome.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Descubra o 'grão milagroso' que está revolucionando a perda de peso. Mais potente que capsulas e injeçoes famosas, porém 100% natural e seguro.
              </p>

              <div className="my-8 text-center md:text-left">
                  <span className="text-2xl text-gray-400 line-through">De R$227</span>
                  <p className="text-4xl font-extrabold text-yellow-300">
                    Por apenas R$197
                  </p>
                  <p className="text-emerald-400 font-semibold mt-1">Oferta Exclusiva para o Grupo VIP!</p>
              </div>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Por Que Nosso Método é <span className="text-emerald-500">Infálivel?</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Product Effects Section */}
        <section className="py-16 md:py-24 bg-gray-800">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Transforme Seu Corpo Com Efeitos <span className="text-emerald-500">Reais e Comprovados</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-left max-w-4xl mx-auto">
              {productEffects.map((effect, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon />
                  <span className="text-gray-300">{effect}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-900">
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
      <footer className="bg-gray-900 py-10 text-center text-gray-400">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <h3 className="font-bold text-lg text-white mb-2">Magroo Distribuidora</h3>
            <p className="text-sm">CNPJ: 60.881.982/0001-08</p>
            <p className="text-sm">Rua Bocaína, 439, Potengi - Natal/RN</p>
            <p className="text-sm mt-2">
              <strong>Contato:</strong> (84) 99622-4700 | <a href="mailto:graokiseca2023@gmail.com" className="hover:text-emerald-400">graokiseca2023@gmail.com</a>
            </p>
          </div>

          <div className="mb-6 text-xs text-gray-500 max-w-3xl mx-auto">
            <p>
              "Este produto não é um medicamento. O uso deste produto está condicionado a uma alimentação equilibrada e hábitos saudáveis. Os resultados podem variar de pessoa para pessoa. Não exceder a recomendação diária de consumo indicada na embalagem."
            </p>
            <p className="mt-2">
              Disclaimer: Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-sm hover:text-white">Política de Privacidade</a>
            <a href="#" className="text-sm hover:text-white">Termos de Uso</a>
          </div>

          <p className="text-xs text-gray-600">&copy; 2024 Magroo Distribuidora. Todos os direitos reservados.</p>
        </div>
      </footer>

      {showPopup && <CountdownPopup seconds={countdown} />}
    </div>
  );
};

export default App;