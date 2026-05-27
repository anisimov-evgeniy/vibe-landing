import Button from "@/components/ui/Button";
import FeatureCard from "./FeatureCard";
import PointCard from "./PointCard";

const FEATURES = [
  {
    number: 1,
    title: "ПРОСТРАНСТВО, КОТОРОЕ:",
    description:
      "Работает на ваш товарооборот, усиливает структуру, кратно увеличивает доход по маркетинг-плану",
  },
  {
    number: 2,
    title: "БЕСПЛАТНЫЙ ВХОД",
    description: "Стоимость франшизы: 0 ₽\nРоялти: 0 ₽",
  },
  {
    number: 3,
    title: "СТАБИЛЬНЫЙ ДОХОД",
    description:
      "15% от оборота + рост товарооборота + бонусы маркетинг-плана (до 45% + командные выплаты)",
  },
];

const ForvibePointSection = () => {
  return (
    <section className="relative bg-white pb-15 lg:pt-0 xs:pb-25">
      <div id="conditions" className="relative z-20 lg:-translate-y-[60px]">
        <div className="max-w-[1380px] mx-auto px-5">
          <div className="rounded-[30px] bg-light px-6 py-10 lg:px-26 lg:py-17">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
              {FEATURES.map((item) => (
                <FeatureCard
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="max-w-[1380px] mx-auto px-5 pt-15 xs:pt-20">
        <h2 className="max-w-[830px] xs:mx-auto text-left lg:text-center font-uncage uppercase leading-[1.1] text-[26px] lg:text-[32px] text-graphite w-[90%] xs:w-auto">
          FORVIBE ПОИНТ — ЭТО ТОЧКА ВЫДАЧИ ЗАКАЗОВ И ОФИС,
          <span className="text-orange">
            {" "}
            ОБЪЕДИНЁННЫЕ В ЕДИНУЮ СИСТЕМУ, ПЕРЕДАЮЩУЮ НАСТОЯЩИЙ ВАЙБ
          </span>{" "}
        </h2>

        <div className="mt-10 xs:mt-15 flex flex-col gap-4">
          <div className="grid grid-cols-12 gap-4">
            <PointCard
              title={
                <>
                  FORVIBE ПОИНТ —
                  <span className="block mt-3 lg:mt-0 lg:inline">
                    {" "}
                    СТИЛЬ В КАЖДОЙ ДЕТАЛИ
                  </span>
                </>
              }
              bgClassName="bg-floral"
              className="col-span-6 lg:col-span-3 lg:min-h-[320px]"
              titleClassName="max-w-[240px] text-center"
              centered
            />

            <PointCard
              title="ЛОКАЦИЯ"
              description="брендированные локации, которые притягивают и передают настоящий вайб"
              bgClassName="bg-light"
              className="col-span-6 lg:col-span-3 lg:min-h-[320px]"
            />

            <PointCard
              image="/point/card-1.png"
              imageAlt="Интерьер FORVIBE ПОИНТ — брендированная локация франшизы"
              className="col-span-12 lg:col-span-6 lg:min-h-[320px] order-first lg:order-none"
            />
          </div>

          <div className="grid grid-cols-12 gap-4">
            <PointCard
              image="/point/card-2.png"
              imageAlt="Атмосфера FORVIBE ПОИНТ — живое пространство, притягивающее клиентов"
              className="col-span-12 lg:col-span-6 lg:min-h-[320px]"
            />

            <PointCard
              title="АТМОСФЕРА"
              description="атмосфера, к которой хочется прикоснуться"
              bgClassName="bg-lime"
              className="col-span-6 lg:col-span-3 lg:min-h-[320px] order-last lg:order-none"
            />

            <PointCard
              title="КОНТЕНТ"
              description="место, где рождается живой UGC-контент"
              bgClassName="bg-light"
              className="col-span-6 lg:col-span-3 lg:min-h-[320px]"
            />
          </div>
        </div>

        <div className="flex justify-center mt-15">
          <Button className="xs:max-w-[260px]">Получить презентацию</Button>
        </div>
      </div>
    </section>
  );
};

export default ForvibePointSection;
