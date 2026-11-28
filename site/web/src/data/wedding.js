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

// The Bridal Party page: each side is a column, couple first, paired up row by
// row. Photos are in src/assets/bridal-party/, named <Name>1 (shown) and
// <Name>2 (shown while the cursor is over it). Give a person `photo` (a file
// name there) to fill their blob, and `position` (e.g. 'center top') to shift
// it in the blob, or `crop` ([left, top, width, height] as percentages) to zoom
// in on part of it. `hover` is the second photo; it takes the same `photo`,
// `position` and `crop`. The crops are measured from the mockups.
// `partyBackground` is the photo that stays put behind the page as it scrolls.
export const partyBackground = 'IMG_4496.JPG';

export const weddingParty = [
  {
    people: [
      {
        name: 'Molly',
        role: 'Bride',
        photo: 'Molly1.jpg',
        crop: [0, 5.74, 100, 89.18],
        hover: { photo: 'Molly2.jpg', crop: [0, 8.39, 100, 71.34] },
        bio: 'This is a blurb about me: Molly Meyer Kehoe. I have known Molly my whole life because I am her and she’s me. I am cool, fun, silly, and smart. I can’t wait to party at this freaking wedding woo hoooooo!',
      },
      {
        name: 'Charlotte',
        role: 'Bridesmaid',
        photo: 'Charlotte1.jpg',
        crop: [37.64, 30.82, 30.84, 45.06],
        hover: { photo: 'Charlotte2.jpg', crop: [30.27, 27.1, 54.41, 38.74] },
        bio: '[How Charlotte knows Molly.]',
      },
      {
        name: 'Anna',
        role: 'Bridesmaid',
        photo: 'Anna1.jpg',
        crop: [0.03, 6, 52.92, 70.75],
        hover: { photo: 'Anna2.jpg', crop: [10.05, 0, 70.01, 100] },
        bio: '[How Anna knows Molly.]',
      },
      {
        name: 'Maggie',
        role: 'Bridesmaid',
        hover: { photo: 'Maggie2.jpg', crop: [22.33, 24.1, 65.01, 46.36] },
        bio: '[How Maggie knows Molly.]',
      },
      {
        name: 'Stella',
        role: 'Bridesmaid',
        photo: 'Stella1.jpg',
        crop: [30.69, 18.04, 27.26, 34.57],
        hover: { photo: 'Stella2.jpg', crop: [13.54, 6.03, 70.24, 44.44] },
        bio: '[How Stella knows Molly.]',
      },
    ],
  },
  {
    people: [
      {
        name: 'Ben',
        role: 'Groom',
        photo: 'Ben1.jpg',
        crop: [9.77, 3.24, 76.61, 96.92],
        hover: { photo: 'Ben2.jpg', crop: [17.29, 28.88, 61.74, 44.05] },
        bio: 'Ben loves snakes, bugs, skiing, and Molly!',
      },
      {
        name: 'Alex',
        role: 'Best Man',
        // The mockup used an edited copy of this photo; this is its crop, mapped
        // onto the original.
        hover: { photo: 'Alex2.jpg', crop: [50.12, 35.99, 27.13, 19.32] },
        bio: '[How Alex knows Ben.]',
      },
      {
        name: 'Duncan',
        role: 'Groomsman',
        hover: { photo: 'Duncan2.jpg', crop: [9.31, 43.17, 30.66, 21.84] },
        bio: '[How Duncan knows Ben.]',
      },
      {
        name: 'Rowan',
        role: 'Groomsman',
        hover: { photo: 'Rowan2.jpg', crop: [18.93, 10.06, 64.39, 45.95] },
        bio: '[How Rowan knows Ben.]',
      },
      {
        name: 'Joe',
        role: 'Groomsman',
        hover: { photo: 'Joe2.jpg', crop: [19.92, 17.73, 63.63, 45.38] },
        bio: '[How Joe knows Ben.]',
      },
    ],
  },
];

// Shown last, centred under both columns.
export const partyFinale = [
  {
    name: 'Freddie',
    role: 'Lord of Love',
    photo: 'Freddie1.jpg',
    crop: [17.51, 5.7, 57.17, 83.39],
    hover: { photo: 'Freddie2.jpg', crop: [16.05, 5.08, 74.71, 95.13] },
    bio: '[About Freddie.]',
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
  // a colour (`theme`: plum, slate, mist, citron or forest) and any of, in this
  // order:
  //   quote          lines of a quote in script, with a dotted line under it
  //   years + blurb  the heading row, years on the left and a note beside them
  //   years + story  the years with a long paragraph wrapping around them
  //   intro          paragraphs of text
  //   grid           four columns of photos, filled left to right; the `big`
  //                  photo takes two columns and two rows in the middle.
  //                  `tiles: 'square'` makes them square rather than wide.
  //   rows           rows of photos side by side, each with an optional
  //                  caption: [bold part, the rest]. A `wide` photo is wider.
  //   strip          five photos side by side in one frame
  //   outro          paragraphs of text
  //   wave           the wavy bottom edge: the colour of the thin line under it,
  //                  and `flip` to start it high instead of low at the sides
  // A paragraph is a string, or a list of lines to break exactly there. Wrap
  // words in **double stars** to make them bold.
  sections: [
    {
      theme: 'plum',
      years: '1997–2018',
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
      wave: { edge: 'cream' },
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
          'All of our favorite memories are together: playing flashlight tag, hanging out at Freddie’s tree fort, playing',
          'the Preble game, scraping yellow paint, competing in the Amazing Race, and late nights on the dock.',
          '**Cranberry wasn’t Cranberry without each other…**',
        ],
        [
          '…from Molly’s crush on Ben to becoming real friends, and from Ben’s crush on Molly to dating.',
          'A seed was planted under a tree at a Sullivan cocktail party in 2012, and things shifted in 2015 on the floats',
          'where we had our first kiss. It wasn’t for another three years, in Madison, that everything really changed.',
        ],
      ],
      wave: { edge: 'deep-plum', flip: true },
    },
    {
      theme: 'mist',
      quote: ['“I think it’s pretty obvious, but I’m falling in love with you.” –Ben'],
      years: '2018–2024',
      blurb: [
        'On **August 30, 2018**, Ben told Molly he loved her. She said, “I love you too.”',
        'For six years we dated in a pattern: one year in person, one year long distance.',
      ],
      rows: [
        {
          caption: ['Year 1:', 'In person (2018–2019)'],
          photos: [
            { file: 'Year1_2018_1.jpg', alt: 'Ben and Molly in costume at a party.', crop: [19.54, 16.26, 79.8, 80.25] },
            { file: 'Year1_2018_2.jpg', alt: 'Ben in a suit and Molly in a red dress.', crop: [7.28, 13.48, 81.14, 81.36] },
            { file: 'Year1_2019_3.jpg', alt: 'Ben and Molly in ski helmets and goggles.', crop: [0.3, 15.07, 99.32, 55.79], wide: true },
            { file: 'Year1_2019_4.jpg', alt: 'Molly and Ben in a hallway, Molly giving a thumbs up.', crop: [0.64, 0.41, 98.93, 99.29] },
            { file: 'Year1_2019_5.jpg', alt: 'Ben and Molly dressed up in front of a painting.', crop: [0.48, 12.09, 87.11, 87.43] },
          ],
        },
        {
          caption: ['Year 2:', 'Long distance (2019–2020)'],
          photos: [
            { file: 'Year2_2019_1.jpg', alt: 'Ben and Molly hugging in a doorway.', crop: [0.54, 0.41, 98.93, 99.28] },
            { file: 'Year2_2020_2.jpg', alt: 'Ben and Molly in Wisconsin jerseys at a tailgate.', crop: [0.54, 0.41, 99.13, 99.28] },
            { file: 'Year2_2020_5.jpg', alt: 'Molly, a golden retriever and Ben in a car.', crop: [0.31, 0.41, 99.32, 99.29], wide: true },
            { file: 'Year2_2020_3.jpg', alt: 'A selfie of Molly and Ben.', crop: [1.1, 0.41, 98.49, 98.95] },
            { file: 'Year2_2020_4.jpg', alt: 'Ben and Molly on a lookout over the water.', crop: [21.67, 0.41, 55.49, 98.95] },
          ],
        },
        {
          caption: ['Year 3:', 'In person (2020–2021)'],
          photos: [
            { file: 'Year3_2021_1.jpg', alt: 'A selfie of Ben and Molly under a blue sky.', crop: [0.88, 0.41, 98.05, 99.29] },
            { file: 'Year3_2021_4.jpg', alt: 'Ben and Molly hugging by a wooden fence.', crop: [0.54, 0.41, 99.13, 99.29] },
            { file: 'Year3_2021_3.jpg', alt: 'Molly and Ben from behind, looking out over the water from a boat.', crop: [0.31, 0.41, 99.32, 99.29], wide: true },
            { file: 'Year3_2021_5.jpg', alt: 'Ben and Molly hugging.', crop: [0.64, 0.41, 98.93, 99.29] },
            { file: 'Year3_2021_2.jpg', alt: 'Ben and Molly floating on a lake.', crop: [31.55, 4.78, 49.69, 88.76] },
          ],
        },
        {
          caption: ['Year 4:', 'Long distance (2021–2022)'],
          photos: [
            { file: 'Year4_2021_1.jpg', alt: 'Ben and Molly with drinks by the water.', crop: [34.34, 0.41, 55.49, 99.29] },
            { file: 'Year4_2022_3.jpg', alt: 'A selfie of Ben and Molly on a hike.', crop: [0.79, 0.41, 98.24, 99.29] },
            { file: 'Year4_2022_2.jpg', alt: 'Ben kissing Molly’s cheek under a straw hat.', crop: [5.94, 0.41, 88.14, 99.29], wide: true },
            { file: 'Year4_2022_4.jpg', alt: 'Ben and Molly by the water at sunset.', crop: [19.18, 17.91, 74.62, 74.91] },
            { file: 'Year4_2022_5.jpg', alt: 'A selfie of Ben and Molly laughing.', crop: [0.64, 0.41, 98.93, 99.29] },
          ],
        },
        {
          caption: ['Year 5:', 'In person (2022–2023)'],
          photos: [
            { file: 'Year5_2023_3.jpg', alt: 'Molly and Ben in winter coats in front of a snowy wall.', crop: [29.27, 11.36, 43.21, 87.17] },
            { file: 'Year5_2022_1.jpg', alt: 'Ben and Molly on a rocky overlook above a lake.', crop: [10.78, 22.29, 75.28, 75.49] },
            { file: 'Year5_2023_5.jpg', alt: 'Ben and Molly with backpacks on a riverbed below the mountains.', crop: [11.88, 21.01, 76.73, 76.47], wide: true },
            { file: 'Year5_2023_4.jpg', alt: 'Ben and Molly in ski gear in the snow.', crop: [23.39, 16.23, 41.41, 83.45] },
            { file: 'Year5_2022_2.jpg', alt: 'Ben in a red shirt and Molly in black on a sunny lawn.', crop: [5.57, 4, 86.08, 86.4] },
          ],
        },
        {
          caption: ['Year 6:', 'Long distance (2023–2024)'],
          photos: [
            { file: 'Year6_2023_1.jpg', alt: 'Molly and Ben at a table with a friend.', crop: [0.64, 0.41, 98.93, 99.28] },
            { file: 'Year6_2023_3.jpg', alt: 'Ben and Molly at sunset above a city.', crop: [14.14, 23.74, 75.8, 76.08] },
            { file: 'Year6_2024_5.jpg', alt: 'Ben and Molly with backpacks by a green mountain lake.', crop: [0.3, 0.41, 99.32, 99.29], wide: true },
            { file: 'Year6_2024_4.jpg', alt: 'Ben in a cream suit and Molly in a flowered dress at a garden party.', crop: [0.52, 1.06, 94.65, 94.79] },
            { file: 'Year6_2023_2.jpg', alt: 'Molly and Ben hugging at night.', crop: [13.7, 14.73, 84.42, 84.9] },
          ],
        },
      ],
      wave: { edge: 'slate' },
    },
    {
      theme: 'citron',
      years: '2024–2025',
      blurb: [
        'Molly moved into Ben’s house on August 27, 2024. With our CRV, Osito, the first',
        'year living together was full of yoga, camping, travel, friends, and lots of love.',
      ],
      rows: [
        {
          photos: [
            { file: 'Year7_2024_1.jpg', alt: 'Ben in a linen suit and Molly in a dark dress on a street.', crop: [8.74, 20.74, 74.62, 75.1] },
            { file: 'Year7_2024_4.jpg', alt: 'Ben and Molly at a café table.', crop: [17.92, 0.73, 79.06, 78.95], wide: true },
            { file: 'Year7_2024_3.jpg', alt: 'Ben and Molly on a lawn at an event.', crop: [7.71, 15.1, 82.98, 82.97] },
            { file: 'Year7_2025_9.jpg', alt: 'Ben and Molly by the water at sunset.', crop: [20.44, 25.3, 68.54, 68.92] },
            { file: 'Year7_2025_5.jpg', alt: 'Ben and Molly wearing race medals on a beach.', crop: [10.16, 14.58, 80.68, 81.13] },
          ],
        },
        {
          photos: [
            { file: 'Year7_2025_6.jpg', alt: 'Ben and Molly hugging in the snow.', crop: [14.68, 16.19, 79.51, 79.81] },
            { file: 'Year7_2025_7.jpg', alt: 'Ben and Molly by a lake below snowy mountains.', crop: [18.74, 21.26, 69.11, 69.24] },
            { file: 'Year7_2024_2.jpg', alt: 'Ben in a tux and Molly in a blue dress in a garden.', crop: [0.64, 0.41, 98.93, 99.29] },
            { file: 'Year7_2025_8.jpg', alt: 'Ben and Molly in sunglasses on a boat.', crop: [0.3, 0.41, 99.32, 99.29], wide: true },
            { file: 'Year7_2025_10.jpg', alt: 'Ben and Molly smiling in a cabin.', crop: [12.5, 18.23, 79.22, 79.59] },
          ],
        },
      ],
      wave: { edge: 'mist', flip: true },
    },
    {
      theme: 'forest',
      quote: ['“Not only do I love you for all that you are,', 'I love you because you challenge me.” –Ben'],
      years: '2025–now',
      story: [
        'On **August 30, 2025**, as we were heading out for brunch to celebrate our 7-year',
        'dating anniversary, Ben put on a collared shirt. Immediately suspicious, Molly',
        'changed out of her sweatpants. Still, she was stunned when Ben got down on one knee and proposed in our partially',
        'constructed mudroom with a ring he made. Ben suggested we live in a bubble for the day, but Molly immediately',
        'FaceTimed Katy and Jim. After several more calls, we finally made it to brunch. We spent the rest of the day blackberry',
        'picking—we still have gallon bags of berries in our freezer—and then Molly made a ring for Ben too. Best day ever!',
      ],
      rows: [
        {
          caption: ['August 30, 2025:', 'Proposal day!!!'],
          photos: [
            { file: 'Year8_2025_Proposal5.jpg', alt: 'A footprint drawn on the floor, marking where Ben proposed.', crop: [9.58, 8.83, 76.99, 77.28] },
            { file: 'Year8_2025_Proposal3_1.jpg', alt: 'Molly laughing with a mimosa at brunch.', crop: [0.54, 0.41, 99.13, 99.29] },
            { file: 'Year8_2025_Proposal1.jpg', alt: 'Ben and Molly in the doorway of the mudroom.', crop: [9.59, 10.76, 65.86, 44.51] },
            { file: 'Year8_2025_Proposal2.jpg', alt: 'Molly covering her face, a ring on her finger.', crop: [0.54, 2.75, 98.93, 74.15] },
            { file: 'Year8_2025_Proposal4.jpg', alt: 'Molly showing her ring, Ben showing his behind her.', crop: [0.64, 0.41, 98.93, 99.29] },
            { file: 'Year8_2025_Proposal3_2.jpg', alt: 'A bucket full of blackberries.', crop: [32.47, 24.12, 48.59, 48.82] },
          ],
        },
      ],
    },
  ],
};
