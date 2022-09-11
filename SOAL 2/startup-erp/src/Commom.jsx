import React from "react";


const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="col-lg-2 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc} width="365px"
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>                 
                  <div className="row">
                  <h6 md={{ span: 6, offset: 3 }} className="my-3 col" style={{textAlign: 'center', paddingTop: '15px'}}>
                    Kami siap menerima untuk membantu pengusaha dalam mencatat hasil penjualan <br></br> dengan adanya sistem analisa menggunakan CHART serta Artificial Intelligence prediksi penghasilan. 
                  </h6>
                  </div>
                  <div className="mt-3">
                  <h5 className="my-3" style={{ paddingTop: '55px', paddingBottom: '85px', fontStyle: 'italic'}}>
                   "Pencatatan Mudah, Tepat, Akurat dan Berkualitas"
                  </h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
