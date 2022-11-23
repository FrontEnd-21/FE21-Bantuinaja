import React from "react";

// Image
import mitra from "../../assets/IMAGE/mitra.svg";

// CSS
import "../../assets/CSS/CardContact.css";
import Button from "react-bootstrap/Button";

// Bootstrap
import Card from "react-bootstrap/Card";

const CardContact = () => {
  return (
    <Card className='Contact'>
      <Card.Body className='Wrap-Contact'>
        <Card.Title className='Contact-Title'>
          <h2>Ingin bergabung menjadi mitra kami</h2>
        </Card.Title>
        <Button className='C-btn'>Daftar</Button>
      </Card.Body>

      <Card.Body className='C-img'>
        <img src={mitra} alt='' />
      </Card.Body>
    </Card>
  );
};

export default CardContact;
