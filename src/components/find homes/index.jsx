import React from 'react'
import './findhomes.css'
import homes from "assets/homes.svg"
const FindHomes = () => {
  return (
    <div className='fh_container'>
        <section className="fh_text">
            <div>
            <h1>Find homes in popular neighbourhood</h1>
            </div>
            <div className>
            <h3>Apartments in Lekki, Obalende, Agege & Yaba </h3>
            </div>
            <div className="imgrr">
<img src={homes} alt="homes" />
        </div>
        </section>
        
    </div>
  )
}

export default FindHomes