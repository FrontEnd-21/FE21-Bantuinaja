import React from "react";

// Image
import bantuan from "../../assets/IMAGE/bantuan2.jpg";
import NUS from "../../assets/IMAGE/NUS.svg";

// CSS
import "../../assets/CSS/LengkapiDokumen.css";

// Bootstrap
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";

// Icons
import { FaChevronLeft } from "react-icons/fa";

const CardIsiDokumen = () => {
  return (
    <>
      <Card className='Card'>
        <Card.Body className='body'>
          <Breadcrumb>
            <Breadcrumb.Item href='/Bantuan'>
              <FaChevronLeft />
              Kembali
            </Breadcrumb.Item>
          </Breadcrumb>
          <Card.Img variant='right' src={bantuan} className='Card-img' />
          <Card.Title className='Title'>
            Bantuan Pedidikan Jenjang S1
          </Card.Title>
          <Card.Text className='Title2'>
            Offered BY
            <Card.Img variant='right' src={NUS} className='bob' />
          </Card.Text>
          <Card.Text className='SubTitle'>Pendidikan</Card.Text>
        </Card.Body>
      </Card>

      <div className='container'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <h2 className='text-center'>LENGKAPI DOKUMEN</h2>
          </div>
          <span className='Gray-Line'></span>
          <p className='txt'>
            Lengkapi dokumenmu untuk dapat mendaftar pada bantuan yang
            diinginkan
          </p>
        </div>
      </div>

      <section className='two'>
        <div className='file-upload'>
          <h3>Semua Persyaratan Wajib Dalam Bentuk ZIP</h3>
          <p>
            Upload File dalam Bentuk Pdf Dengan Bentuk Ukuran Maksimal 5 MB.
          </p>
          <div className='image-upload-wrap'>
            <input
              className='file-upload-input'
              type='file'
              onchange='readURL(this);'
            />
            <div className='drag-text'>
              <h3>Drag and drop a file</h3>
            </div>
          </div>
          <button
            className='file-upload-btn'
            type='button'
            onclick="$('.file-upload-input').trigger( 'click' )"
          >
            Unggah File
          </button>
          <div className='file-upload-content'>
            <img className='file-upload-image' src='#' alt='your image' />
            <div className='image-title-wrap'>
              <button
                type='button'
                onclick='removeUpload()'
                className='remove-image'
              >
                Remove <span className='image-title'>Uploaded Image</span>
              </button>
            </div>
          </div>
        </div>

        <hr className='hr' />

        <div className='file-upload'>
          <h3>
            Surat Keterangan Tidak Mampu <strong>Wajib</strong>
          </h3>
          <p>
            Upload File dalam Bentuk Pdf Dengan Bentuk Ukuran Maksimal 5 MB.
          </p>
          <div className='image-upload-wrap'>
            <input
              className='file-upload-input'
              type='file'
              onchange='readURL(this);'
            />
            <div className='drag-text'>
              <h3>Drag and drop a file</h3>
            </div>
          </div>
          <button
            className='file-upload-btn'
            type='button'
            onclick="$('.file-upload-input').trigger( 'click' )"
          >
            Unggah File
          </button>
          <div className='file-upload-content'>
            <img className='file-upload-image' src='#' alt='your image' />
            <div className='image-title-wrap'>
              <button
                type='button'
                onclick='removeUpload()'
                className='remove-image'
              >
                Remove <span className='image-title'>Uploaded Image</span>
              </button>
            </div>
          </div>
        </div>
        <a href='/StatusBantuan'>
          <Button className='btn2'>Kirim</Button>
        </a>
      </section>
    </>
  );
};

export default CardIsiDokumen;
