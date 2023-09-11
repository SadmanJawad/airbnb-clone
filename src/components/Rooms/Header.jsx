import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Veluvana Bali - Owl Bamboo House"
        subtitle="Kecamatan Ubud, Bali"
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src="https://img.freepik.com/free-photo/umbrella-chair-around-swimming-pool_1203-2409.jpg?size=626&ext=jpg&ga=GA1.1.1452103923.1690201385&semt=ais"
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
