"use client"

import { Lock, Mail, User } from "lucide-react"
import { useState, useEffect } from "react"
import Logo from "../../components/Logo"

function Connexion() {
  const [userState, setUserState] = useState("connexion")
  const [isSwapped, setIsSwapped] = useState(false)

  // Handle the swap animation when userState changes
  useEffect(() => {
    if (userState === "inscription") {
      setIsSwapped(true)
    } else {
      setIsSwapped(false)
    }
  }, [userState])

  return (
    <div className="connexion-bg-gradient">
      <div className="relative h-[127vh] overflow-hidden">
        {/* Form Container */}
        <div
          className="w-[60%] connexion-box absolute top-40 flex items-center justify-center py-10 transition-all duration-700 ease-in-out"
          style={{
            left: isSwapped ? "5%" : "35%",
            transitionProperty: "left, transform",
          }}
        >
          <div className={`flex flex-col items-center w-[60%] h-full transition-all duration-700 ${
            isSwapped ? "translate-x-[-10%]" : "translate-x-[10%]"
          }`}>
            <h2 className="font-Poppins font-bold text-[50px] leading-[75px] tracking-[2px] text-background uppercase">
              {userState}
            </h2>
            <div className="mt-7 w-full">
              {userState === "inscription" && (
                <div className="w-full flex items-center mt-7 pb-3 border-b-2 border-b-black">
                  <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    required
                    className="h-full outline-none border-none flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                  />
                  <User className="text-black"></User>
                </div>
              )}
              <div className="w-full flex items-center pb-3 border-b-2 border-b-black mt-7">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="h-full outline-none border-none flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                />
                <Mail className="text-black"></Mail>
              </div>
              <div className="w-full flex items-center pb-3 border-b-2 border-b-black mt-7">
                <input
                  type="text"
                  required
                  minLength={8} 
                  maxLength={15}
                  placeholder="Mot de passe"
                  className="h-full outline-none border-none flex-1 font-Poppins font-medium text-xl tracking-[1px] placeholder:text-black text-black"
                />
                <Lock className="text-black"></Lock>
              </div>
            </div>
            <button className="cursor-pointer mt-20 bg-primary py-1.5 text-center font-Roboto font-bold text-[27px] tracking-wider w-full rounded-full">
              {userState === "connexion" ? "Connexion" : "Inscription"}
            </button>
            {userState === "connexion" ? (
              <div className="flex w-full items-center justify-between mt-10">
                <span
                  onClick={() => setUserState("inscription")}
                  className="cursor-pointer font-Roboto font-bold text-xl hover:text-primary transition-colors"
                >
                  Créer un compte
                </span>
                <span className="cursor-pointer font-Roboto font-bold text-xl hover:text-primary transition-colors">
                  Mot de passe oublie
                </span>
              </div>
            ) : (
              <span
                onClick={() => setUserState("connexion")}
                className="cursor-pointer font-Roboto font-bold text-xl mx-auto mt-10 hover:text-primary transition-colors"
              >
                Vous avez déjà un compte ?
              </span>
            )}
          </div>
        </div>

        {/* Image Container */}
        <div
          className="absolute h-fit w-[35%] top-1/2 -translate-y-1/2 rounded-[55px] overflow-clip transition-all duration-700 ease-in-out"
          style={{
            left: isSwapped ? "60%" : "5%",
            boxShadow: "0px 40px 50px rgba(0, 0, 0, 0.25)",
            transitionProperty: "left, transform",
          }}
        >
          <div className="relative">
            <Logo className="absolute top-10 left-1/2 -translate-x-1/2"></Logo>
            <img src="images/connexion-image.png" alt="Login" className="w-full h-auto"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connexion