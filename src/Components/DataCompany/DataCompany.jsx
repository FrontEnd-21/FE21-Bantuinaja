import React, { useEffect } from "react";
import "../../assets/CSS/DataStyle.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function DataCompany() {

  
  const [data, setData] = useState([]);

  const getApi = () => {
    axios.get('https://be-9.up.railway.app/bantuan/')
    .then((response) => {
      const allData = response.data.data;
      setData(allData);
    })
    .catch(error => console.log(`Error ${error}`))
  }

  useEffect(() => {
    getApi();
  }, [1])
  console.log(data.slice(0,3))
  
  
  return (
    <div className="Container">
      <div className='section-bantuan'>
        <h3>Bantuan</h3>
        <div className="righ">
          <Link to={"/bantuan"}>See More..</Link>
        </div>
      </div>

      <section className='company'>
        {data.slice(0,3).map(item => {
          return (
              <div className='main'>
                <img src={item.image_bantuan} alt='Gambar' className='img' />

                <div className='info'>
                  <span >{item.nama_bantuan}</span>
                  <span >{item.description}</span>
                </div>
              </div>
          )
        })}
         
      </section>
    </div>
  );
}

export default DataCompany;
