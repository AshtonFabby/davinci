import Image from "next/image";

import boyWithBooks from "../../public/images/boy_with_books.png";
import girlWriting from "../../public/images/girl-writing.png";
import roadMap from "../../public/images/roadmap.png";
import cambridgeLogo from "../../public/icons/cambridge.svg";
import angolaLogo from "../../public/icons/angola.svg";
import activitiesLogo from "../../public/icons/activities.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero container mt-8 lg:flex items-center justify-between lg:h-[480px]">
        <div className="w-[550px]">
          <h2 className="text-xl font-semibold text-maroon ">
            Educação com Excelência
          </h2>
          <h1 className="text-3xl md:text-5xl font-medium ">
            Comprometimento com a inovação pedagógica
          </h1>
          <p className=" text-base my-5">
            Fazendo história desde 2004. Agora com um novo rosto e novas ofertas
            educativas.
          </p>
          <button className=" bg-maroon text-white py-3 px-6 rounded-full font-medium  ">
            Faça a Matrícula
          </button>
        </div>
        <div className="mt-12">
          <Image
            src={boyWithBooks}
            width={672}
            height={477}
            alt="Boy with books on head"
            className=" xl:w-[620px]"
          />
        </div>
      </div>
      <div className="bg-gold container py-11 flex flex-col gap-5 lg:flex-row">
        <div className="box lg:w-1/3 bg-[#DAC580] p-11 text-center flex flex-col items-center rounded-3xl shadow-md">
          <div className="icon-box bg-white rounded-2xl  h-20 w-20 flex justify-center items-center">
            <Image
              src={cambridgeLogo}
              alt="cambridge logo"
              width={40.24}
              height={50.37}
              className="mt-2"
            />
          </div>
          <h3 className="text-xl font-medium mt-4">
            Currículo <br /> Cambridge
          </h3>
          <p className="mt-4">
            internacionalmente reconhecido e amplamente utilizado em
            escolas em todo mundo.
          </p>
          <a href="#" className=" text-maroon mt-4 underline">
            Saiba mais....
          </a>
        </div>
        <div className="box lg:w-1/3 p-11 bg-white text-center flex flex-col items-center rounded-3xl shadow-xl">
          <div className="icon-box bg-[#DAC580] rounded-2xl  h-20 w-20 flex justify-center items-center">
            <Image
              src={angolaLogo}
              alt="cambridge logo"
              width={40.24}
              height={50.37}
            />
          </div>
          <h3 className="text-xl font-medium mt-4">
            Currículo <br /> Angolano Bilíngue
          </h3>
          <p className="mt-4">
            agora enriquecido com o sistema bilíngue. Inglês, Matemática e
            Ciência lecionados totalmente em Inglês
          </p>
          <a href="#" className=" text-maroon mt-4 underline">
            Saiba mais....
          </a>
        </div>
        <div className="box lg:w-1/3 bg-[#DAC580] p-11 text-center flex flex-col items-center rounded-3xl shadow-md">
          <div className="icon-box bg-white rounded-2xl  h-20 w-20 flex justify-center items-center">
            <Image
              src={activitiesLogo}
              alt="cambridge logo"
              width={40.24}
              height={50.37}
              className="mt-2"
            />
          </div>
          <h3 className="text-xl font-medium mt-4">
            Actividades <br /> Extracurriculares
          </h3>
          <p className="mt-4">
            saúde e bem-estar, crescimento pessoal, aprendizado prático,
            habilidades sociais e descoberta de paixões.
          </p>
          <a href="#" className=" text-maroon mt-4 underline">
            Saiba mais....
          </a>
        </div>
      </div>
      <div className="container mb-20 lg:flex items-center gap-10">
        <Image src={girlWriting} alt="girl writing" height={500} width={500} />

        <div className="">
          <h3 className=" font-bold text-maroon text-xl my-4">
            Faça parte dessa jornada rumo ao sucesso!
          </h3>
          <p className="font-medium text-xl lg:text-4xl">
            As matrículas e confirmações de matrícula para o ano lectivo
            2023-2024 já estão abertas.
          </p>
          <button className=" bg-gold py-3 px-6 my-4 rounded-full font-medium  ">
            Faça a Matrícula
          </button>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-center font-medium text-2xl mb-4">Quem somos</h2>

        <Image
          src={roadMap}
          alt="roadmap"
          width={1220}
          height={441.92}
          className=" container"
        />
      </div>
      <div className="mb-20">
        <h2 className="text-center font-medium text-2xl mb-4">Quem somos</h2>
        <div className="flex flex-col gap-5 lg:flex-row container">
          <div className="flex flex-col">
            <div
              className={`box bg-[url('/images/girl-thinking.png')] bg-center bg-no-repeat bg-cover w-full h-[372px] p-6`}
            >
              <div className=" pb-6 ">
                <h3 className="font-medium underline decoration-gold text-xl text-white mt-[150px]">
                  Vision
                </h3>
                <p className="text-white">
                  Ser um Colégio de referência nacional e internacional,
                  reconhecido pelas famílias e não só, pelo nosso comprometido
                  com a inovação pedagógica, visando proporcionar aos nossos
                  alunos uma formação integral e responsável, estimulando a sua
                  criatividade e audácia intelectual.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div
              className={`box bg-[url('/images/boy-making.png')] bg-center bg-no-repeat bg-cover w-full h-[372px] p-6`}
            >
              <div className=" pb-6 ">
                <h3 className="font-medium underline decoration-gold text-xl text-white mt-[150px]">
                  Missão
                </h3>
                <p className="text-white">
                  Proporcionar um ambiente de aprendizagem atencioso, criativo e
                  estimulante, que fomente o desenvolvimento holístico de cada
                  aluno, assegurando que cada aluno adquira um sentido de
                  comunidade, cidadania, responsabilidade social e liderança.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href="/">
          <p className="underline py-4 text-center font-medium hover:text-maroon">
            Saiba mais
          </p>
        </Link>
      </div>
      <div className="container lg:flex gap-5">
        <div className="grid gap-7 mb-20 lg:w-3/12">
          <div className="shadow-lg h-44">
            <div className="bg-fixed bg-cover h-8">
              <Image
                src={"/images/01.png"}
                alt="number"
                width={65}
                height={96}
              />
              <h2 className=" font-semibold text-2xl mb-4 -mt-8">
                Excelência acadêmica
              </h2>
              <hr className=" h-1 border-gold w-16 border-b-2" />
            </div>
            <p className="mt-8 mb-8">
              Programas educacionais de alta qualidade, ministrados por
              professores altamente qualificados e experientes.
            </p>
          </div>
          <div className=" shadow-lg h-44">
            <div className="bg-fixed bg-cover h-8">
              <Image
                src={"/images/02.png"}
                alt="number"
                width={65}
                height={96}
              />
              <h2 className=" font-semibold text-2xl mb-4 -mt-8">
                Suporte individualizado
              </h2>
              <hr className=" h-1 border-gold w-16 border-b-2" />
            </div>
            <p className="mt-8 mb-8">
              Valorisamos cada aluno como indivíduo e nos esforçamos para
              apoia-los, auxiliando no seu crescimento acadêmico e pessoal.
            </p>
          </div>
          <div className=" shadow-lg h-44">
            <div className="bg-fixed bg-cover h-8">
              <Image
                src={"/images/03.png"}
                alt="number"
                width={65}
                height={96}
              />
              <h2 className=" font-semibold text-2xl mb-4 -mt-8">
                Currículo abrangente
              </h2>
              <hr className=" h-1 border-gold w-16 border-b-2" />
            </div>
            <p className="mt-8 mb-8">
              Oferecemos uma ampla gama de disciplinas e áreas de estudo,
              proporcionando uma educação holística e enriquecedora.
            </p>
          </div>
        </div>
        <div className="images grid md:grid-cols-3 gap-5 mb-20 lg:w-6/12">
          <Image
            src={"/images/engineering.png"}
            alt="engineering"
            width={335}
            height={185}
            className="w-full col-span-2 lg:h-[185px] lg:w-[335px] object-cover"
          />
          <Image
            src={"/images/class.png"}
            alt="class"
            width={218}
            height={185}
            className="w-full lg:h-[185px] object-cover"
          />
          <Image
            src={"/images/one-on-one.png"}
            alt="class"
            width={218}
            height={185}
            className="w-full lg:h-[185px] object-cover "
          />
          <Image
            src={"/images/outside.png"}
            alt="engineering"
            width={335}
            height={185}
            className="w-full col-span-2 lg:h-[185px] object-cover"
          />
          <Image
            src={"/images/swimming.png"}
            alt="engineering"
            width={335}
            height={185}
            className="w-full col-span-2 lg:h-[185px] object-cover"
          />
          <Image
            src={"/images/home.png"}
            alt="engineering"
            width={218}
            height={185}
            className="w-full lg:h-[185px] object-cover"
          />
        </div>
        <div className="grid gap-7 mb-20 lg:w-3/12">
          <div className=" shadow-lg p-4">
            <div className="bg-fixed bg-cover h-8">
              <Image
                src={"/images/04.png"}
                alt="number"
                width={65}
                height={96}
              />
              <h2 className=" font-semibold text-2xl lg:text-xl mb-4 -mt-8">
                Resultados comprovados
              </h2>
              <hr className=" h-1 border-gold w-16 border-b-2" />
            </div>
            <p className="mt-8 mb-8">
              Nossos alunos obtêm resultados consistentemente excelentes em
              exames e competições acadêmicas.
            </p>
          </div>
          <div className=" shadow-lg p-4">
            <div className="bg-fixed bg-cover h-8">
              <Image
                src={"/images/05.png"}
                alt="number"
                width={65}
                height={96}
              />
              <h2 className=" font-semibold text-2xl lg:text-xl mb-4 -mt-8">
                Networking e conexões
              </h2>
              <hr className=" h-1 border-gold w-16 border-b-2" />
            </div>
            <p className="mt-8 mb-8">
              Nossos programas de intercâmbio, quer nacionais ou internacionais,
              criam conexões de valor imensurável.{" "}
            </p>
          </div>
          <div className=" shadow-lg p-4">
            <div className="bg-fixed bg-cover h-8">
              <Image
                src={"/images/06.png"}
                alt="number"
                width={65}
                height={96}
              />
              <h2 className=" font-semibold text-2xl lg:text-xl mb-4 -mt-8">
                Parceria com os pais
              </h2>
              <hr className=" h-1 border-gold w-16 border-b-2" />
            </div>
            <p className="mt-8 mb-8 text-sm">
              Mantemos uma comunicação aberta e transparente, envolvendo os pais
              em tudo, guarantindo assim o bem-estar e o sucesso dos alunos.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20 container">
        <h2 className=" text-center font-semibold text-2xl lg:text-xl">
          Próximos Eventos
        </h2>
        <div className="boxes mt-10 grid gap-5 mb-4 lg:grid-cols-3">
          <div className="box h-[354px ] bg-gold">
            <Image
              src={"/images/sports.png"}
              alt="sports"
              width={380}
              height={166}
              className="w-full"
            />
            <div className="box bg-gold p-5">
              <h3 className="font-medium text-xl text-white ">
                Campo de Férias Geral
              </h3>
              <p className="text-white">
                Durante 3 semanas, os nossos pequenos farão parte de um plano de
                férias imersivo. Uma oportunidade única de aprender, crescer e
                vivenciar o mundo de maneira mais profunda e enriquecedora.
              </p>
            </div>
          </div>
          <div className="box h-[354px ] bg-gold">
            <Image
              src={"/images/music.png"}
              alt="art"
              width={380}
              height={166}
              className="w-full"
            />
            <div className="box bg-gold p-5">
              <h3 className="font-medium text-xl text-white ">
                Campo de Férias Inglês
              </h3>
              <p className="text-white">
                5 semanas intensivas de Inglês geral, matemática e ciência em
                inglês, para ajudar os pequenos na transição para os novos
                currículos- bilíngue e Cambridge.
              </p>
            </div>
          </div>
          <div className="box h-[354px ] bg-gold">
            <Image
              src={"/images/art.png"}
              alt="art"
              width={380}
              height={166}
              className="w-full"
            />
            <div className="box bg-gold p-5">
              <h3 className="font-medium text-xl text-white ">
                Abertura do ano letivo 2023-2024
              </h3>
              <p className="text-white">
                O novo ano letivo está à espreita, cheio de novas propostas
                educativas que vão desafiar os nossos pequenos a tornarem-se as
                suas melhores versões!
              </p>
            </div>
          </div>
        </div>
        <Link href={"/"} className=" underline font-medium text-right mt-4">
          Ver todos
        </Link>
      </div>
      <div className=" bg-[url('/images/children_in_class.png')] flex items-center bg-center bg-cover pt-20 pb-10 bg-no-repeat container h-[400px] ">
        <div>
          <h2 className="font-semibold text-2xl lg:text-xl text-white">
            Estudar connosco é Fixe
          </h2>
          <p className="text-white">
            A Nossa missão vai além de fornecer uma educação de excelência -
            buscamos formar alunos completos, enraizados em valores de
            comunidade, cidadania e responsabilidade social. Nossos estudantes
            são impulsionados pela paixão pela liderança, dedicados a um estilo
            de vida saudável e equilibrado. Junte-se a nós para construir um
            futuro inspirador e transformador.
          </p>
          <button className="flex gap-2 bg-maroon py-3 px-6 my-4 rounded-full font-medium ">
            <p className=" font-medium text-white">Baixe um folheto</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
