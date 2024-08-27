import React from "react";
import local from '../images/Local.jpg'
import '../App.css'

function Banner(){
    return (
        <>
          <section className="banner">
              <img src={local} alt="banner" />
          </section>
        </>
    )
}
export default Banner;