import { Link, Star } from "lucide-react";
import React from "react";
import greenLocationIcon from "/icons/location-green.svg";

function SalleCard({
  salleImage,
  salleName,
  hourPrice,
  salleServices,
  salleHours,
  salleAddress,
}) {
  return (
    <div className="w-full max-w-sm mx-auto transform hover:scale-105 transition-all duration-300">
      <div
        className="rounded-xl p-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="bg-white rounded-xl relative p-4">
          <div className="absolute top-3 left-4 z-10 flex flex-col items-center gap-1.5">
            <Star fill="#42FACF" stroke="#42FACF" size={20} />
            <Star fill="#42FACF" stroke="#42FACF" size={20} />
            <Star stroke="#42FACF" size={20} />
          </div>

          <div className="aspect-[3/4] mt-4 rounded-lg overflow-hidden">
            <img
              src={salleImage}
              alt={`${salleName} image`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 px-2">
            <div className="flex justify-between items-center">
              <h2 className="font-Poppins font-semibold text-lg md:text-xl tracking-wide">
                {salleName}
              </h2>
              <h2 className="font-Poppins text-lg md:text-xl font-bold tracking-wide text-primary">
                {hourPrice}$/h
              </h2>
            </div>

            <div className="mt-2 space-y-1.5">
              <p className="font-Poppins text-sm text-gray-600 line-clamp-1">
                {salleServices.join(" • ")}
              </p>
              <p className="font-Poppins text-sm text-gray-600">
                {salleHours}
              </p>
              <div className="flex items-center gap-1.5">
                <img src={greenLocationIcon} alt="location icon" className="w-5 h-5" />
                <p className="font-Poppins text-sm text-gray-600 line-clamp-1">
                  {salleAddress}
                </p>
              </div>
            </div>

            <a
              href="formulaire"
              className="mt-4 block w-full text-center bg-primary hover:bg-primary/90 text-black font-medium py-2 px-4 rounded-full transition-colors duration-300"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalleCard;
