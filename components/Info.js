/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "  Abolfazl ",
  lastName: "Abolghasemi",
  initials: "My personal Blog", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Front End Developer - Next.js ",
  selfPortrait: "/images/self.png", // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the Iran",
    },
    {
      emoji: "💼",
      text: "student and programmer",
    },
    {
      emoji: "📧",
      text: "abolfazle.dev@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/abolfazle79",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Abolfazle. I'm a Front-End developer at Richtech.ir. I enjoy Coding,  Contribute in many diffrent project and learning new things.",
  skills: {
    proficientWith: [
      "javascript",
      "Html ,Css",
      "bootstrap 5",
      "React js ",
      "Next js",
      "git",
      "github",
      "Material UI",
      "&...",
    ],
    exposedTo: ["nodejs", "mongoDB", "solidity", "🌎.js"],
  },
  hobbies: [
    {
      label: "coding...",
      emoji: "💻",
    },
    {
      label: "Watch Movie",
      emoji: "🎬",
    },
    {
      label: "reading",
      emoji: "🧾",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "/images/mock1.png",
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: "/images/mock2.png",
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: "/images/mock3.png",
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: "/images/mock4.png",
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: "/images/mock5.png",
    },
  ],
};
