import { useState } from "react";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.png";

const Owner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center pt-16 gap-6">
      <h1 className="text-4xl font-bold text-center">lattawanksp</h1>
      <img
        src={isHovered ? profile2 : profile1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-100 w-auto hover:scale-90"
      />

      <p
        style={{ fontFamily: "'Playfair Display', serif" }}
        className=" text-slate-900 text-2xl text-center "
      >
        The phoenix burns, turns to coal, and rises <br /> not once, not twice,
        but every single time it has to.
      </p>
    </div>
  );
};

export default Owner;
