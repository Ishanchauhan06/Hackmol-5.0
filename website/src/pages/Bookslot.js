import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

const BookingDetails = (props) => {
  console.log({props});
  const location = useLocation();
  const data = JSON.parse(location.state)?.data
  const newSlotBooking = JSON.parse(location.state)?.newSlotBooking
  console.log("data", data)
  console.log("state data",location?.state)
  const qrCodeSrc = data?.qrCodeSrc
  const area = data?.name;
  const bookingTime = data.newSlotBooking.createdAt;
  // Destructure bookingData to get the relevant information
  // const { area, imageUrl, bookingTime } = bookingData; // Include bookingTime from props
  console.log("Time of Booking:" , bookingTime);
  // Load the timer value from local storage or set it to 10 minutes (600 seconds) if not found
  const initialTimer = parseInt(localStorage.getItem("timer")) || 600;

  // State to store the timer value
  const [timer, setTimer] = useState(initialTimer);

  // State to manage the timer message
  const [timerMessage, setTimerMessage] = useState("");

  const navigate = useNavigate();

  // Function to format the remaining time as minutes and seconds
  const formatTimerremain = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')}${amOrPm}`;
  
    return formattedTime;
  }
  

  useEffect(() => {
    if (timer > 0) {
      // Start the timer when the component mounts
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      // Clean up the interval and save the timer value to local storage when the component unmounts
      return () => {
        clearInterval(interval);
        localStorage.setItem("timer", timer.toString());
      };
    } else {
      // Timer has reached zero
      setTimerMessage("The time limit is exceeded. You can book the slot again.");
      localStorage.removeItem("timer"); 
    }
  }, [timer]);

  // Function to handle booking again
  const handleBookingAgain = () => {
    // Remove the previous booking time and timer from local storage
    localStorage.removeItem("bookingTime");
    localStorage.removeItem("timer");

    // Navigate back to the home page
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto p-8 text-center bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Booking Details</h2>

        {/* Display QR Code */}
        <div className="m-6 flex flex-col items-center">
          {/* <QRCode value={imageUrl} size={200} /> */}
          <img src= {`data:image/png;base64,${qrCodeSrc}`}/>
        </div>
        {timerMessage ? (
          // Display timer message when timer reaches zero
          <div className="text-lg text-red-600 mb-4">{timerMessage}</div>
        ) : (
          // Display Slot book details when timer is running
          <div>
            <p className="text-lg font-semibold mb-2 text-gray-700">Slot Booking Details:</p>
            <ul className="list-disc pl-4 text-left text-gray-800 flex flex-col items-center m-3">
              <li>
                <strong>Area:</strong> {area}
              </li>
              <li>
                <strong>Booking Time:</strong> {formatTime( bookingTime)}
              </li>
              {/* Add more details as needed */}
            </ul>

            {/* Display the timer */}
            <div className="text-lg font-semibold text-red-600">
              <p>Time Remaining: {formatTimerremain(timer)}</p>
            </div>

            {/* {timer < 0 && (
              // Display the "Book Again" button only if the timer runsout
              <button
                onClick={handleBookingAgain}
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
              >
                Book Again
              </button>
            )} */}
          </div>
        )}
      
       
      </div>
      
    </div>
  );
};

export default BookingDetails;



