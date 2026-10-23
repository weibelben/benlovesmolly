// Single source for the wedding details used across the site.
// Anything in [brackets] is a placeholder to fill in.

export const couple = {
  first: 'Ben',
  second: 'Molly',
  monogram: 'B&M',
};

export const wedding = {
  // Short form used in the hero and sign-off, as MM.DD.YYYY.
  dateShort: '09.09.2028',
  location: 'Cranberry Isles, ME',
};

// RSVP isn't built yet, so every RSVP button points at the placeholder page.
export const rsvpUrl = '/rsvp/';

export const weekend = [
  {
    day: 'Friday, September 8th',
    title: 'Welcome Drinks',
    time: '[7:00 – 9:00 PM]',
    venue: '[Venue Name]',
    address: '[Street Address, City, ST ZIP]',
    attire: 'Cocktail',
    notes: ['[Any notes for guests, e.g. dinner recommended beforehand.]'],
  },
  {
    day: 'Saturday, September 9th',
    title: 'Ceremony + Reception',
    time: '[4:30 PM]',
    venue: '[Venue Name]',
    address: '[Street Address, City, ST ZIP]',
    attire: '[Formal]',
    notes: ['[Shuttle and parking details.]'],
  },
  {
    day: 'Sunday, September 10th',
    title: 'Farewell Brunch',
    time: '[10:30 AM]',
    venue: '[Venue Name]',
    address: '[Street Address, City, ST ZIP]',
  },
];

export const hotelBlocks = [
  {
    name: '[Hotel Name]',
    address: '[Street Address, City, ST ZIP]',
    details: '[Group rate and booking deadline.]',
    url: '#',
  },
  {
    name: '[Hotel Name]',
    address: '[Street Address, City, ST ZIP]',
    details: '[Group rate and booking deadline.]',
    url: '#',
  },
];

export const otherHotels = [
  { name: '[Hotel Name]', area: '[Neighborhood]' },
  { name: '[Hotel Name]', area: '[Neighborhood]' },
  { name: '[Hotel Name]', area: '[Neighborhood]' },
];

export const thingsToDo = [
  {
    title: 'Eat & Drink',
    groups: [
      { heading: 'Coffee & Breakfast', items: ['[Spot] – [why we love it]', '[Spot]'] },
      { heading: 'Lunch', items: ['[Spot]', '[Spot]'] },
      { heading: 'Dinner', items: ['[Spot]', '[Spot]'] },
      { heading: 'Late Night', items: ['[Spot]'] },
    ],
  },
  {
    title: 'Get Outside',
    groups: [
      { heading: 'Hiking', items: ['[Trail]', '[Trail]'] },
      { heading: 'Biking', items: ['[Route]'] },
    ],
  },
  {
    title: 'Around Town',
    groups: [
      { heading: 'Shopping', items: ['[Shop]', '[Shop]'] },
      { heading: 'Explore Nearby', items: ['[Day trip]', '[Day trip]'] },
    ],
  },
];

export const registries = [
  { label: 'Honeymoon Fund', url: '#' },
  { label: '[Registry Name]', url: '#' },
];

// Every photo in src/assets/gallery/ shows up in the gallery. Photos listed here
// come first, in this order, with their description; any others follow after.
// `ratio` and `position` crop a photo, e.g. to cut app UI out of a screenshot.
export const gallery = [
  { file: 'rainbow.jpg', alt: 'Ben and Molly hugging on a crowded lawn under a double rainbow.' },
  { file: 'halloween.jpg', alt: 'Ben and Molly in Halloween costumes: a pink dress, and a green-faced witch with a broom.' },
  { file: 'driveway_rings.jpg', alt: 'A goofy driveway selfie of Ben and Molly showing off their rings.' },
  { file: 'wisconsin_table.jpg', alt: 'Ben and Molly at a Wisconsin W mosaic table in front of a planted aquarium.' },
  { file: 'sleeping_bags.jpg', alt: 'Ben and Molly grinning from inside their sleeping bags.' },
  {
    file: 'ring_cam_proposal.jpg',
    alt: 'Doorbell camera view of the proposal inside a house under construction.',
    ratio: '1 / 1',
    position: '50% 14%',
  },
];
