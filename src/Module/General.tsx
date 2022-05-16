// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
import boy from "./Assets/boy.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import ll from "./Assets/sponsorsLogos/ll.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import Replit from "./Assets/sponsorsLogos/replit.png";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import taskade from "./Assets/sponsorsLogos/taskade.png";
import lyin from "./Assets/teami/lyin.jpg";
/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */
// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import zoha from "./Assets/teami/zoha.png";







const TOP_SECTION = {
  TITLE: "Join Hack Fest",
  Typed_effect: ["Solve it Fast and WIN", "Win awesome prizes","Swag and much more"],
  SHORT_DESCRIPTION:
    "Join us on 25th May 2022 with over 100+ students from across the nation to solve challenging problems, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/limbohacks/",
  discord: "https://discord.com/invite/8XJSzmtWPp",
  linkedin: "https://www.linkedin.com/company/limbo-hacks/",
  twitter: "https://twitter.com/HacksLimbo",
  devpost: "https://limbo-hacks-12968.devpost.com/",
  email: "mailto:hello@limbohacks.tech",
  mail: "hello@limbohacks.tech"
};

const MIDDLE_SECTION = {
  TITLE: "What is Hack Fest?",
  LONG_DESCRIPTION:
    "Hack Fest is a competetive programming Event for Programmers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the time developers at Hack Fest will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};


/** SCHEDULE
 *  
 * INSTRUCTIONS
 * 
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 5,
  year: 2022
}


 const schedule = [
  {
      "day": "25-5-2022",
      "events": [
          {
              "title": "Hack it!",
              "timings": "7 Pm - 10 Pm",
               "link" : "https://google.com"
          }
      ]
  },
   {
     "day": "22-5-2022",
     "events": [
       {
         "title": "Introductory Workshop!",
         "timings": "9 Pm - 10 Pm",
         "link" : "https://google.com"
       }
     ]
   },
  {
      "day": "17-5-2022",
      "events": [
          {
              "title": "Registrations are open!",
              "timings": "12 AM - 12 Pm",
              "link" : "https://google.com"
          }
      ]
  }
]
/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize will be given to submission passing most test cases and submission with minimum time"
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "2nd Overall prize will be given to submission 2nd best passing most test cases and submission with minimum time"
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Third Overall prize will be given to third best submission passing most test cases and submission with minimum time"
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content:
        "You project will qualify for this prize if you participate alone without a team! we believe u can solve it alone!"
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your code will qualify if it passes all test cases hidden and given test cases! "
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Oheed Imran",
      role: "Organizer",
      github: "https://github.com/Limbo-Hacks/Hackathon-website-template",
      linkedin: "",
      img: me
    },
    {
      Name: "Talha zeb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Muhammad Ali",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Saroosh Hammad",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Syed Mustafa",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    },
    {
      Name: "Ahmed",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    }
  ] 
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    },    
  ] 
];


/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hack Fest?",
        content:
        'Hack Fest is a 3-4 hour event where "Programmers" all over the globe will try to solve problems and design efficient solution in minimum time.'      },
      {
        label: "Who can attend?",
        content: " Hack Fest is open to all undergraduate, high school students and middle school students from all schools."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome initial workshop, where we will explain everything to you so you can solve problems with no worries!."
      },
    ],
    [
      {
        label: "How to register myself in the Hack Fest?",
        content: "All you need is to fill our form above and join whatsapp group, we will guide you through everything there"
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (rehan@limbohacks.tech or hello@limbohacks.tech) we would happy to help you."
      }
      ,
      {
        label: "Will there be swag?",
        content: "Yes! Participants will receiving  Hack Fest swag sponsored by Sportivity!."
      }
    ],
    [
      {
        label: "Winning Prize?",
        content: "Winning prize will be around 10000PKR (subject to number of participants)!."
      },
      {
        label: "What will be registration fee?",
        content: "Registration fee for all participants in only 200 pkr!."
      }
      ,
      {
        label: "Will there be ceriticates for participation?",
        content: "Yes every participant will be awarded with certificates of participation!."
      }
    ]

  ],


];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
