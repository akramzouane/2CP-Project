import React from 'react'
import heroBgImage from '/images/coachs1-hero.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import coach1Image from '/images/coach-1.png'
import coach2Image from '/images/coach-2.png'
import coach3Image from '/images/coach-3.png'
import coach4Image from '/images/coach-4.png'
import coach5Image from '/images/coach-5.png'
import coach6Image from '/images/coach-6.png'
import CoachCard from '../components/coach/CoachCard';


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
function Coachs1Page() {
    return (
      <div className=" z-0 overflow-x-clip">
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
              TROUVEZ <span className="text_gradient">LE COACH PARFAIT</span>{" "}
              POUR ATTEINDRE VOS OBJECTIFS
            </h2>
            <p className="paragraph-2 max-w-[1000px] mx-auto mt-30">
              Des coachs certifiés, des résultats garantis. Que vous soyez
              débutant ou athlète confirmé, trouvez le coach qui vous convient
            </p>
            <ButtonPrimary buttonClassName="mx-auto mt-20">
        
              <a href= "#relative " >Trouver mon coach</a>
            </ButtonPrimary>
          </section>
        </div>

        <section id="relative">
          <div
            className="w-full h-74 bg-background absolute top-10 -translate-y-1/2 -z-10"
            style={{
              filter: "blur(60px)",
            }}
          ></div>
          <div className="grid grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10 max-w-[1264px] mx-auto">
            {COACHS.map((coach, index) => (
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
          <div className="bg-primary py-2 px-4 mt-15 mx-auto w-fit rounded-full">
            <a
              href="Coachs2"
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

export default Coachs1Page
