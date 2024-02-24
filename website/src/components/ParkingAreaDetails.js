import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ParkingAreaSlotVisualizer from "./ParkingAreaSlotVisualizer";
import GoogleMapEmbed from "./GoogleMapEmbed.js";
import NoticeMarquee from "./NoticeMarque";
import axios from "axios";
import "../styles/parkingareadetails.css";
const ParkingAreaDetail = ({ areas }) => {
  const { areaId } = useParams();
  const selectedArea = areas.find((area) => area.id === parseInt(areaId));
  const navigate = useNavigate();
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  if (!selectedArea) {
    return <div>Area not found</div>;
  }

  // Function to copy the map link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(selectedArea.mapLink);
    setIsCopySuccess(true);
    setTimeout(() => setIsCopySuccess(false), 2000);
  };

  // Truncate link if it's longer than 50 characters
  const truncatedLink =
    selectedArea.mapLink.length > 50
      ? selectedArea.mapLink.substring(0, 50) + "..."
      : selectedArea.mapLink;

  const handleBooking = () => {
    // Define the data to send to the API
    const bookingData = {
      user_id: "123",
      area_id: areaId,
    };
    // console.log({ bookingData });

    // Send the Axios request to your API
    axios
      .post(`/api/v1/slot/`, bookingData)
      .then((response) => {
        // Assuming the API responds with booking details, you can access them in response.data
        console.log("Booking response:", response.data);

        // Navigate to the booking-details page with the area ID in the URL
        navigate(`/parking-area/${areaId}/booking-details`, {
          state: JSON.stringify({
            data: { ...response.data, ...selectedArea },
          }),
        });
      })
      .catch((error) => {
        console.error("Booking error:", error);
      });
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 headingpark">
        Parking Area: {selectedArea.name}
      </h2>
      <div className="md:flex row-auto content-center justify-center text-center mx-24 paracontent">
        <div className="bg-gray-100 bg-opacity-20 backdrop-blur-lg p-4 rounded-md shadow-lg w-48">
          <p className="text-lg md:text-base text-black">
            Total Slots: {selectedArea.totalSlots}
          </p>
        </div>
        <div className="bg-gray-100 bg-opacity-20 backdrop-blur-lg p-4 rounded-md shadow-lg w-48">
          <p className="text-lg md:text-base text-black">
            Available Slots: {selectedArea.availableSlots}
          </p>
        </div>
      </div>
      {/* Display the ParkingAreaSlotVisualizer component */}
      <ParkingAreaSlotVisualizer
        totalSlots={selectedArea.totalSlots}
        availableSlots={selectedArea.availableSlots}
        bookedSlots={selectedArea.totalSlots - selectedArea.availableSlots}
      />
      <div>
        <NoticeMarquee
          notice={
            "Note: There will be a time of only 10 minutes to reserve your slots"
          }
        />
      </div>
      {/* Display the GoogleMapEmbed component */}
      {/* <div className="mt-4">
        <GoogleMapEmbed mapLink={selectedArea.mapLink} />
      </div> */}
      {/* Show truncated map link and copy button */}
      <div className="mt-4">
        <div className="bg-gray-100 p-4 rounded-md flex items-center justify-between">
          <div className="flex-grow">{truncatedLink}</div>
          <button
            onClick={handleCopyLink}
            className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover-bg-blue-600 transition duration-300"
          >
            {isCopySuccess ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <iframe
      className="m-14"
        width="675"
        height="316"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=675&amp;height=316&amp;hl=en&amp;q=NIT%20Jalandhar%20Jalandhar+(NITJaladhar)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      {/* Display the button to book a slot */}
      <div className="flex justify-center">
        {selectedArea.availableSlots > 0 ? (
          <button
            onClick={handleBooking} // Call the handleBooking function
            className="block mt-4 px-4 py-2 bg-blue-500 w-1/3 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
          >
            <div className="flex content-center justify-center">
              Book a Slot
            </div>
          </button>
        ) : (
          <p className="mt-4 px-4 py-2 bg-blue-500 w-1/3 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 flex justify-center">
            No available slots to book
          </p>
        )}
      </div>
    </div>
  );
};

export default ParkingAreaDetail;
