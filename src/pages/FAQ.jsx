import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartFAQ from '../components/CartFAQ';

function FAQ() {
  return (
    <div>
      <section className="mt-20">
        <Header isConnected={true}></Header>

        <h2 className="heading-1 text-center max-w-[1200px] mx-auto">
          <span className="text_gradient">FOIRE AUX QUESTIONS</span>
        </h2>
        <p className="text-white text-4xl text-center">
          Besoin d’aide ? Nous répondons à
        </p>
        <p className="text-white text-4xl text-center">vos questions !</p>
        <div className="w-1/4 flex justify-center items-center bg-[#42c0fa99] rounded-2xl p-5 mx-auto mt-10">
          <input
            type="text"
            placeholder="Tapez votre question ici..."
            className="focus text-white placeholder:text-white p-5 bg-transparent w-full"
          />
        </div>
      </section>
       <h1 className="text-white text-6xl">Catégories de FAQ</h1>
      <div className="" 
             
     >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20-full max-w-[1200px]"  style={{
          
     
        }}>
          <CartFAQ
            text1="Comment passer une commande sur AthelX ?"
            text2="Ajoutez vos produits au panier et suivez le processus de paiement sécurisé."
          />
          <CartFAQ
            text1="Quels sont les délais de livraison ?"
            text2="Nos livraisons prennent en moyenne 3 à 5 jours ouvrés en Algérie."
          />
          <CartFAQ
            text1="Vos compléments alimentaires sont-ils certifiés ?"
            text2="Oui, tous nos produits sont testés en laboratoire et certifiés sans substances interdites."
          />
          <CartFAQ
            text1="Comment trouver un coach sur AthelX ?"
            text2="Allez dans la section Coachs, sélectionnez un coach et réservez une séance en ligne."
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default FAQ;