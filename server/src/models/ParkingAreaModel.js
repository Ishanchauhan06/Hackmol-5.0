const mongoose = require('mongoose');

// Define the schema for the ParkingArea model
const parkingAreaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  totalSlots: { type: Number, required: true },
  // Add other relevant fields as needed
});


const ParkingArea = mongoose.model('ParkingArea', parkingAreaSchema);
module.exports = { ParkingArea };