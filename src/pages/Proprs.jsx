import React from 'react'
import heroBgImage from '/images/coachs1-hero.png'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';

import { MdKeyboardArrowRight } from "react-icons/md";






function Proprs() {
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
         À PROPOS DE <span className="text_gradient">ATHELX</span>{" "}
             
            </h2>
            <p className="paragraph-2 max-w-[1000px] mx-auto mt-30">
           Nous aidons les athlètes à repousser leurs limites grâce à des compléments de qualité, des coachs experts et une communauté soudée
            </p>
            <ButtonPrimary buttonClassName="mx-auto mt-20">
            <a href= "#ROO" >    Découvrir plus</a> 
            </ButtonPrimary>
          </section>
        </div>

        <section id="ROO">
          <div
            className="w-full h-74 bg-background absolute top-10 -translate-y-1/2 -z-10"
            style={{
              filter: "blur(60px)",
            }}
          ></div>
          <div className='w-screen flex justify-center items-center gap-5 flex-col grad-bg2 rounded-xl'>
          <h2 className="heading-1 text-center  max-w-[1200px] mx-auto">Qui sommes-nous ?
        
            </h2>
            <p className="paragraph-2 max-w-[1000px] mx-auto mt-30"> Chez AthelX, nous croyons que chaque athlète mérite les meilleures ressources pour exceller. Que vous soyez un sportif amateur ou un professionnel, notre plateforme vous accompagne avec des solutions adaptées à vos besoins
       </p>
    </div>
    <div className='w-screen flex justify-center items-center gap-5 flex-col grad-bg2 rounded-xl'>
      
</div>
         </section>
         
        <Footer></Footer>
      </div>
    );
}

export default Proprs