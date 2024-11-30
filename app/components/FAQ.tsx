import { Summary } from "./common/Summary";

const questions = [
  {
    title: "Es obligatorio asistir?",
    description: (
      <p className="text-xl font-semibold text-white">
        Claro, sino jalado pero de la vida
      </p>
    ),
  },
  {
    title: "¿Tengo que venir con plata?",
    description: (
      <p className="text-xl font-semibold text-white">
        Si, minimo 20 soles sino te vas a la csmr
      </p>
    ),
  },
  {
    title: "Cuantos puntos extran daran para el promedio?",
    description: (
      <p className="text-xl font-semibold text-white">
        Ni pincho
      </p>
    ),
  },
];

export const FAQ = () => {
  return (
    <section>
      <h2 className="mb-[4.5rem] text-center text-white text-[3.5rem] font-semibold">
        Preguntas frecuentes
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 md:w-3/5 m-auto">
        {questions.map((question, index) => (
          <Summary title={question.title} key={index}>
            {question.description}
          </Summary>
        ))}
      </div>
    </section>
  );
};
