import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const HomePage = () => {
  const dummyImg = './asset/dummyImg.svg';
  const [searchValue, setSearchValue] = useState('');
  const [locations, setLocations] = useState([
    { name: 'Direction', description: 'Navigate yourself around the school' },
    { name: 'Senate Chambers', description: 'Navigate yourself around the school' },
    { name: 'Mosque', description: 'Navigate yourself around the school' },
    { name: 'RIU', description: 'Navigate yourself around the school' },
    { name: 'Moremi Hostel', description: 'Navigate yourself around the Hostel' },
    { name: 'Lateefah Okunu Hostel', description: 'Navigate yourself around the Hostel' },
    { name: 'Jungle Hostel', description: 'Navigate yourself around the Hostel' },
    { name: 'School Cafteria', description: 'Navigate yourself around the Cafteria' },
  ]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='homepageDashboard'>
      <header className='header'>Summit Navigation App</header>
      <div className='hompageContent'>
        <div className='homepageGo'>Where would you like to go?</div>
        <div className='searchContainer'>
          <input
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>

        <div className='quichNav'>
          <h3 className='homepageQuickNav'>Quick Navigation</h3>
          {filteredLocations.map((location, index) => (
            <div className='location' key={index}>
              <span className='locationSpan'>
                <h3>{location.name}</h3>
                <h6>{location.description}</h6>
              </span>
              <span className='colourSpan'></span>
              <Image src={dummyImg} width={100} height={100} className='locationImg' alt='img' />
            </div>
          ))}
        </div>
        <footer>
          <Link href='homePage1' className='link'>
            <h3>Welcome To Summit University</h3>
          </Link>
          <h3>We Shine Like The Sun</h3>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
