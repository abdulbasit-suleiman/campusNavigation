import React from 'react';
import Image from 'next/image';

function LocationDetails({ location }) {
  if (!location) {
    return <p>Location not found</p>;
  }

  let imagePath = '/asset/logo.svg'; // Default image in case the desired one isn't found

  if (location.name === 'Jungle-Hostel') {
    imagePath = '/asset/moremi.svg';
  } else if (location.name === 'Senate-Chambers') {
    imagePath = '/asset/moremi.svg';
  } else if (location.name === 'Mosque') {
    imagePath = '/asset/moremi.svg';
  } else if (location.name === 'RIU') {
    imagePath = '/asset/moremi.svg';
  } else if (location.name === 'Moremi-Hostel') {
    imagePath = '/asset/moremi.svg';
  } else if (location.name === 'Lateefah-Okunu-Hostel') {
    imagePath = '/asset/dummyImg.svg';
  } else if (location.name === 'School-Cafeteria') {
    imagePath = '/asset/moremi.svg';
  }else if (location.name === 'Mass-Communication-Studio') {
    imagePath = '/asset/masscom.jpg';
  }else if (location.name === 'MBashir') {
    imagePath = '/asset/MBashir.jpg';
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <Image
          src={imagePath}
          alt={location.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <p>{location.description}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const locations = [
    'Jungle-Hostel',
    'Senate-Chambers',
    'Mosque',
    'Mass-Communication-Studio',
    'RIU',
    'MBashir',
    'Moremi-Hostel',
    'Lateefah-Okunu-Hostel',
    'School-Cafeteria',
  ];

  const paths = locations.map((name) => ({
    params: { locationName: encodeURIComponent(name) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const locationName = decodeURIComponent(params.locationName);

  const locations = [
    { name: 'Jungle-Hostel', description: 'Accommodation for students' },
    { name: 'Moremi-Hostel', description: 'Accommodation for students' },
    { name: 'Mass-Communication-Studio', description: 'Mass communication studio'},
    { name: 'MBashir', description: 'College of management and applied science'},
    { name: 'Mosque', description: 'Place for religious worship' },
    { name: 'RIU', description: 'Research Institute Unit' },
    { name: 'Lateefah-Okunu-Hostel', description: 'Accommodation for students' },
    { name: 'School-Cafeteria', description: 'Dining area for students' },
  ];

  const location = locations.find(
    (loc) => loc.name.toLowerCase() === locationName.toLowerCase()
  );

  if (!location) {
    return { notFound: true };
  }

  return { props: { location } };
};

export default LocationDetails;
