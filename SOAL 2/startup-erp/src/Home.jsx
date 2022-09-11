import React, { useState } from "react";
import web from "../src/images/img3.svg";
import chart1 from "../src/images/pie-chart.png";
import chart2 from "../src/images/pyramid-chart.png";
import chart3 from "../src/images/chart.png";
import chart4 from "../src/images/analysis.png";
import Sdata from "./Sdata";
import Card2 from "./Card";
import Commom from "./Commom";
import {Card} from 'react-bootstrap';

const Home = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
    );
  }; 

  return (
    <>
      <Commom
        name="Grow your business with"
        id="header-scroll"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />        
      
      <div className="my-5 pt-5 pb-5" id="about">
        <h1 className="text-center pb-5" style={{fontWeight: 'bold'}}> ABOUT </h1>
      
      <div className="container-fluid mb-5">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div" style={{marginRight: 'auto', marginLeft: 'auto'}}>
                  <img
                    src={chart1} width="373px"
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                  <img
                    src={chart2} width="373px"
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                  <img
                    src={chart3} width="373px"
                    className="img-fluid animated"
                    alt="Commom img"
                  />    
                  <img
                    src={chart4} width="373px"
                    className="img-fluid animated"
                    alt="Commom img"
                  />                                                  
              </div>
              <br></br><br></br>
              <div className="projects-heading-text-div">
              <Card style={{opacity: '0.9'}}>
                <Card.Body>
                  <Card.Title style={{fontFamily: 'sans-serif', fontWeight: 'bold'}}>STARTUP ERP</Card.Title>
                  <Card.Text style={{textAlign: 'justify', fontFamily: 'sans-serif'}}>
                    Startup ERP merupakan suatu startup yang membantu pengguna terutama di bidang usaha perekonomian yaitu para pengusaha dalam mencatat setiap barang yang keluar masuk dan mencatat setiap keuntungan yang didapatkan setiap harinya. Selain itu, di dalam platform kami menyediakan analisa hasil penjualan dengan menggunakan chart dalam prosesnya dan tersedia kecerdasan buatan atau artificial intelligence untuk memprediksi penghasilan dari keuntungan usaha. Disamping itu, platform kami mendukung sistem dalam bekerja selama 7x24 Jam sehingga memudahkan para pengusaha dalam melakukan pencatatan tiap harinya di jam kerja tersebut. Kemudian dalam platform kami menyediakan fitur export data setelah dilakukan pencatatan yang memudahkan para pengusaha menyimpan data pencatatan barang yang keluar masuk, keuntungan, dan analisa hasil penjualan. Hadirnya startup ini diharapkan dapat membantu para pengusaha dalam pencatatan. 
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
            </div>
      </div>   
      <br></br>

      <div className="my-5 pt-5 " id="pricing">
        <h1 className="text-center pb-5" style={{fontWeight: 'bold'}}> PRICING </h1>
      
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card2 key={ind} imgsrc={val.imgsrc} title={val.title} description={val.description} harga={val.harga}/>;
              })}
            </div>
          </div>
        </div>
        </div>
      </div>   
      <br></br>
      
      <div className="pt-5 pb-5" id="contact">
        <h1 className="text-center pb-5" style={{fontWeight: 'bold'}}> CONTACT US </h1>
      <div className="container contact_div mb-5" >
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} >
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{fontFamily: 'sans-serif'}}>
                  Nama Lengkap
                </label>
                <input style={{fontFamily: 'sans-serif'}}
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{fontFamily: 'sans-serif'}}>
                  Nomor Handphone
                </label>
                <input
                  type="number" style={{fontFamily: 'sans-serif'}}
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="0877xxxxx"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{fontFamily: 'sans-serif'}}>
                  Email
                </label>
                <input
                  type="email" style={{fontFamily: 'sans-serif'}}
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@gmail.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" style={{fontFamily: 'sans-serif'}}>
                  Pesan
                </label>
                <textarea
                  class="form-control" style={{fontFamily: 'sans-serif'}}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" style={{fontFamily: 'sans-serif'}} type="submit">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  ); 
};

export default Home;
