import React from "react";
import CardAbout from "../Components/CardAbout/CardAbout";
import CardBerita from "../Components/CardBerita/CardBerita";
import CardContact from "../Components/CardContact/CardContact";
import DataCompany from "../Components/DataCompany/DataCompany";
import CardTahapan from "../Components/CardTahapan/CardTahapan";

const Home = () => {
  return (
    <>
      <div className='news'>
        <CardBerita />
      </div>

      <div className='data'>
        <DataCompany />
      </div>

      <div className='at'>
        <CardAbout />
      </div>

      <div className='Tahapan'>
        <CardTahapan />
      </div>

      <div className='contact'>
        <CardContact />
      </div>
    </>
  );
};

export default Home;
