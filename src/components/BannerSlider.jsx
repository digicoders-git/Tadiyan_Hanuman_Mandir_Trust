import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const BannerSlider = ({ title, description, images = ['/assets/img/44.jpg', '/assets/img/banner/5.jpg'] }) => {
  return (
    <>
      <div className="modern-banner-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
          }}
          pagination={{
            el: '.banner-pagination',
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="banner-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="banner-slide"
                style={{ backgroundImage: `url('${image}')` }}
              >
                <div className="banner-overlay"></div>
                <div className="banner-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <div className="banner-text-box">
                          <h3 className="banner-title">{title}</h3>
                          <p className="banner-description">{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="banner-prev">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="banner-next">
            <i className="fas fa-chevron-right"></i>
          </div>
          
          <div className="banner-pagination"></div>
        </Swiper>
      </div>

      <style jsx>{`
        .modern-banner-slider {
          position: relative;
          height: 70vh;
          overflow: hidden;
        }
        
        .banner-swiper {
          width: 100%;
          height: 100%;
        }
        
        .banner-slide {
          width: 100%;
          height: 70vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
        }
        
        .banner-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          padding-bottom: 80px;
        }
        
        .banner-text-box {
          background: transparent;
          backdrop-filter: none;
          padding: 40px 45px;
          border-radius: 0;
          box-shadow: none;
          border: none;
          transform: translateY(30px);
          opacity: 0;
          animation: slideUpFade 1s ease-out 0.3s forwards;
          width: 100%;
          text-align: center;
        }
        
        @keyframes slideUpFade {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .banner-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        }
        
        .banner-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: white;
          margin: 0;
          font-weight: 400;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
        }
        
        .banner-prev, .banner-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .banner-prev:hover, .banner-next:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        
        .banner-prev {
          left: 30px;
        }
        
        .banner-next {
          right: 30px;
        }
        
        .banner-prev i, .banner-next i {
          color: #ff6b35;
          font-size: 18px;
        }
        
        .banner-pagination {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        
        .banner-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,0.6);
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .banner-pagination .swiper-pagination-bullet-active {
          background: #ff6b35;
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .banner-title {
            font-size: 2.2rem;
          }
          
          .banner-text-box {
            padding: 30px 25px;
            margin: 0 15px;
          }
          
          .banner-prev, .banner-next {
            width: 50px;
            height: 50px;
          }
          
          .banner-prev {
            left: 20px;
          }
          
          .banner-next {
            right: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .banner-title {
            font-size: 1.8rem;
          }
          
          .banner-description {
            font-size: 1rem;
          }
          
          .banner-text-box {
            padding: 25px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default BannerSlider;