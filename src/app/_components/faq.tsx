"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Lista de perguntas e respostas para o FAQ
const faqs = [
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Oferecemos banho e tosa, hotel para pets, consultas veterinárias, e muito mais!",
  },
  {
    question: "Preciso agendar um horário?",
    answer:
      "Sim, recomendamos agendar com antecedência para garantir disponibilidade.",
  },
  {
    question: "Vocês aceitam quais formas de pagamento?",
    answer: "Aceitamos cartões de crédito, débito, Pix e dinheiro.",
  },
];

export function FAQ() {
  // Estado para armazenar qual pergunta está aberta (null significa nenhuma)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Função para alternar o estado de uma pergunta específica
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Seção com fundo amarelo e borda no topo
    <section className="bg-[#FFD449]  pb-8">
      {/* Container para limitar a largura do conteúdo */}
      <div
        className="container mx-auto px-4 max-w-2xl"
        data-aos="flip-up"
        data-aos-delay="300"
      >
        {/* Título do FAQ */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Dúvidas Frequentes
        </h2>

        {/* Lista de perguntas e respostas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1e293b] text-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Botão que exibe a pergunta e controla a exibição da resposta */}
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {/* Ícone que gira quando a pergunta está aberta */}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Resposta visível apenas quando a pergunta está aberta */}
              {openIndex === index && (
                <div className="p-4 border-gray-700 border-t text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
