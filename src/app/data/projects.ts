export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  liveUrl?: string;
  repoUrl: string;
  techStack?: string[];
  screenshots?: {
    src: string;
    caption: string;
  }[];
  keySystems?: {
    title: string;
    href: string;
    description?: string;
  }[];
  testingNotes?: {
    title: string;
    details: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "heatwave",
    title: "Heatwave Hub",
    description:
      "A workforce hub I created for a previous job. Includes clock in/out, time off requests, calendar events, RSVP features, and internal tools.",
    longDescription:
      "Heatwave Hub is a project I created meant to be used by my previous employer. It is by far my most fleshed out project. It features profiles, a clock in/clock out system, a full database using prisma, a calender component with three renderable 'states': 1. Events (can add events on selected calendar date, RSVP, plus one functionality, add attendee not in system, edit and delete.) 2. Time off (a place to request time off and show on the calendar so at the start of the work day when creating teams it will be easy to know who will be present and who not. Admins can see reason for requested time and approve or deny. Color coded to see if approved or requested). 3. Hours (simple display of how many hours worked that day in decimal form with a clickable date to show each time clocked in and clocked out that day). Along with the home clock in page and the calendar page there is also an 'orders' page that allows employees to request tools and equipment to be ordered by the admin. It features a quantity, name, multiple orders in one, and description. The admins can select 'mark as ordered' and the order will turn green and the employee who requested can confidently know that their submission has been fulfilled. Finally there is a profile photo at the top that is basically quick way to see your hours worked for the week, the days off requested, and more ",
    thumbnail: "/thumbnails/heat-sun-alt.png",
    liveUrl: "https://heatwave-hub-production.up.railway.app/auth/login",
    repoUrl: "https://github.com/Cameadows99/heatwave-hub",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Phone Display",
    ],
    screenshots: [
      {
        src: "/screenshots/heatwave/heatwave-calendar-toggle.jpeg",
        caption:
          "This is the mode button that takes the BaseCalendar component and changes between the event calendar, time off requests, and hours worked. I'm specifically happy with the color design and using the logo as an extra UX support to see which is selected",
      },
      {
        src: "/screenshots/heatwave/hw-co.jpeg",
        caption:
          "This is the clocked out version of the home screen. I set the clock in/clock out as the home due to the fact that this will be what the majority of employees will be using. Chose to use the moon as a contrast to the sun being the company logo and that time clocked out is always morning around sunrise and leaving for the evening.",
      },
      {
        src: "/screenshots/heatwave/hw-ci.jpeg",
        caption:
          "The clocked in version of the home screen. Made an animation for the sun rising and a transition of the background changing to orange to imitate sunrise on clock in and sunset for clock out.",
      },
      {
        src: "/screenshots/heatwave/hw-rsvp-modal.jpeg",
        caption:
          "I particularly like the '+1' on this rsvp modal next to the name to add an unregistared person to the total count.",
      },
      {
        src: "/screenshots/heatwave/hw+1.jpeg",
        caption:
          "A zoom in. While i love the UI design, I am aware that the size of this '+' button isnt particularly great for UX. In a finished professional project I would add this just for UI purposes that shows after selecting a 'plus one' button that matches the 'unreserve' button on the modal in the previous screenshot.",
      },
    ],
    keySystems: [
      {
        title: "Reusable calendar component",
        href: "https://github.com/Cameadows99/heatwave-hub/blob/main/src/components/BaseCalendar.tsx",
        description:
          "Main calendar flow supporting Events, Time Off, and Hours views.",
      },
      {
        title: "Home page clock in/clock out + animation",
        href: "https://github.com/Cameadows99/heatwave-hub/blob/main/src/app/home/HomeClient.tsx",
      },
      {
        title: "Modal for adding event",
        href: "https://github.com/Cameadows99/heatwave-hub/blob/main/src/app/calendar/events-cal/EventModal.tsx",
      },
      {
        title: "Data model",
        href: "https://github.com/Cameadows99/heatwave-hub/blob/main/prisma/schema.prisma",
      },
      {
        title: "RSVP modal",
        href: "https://github.com/Cameadows99/heatwave-hub/blob/main/src/components/RSVPModal.tsx",
      },
    ],
    testingNotes: [
      {
        title: "Login",
        details: ["Email: adminlogin@heatwave.com", "Password: admin123"],
      },
      {
        title: "Explore the app",
        details: [
          "Try clocking in and out to view hour tracking.",
          "Open the calendar to view Events, Time Off, and Hours modes by using the three way toggle at the top.",
          "Try creating an event, requesting time off, seeing hours by clicking on a calendar grid.",
          "Try reserving on created event, adding a plus one or unregistared person and approving requested time off",
          "Go to 'Orders' page and try requesting equipment and quantity, mark as ordered, filter by pending or ordered",
          "Click profile picture to see quick menu",
        ],
      },
    ],
  },
  {
    slug: "key2writing",
    title: "Key-2-Writing",
    description:
      "A creative writing application that connects musical input and typing into a more expressive writing experience.",
    longDescription:
      "Key-2-Writing is one of my first personal react projects. Although somewhat primitive Key-2-Writing is an application created with the idea in mind of typing out a word document while each key pressed progresses the index of a note of a song. The notes are stored in a variable of an array of notes. This idea was to play around with useState and useEffect as it was one of my first react projects after completing my react course. It features instrument type, specific instrument, multiple songs to choose from, a customizable textbox, and a light and dark theme",
    thumbnail: "/thumbnails/k-log.webp",
    liveUrl: "https://key2writing-production.up.railway.app",
    repoUrl: "https://github.com/Cameadows99/Key2Writing",
    techStack: [
      "React",
      "JavaScript",
      "CSS",
      "Light/Dark Theme",
      "Creative Design",
    ],
    screenshots: [
      {
        src: "/screenshots/key2write/k-ss.jpeg",
        caption: "Dropdown lists for the selectable songs and instruments",
      },
      {
        src: "/screenshots/key2write/k-bluep.jpeg",
        caption:
          "Interactive piano displayed on the left side of the screen vertically that shows the current key being played (blue key)",
      },
      {
        src: "/screenshots/key2write/k-light.jpeg",
        caption: "Light/Modern theme",
      },
      {
        src: "/screenshots/key2write/k-dark.jpeg",
        caption: "Dark/Traditional theme",
      },
    ],
    keySystems: [
      {
        title: "Theme and note progression",
        href: "https://github.com/Cameadows99/Key2Writing/blob/main/src/components/music/Document.js",
        description:
          "Core UI logic for changing instruments, songs, and theme behavior.",
      },
      {
        title: "Array of songs",
        href: "https://github.com/Cameadows99/Key2Writing/blob/main/src/components/music/Songs.js",
      },
      {
        title: "Song Selector",
        href: "https://github.com/Cameadows99/Key2Writing/blob/main/src/components/SongSelector.js",
      },
    ],
    testingNotes: [
      {
        title: "Open the live app",
        details: [
          "Select a song, instrument type and isntrument in the top-right of the page.",
          "Turn up volume on device",
          "Click inside the textbox and type anything you want",
          "Experiment with different song/instrument combonations (I find that the classical songs like Fur Elise and Dumka work best with the app)",
          "Try both Light and Dark displays",
        ],
      },
    ],
  },
  {
    slug: "lillemon",
    title: "Little Lemon",
    description: "Artificial restaurant webpage with booking capabilities.",
    longDescription:
      "Little Lemon is part of my certification course. Figma was used to design the webpage. This involved a brand identity sheet with set colors. The course had exposed the student to all concepts used and an image of what was wanted then, as a test, gave the students a sheet of needs and wants to fulfill when creating this website unguided. The focus was on UX/UI",
    thumbnail: "/thumbnails/ll-thumb.png",
    repoUrl: "https://github.com/Cameadows99/lil-lemon",
    techStack: [
      "Branding",
      "React",
      "Figma",
      "Routing",
      "Booking Form",
      "CSS",
      "UI/UX",
      "HTML",
    ],
    screenshots: [
      {
        src: "/screenshots/lillemon/ll-screenshot.jpg",
        caption: "",
      },
    ],
    keySystems: [
      {
        title: "All components",
        href: "https://github.com/Cameadows99/lil-lemon/tree/main/src/components",
        description: "Used a Main/nav//body/footer component layout",
      },
      {
        title: "Booking Form",
        href: "https://github.com/Cameadows99/lil-lemon/blob/main/src/components/BookingForm.js",
      },
    ],
  },
  {
    slug: "fund_me_course",
    title: "Fund me course",
    description: "Basic web3 secure 'GoFundMe' application using Solidity",
    longDescription:
      "This is a Solidity coded application created by following along an online course. This application connects the user to many different web3 chains. Was tested with foundry. Has complete live price fetching and conversion. It connects users to their wallet and has in depth testing for user protection.",
    thumbnail: "/thumbnails/fme-thumb.avif",
    repoUrl:
      "https://github.com/Cameadows99/FundMeCourse/tree/main/FundMeCourse",
    techStack: [
      "Foundry",
      "Chainlink",
      "Live pricing/transactions",
      "Mock testing",
      "User security",
    ],
    keySystems: [
      {
        title: "Main application page",
        href: "https://github.com/Cameadows99/FundMeCourse/blob/main/FundMeCourse/src/FundMe.sol",
        description: "",
      },
      {
        title: "Thorough testing",
        href: "https://github.com/Cameadows99/FundMeCourse/tree/main/FundMeCourse/test",
      },
      {
        title: "Price converting",
        href: "https://github.com/Cameadows99/FundMeCourse/blob/main/FundMeCourse/src/PriceConverter.sol",
      },
    ],
  },
  {
    slug: "calculator",
    title: "React Calculator",
    description: "Calculator using useState",
    longDescription:
      "A functionality focused calculator application that uses useState to hold two numbers at once. This allows the user to edit one number input without clearing all inputs. This was one of my first unguided JS/React applications. I wanted to challenge myself to create a calculator while also adding a twist, thus all the inputs including the operator are stored, alterable and independent until the equal button is pressed",
    thumbnail: "/thumbnails/calc-thumb.webp",
    repoUrl: "https://github.com/Cameadows99/calculator/tree/master/src",
    techStack: [
      "React",
      "JavaScript",
      "Light CSS",
      "State Management",
      "Thougtful Design",
    ],
    keySystems: [
      {
        title: "Application page",
        href: "https://github.com/Cameadows99/calculator/blob/master/src/App.js",
      },
    ],
  },
  {
    slug: "rps",
    title: "Rock Paper Scissors",
    description: "Created using React",
    longDescription:
      "This was my very first application ever created. I debated on whether to include it but, seeing how even to this day when I show my personal friends my created applications, I felt compelled to include the beginning of my journey.",
    thumbnail: "/thumbnails/rps-thumb.png",
    repoUrl: "https://github.com/Cameadows99/ReactRPS/tree/main/src",
    techStack: ["React", "JavaScript", "CSS"],
    keySystems: [
      {
        title: "Application page",
        href: "https://github.com/Cameadows99/ReactRPS/blob/main/src/App.js",
      },
    ],
  },
];
