import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Photos = () => {

  return (
      <div
      style={{
        width: "100%",
        maxWidth: "1000px",   // optional limit
        aspectRatio: "16 / 9",
        margin: "0 auto"
      }}
    >
      <Carousel>
        <div>
            <img src="/assets/school/isn2025/1.jpg" />
        </div>
        {/*<div>*/}
        {/*    <img src="/assets/school/isn2025/2.jpg" />*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*    <img src="/assets/school/isn2025/4.jpg" />*/}
        {/*</div>*/}
        <div>
            <img src="/assets/school/isn2025/5.jpg" />
        </div>
        <div>
            <img src="/assets/school/isn2025/6.jpg" />
        </div>
        <div>
            <img src="/assets/school/isn2025/7.jpg" />
        </div>
        {/*<div>*/}
        {/*    <img src="/assets/school/isn2025/8.jpg" />*/}
        {/*</div>*/}
    </Carousel>
    </div>
  )

};

export default Photos;
