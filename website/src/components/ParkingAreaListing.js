// ParkingAreaListing.js
import React from 'react';
import { Link } from 'react-router-dom';
import Areacard from './Areacards';

const ParkingAreaListing = ({ areas, onSelectArea }) => {
  return (
    <div className="flex flex-wrap justify-center h-56">
      <h2 className="text-3xl font-bold mb-4 w-full text-center font-serif">Parking Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 shadow-lg shadow-slate-100 m-10 p-4">
        {areas.map((area) => (
          <div key={area.id} className="mx-24 mr-24 mb-14"> {/* Add margin bottom for space */}
            <Areacard area={area} onSelectArea={onSelectArea} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingAreaListing;



{/* <div className="flex flex-wrap justify-center h-56">
<h2 className="text-3xl font-bold mb-4 w-full text-center font-serif">Parking Areas</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 shadow-lg shadow-slate-100">
  {areas.map((area) => (
    <div
      key={area.id}
      className="flex flex-row items-center m-4 p-4 bg-white rounded-lg shadow-md"
    >
      <img
        alt=""
        className="h-14 w-14 mr-2"
        src="https://www.shutterstock.com/shutterstock/photos/710674714/display_1500/stock-vector-car-parking-logo-template-design-710674714.jpg"
      />
      <Link
        to={`/parking-area/${area.id}`}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-2 mx-2 flex items-center"
      >
        {area.name}
      </Link>
      {/* Display area details like totalSlots and availableSlots here if needed */}
//     </div>
//   ))}
// </div>
// </div>
// );
// }; */}

