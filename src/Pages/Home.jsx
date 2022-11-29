import React from "react";
import CardAbout from "../Components/CardAbout/CardAbout";
import CardBerita from "../Components/CardBerita/CardBerita";
import CardContact from "../Components/CardContact/CardContact";
import DataCompany from "../Components/DataCompany/DataCompany";
import CardTahapan from "../Components/CardTahapan/CardTahapan";
import axios from "axios";

const Home = () => {

function Mount(){
  axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => {
    console.log(res);
  })
}
Mount();
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
