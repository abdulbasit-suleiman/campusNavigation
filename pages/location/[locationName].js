import React from 'react';
import Image from 'next/image';

const locationImages = {
  'Jungle-Hostel': './assets/moremi.svg',
  'Senate-Chambers': './assets/moremi.svg',
  'Mosque': './assets/moremi.svg',
  'RIU': './assets/moremi.svg',
  'Moremi-Hostel': './assets/moremi.svg',
  'Lateefah-Okunu-Hostel': './assets/moremi.svg',
  'School-Cafeteria': './assets/moremi.svg',
};

function LocationDetails({ location }) {
  if (!location) {
    return <p>Location not found</p>;
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <div className='map'>
        <Image src={location.image} alt={location.name}  objectFit='cover' objectPosition='center' layout='fill' />
      </div>
      <p>{location.description}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const locations = Object.keys(locationImages);

  const paths = locations.map((name) => ({
    params: { locationName: encodeURIComponent(name) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const locationName = decodeURIComponent(params.locationName);

  const locations = [
     {name: 'Jungle-Hostel', description: 'Accommodation for students' ,image:'Mosque' },
    { name: 'Moremi-Hostel', description: 'Accommodation for students' },
    { name: 'Mosque', description: 'Place for religious worship' },
    { name: 'RIU', description: 'Research Institute Unit' },
    { name: 'Moremi-Hostel', description: 'Accommodation for students' },
    { name: 'Lateefah-Okunu-Hostel', description: 'Accommodation for students' },
    { name: 'School-Cafeteria', description: 'Dining area for students' },
  ];

  const location = locations.find((loc) => loc.name.toLowerCase() === locationName.toLowerCase());

  if (!location) {
    return { notFound: true };
  }

  // Attach the correct image based on the location name
  location.image = locationImages[location.name];

  return { props: { location } };
};

export default LocationDetails;
