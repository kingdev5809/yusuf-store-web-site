import React from "react";
import { appleWatchPhoto } from "../../../../Assets/photo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function DiscountItem() {
  const data = [
    {
      id: 1,
      color: "black",
      image:
        "https://s3-alpha-sig.figma.com/img/8933/6581/85479a6f0fb8f5c9e12f46881ba7540d?Expires=1700438400&Signature=ZtLhpBikINfuNm2UUbDyVXXQJkKJKi4oee5mH2sNBBZLbIImI0CbhGxncyJZ3dxsJ6tMG4oRfMUv6bJmS6ncc-FmVLt~Dx1xrwEMi4AgtEuJXV7MVUuZzKwZ~rXmuHz4uqWI6VUH6ob9O1zprT3oINE3Y0Y2GWamj~iXUsOAe9QWN3-BhWwl3PeNaX-kfOphsvkq1QUkYecwGPwPVSADlefJ6FcJfsZiIu5LDRjTptnEOrPkvkh1SvTyAnsgIi3ezWSlOlcubW9C9q4mEu1ytc~~pVeh89exxK~I2l~iMl3nMfjw-bqCX8pH6Vt8KcI3ybolrL1xcHaeFfN~n0st-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 1,
      color: "red",
      image:
        "https://s3-alpha-sig.figma.com/img/bd9b/c893/e5fd385d049c1ff490c92c4a152bfa6e?Expires=1700438400&Signature=nOPT2ECrKb~hpXAdwKBOVOizHZQWb2ZqIQhf1UQCg0uE3wB62uXCNrjwvabVm3yqP3ieKXGI0u-zc-ThMvQ~FeoXZU1qCW7fUQ90N0hiLNLbi8jI8s47yfkeSId9Tpj-iyl2TtGrNLI1bcxWgd7dgPbRjs4v~DmiqxTE6nqjHSzUJKczQOglmoeNtPS-5hjPrZgDDJkm1WUyvtwtW-wUoQflVsewR6gS04BUmoH0EWniGZ4bjhAmVE-xttwD0JSw8vw8RpjMZFInsMiAxKycknciy7GOOQ8rhoKKqBKIT2pnP8ArrynonvYyRqG0cJLRxo2hGz9TVNoaKzcU0Zx-rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 1,
      color: "green",
      image:
        "https://s3-alpha-sig.figma.com/img/98a0/a3ae/8e6ef8e17ed8332539d9802b5f7c141a?Expires=1700438400&Signature=PfCXPTTX5RYnkTc5Sw16HrCJ2t-6KPyaj214GhpOc8S4qMKiaS0M~KwVRyPhic62rOKL6jeZpcx~HF03i9-NHLeFyuWMg2UMu1DQw3QlLY2SZ0PaCH1tdelqLEeAMfDSiTbr9cRTWy7X7hBVaCVSDP-Ggjpru-hy83-7~FrMUq4lCZee8ygSEGcMm-KbLzaWAXhvSX3xReqQzZuDLAau~RCjwZyWG2SGNU4ZZyo-nZXRlTIQHRKOWB5w~9UQXWKqu6uEkJurADdcgmVapG1H3v6MhrQ4uncnf0BJtg7~MgrTajNuR~2YuuXlDAyECc6tCGjAtxOliNkjtGWxfUiJ8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];
  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return (
        '<span class="' +
        className +
        "ddawd " +
        data[index].color +
        '" style="background:' +
        data[index].color +
        '"></span>'
      );
    },
  };
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (menu[index]) + '</span>';
  //     }
  // }
  return (
    <div className="discount_item">
      <div className="title">
        <h2>Apple watch aires 8</h2>
        <p>30% chegirma</p>
      </div>
      <div className="content">
        <div className="slide">
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return (
                  '<span class="' +
                  className +
                  "ddawd " +
                  data[index].color +
                  '" style="background:' +
                  data[index].color +
                  '"></span>'
                );
              },
            }}
            slidesPerView={1}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slide-item">
                  <img src={item.image} alt="product" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slide-pagination">
            <div className="slide-pagination-item"></div>
            <div className="slide-pagination-item"></div>
            <div data-color={"#000"} className="slide-pagination-item"></div>
          </div>
        </div>
        <div className="right-side">
          <h4>GPS 41 mm midnight</h4>
          <h5>
            1GB watchos <br /> 9.0 282mAh
          </h5>
          <p>
            <span>399$-</span>199$
          </p>
          <button>Harid qilish</button>
        </div>
      </div>
    </div>
  );
}

export default DiscountItem;
