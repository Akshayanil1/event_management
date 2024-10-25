// Fetch the combined JSON data from platform-data.json
fetch('data/event.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // For debugging, to check the data structure in the console

    // Display different data types on the page
    displayEvents(data.events);
    displayUsers(data.users);
    displayGuests(data.guests);
    displayVenues(data.venues);
    displayVendors(data.vendors);
    displayPayments(data.payments);
    displayTickets(data.tickets);
  })
  .catch(error => console.error('Error loading data:', error));

// Function to display Events
function displayEvents(events) {
  const eventSection = document.getElementById('events-section');
  eventSection.innerHTML = '';  // Clear existing content

  events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'card';

      eventCard.innerHTML = `
          <h3>${event.name}</h3>
          <p>${event.description}</p>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
      `;
      eventSection.appendChild(eventCard);
  });
}

// Function to display Users
function displayUsers(users) {
  const userSection = document.getElementById('user-section');
  userSection.innerHTML = '';  // Clear existing content

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.className = 'card';

    userCard.innerHTML = `
      <h3>${user.firstName} ${user.lastName}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Role:</strong> ${user.role}</p>
      <p><strong>Registered Events:</strong> ${user.registeredEvents.join(', ')}</p>
    `;

    userSection.appendChild(userCard);
  });
}

// Function to display Guests
function displayGuests(guests) {
  const guestSection = document.getElementById('guest-section');
  guestSection.innerHTML = '';  // Clear existing content

  guests.forEach(guest => {
    const guestCard = document.createElement('div');
    guestCard.className = 'card';

    guestCard.innerHTML = `
      <h3>${guest.name}</h3>
      <p><strong>Email:</strong> ${guest.email}</p>
      <p><strong>RSVP Status:</strong> ${guest.rsvpStatus}</p>
      <p><strong>Event ID:</strong> ${guest.eventId}</p>
    `;

    guestSection.appendChild(guestCard);
  });
}

// Function to display Venues
function displayVenues(venues) {
  const venueSection = document.getElementById('venue-section');
  venueSection.innerHTML = '';  // Clear existing content

  venues.forEach(venue => {
    const venueCard = document.createElement('div');
    venueCard.className = 'card';

    venueCard.innerHTML = `
      <h3>${venue.venueName}</h3>
      <p><strong>Location:</strong> ${venue.location}</p>
      <p><strong>Capacity:</strong> ${venue.capacity}</p>
      <p><strong>Price per Day:</strong> $${venue.pricePerDay}</p>
      <p><strong>Available Dates:</strong> ${venue.availableDates.join(', ')}</p>
    `;

    venueSection.appendChild(venueCard);
  });
}

// Function to display Vendors
function displayVendors(vendors) {
  const vendorSection = document.getElementById('vendor-section');
  vendorSection.innerHTML = '';  // Clear existing content

  vendors.forEach(vendor => {
    const vendorCard = document.createElement('div');
    vendorCard.className = 'card';

    const menuItems = vendor.menu.map(item => `<li>${item.itemName} - $${item.pricePerServing}</li>`).join('');

    vendorCard.innerHTML = `
      <h3>${vendor.vendorName}</h3>
      <p><strong>Contact:</strong> ${vendor.contactInfo.phone} / ${vendor.contactInfo.email}</p>
      <p><strong>Available Dates:</strong> ${vendor.availableDates.join(', ')}</p>
      <ul><strong>Menu:</strong> ${menuItems}</ul>
    `;

    vendorSection.appendChild(vendorCard);
  });
}

// Function to display Payments
function displayPayments(payments) {
  const paymentSection = document.getElementById('payment-section');
  paymentSection.innerHTML = '';  // Clear existing content

  payments.forEach(payment => {
    const paymentCard = document.createElement('div');
    paymentCard.className = 'card';

    paymentCard.innerHTML = `
      <p><strong>Payment ID:</strong> ${payment.paymentId}</p>
      <p><strong>Event ID:</strong> ${payment.eventId}</p>
      <p><strong>Amount:</strong> $${payment.amount}</p>
      <p><strong>Payment Method:</strong> ${payment.paymentMethod}</p>
      <p><strong>Status:</strong> ${payment.paymentStatus}</p>
    `;

    paymentSection.appendChild(paymentCard);
  });
}

// Function to display Tickets
function displayTickets(tickets) {
  const ticketSection = document.getElementById('ticket-section');
  ticketSection.innerHTML = '';  // Clear existing content

  tickets.forEach(ticket => {
    const ticketCard = document.createElement('div');
    ticketCard.className = 'card';

    ticketCard.innerHTML = `
      <p><strong>Ticket ID:</strong> ${ticket.ticketId}</p>
      <p><strong>Event ID:</strong> ${ticket.eventId}</p>
      <p><strong>Buyer Name:</strong> ${ticket.buyerName}</p>
      <p><strong>Buyer Email:</strong> ${ticket.buyerEmail}</p>
      <p><strong>Ticket Type:</strong> ${ticket.ticketType}</p>
      <p><strong>Price:</strong> $${ticket.price}</p>
      <p><strong>Purchase Date:</strong> ${ticket.purchaseDate}</p>
      <p><strong>Status:</strong> ${ticket.ticketStatus}</p>
    `;

    ticketSection.appendChild(ticketCard);
  });
}
