import Image from "next/image";
import NumberBoxes from "../components/number_boxes";
import Slides from "../components/slides";

const About = () => {
  return (
    <main>
      <div className="hero bg-[url('/images/about-hero.png')] h-[380px] flex items-center justify-center mt-10 bg-no-repeat">
        <div>
          <h1 className="text-3xl font-medium text-white text-center">
            Leonardo Da Vinci International School
          </h1>
          <p className="font-medium text-white text-center">
            Fazer | Ser | Conhecer | Viver em Comunidade
          </p>
        </div>
      </div>
      <div className="history container">
        <h1 className="text-2xl font-semibold text-center mt-20">
          A Nossa História
        </h1>
        <p className="mt-6">
          A história do Leonardo Da Vinci International School remonta a 2004,
          quando foi fundado originalmente como Colégio Leonardo Da Vinci. Desde
          o início, o colégio ofereceu uma educação de qualidade para os níveis
          pré-escolar, ensino primário e o ensino secundário (I ciclo). Durante
          esses anos, o colégio construiu uma reputação sólida como uma
          instituição comprometida com o desenvolvimento acadêmico e pessoal dos
          alunos.
          <br /> <br />
          Por motivos de força maior, o Colégio Leonardo Da Vinci precisou
          fechar as portas por um curto período de tempo. Durante esse período,
          ocorreram ajustes e reestruturação interna para melhor atender às
          necessidades educacionais dos alunos.
          <br /> <br />
          Após cuidadosa avaliação e planejamento, o colégio decidiu reabrir
          suas instalações em setembro de 2022, com um foco inicial no
          atendimento ao pré-escolar e ao ensino primário. Essa decisão foi
          tomada com base na compreensão da importância crucial dessas etapas
          iniciais da educação na formação sólida dos alunos.
          <br /> <br />
          Para o ano letivo de 2023-2024 temos um novo rosto e novas ofertas
          educativas. O novo capítulo do Leonardo Da Vinci International School
          é uma emocionante jornada rumo a um futuro educacional ainda mais
          promissor. Com uma equipe dedicada, pais engajados e alunos curiosos,
          estamos prontos para construir uma comunidade de aprendizado
          inspiradora, preparando nossos alunos para se tornarem líderes
          criativos, conscientes e capacitados em um mundo cada vez mais
          globalizado.
        </p>
      </div>
      <div className=" container flex items-center flex-col">
        <h1 className="text-2xl font-semibold text-center mt-20">
          Os nossos pilares
        </h1>
        <div className=" md:flex gap-5 lg:gap-28">
          <div className=" flex mt-10 flex-col items-center justify-center">
            <div>
              <h3 className="text-lg font-semibold">Visão</h3>
            </div>
            <div className="icon-box my-5 p-5 bg-gold w-min rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
              >
                <path
                  d="M5.84826 33.64H19.3333C19.9943 33.6368 20.6494 33.7646 21.2607 34.0161C21.872 34.2675 22.4274 34.6377 22.8948 35.1051C23.3622 35.5725 23.7323 36.1279 23.9838 36.7392C24.2353 37.3505 24.3631 38.0056 24.3599 38.6666V42.3641C24.3537 44.3408 23.569 46.2354 22.1758 47.6376C20.7826 49.0398 18.8932 49.8367 16.9166 49.8558H13.3399C11.3466 49.8558 9.43492 49.0639 8.02543 47.6544C6.61594 46.245 5.8241 44.3333 5.8241 42.34V33.64H5.84826Z"
                  stroke="#E5F4F1"
                  strokeWidth="4.64"
                  strokeMiterlimit="10"
                />
                <path
                  d="M38.6666 33.6401H52.1999V42.3401C52.1999 44.3334 51.4081 46.2451 49.9986 47.6546C48.5891 49.0641 46.6774 49.8559 44.6841 49.8559H41.0833C39.09 49.8559 37.1783 49.0641 35.7688 47.6546C34.3593 46.2451 33.5674 44.3334 33.5674 42.3401V38.6668C33.5641 37.9996 33.6942 37.3385 33.9502 36.7223C34.2062 36.1062 34.5829 35.5475 35.058 35.0791C35.5331 34.6107 36.0972 34.2421 36.7169 33.995C37.3366 33.7479 37.9995 33.6272 38.6666 33.6401Z"
                  stroke="#E5F4F1"
                  strokeWidth="4.64"
                  strokeMiterlimit="10"
                />
                <path
                  d="M24.36 40.5758C24.36 39.3452 24.8488 38.165 25.719 37.2948C26.5892 36.4246 27.7694 35.9358 29 35.9358C30.2306 35.9358 31.4108 36.4246 32.281 37.2948C33.1511 38.165 33.64 39.3452 33.64 40.5758"
                  stroke="#E5F4F1"
                  strokeWidth="4.64"
                  strokeMiterlimit="10"
                />
                <path
                  d="M1.20837 33.6401H5.84837"
                  stroke="#E5F4F1"
                  strokeWidth="4.64"
                  strokeMiterlimit="10"
                />
                <path
                  d="M56.7916 33.6401H52.1516"
                  stroke="#E5F4F1"
                  strokeWidth="4.64"
                  strokeMiterlimit="10"
                />
                <path
                  d="M3.52832 33.6399L10.5608 14.3066C11.2037 12.4986 12.3941 10.9359 13.9663 9.83578C15.5385 8.73566 17.4145 8.1528 19.3333 8.16827H24.4083"
                  stroke="#E5F4F1"
                  strokeWidth="4.64"
                  strokeMiterlimit="10"
                />
                <path
                  d="M54.4717 33.64L47.4392 14.3067C46.7972 12.4962 45.6078 10.9302 44.036 9.82603C42.4641 8.72183 40.5876 8.13404 38.6667 8.14417H33.5917"
                  stroke="#E5F4F1"
                  strokeWidth="4.64"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className=" text-center">
              Ser um Colégio de referência nacional e internacional, reconhecido
              pelas famílias e não só, pelo nosso comprometido com a inovação
              pedagógica, visando proporcionar aos nossos alunos uma formação
              integral e responsável, estimulando a sua criatividade e
              audácia intelectual.
            </p>
          </div>
          <div className=" flex mt-10 flex-col items-center justify-center">
            <div>
              <h3 className="text-lg font-semibold">Missão</h3>
            </div>
            <div className="icon-box my-5 p-5 bg-gold w-min rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  d="M16.2652 21.6409L17.5308 35.3352L11.6987 42.7742L10.1677 31.2781L16.2652 21.6409Z"
                  fill="#E5F4F1"
                />
                <path
                  d="M37.7346 21.6409L36.4674 35.3352L42.2995 42.7742L43.8321 31.2781L37.7346 21.6409Z"
                  fill="#E5F4F1"
                />
                <path
                  d="M34.1521 6.56216C32.1811 2.46038 29.073 0 26.9999 0C24.9268 0 21.8188 2.46206 19.8478 6.56216H34.1521Z"
                  fill="#E5F4F1"
                />
                <path
                  d="M34.9447 8.48706H19.0552C18.3548 10.5074 17.9378 12.8212 17.9955 15.3624C18.1652 22.6463 19.8989 35.5052 19.8989 35.5052L32.8337 35.5035L34.0993 35.5052C34.0993 35.5052 35.8346 22.6446 36.0011 15.3624C36.062 12.8212 35.6451 10.5057 34.9447 8.48706ZM26.9999 24.3666C24.5132 24.3666 22.4977 22.3528 22.4977 19.8661C22.4977 17.3793 24.5148 15.3655 26.9999 15.3655C29.4851 15.3655 31.5005 17.3793 31.4988 19.8661C31.5005 22.3529 29.4851 24.3666 26.9999 24.3666Z"
                  fill="#E5F4F1"
                />
                <path
                  d="M45.3005 54C44.6562 52.1443 42.8896 50.8128 40.8148 50.8128C40.1506 50.8128 39.5178 50.9479 38.941 51.1951C38.7433 49.0248 36.9173 47.3257 34.6959 47.3257C34.3745 47.3257 34.0631 47.3603 33.7631 47.4279C33.7664 47.3685 33.7664 47.3092 33.7664 47.2499C33.7664 45.6118 32.4381 44.2835 30.8001 44.2835C30.375 44.2835 29.9695 44.3726 29.6037 44.534C28.577 42.718 28.2787 37.9785 28.2787 37.9785H25.5892C25.5892 37.9785 25.2448 43.1828 24.0269 44.9065C23.7434 44.7912 23.4304 44.7285 23.1041 44.7285C21.7313 44.7285 20.6189 45.8409 20.6189 47.2137C20.6189 47.3175 20.6255 47.4197 20.6387 47.5202C20.2465 47.3933 20.2927 47.3257 19.8576 47.3257C18.1191 47.3257 16.6376 48.4232 16.0673 49.9624C15.4295 49.697 14.7308 49.5504 13.9975 49.5504C11.3443 49.5504 9.13925 51.472 8.69934 54H45.3005Z"
                  fill="#E5F4F1"
                />
              </svg>
            </div>
            <p className=" text-center">
              Proporcionar um ambiente de aprendizagem atencioso, criativo e
              estimulante, que fomente o desenvolvimento holístico de cada
              aluno, assegurando que cada aluno adquira um sentido de
              comunidade, cidadania, responsabilidade social e liderança.
            </p>
          </div>
        </div>
        <div className="icon-box my-5 p-5 bg-gold w-min rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <g clipPath="url(#clip0_856_81)">
              <path
                d="M52.5 7.5V12.5C52.5 22.165 44.665 30 35 30H32.5V32.5H45V50C45 52.7625 42.7625 55 40 55H20C17.2375 55 15 52.7625 15 50V32.5H27.5V25C27.5 15.335 35.335 7.5 45 7.5H52.5ZM13.75 5C20.0725 5 25.6625 8.1275 29.06 12.9225C26.51 16.275 25 20.4625 25 25V27.5H23.75C13.395 27.5 5 19.105 5 8.75V5H13.75Z"
                fill="#E5F4F1"
              />
            </g>
            <defs>
              <clipPath id="clip0_856_81">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-center">Missão</h3>
        <div className="boxes md:grid grid-cols-2  lg:grid-cols-3 gap-5">
          <NumberBoxes
            title="Educação de excelência"
            imagaUrl="/images/01.png"
            description="Buscamos constantemente a excelência acadêmica, fornecendo programas educacionais atualizados, professores altamente qualificados e instalações modernas, para garantir que nossos alunos tenham uma base sólida para o sucesso futuro."
          />
          <NumberBoxes
            title="Respeito às diferenças"
            imagaUrl="/images/02.png"
            description="Reconhecemos e valorizamos a diversidade de nossos alunos, suas origens culturais, experiências individuais e habilidades únicas. Promovemos um ambiente inclusivo, onde todos são respeitados e celebrados por quem são."
          />
          <NumberBoxes
            title="Solidariedade social"
            imagaUrl="/images/03.png"
            description="Nossa escola incentiva a solidariedade e o senso de comunidade entre os alunos. Promovemos atividades e projetos que visam ajudar os menos favorecidos, desenvolvendo uma consciência social e o espírito de doação."
          />
          <NumberBoxes
            title="Respeito a biodiversidade"
            imagaUrl="/images/04.png"
            description="Reconhecemos a importância da biodiversidade e a necessidade de proteger e preservar nosso ambiente natural. Promovemos a consciência ambiental entre os alunos, incentivando práticas sustentáveis e a responsabilidade em relação ao meio ambiente."
          />
          <NumberBoxes
            title="Justiça e disciplina"
            imagaUrl="/images/05.png"
            description=" Buscamos constantemente a excelência acadêmica, fornecendo programas educacionais atualizados, professores altamente qualificados e instalações modernas, para garantir que nossos alunos tenham uma base sólida para o sucesso futuro."
          />
        </div>
      </div>
      <div className="container mt-20">
        <h2 className="text-3xl font-semibold">O que nos torna diferente</h2>
        <div className="lg:flex">
          <div className=" p-10 md:p-24 bg-maroon mt-10 lg:mt-20">
            <h3 className="text-white text-2xl font-medium">
              Excelência acadêmica
            </h3>
            <p className="text-white">
              Oferecemos um ambiente de aprendizado de alta qualidade, com
              currículos e programas educacionais reconhecidos nacional e
              internacionalmente. Nossos professores altamente qualificados e
              experientes estão comprometidos em proporcionar uma educação
              excepcional aos nossos alunos.
            </p>
          </div>
          {/* <Image
            src={"/images/engineering.png"}
            alt="engineering"
            width={475}
            height={267}
            className=" h-min lg:-ml-20"
          /> */}
        </div>
        <div className="lg:flex items-end ">
          <div className=" p-10 md:p-24 bg-gold">
            <h3 className="text-white text-2xl font-medium">
              Excelência acadêmica
            </h3>
            <p className="text-white">
              Oferecemos um ambiente de aprendizado de alta qualidade, com
              currículos e programas educacionais reconhecidos nacional e
              internacionalmente. Nossos professores altamente qualificados e
              experientes estão comprometidos em proporcionar uma educação
              excepcional aos nossos alunos.
            </p>
          </div>
        </div>
        <div className="lg:flex items-end ">
          <div className=" p-10 md:p-24 bg-royalblue">
            <h3 className="text-white text-2xl font-medium">
              Currículo abrangente
            </h3>
            <p className="text-white">
              Nosso currículo abrangente abrange uma ampla gama de disciplinas e
              áreas de estudo, permitindo que os alunos explorem seus interesses
              e desenvolvam habilidades em diferentes áreas. Isso proporciona
              uma educação holística e enriquecedora, preparando os alunos para
              um futuro promissor.
            </p>
          </div>
        </div>
        <div className="lg:flex items-end ">
          <div className=" p-10 md:p-24 bg-maroon">
            <h3 className="text-white text-2xl font-medium">
              Networking e conexões
            </h3>
            <p className="text-white">
              Estudar conosco proporciona a oportunidade de estabelecer conexões
              e networking com colegas de diversas origens e futuros
              profissionais em potencial. Essas conexões podem ser valiosas para
              o desenvolvimento de uma rede de contatos sólida, que pode abrir
              portas para oportunidades futuras de emprego e parcerias
              profissionais.
            </p>
          </div>
        </div>
        <div className="lg:flex items-end ">
          <div className=" p-10 md:p-24 bg-gold">
            <h3 className="text-white text-2xl font-medium">
              Parceria com os pais
            </h3>
            <p className="text-white">
              Reconhecemos a importância da parceria entre a escola e os pais na
              educação dos alunos. Mantemos uma comunicação aberta e
              transparente, envolvendo os pais em atividades escolares,
              fornecendo atualizações regulares sobre o progresso dos alunos e
              promovendo uma colaboração constante para o bem-estar e sucesso
              dos alunos.
            </p>
          </div>
        </div>
        <div className="lg:flex items-end ">
          <div className=" p-10 md:p-24 bg-royalblue">
            <h3 className="text-white text-2xl font-medium">
              Resultados comprovados
            </h3>
            <p className="text-white">
              Nossos alunos obtêm resultados consistentemente excelentes em
              exames e competições acadêmicas. Estamos orgulhosos de suas
              conquistas e da preparação sólida que recebem em nossa escola.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          O que os pais falam de nós?
        </h2>
        <div className="lg:flex gap-5">
          <div className="left flex items-center justify-center p-5 md:p-20 h-96 lg:h-[560px] bg-[url('/images/parents.png')] bg-cover bg-no-repeat bg-center ">
            <div className=" ">
              <h3 className="text-xl font-medium text-white">
                Estamos aertos ao seu feedback
              </h3>
              <p className=" text-white">
                Papais, o vosso feedback é importante para nós, para tomarmos
                decisões informadas, melhorar dia após dia e mais importante,
                para fortalecer a parceria escola-família. Estamos comprometidos
                com a participação ativa dos pais na educação dos seus filhos
              </p>
              <button className="bg-maroon text-white py-3 px-6 my-4 rounded-full font-medium">
                Deixa o seu feedback
              </button>
            </div>
          </div>
          <div className="right flex flex-col gap-5">
            <div className="box shadow-md p-5">
              <p>
                &quot;Ver o meu filho florescer e desenvolver suas habilidades
                em um ambiente que lhe oferece atenção individualizada é
                incrivelmente gratificante. Tenho total confiança de que ele
                está recebendo uma educação de qualidade, com uma equipe
                comprometida e apaixonada que se importa genuinamente com o
                sucesso de cada aluno.&quot;
              </p>
              <p className=" text-sm italic"> -Person Name </p>
            </div>
            <div className="box shadow-md p-5">
              <p>
                &quot;Ver meu o filho feliz e animado em ir para a escola todos
                os dias é um verdadeiro testemunho da qualidade de ensino e
                cuidado que ele recebe. Estou muito grato por fazer parte desta
                escola incrível. &quot;
              </p>
              <p className=" text-sm italic"> -Person Name </p>
            </div>
            <div className="box shadow-md p-5">
              <p>
                &quot;A minha experiência com a escola primária tem sido
                incrível.O meu filho está a prosper e os professores estão
                sempre dispostos a ir além para ajudá-lo. Recomendo esta escola
                a todas as famílias.&quot;
              </p>
              <p className=" text-sm italic"> -Person Name </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-20 container">
        <p>
          O nosso sucesso nao e sorte! E fruto do arduo trabalho de guerreiros,
          que levam o projecto nas costas porque acreditam que podemos sempre
          fazer melhor! <br /> <br />
          Temos uma equipe apaixonada e dedicada, pronta para oferecer uma
          educação de qualidade e apoiar o desenvolvimento integral de cada
          aluno. Nossa equipe é composta por educadores experientes,
          comprometidos em proporcionar um ambiente de aprendizagem seguro,
          acolhedor e estimulante. Estamos empenhados em ajudar os alunos a
          atingir seu pleno potencial acadêmico, desenvolver habilidades sociais
          e emocionais, e se preparar para um futuro promissor. Conheça os
          membros da nossa equipe e saiba mais sobre suas qualificações,
          experiências e paixões pela educação. Estamos ansiosos para trabalhar
          em parceria com você para o sucesso de seu filho!
        </p>
        <h3 className=" font-semibold text-2xl text-right mt-5">
          A Nossa Equipe
        </h3>
      </div>
      <div className="slides container mt-20">
        <Slides />
      </div>
      <div className="text container mt-20">
        O nosso colégio tem como prioridade efectuar parcerias nacionais e
        internacionais, visando proporcionar aos alunos, um elevado domínio da
        língua inglesa. Assim, serão estabelecidas parcerias com escolas de
        Inglês, no Reino Unido e nos EUA, no sentido de realizarmos escolas de
        Férias de Língua Inglesa, ao nível nacional e internacional. Após a
        conclusão do II Ciclo, o Colégio, pretende tornar, mais simples e menos
        complexo, o processo de acesso dos alunos as universidades nacionais e
        internacionais, estabelecendo parcerias com universidades nacionais e
        estrangeiras.
      </div>
      <div className="certs mt-20 container">
        <h2 className=" text-center font-semibold text-3xl">Parceiros</h2>
        <div className="left">
          <h3 className="font-medium text-xl mt-10">
            Aprovado e Certificado por
          </h3>
          <div className="logos grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center">
            <Image
              src="/images/cambridge.png"
              alt="cambridge logo"
              width={153}
              height={85}
              className="w-[153] h-[85] object-contain"
            />
            <Image
              src="/images/angola2.png"
              alt="angola logo"
              width={153}
              height={85}
              className="w-[153] h-[85] object-contain"
            />
            <Image
              src="/images/INEFOP.jpg"
              alt="INEFOP logo"
              width={153}
              height={46}
              className="w-[153] h-[85] object-contain"
            />
          </div>
        </div>
        <div className="left">
          <h3 className="font-medium text-xl mt-10">Em colaboração com</h3>
          <div className="logos grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center">
            <Image
              src="/images/cambridge.png"
              alt="cambridge logo"
              width={153}
              height={85}
              className="w-[153] h-[85] object-contain"
            />
            <Image
              src="/images/angola2.png"
              alt="angola logo"
              width={153}
              height={85}
              className="w-[153] h-[85] object-contain"
            />
            <Image
              src="/images/INEFOP.jpg"
              alt="INEFOP logo"
              width={153}
              height={46}
              className="w-[153] h-[85] object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
