import React from "react";
import { ChevronDown, ImageIcon } from "lucide-react";
import Header from "../Header"; // Make sure to import your Header component

const facebook = "/icons/facebook.svg";
const instagram = "/icons/instagram.svg";
const twitter = "/icons/twitter.svg";
const miniLogo = "/icons/logo-icon.svg";
const resignationImage = "/placeholder.svg";

const Registration = () => {
  return (
    <div className="min-h-screen bg-[#0b1528] flex flex-col">
      <Header isConnected={false} />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col items-center w-full max-w-7xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h1 className="text-white text-4xl font-bold">ATHELS</h1>
            <img src={miniLogo} alt="Mini Logo" className="h-10" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1115px]">
            {/* Left Card - User Profile */}
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-between w-full lg:w-1/3 shadow-lg">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-sky-300">
                  <img 
                    src={resignationImage} 
                    alt="Profile" 
                    className="w-16 h-16 text-sky-400" 
                  />
                </div>
                <p className="text-center font-medium">Nom d'utilisateur</p>
                <button className="bg-emerald-400 text-white py-2 px-6 rounded-full text-sm hover:bg-emerald-500 transition-colors font-bold cursor-pointer">
                  Déconnexion
                </button>
              </div>

              <div className="flex flex-col items-center gap-6 w-full mt-8">
                <div className="flex gap-6">
                  <a href="#" className="text-blue-500">
                    <img src={facebook} alt="Facebook" className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-pink-500">
                    <img src={instagram} alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-400">
                    <img src={twitter} alt="Twitter" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card - Registration Form */}
            <div className="bg-gray-100 rounded-lg p-6 w-full lg:w-2/3 shadow-lg">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                />
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                />
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  className="w-full p-3 rounded-md border-0 focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                />

                <div className="relative">
                  <select
                    className="w-full p-3 rounded-md border-0 appearance-none focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Genre
                    </option>
                    <option>HOMME</option>
                    <option>FEMME</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                </div>

                <div className="relative">
                  <select
                    className="w-full p-3 rounded-md border-0 appearance-none focus:ring-2 focus:ring-sky-300 font-bold bg-sky-100"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Statut
                    </option>
                    <option>Marié</option>
                    <option>Célibataire</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <div className="w-24 h-24 border-2 border-sky-300 rounded-md bg-white flex flex-col items-center justify-center">
                    <ImageIcon className="w-10 h-10 text-sky-300" />
                  </div>
                  <p className="text-sm text-sky-600 mt-2">Ajouter une photo</p>
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="bg-emerald-400 text-white py-2 px-10 rounded-full hover:bg-emerald-500 transition-colors font-bold cursor-pointer"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;