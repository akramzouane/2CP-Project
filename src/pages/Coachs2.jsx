import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import coach1Image from "/images/coach-1.png";
import coach2Image from "/images/coach-2.png";
import coach3Image from "/images/coach-3.png";
import coach4Image from "/images/coach-4.png";
import coach5Image from "/images/coach-5.png";
import coach6Image from "/images/coach-6.png";
import CoachCard from "../components/coach/CoachCard";
import { ChevronLeft } from "lucide-react";

import { Link } from "react-router-dom";
const COACHS = [
  {
    coachName: "Alex Moreau",
    coachImage: coach1Image,
    hourPrice: "0",
    coachDescription: "Préparateur physique & Coach en musculation",
    coachAddress: "Annaba , Algerie",
  },
  {
    coachName: "Sarah Dupont",
    coachImage: coach2Image,
    hourPrice: "0",
    coachDescription: "Coach en Yoga & Bien-être",
    coachAddress: "Alger , Algerie",
  },
  {
    coachName: "Karim Benali",
    coachImage: coach3Image,
    hourPrice: "0",
    coachDescription: "Coach en Boxe & Self-Défense",
    coachAddress: "Oran , Algerie",
  },
  {
    coachName: "Julien Leferve",
    coachImage: coach4Image,
    hourPrice: "0",
    coachDescription: "Coach en CrossFit & Performance",
    coachAddress: "Tizi-Ouzou , Algerie",
  },
  {
    coachName: "Laura Martin",
    coachImage: coach5Image,
    hourPrice: "0",
    coachDescription: "Coach en Running & Trail",
    coachAddress: "Bejaia , Algerie",
  },
  {
    coachName: "Mehdi Rahman",
    coachImage: coach6Image,
    hourPrice: "0",
    coachDescription: "Coach en Street Workout & Calisthenics",
    coachAddress: "Boumerdes , Algerie",
  },
];
function Coachs2Page() {
  return (
    <div>
      <Header isConnected={true}></Header>
      <section className="mt-20">
        <h2 className="heading-2 text-center  max-w-[1060px] mx-auto">
          COACHS SPORTIFS
        </h2>
      </section>
      <section className="max-w-[1264px] mt-5 mx-auto">
        <div className="grid grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10">
          {COACHS.concat(COACHS).map((coach, index) => (
            <CoachCard
              key={index}
              coachName={coach.coachName}
              coachImage={coach.coachImage}
              coachDescription={coach.coachDescription}
              coachAddress={coach.coachAddress}
              hourPrice={coach.hourPrice}
            ></CoachCard>
          ))}
        </div>
        <div className="mx-auto w-fit rounded-full mt-10 -mb-15">
          <Link to="/coachs1"> {/* Link to Coachs1Page */}
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

export default Coachs2Page;
