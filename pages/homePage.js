import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  const dummyImg = './asset/dummyImg.svg'
  return (
    <div className='homepageDashboard'>
      <header className='header'>Summit Navigation App</header>
      <div className='hompageContent'>
        <div className='homepageGo'>Where would you like to go?</div>
        <input type='text' placeholder='Search' />

        <div className='quichNav'>
          <h3 className='homepageQuickNav'>Quick Navigation</h3>
          <div className='location'>
            <span className='locationSpan'>
              <h3 >Direction</h3>
              <h6> Navigate yourself around the school</h6>
            </span>
            <span className='colourSpan'></span>
            <Image src={dummyImg} width={100} height={100} className='locationImg' alt="img" />
          </div>

          <div className='location'>
            <span className='locationSpan'>
              <h3 >Senate Chambers</h3>
              <h6>
                Navigate yourself around the school </h6>
            </span>
            <span className='colourSpan'></span>
            <Image src={dummyImg} width={100} height={100} className='locationImg' alt="img" />
          </div>

          <div className='location'>
            <span className='locationSpan'>
              <h3 >Mosque</h3>
              <h6> Navigate yourself around the school</h6>
            </span>
            <span className='colourSpan'></span>
            <Image src={dummyImg} width={100} height={100} className='locationImg' alt="img" />
          </div>

          <div className='location'>
            <span className='locationSpan'>
              <h3 >RIU</h3>
              <h6> Navigate yourself around the school</h6>
            </span>
            <span className='colourSpan'></span>
            <Image src={dummyImg} width={100} height={100} className='locationImg' alt="img" />
          </div>
        </div>
        <footer>
        <Link href='homePage1' className='link'><h3>Welcome To Summit University</h3></Link>
<h3>We Shine Like The Sun</h3></footer>
      </div>

    </div>
  )
}
export default HomePage
