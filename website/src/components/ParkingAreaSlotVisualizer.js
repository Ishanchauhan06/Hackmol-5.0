import React from 'react';

const ParkingAreaSlotVisualizer = ({ totalSlots, availableSlots, bookedSlots }) => {
  const slots = new Array(totalSlots).fill(null).map((_, index) => ({
    available: index < availableSlots,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4 ">
      {slots.map((slot, index) => (
        <div
          className='flex flex-row items-center justify-start sm:m-2 md:m-3 p-2 bg-gray-100 rounded-lg shadow-md mx-4 w-44'
          key={`${index}-${slot.available}`}
        >
          <div
            className={`h-8 w-8 sm:h-12 sm:w-12 mx-4 rounded-lg ${
              slot.available ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
          Slot:-{index+1}
        </div>
      ))}
    </div>
  );
};

export default ParkingAreaSlotVisualizer;



