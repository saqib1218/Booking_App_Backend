const Staff = require('../models/Staff');
const Hotel = require('../models/Hotel');

async function seedStaff() {
  const count = await Staff.countDocuments();
  if (count > 0) {
    console.log('Staff data already exists. Skipping staff seeding.');
    return;
  }

  const staff = [
    { name: 'Alice Johnson', designation: 'Manager' },
    { name: 'Bob Smith', designation: 'Receptionist' },
    { name: 'Carol Lee', designation: 'Housekeeping' },
    { name: 'David Kim', designation: 'Chef' },
  ];

  await Staff.insertMany(staff);
  console.log('Seeded Staff collection');
}

async function seedHotels() {
  const count = await Hotel.countDocuments();
  if (count > 0) {
    console.log('Hotel data already exists. Skipping hotel seeding.');
    return;
  }

  const hotels = [
    {
      roomType: 'Standard Room',
      guests: 2,
      pricePerNight: 80,
      description: 'Cozy standard room with essential amenities.',
      beds: 1,
      baths: 1,
    },
    {
      roomType: 'Deluxe Room',
      guests: 3,
      pricePerNight: 120,
      description: 'Spacious room with city view, includes workspace.',
      beds: 2,
      baths: 1,
    },
    {
      roomType: 'Suite',
      guests: 4,
      pricePerNight: 220,
      description: 'Luxury suite with separate living area and premium amenities.',
      beds: 2,
      baths: 2,
    },
  ];

  await Hotel.insertMany(hotels);
  console.log('Seeded Hotel collection');
}

async function seedAll() {
  await seedStaff();
  await seedHotels();
}

module.exports = { seedAll };
