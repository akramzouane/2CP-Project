import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SalleCard from "../components/SalleCard";
import { ChevronLeft } from "lucide-react";
import salle1Image from "/images/salle-1.png";
import salle2Image from "/images/salle-2.png";
import salle3Image from "/images/salle-3.png";
import salle4Image from "/images/salle-4.png";
import salle5Image from "/images/salle-5.png";
import salle6Image from "/images/salle-6.png";
import { Link } from "react-router-dom";

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
    salleServices: ["MMA", "Boxe", "Musculation"],
    salleHours: "06h30 - 22h30 (7j/7)",
    salleAddress: "Boumerdes , Algerie",
  },
];
function Salles2Page() {
  return (
    <div>
      <Header isConnected={true}></Header>
      <section className="mt-20">
        <h2 className="heading-2 text-center  max-w-[1060px] mx-auto">
          SALLES DE SPORT
        </h2>
      </section>
      <section className="max-w-[1264px] mt-25 mx-auto">
        <div className="grid grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10">
          {SALLES.concat(SALLES).map((salle, index) => (
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
        <div className="mx-auto w-fit rounded-full mt-10 -mb-15">
          
          <Link to="/salles1"> {/* Link to Salles1Page */}
          <ChevronLeft
            width={41}
            height={105}
            color="white"
            stroke="white"
          ></ChevronLeft>

          </Link>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Salles2Page;
