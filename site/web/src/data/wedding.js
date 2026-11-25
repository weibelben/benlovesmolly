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

// The footer on every page: a strip of photo from src/assets/home/ with the
// date, our names and the place written across it. `crop` is [left, top,
// width, height] as percentages of the photo.
export const footer = {
  photo: 'Molly-Ben-Color-Film-11.jpg',
  crop: [2.7, 35.4, 94.3, 18.9],
  date: 'September 09, 2028',
  place: 'Cranberry Island',
};

// The home page: a photo from src/assets/home/ with our names and the date
// written over it, then the place. `crop` is [left, top, width, height] as
// percentages of the photo. The date is two lines.
export const home = {
  photo: 'Molly-Ben-Color-Film-76.jpg',
  crop: [0, 6.9, 100, 93],
  alt: 'Ben and Molly smiling side by side in a garden.',
  date: ['September', '9, 2028'],
  place: 'Cranberry Island',
};

// Every RSVP button on the site points here.
export const rsvpUrl = '/rsvp/';

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

// The Bridal Party page: each side is a column, couple first. Photos are in
// src/assets/bridal-party/. Give a person `photo` (a file name there) to fill
// their blob, and `position` (e.g. 'center top') to shift it in the blob, or
// `crop` ([left, top, width, height] as percentages) to zoom in on part of it.
// `partyBackground` is the photo that stays put behind the page as it scrolls.
export const partyBackground = 'IMG_4496.JPG';

export const weddingParty = [
  {
    people: [
      {
        name: 'Molly',
        role: 'Bride',
        photo: 'MollyBaby.jpg',
        bio: 'This is a blurb about me: Molly Meyer Kehoe. I have known Molly my whole life because I am her and she’s me. I am cool, fun, silly, and smart. I can’t wait to party at this freaking wedding woo hoooooo!',
      },
      { name: 'Charlotte', role: 'Bridesmaid', bio: '[How Charlotte knows Molly.]' },
      { name: 'Maggie', role: 'Bridesmaid', bio: '[How Maggie knows Molly.]' },
      { name: 'Anna', role: 'Bridesmaid', bio: '[How Anna knows Molly.]' },
      { name: 'Stella', role: 'Bridesmaid', bio: '[How Stella knows Molly.]' },
    ],
  },
  {
    people: [
      {
        name: 'Ben',
        role: 'Groom',
        photo: '2007 Maine 411_Original.jpg',
        crop: [9.65, 3.05, 76.6, 96.9],
        bio: 'Ben loves snakes, bugs, skiing, and Molly!',
      },
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
  // The page below the big photo: a run of sections, one after another. Each has
  // a colour (`theme`: plum, slate, citron or red) and any of, in this order:
  //   years + blurb  the heading row, years on the left and a note beside them
  //   intro          paragraphs of text
  //   grid           four columns of photos, filled left to right; the `big`
  //                  photo takes two columns and two rows in the middle.
  //                  `tiles: 'square'` makes them square rather than wide.
  //   strip          five photos side by side in one frame
  //   outro          paragraphs of text
  //   wave           the wavy bottom edge: the colour of the thin line under it,
  //                  and `flip` to start it high instead of low at the sides
  // A paragraph is a string, or a list of lines to break exactly there.
  // After the last section comes a plain band in the `tail` colour.
  sections: [
    {
      theme: 'plum',
      years: '1997 – 2018',
      blurb:
        'Our story doesn’t really start with a specific moment, rather a specific community of people who love us both unconditionally and made the island our home.',
      grid: [
        { file: '08200142.jpg', alt: 'Two families with young kids on a dock, the harbor behind them.', crop: [28, 30.4, 60.7, 60.5], grayscale: true },
        { file: 'XKing.jpg', alt: 'Three adults on a dock by the water, a baby in a stroller in front.', crop: [6.2, 0.8, 87.7, 98.6] },
        { file: 'XGranno.jpg', alt: 'A big group of family and kids sitting on porch steps.', crop: [16.9, 13.1, 70.7, 70.7] },
        { file: 'XBob.jpg', alt: 'Two men in porch chairs with young boys on their laps, one man waving.', crop: [8.7, 13.5, 83.6, 83.3], grayscale: true },
        { file: 'SullivanDavidAdi.jpg.jpg', alt: 'A big group of adults and kids on a dock.', crop: [12.7, 6.8, 75.9, 75.7] },
        { file: 'BenMolly2001_1.jpg', alt: 'Two toddlers in sun hats playing with buckets on a rocky beach.', crop: [0.8, 0.3, 99.1, 99.5], grayscale: true, big: true },
        { file: 'SeimerPriscilla.jpg', alt: 'A grinning boy cheek to cheek with a smiling woman.', crop: [0.3, 0.5, 98.8, 98.3] },
        { file: 'FerreiraWill.jpg', alt: 'Two boys grinning by a window.', crop: [6, 0.5, 88.1, 99] },
        { file: 'MossJake.jpg', alt: 'Kids around a wooden table on a deck, finishing dinner.', crop: [1.8, 13.6, 83.6, 83.3] },
        { file: 'GertmenianJimSam.jpg', alt: 'A family of three smiling on a country road, the boy held between his parents.', crop: [0.3, 0.5, 99.4, 99], grayscale: true },
        { file: 'FlowersJoe.jpg', alt: 'Three kids wrapped in towels on a dock after a swim.', crop: [0.6, 0.5, 98.7, 99] },
        { file: 'IMG_5603 (1).jpg', alt: 'A man in a cap next to a red-haired girl in sunglasses.', crop: [6.2, 0.5, 87.7, 99] },
        { file: 'DixonGlynis.jpg', alt: 'A woman reading a book in bed with two young boys.', crop: [8.8, 3, 78.8, 78.4], grayscale: true },
      ],
      strip: [
        { file: 'GuyverRebecca.jpg', alt: 'A woman braiding a smiling girl’s hair by a window.', crop: [15.5, 0, 72, 96] },
        { file: 'FrankSarah.jpg', alt: 'A woman and a small child in a red hat relaxing on a rocky beach.', crop: [22.2, 0, 72, 96] },
        { file: 'MossLauren2003.jpg', alt: 'Three young kids on a wooden deck, one holding something out to the camera.', crop: [19.9, 0, 72, 96] },
        { file: 'WeibelDavid.jpg', alt: 'A man hugging a girl by the water.', crop: [18.7, 10.2, 64.1, 85.7] },
        { file: 'GuyverHudsonFiggy.jpg', alt: 'Three kids standing on a path in the woods.', crop: [13, 19.2, 60.6, 80.9] },
      ],
      wave: { edge: 'citron' },
    },
    {
      theme: 'slate',
      intro: [
        [
          'Living across the street from one another, our summers were always intertwined. Over time, we began to',
          'intentionally seek each other out: for tennis matches, movie nights, dock jumping, star gazing…',
        ],
      ],
      tiles: 'square',
      grid: [
        { file: 'BenMolly2012_3 - Edited.jpg', alt: 'A boy and a red-haired girl laughing together under a raised arm.', crop: [0.3, 5.9, 99.3, 75.6] },
        { file: 'BenMolly2010_2 - Edited.jpg', alt: 'A red-haired girl and a boy grinning cheek to cheek.', crop: [0.3, 8.9, 99.3, 61.6] },
        { file: '2011_Y - Edited.jpg', alt: 'A smiling girl and a boy by a white porch railing.', crop: [0.3, 4.2, 99.3, 84.9] },
        { file: 'BenMolly2010_1 - Edited.jpg', alt: 'A boy and a red-haired girl smiling side by side.', crop: [1.9, 0.3, 96.3, 99.4] },
        { file: '2010.jpg - Edited - Edited.jpg', alt: 'A boy and a girl smiling on a porch above a green lawn.', crop: [0.3, 8.4, 99.3, 74.1] },
        { file: 'BenMolly2012_1.JPG', alt: 'A girl and a boy running together through the woods.', crop: [0.5, 33.8, 99.4, 66.1], big: true },
        { file: 'BenMolly2010_3.jpg', alt: 'A man in a red hat hugging a red-haired girl and a boy.', crop: [0.3, 16.9, 99.3, 66.1] },
        { file: '2008 - Edited.jpg', alt: 'A grinning boy in a red shirt with a little girl beside him.', crop: [0.3, 15.7, 99.3, 68.6] },
        { file: '2011_X - Edited.jpg', alt: 'A boy with a lollipop and a girl pulling a face beside a bicycle light.', crop: [0.3, 16.9, 88.5, 58.1] },
        { file: 'BenMolly2013_2.jpg', alt: 'Two kids climbing on the back of a truck.', crop: [0.3, 10.6, 99.3, 74.6] },
        { file: 'GuyverPatrickHudson.jpg', alt: 'A boy and a girl in towels by the water, arms crossed.', crop: [8.8, 28.9, 37, 55.8] },
        { file: '2014 - Edited.jpg', alt: 'A boy and a girl in sunglasses by the water.', crop: [10.2, 11.9, 80.4, 62.8] },
        { file: 'IMG_3185.JPG', alt: 'Two people sunbathing on a dock.', crop: [0.4, 0.3, 99.3, 99.4] },
      ],
      outro: [
        [
          'All of our favorite memories happened together: hanging out at Freddie’s tree fort, playing the game at',
          'Preble, scraping yellow paint, competing in the birthday Amazing Race, and late nights on the dock.',
          'Cranberry wasn’t Cranberry without each other. We’ve always loved each other, but as some point it shifted:',
        ],
        [
          'Maybe it was in 2012 under a tree at a Sullivan cocktail party…',
          'Maybe it was in 2015 when we had our first kiss on the dock…',
          'Maybe it was in 2018 when Molly decided to go to Wisconsin…',
        ],
      ],
      wave: { edge: 'red', flip: true },
    },
    {
      theme: 'citron',
      years: '2018–2024',
      blurb: [
        'On August 30, 2018, Ben told Molly he was falling in love with her.',
        'For six years we dated in a pattern: one year in-person, one year long-distance.',
      ],
      wave: { edge: 'teal' },
    },
  ],
  tail: 'red',
};
