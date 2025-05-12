import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SalleCard from "../components/SalleCard";
import ButtonPrimary from "../components/buttonPrimary";
import salle1Image from "/images/salle-1.png";
import salle2Image from "/images/salle-2.png";
import salle3Image from "/images/salle-3.png";
import salle4Image from "/images/salle-4.png";
import salle5Image from "/images/salle-5.png";
import salle6Image from "/images/salle-6.png";
import heroBgImage from "/images/salles1-hero.png";


const SALLES = [
  {
    salleName: "POWERFIT GYM",
    salleImage: salle1Image,
    hourPrice: "0",
    salleServices: ["Musculation", "Cardio", "CrossFit"],
    salleHours: "06h00 - 23h00 (7j/7)",
    salleAddress: "Annaba , Algerie",
  },
  {
    salleName: "ELITE TRAINING ",
    salleImage: salle2Image,
    hourPrice: "0",
    salleServices: ["Cours collectifs", "Boxe", "Fitness"],
    salleHours: "07h00 - 22h00 (6j/7)",
    salleAddress: "Alger , Algerie",
  },
  {
    salleName: "SPARTAN GYM",
    salleImage: salle3Image,
    hourPrice: "0",
    salleServices: ["Haltérophilie", "CrossFit", "Coaching personnalisé"],
    salleHours: "08h00 - 21h00 (6j/7)",
    salleAddress: "Oran , Algerie",
  },
  {
    salleName: "TITANS FITNESS ",
    salleImage: salle4Image,
    hourPrice: "0",
    salleServices: ["Musculation", "Cardio", "Piscine"],
    salleHours: "06h30 - 22h30 (7j/7)",
    salleAddress: "Tizi-Ouzou , Algerie",
  },
  {
    salleName: "OXYGEN FITNESS",
    salleImage: salle5Image,
    hourPrice: "0",
    salleServices: ["Fitness", "Zumba", "Yoga"],
    salleHours: "06h30 - 22h30 (7j/7)",
    salleAddress: "Bejaia , Algerie",
  },
  {
    salleName: "Mehdi Rahman",
    salleImage: salle6Image,
    hourPrice: "0",
    salleServices: ["MMA" , "Boxe" , "Musculation"],
    salleHours:"06h30 - 22h30 (7j/7)",
    salleAddress: "Boumerdes , Algerie",
  },
];
function Salles1Page() {
  return (
    <div className=" overflow-x-clip">
      <div
        className=" pb-43"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Header isConnected={true}></Header>
        <section className="mt-20">
          <h2 className="heading-1 text-center  max-w-[1200px] mx-auto">
            TROUVEZ IDÉALE
            <span className="text_gradient"> LA SALLE DE SPORT</span> POUR
            ATTEINDRE VOS OBJECTIFS !
          </h2>
          <p className="paragraph-2 max-w-[1000px] mx-auto mt-30">
            Des coachs certifiés, des résultats garantis. Que vous soyez
            débutant ou athlète confirmé, trouvez le coach qui vous convient
          </p>
          <ButtonPrimary buttonClassName="mx-auto mt-20 ">
            <a href="#lar">Trouver ma salle idéale</a>
           
          </ButtonPrimary>
        </section>
      </div>

      <section id="lar">
        <div
          className="w-full h-74 bg-background absolute top-10 -translate-y-1/2 -z-10"
          style={
            {
              filter: "blur(60px)",
            }
          }
        ></div>
        <div className="grid grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10 max-w-[1264px] mx-auto">
          {SALLES.map((salle, index) => (
            <SalleCard
              key={index}
              salleName={salle.salleName}
              salleImage={salle.salleImage}
              salleServices={salle.salleServices}
              salleAddress={salle.salleAddress}
              salleHours={salle.salleHours}
              hourPrice={salle.hourPrice}
            ></SalleCard>
          ))}
        </div>
        <div className="bg-primary py-2 px-4 mt-15 mx-auto w-fit rounded-full">
          <a
            href="Salles2"
            className="font-Poppins font-medium text-lg tracking-wider"
          >
            Voir plus {">"}
          </a>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Salles1Page;
