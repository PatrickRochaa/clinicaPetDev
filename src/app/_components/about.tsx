import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      {/*Controla o tamnaho do about*/}
      <div className="container px-4 mx-auto">
        {/*Controla a disposiçao dos elementos na tela*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/*Container Imagem*/}
          <div className="relative">
            {/*Imagem Gato E Cachorro*/}
            <div
              className="relative w-full h-[400px] rounded-3xl overflow-hidden"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <Image
                src={about1Img}
                alt="Foto gato e cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>
            {/*Imagem Gato*/}
            <div
              className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white"
              data-aos="flip-up"
              data-aos-delay="300"
            >
              <Image
                src={about2Img}
                alt="Foto gato e cachorro"
                fill
                quality={100}
                priority
                className="object-cove"
              />
            </div>
          </div>

          {/*Pagrafos sobre*/}
          <div
            className="space-y-6 mt-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold ">Sobre</h2>
            <p>
              A PetDev é uma clínica veterinária dedicada ao bem-estar e à saúde
              dos animais de estimação. Nossa missão é oferecer atendimento de
              qualidade, tecnologia de ponta e amor incondicional aos pets e
              seus tutores.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe composta pro mais de 10 veterinários.
              </li>
            </ul>

            {/*Contgainer botao WhatsApp e localização*/}
            <div className="flex gap-2">
              {/*WhatsApp*/}
              <a
                href={`https://wa.me/5531985385297?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2  text-white"
              >
                <WhatsappLogo className="w-5 h-5" />
                Fale com a gente!
              </a>

              {/*Localização, link para o Google Maps*/}
              <a
                href="https://www.google.com/maps?q=Av.+Severino+Ballesteros,+850+-+Cabral,+Contagem+-+MG,+32110-005"
                target="_blank" // Abre em uma nova aba
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
