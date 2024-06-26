import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter,router } from 'next/router';

const directionImg = './asset/moremi.svg';
const senateChambersImg = './asset/moremi.svg';
const mosqueImg = './asset/moremi.svg';
const riuImg = './asset/moremi.svg';
const moremiHostelImg = './asset/moremi.svg';
const lateefahOkunuHostelImg = './asset/moremi.svg';
const jungleHostelImg = './asset/moremi.svg';
const schoolCafeteriaImg = './asset/moremi.svg'; 
const MBashir = '/asset/MBashir.jpg'; 
const masCommunicationStudio = './asset/masscom.jpg'; 
const dummyImg = './asset/moremi.svg';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [locations, setLocations] = useState([
    { name: 'Direction', description: 'Navigate yourself around the school', image: directionImg },
    { name: 'Senate-Chambers', description: 'Official meetings and events', image: senateChambersImg },
    { name: 'Mosque', description: 'Place for religious worship', image: mosqueImg },
    { name: 'RIU', description: 'Research Institute Unit', image: riuImg },
    { name: 'Mass-Communication-Studio', description: 'Mass communication studio', image: masCommunicationStudio },
    { name: 'MBashir', description: 'College of management and applied science', image: MBashir },
    { name: 'Moremi-Hostel', description: 'Accommodation for students', image: moremiHostelImg },
    { name: 'Lateefah-Okunu-Hostel', description: 'Accommodation for students', image: lateefahOkunuHostelImg },
    { name: 'Jungle-Hostel', description: 'Accommodation for male students', image: jungleHostelImg },
    { name: 'School-Cafeteria', description: 'Dining area for students', image: schoolCafeteriaImg },
  ]);

  // Filter locations based on the search query
  const suggestedLocations = locations.filter((location) =>
  location.name.toLowerCase().includes(searchQuery.toLowerCase())
);

const navigateToLocation = (locationName) => {
    router.push(`/location/${encodeURIComponent(locationName)}`);
  }

// Only show suggestions if the search query has content
const shouldShowSuggestions = searchQuery.trim() !== '';
  return (
    <div className='mapSearch'>
      <div className='map'>
        <Image src={dummyImg} objectFit='cover' objectPosition='center' alt="img" layout='fill' />
      </div>
      <div className='mapContent'>
        <div className='homepageGoTo'>
          <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#CCCCCC" />
            <path d="M17.5262 11.8047C17.2659 11.5444 16.8438 11.5444 16.5834 11.8047L13.3251 15.0662C12.8049 15.587 12.8051 16.4309 13.3256 16.9513L16.5858 20.2116C16.8462 20.4719 17.2683 20.4719 17.5287 20.2116C17.789 19.9513 17.789 19.5291 17.5287 19.2688L14.7382 16.4783C14.4779 16.218 14.4779 15.7959 14.7382 15.5355L17.5262 12.7475C17.7866 12.4872 17.7866 12.0651 17.5262 11.8047Z" fill="#CCCCCC" />
          </svg>
          </span >
          <span>
            <p>Go To Destination</p>
          </span>
        </div>
        <div className='homepage1Location'>
        <div><svg width="12" height="59" viewBox="0 0 12 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.4171C9.83771 11.941 12 9.47301 12 6.50002C12 3.18631 9.31371 0.500015 6 0.500015C2.68629 0.500015 0 3.18631 0 6.50002C0 9.47301 2.16229 11.941 5 12.4171L5 46.583C2.16229 47.0591 0 49.527 0 52.5C0 55.8137 2.68629 58.5 6 58.5C9.31371 58.5 12 55.8137 12 52.5C12 49.527 9.83771 47.0591 7 46.583L7 12.4171Z" fill="url(#paint0_linear_222_123)"/>
<circle cx="6" cy="6.50002" r="2" fill="white"/>
<circle cx="6" cy="52.5" r="2" fill="white"/>
<defs>
<linearGradient id="paint0_linear_222_123" x1="8" y1="-12.5" x2="6" y2="58.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#CCCCCC"/>
<stop offset="1" stop-color="#319F43"/>
</linearGradient>
</defs>
</svg>
</div>
        <div>
        <span style={{display:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',padding:'0 1rem' }}><input type='text' placeholder='Your location'/><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#CCCCCC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.502 8.64202C21.6459 7.78599 20.2581 7.78599 19.402 8.64202L9.05759 18.9865C8.75159 19.2925 8.54301 19.6822 8.45814 20.1065L8.02919 22.2513C7.82469 23.2738 8.72621 24.1754 9.74873 23.9708L11.8935 23.5419C12.3178 23.457 12.7076 23.2484 13.0136 22.9424L23.358 12.598C24.214 11.742 24.214 10.3541 23.358 9.49804L22.502 8.64202ZM20.4353 9.67533C20.7207 9.38999 21.1833 9.38999 21.4687 9.67533L22.3247 10.5314C22.6101 10.8167 22.6101 11.2793 22.3247 11.5647L20.3726 13.5167L18.4833 11.6274L20.4353 9.67533ZM17.45 12.6607L10.0909 20.0198C9.9889 20.1218 9.91938 20.2517 9.89109 20.3932L9.46214 22.5379L11.6069 22.1089C11.7483 22.0806 11.8782 22.0111 11.9802 21.9091L19.3393 14.55L17.45 12.6607Z" fill="#CCCCCC"/>
</svg>
</span>
<hr />
<span
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0 1rem',
              }}
            >
              <input
                type="text"
                placeholder="Search for a location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </span>

            {shouldShowSuggestions && (
            <div className="suggestions">
              {suggestedLocations.map((suggestion, index) => (
                <div key={index} className="suggestion" onClick={() => setSearchQuery(suggestion.name)}>
                  {suggestion.name}
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
        <div className='HomepageMeansoftrans'>
          <button><svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6667 21.3333H4V22.6667C4 23.4031 3.40304 24 2.66667 24H1.33333C0.59696 24 0 23.4031 0 22.6667V9.33333L3.30733 1.61621C3.72755 0.63572 4.69165 0 5.75839 0H20.9083C21.9751 0 22.9391 0.63572 23.3593 1.61621L26.6667 9.33333V22.6667C26.6667 23.4031 26.0697 24 25.3333 24H24C23.2636 24 22.6667 23.4031 22.6667 22.6667V21.3333ZM24 12H2.66667V18.6667H24V12ZM2.90125 9.33333H23.7655L20.9083 2.66667H5.75839L2.90125 9.33333ZM6 17.3333C4.89543 17.3333 4 16.4379 4 15.3333C4 14.2288 4.89543 13.3333 6 13.3333C7.10457 13.3333 8 14.2288 8 15.3333C8 16.4379 7.10457 17.3333 6 17.3333ZM20.6667 17.3333C19.5621 17.3333 18.6667 16.4379 18.6667 15.3333C18.6667 14.2288 19.5621 13.3333 20.6667 13.3333C21.7712 13.3333 22.6667 14.2288 22.6667 15.3333C22.6667 16.4379 21.7712 17.3333 20.6667 17.3333Z" fill="#319F43"/>
</svg>
Vehicle</button>
          <button><svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.32337 10.3298L7.5968 7.22496C8.06587 6.88312 8.64547 6.69389 9.25387 6.71439C10.7357 6.75082 12.0371 7.72222 12.4897 9.14046C12.7381 9.91907 12.9647 10.4445 13.1695 10.7167C14.3859 12.334 16.3212 13.38 18.5008 13.38V16.0467C15.6012 16.0467 13.0105 14.7244 11.2987 12.6501L10.3685 17.9247L13.1167 20.2307L16.0809 28.3747L13.5751 29.2867L10.8552 21.8141L6.33488 18.0211C5.60481 17.4309 5.20905 16.4723 5.38361 15.4823L6.06175 11.6364L5.15929 12.2921L2.32328 16.1955L0.165894 14.6281L3.30075 10.3133L3.32337 10.3298ZM11.1675 6.04665C9.69467 6.04665 8.5008 4.85274 8.5008 3.37998C8.5008 1.90722 9.69467 0.713318 11.1675 0.713318C12.6401 0.713318 13.8341 1.90722 13.8341 3.37998C13.8341 4.85274 12.6401 6.04665 11.1675 6.04665ZM7.20533 23.6217L2.92007 28.7288L0.877293 27.0147L4.84419 22.2871L5.83955 19.38L8.22773 21.38L7.20533 23.6217Z" fill="#319F43"/>
</svg>
Walk</button>
          <button><svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3333 5.99999C22.8061 5.99999 24 4.80608 24 3.33332C24 1.86056 22.8061 0.666656 21.3333 0.666656C19.8605 0.666656 18.6667 1.86056 18.6667 3.33332C18.6667 4.80608 19.8605 5.99999 21.3333 5.99999ZM17.6571 5.37323C18.0984 5.48371 18.4529 5.81158 18.5976 6.24295C18.84 6.96614 19.1791 7.60063 19.596 8.1333C20.7448 9.60124 22.5993 10.4373 25.1141 10.0181C25.8405 9.89707 26.5275 10.3878 26.6485 11.1141C26.7696 11.8405 26.2789 12.5275 25.5525 12.6485C22.7043 13.1232 20.2388 12.3989 18.458 10.8061L14.8388 13.9825L17.0032 16.4551C17.216 16.6981 17.3333 17.0103 17.3333 17.3333V23.3333C17.3333 24.0697 16.7364 24.6667 16 24.6667C15.2636 24.6667 14.6667 24.0697 14.6667 23.3333V17.8345L11.9585 14.7408L11.8994 14.6745C11.5806 14.3181 11.0471 13.7215 10.8153 13.0168C10.6728 12.5839 10.6284 12.0837 10.781 11.5556C10.9289 11.0437 11.2317 10.6098 11.6077 10.2406L11.6263 10.2227L16.4179 5.69731C16.7485 5.38494 17.2157 5.26276 17.6571 5.37323ZM2.66667 20.6667C2.66667 18.4575 4.45753 16.6667 6.66667 16.6667C8.8758 16.6667 10.6667 18.4575 10.6667 20.6667C10.6667 22.8759 8.8758 24.6667 6.66667 24.6667C4.45753 24.6667 2.66667 22.8759 2.66667 20.6667ZM6.66667 14C2.98477 14 0 16.9848 0 20.6667C0 24.3485 2.98477 27.3333 6.66667 27.3333C10.3486 27.3333 13.3333 24.3485 13.3333 20.6667C13.3333 16.9848 10.3486 14 6.66667 14ZM21.3333 20.6667C21.3333 18.4575 23.1241 16.6667 25.3333 16.6667C27.5425 16.6667 29.3333 18.4575 29.3333 20.6667C29.3333 22.8759 27.5425 24.6667 25.3333 24.6667C23.1241 24.6667 21.3333 22.8759 21.3333 20.6667ZM25.3333 14C21.6515 14 18.6667 16.9848 18.6667 20.6667C18.6667 24.3485 21.6515 27.3333 25.3333 27.3333C29.0152 27.3333 32 24.3485 32 20.6667C32 16.9848 29.0152 14 25.3333 14Z" fill="#319F43"/>
</svg>
Cycle</button>
        </div>
        <div className='homepagePlacesBtn'>
        <button onClick={() => navigateToLocation(searchQuery)}>Take Me There</button>
          <button>See Other Places</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
