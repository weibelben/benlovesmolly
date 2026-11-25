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

// Full-width, uncropped photo on the home page, from src/assets/home/.
export const heroPhoto = 'Molly-Ben-Color-Film-76.jpg';

// Every RSVP button on the site points here.
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

// The Bridal Party page shows each side as a column, couple first. Add a photo by
// putting it in src/assets/bridal-party/ and setting `photo` to its file name.
export const weddingParty = [
  {
    people: [
      { name: 'Molly', role: 'Bride', bio: 'Hottest girl of all time' },
      { name: 'Charlotte', role: 'Bridesmaid', bio: '[How Charlotte knows Molly.]' },
      { name: 'Maggie', role: 'Bridesmaid', bio: '[How Maggie knows Molly.]' },
      { name: 'Anna', role: 'Bridesmaid', bio: '[How Anna knows Molly.]' },
      { name: 'Stella', role: 'Bridesmaid', bio: '[How Stella knows Molly.]' },
    ],
  },
  {
    people: [
      { name: 'Ben', role: 'Groom', bio: 'Just a dude' },
      { name: 'Alex', role: 'Groomsman', bio: '[How Alex knows Ben.]' },
      { name: 'Rowan', role: 'Groomsman', bio: '[How Rowan knows Ben.]' },
      { name: 'Duncan', role: 'Groomsman', bio: '[How Duncan knows Ben.]' },
      { name: 'Joe', role: 'Groomsman', bio: '[How Joe knows Ben.]' },
    ],
  },
];

// The Our Story page: a big photo at the top, from src/assets/our-story/, with the
// title and two lines written around the couple, then one section per era.
// Photos are in src/assets/our-story/ too. On any photo, `crop` zooms in ([left,
// top, width, height] as percentages of the photo) and `grayscale` makes it
// black and white. A photo with `missing` instead of `file` shows as a blank
// space until it's added; `missing` says what goes there.
export const story = {
  title: 'Our Story',
  hero: {
    file: 'PrimaryPhoto_3.jpg',
    alt: 'A couple smiling in lawn chairs at night, drinks in hand.',
    left: 'Cranberry Island is the place we cherish most.',
    right: 'It’s where we grew up, made lifelong friendships, and fell in love.',
  },
  eras: [
    {
      years: '1997 – 2018',
      blurb:
        'Our story doesn’t really start with a specific moment, rather a specific community of people who love us both unconditionally and made the island our home.',
      // Four columns, filled left to right. The `big` photo takes up two
      // columns and two rows in the middle.
      grid: [
        { file: '08200142.jpg', alt: 'Two families with young kids on a dock, the harbor behind them.', crop: [28, 30.4, 60.7, 60.5], grayscale: true },
        { file: 'XKing.jpg', alt: 'Three adults on a dock by the water, a baby in a stroller in front.', crop: [6.2, 0.8, 87.7, 98.6] },
        { file: 'XGranno.jpg', alt: 'A big group of family and kids sitting on porch steps.', crop: [16.9, 13.1, 70.7, 70.7] },
        { file: 'XBob.jpg', alt: 'Two men in porch chairs with young boys on their laps, one man waving.', crop: [8.7, 13.5, 83.6, 83.3], grayscale: true },
        { file: 'SullivanDavidAdi.jpg.jpg', alt: 'A big group of adults and kids on a dock.', crop: [12.7, 6.8, 75.9, 75.7] },
        { file: 'BenMolly2001_1.jpg', alt: 'Two toddlers in sun hats playing with buckets on a rocky beach.', crop: [0.8, 0.3, 99.1, 99.5], grayscale: true, big: true },
        { file: 'SeimerPriscilla.jpg', alt: 'A grinning boy cheek to cheek with a smiling woman.', crop: [0.3, 0.5, 98.8, 98.3] },
        { file: 'FerreiraWill.jpg', alt: 'Two boys grinning by a window.', crop: [6, 0.5, 88.1, 99] },
        { missing: 'Kids around a wooden table on a deck, finishing dinner' },
        { file: 'GertmenianJimSam.jpg', alt: 'A family of three smiling on a country road, the boy held between his parents.', crop: [0.3, 0.5, 99.4, 99], grayscale: true },
        { file: 'FlowersJoe.jpg', alt: 'Three kids wrapped in towels on a dock after a swim.', crop: [0.6, 0.5, 98.7, 99] },
        { file: 'IMG_5603 (1).jpg', alt: 'A man in a cap next to a red-haired girl in sunglasses.', crop: [6.2, 0.5, 87.7, 99] },
        { file: 'DixonGlynis.jpg', alt: 'A woman reading a book in bed with two young boys.', crop: [8.8, 3, 78.8, 78.4], grayscale: true },
      ],
      // Five across in one frame along the bottom.
      strip: [
        { file: 'GuyverRebecca.jpg', alt: 'A woman braiding a smiling girl’s hair by a window.', crop: [15.5, 0, 72, 96] },
        { file: 'FrankSarah.jpg', alt: 'A woman and a small child in a red hat relaxing on a rocky beach.', crop: [22.2, 0, 72, 96] },
        { file: 'MossLauren2003.jpg', alt: 'Three young kids on a wooden deck, one holding something out to the camera.', crop: [19.9, 0, 72, 96] },
        { file: 'WeibelDavid.jpg', alt: 'A man hugging a girl by the water.', crop: [18.7, 10.2, 64.1, 85.7] },
        { file: 'GuyverHudsonFiggy.jpg', alt: 'Three kids standing on a path in the woods.', crop: [13, 19.2, 60.6, 80.9] },
      ],
    },
  ],
  // The next part of the story, below the photos on a grey-green background.
  next: {
    blurb:
      'Living across the street from one another, our summers were always intertwined. Over time, we began to intentionally seek each other out: for tennis matches, movie nights, dock jumping, star gazing…',
  },
};
