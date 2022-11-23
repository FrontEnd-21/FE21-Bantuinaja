import React, { useEffect } from "react";
import "../../assets/CSS/DataStyle.css";
import axios from "axios";
import { useState } from "react";

function DataCompany() {
  const [company, Setcompany] = useState([]);

  useEffect(() => {
    axios
      .get("https://63746b0408104a9c5f7fbfb1.mockapi.io")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className='section-bantuan'>
        <h3>Bantuan</h3>
        <span>See More..</span>
      </div>

      <section className='company'>
        <div className='main'>
          <img src='' alt='Gambar' className='img' />

          <div className='info'>
            <span>Title</span>
            <span>Date</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default DataCompany;
