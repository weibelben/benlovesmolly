// Single source for the wedding details used across the site.
// Anything in [brackets] is a placeholder to fill in.

export const couple = {
  first: 'Ben',
  second: 'Molly',
  monogram: 'B&M',
};

export const wedding = {
  // Short form used in the hero and sign-off, like 10.3.26.
  dateShort: '[M.D.YY]',
  location: '[City, ST]',
};

// RSVP isn't built yet, so every RSVP button points at the placeholder page.
export const rsvpUrl = '/rsvp/';

export const weekend = [
  {
    day: '[Friday, Month Day]',
    title: 'Welcome Drinks',
    time: '[7:00 – 9:00 PM]',
    venue: '[Venue Name]',
    address: '[Street Address, City, ST ZIP]',
    attire: 'Cocktail',
    notes: ['[Any notes for guests, e.g. dinner recommended beforehand.]'],
  },
  {
    day: '[Saturday, Month Day]',
    title: 'Ceremony + Reception',
    time: '[4:30 PM]',
    venue: '[Venue Name]',
    address: '[Street Address, City, ST ZIP]',
    attire: '[Formal]',
    notes: ['[Shuttle and parking details.]'],
  },
  {
    day: '[Sunday, Month Day]',
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

// Drop photos in public/images/gallery/ and list them here.
export const gallery = [];
