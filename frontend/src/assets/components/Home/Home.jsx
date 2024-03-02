import React from 'react'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Description from '../description/Description'
import "./home.css"
import Aboutus from '../aboutus/Aboutus'
import Counter from '../counter/Counter'
import Sectors from '../sectors/Sectors'
import Testimonial from '../testimonial/Testimonial'
import Team from '../team/Team'
import Gallery from '../gallery/Gallery'
function Home() {
  return (
    <div className='page-wrapper'>
<Header />
<Banner />
<div className="page-content metetam">

<Description className="" />
<Aboutus />
<Counter />
<Sectors />
<Testimonial />
<Team />
<Gallery />
</div>


    </div>
  )
}

export default Home