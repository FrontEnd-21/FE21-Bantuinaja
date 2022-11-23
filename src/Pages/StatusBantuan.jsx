import React from 'react'
import '../assets/CSS/StatusBantuan.css'
import nus from '../assets/IMAGE/NUS.svg'
import ld from '../assets/IMAGE/Rectangles.svg'
import ds from '../assets/IMAGE/description.svg'
import lx from '../assets/IMAGE/vecto.svg'
import dc from '../assets/IMAGE/check_circle_outline.svg'



function StatusBantuan() {

  return (
    <div className='contain'>
    
            <div className="back">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8625 3.06385L13.3792 1.6626L5.13751 9.5001L13.3875 17.3376L14.8625 15.9363L8.08751 9.5001L14.8625 3.06385Z" fill="#8692A6"/>
                </svg>
                <a href="#">Kembali</a>
            </div>
            <div className="isi">
                <div className="tentang-bantuan">
                    <div className="ttg">
                        <img src={nus} alt="" />
                        <p>Bantuan Pendidikan </p>
                        
                    </div>
                    <p>Bantuan Pendidikan <br/>Jenjang S1 Membe....</p>  
                </div>  
                <div className="status-bantuan">
                        <div className="heading">
                            <img src={nus} alt="" />
                            <h1>Bantuan Pendidikan <br/>
                            Jenjang S1</h1>
                        </div>
                        <div className="stats">
                          <div className="status">
                            <img src={ds} alt="" />
                            <p>Lengkapi<br/>Dokumen</p>
                          </div>
                          <img src={ld} alt="" id='i'/>
                          <div className="status">
                              <img src={lx} alt="" />
                              <p>Verifikasi<br/>Dokumen</p>
                          </div>
                          <img src={ld} alt="" id='i' />
                          <div className="status">
                            <img src={dc} alt="" />
                            <p>Pengajuan<br/>Berhasil</p>
                          </div>
                        </div>

                        <div className="abt">
                          <p>Lengkapi Dokuemn Anda Terlebih Dahulu</p>
                        </div>
                        <div className="abt">
                          <h4>Bantuan Yang diberikan :</h4>
                          <ul>
                            <li>SPP dan Uang Gedung Gratis Selama Perkuliahan</li>
                            <li>Bantuan Uang Saku Rp 4.000.000/Semester</li>
                            <li>Bantuan Dana Buku Sebesar Rp 500.00</li>
                          </ul>
                          <h4>Dokumen Yang Dibutuhkan</h4>
                          <p>KTP, Rapor SMA,TOEFL,Surat Keterangan Sehat,SKTM</p>
                        </div>
                </div>
                      
            </div>   
        </div>
    
  )
}

export default StatusBantuan;
