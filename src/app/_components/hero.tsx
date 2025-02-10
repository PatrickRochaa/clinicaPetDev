import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#E84c3d] text-white relative overflow-hidden">
      {/*Imagem do cacchorro que so vai aparcer em dispositivo movel*/}
      <div>
        <Image
          src={dogImg}
          alt="Foto Cachorro"
          className="object-cover opacity-60 lg:hidden"
          fill
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50 md:hidden"></div>
      </div>

      {/*controle do tamanho*/}
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4  relative">
        {/*controle da disposiçao dos elementos*/}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*Area de CTA*/}
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg" data-aos="fade-up" data-aos-delay="300">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            {/*Butao  WhatsApp*/}
            <a
              target="_blank"
              href={`https://wa.me/5531985385297?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <WhatsappLogo className="w-5 h-5" />
              Estamos aqui! 🐾
            </a>

            {/*Area de  contato*/}
            <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra.
              </p>

              {/*Imagem gato que so aparecer em desktop*/}
              <div
                className="flex mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="Foto do gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Conatainer Imagem */}
          <div
            className="hidden md:block h-full relative"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Image
              src={dogImg}
              alt="Foto Cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
