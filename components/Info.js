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
  firstName: " Ahmadreza ",
  lastName: "Nouri",
  initials: "My personal profile", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Front End Developer - Next.js ",
  selfPortrait: "/images/ahmadreza.png", // don't change this unless you want to name your self-portrait in the "img" folder something else!
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
      text: "student software engineer and programmer",
    },
    {
      emoji: "📧",
      text: "ahmadrezanouri.ir@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/ahmadrezanouri1",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/ahmadreza-nouri-6b4607236",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Ahmadreza . I'm a Front-End developer at Richtech.ir. I enjoy Coding,  Contribute in many diffrent project and learning new things. And I am very interested in NodeJS and JavaScript technologies, I live with NextJS",
  skills: {
    proficientWith: [
      "javascript",
      "Html ,Css",
      "bootstrap 5",
      "Tailwind CSS ",

      "React js ",
      "Next js",
      "Express js",

      "git",
      "github",
      "Material UI",
    ],
    exposedTo: ["nodejs", "mongoDB", "solidity", "🌎.js", "TypeScript"],
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
    {
      label: "meet friends",
      emoji: "🤝",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1 (HD Graphic)",
      live: "https://hdgraphic.ir", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "/images/hd.png",
    },
    {
      title: "Project 2 (personal profile)",
      live: "https://ahmadrezanouri.ir", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ahmadrezanouri1", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "/images/profile.png",
    },
    {
      title: "Project 3 (Ipinit --submit Ads--) ",
      live: "https://ipinit.ir", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ahmadrezanouri1", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "/images/ipinit.png",
    },
    {
      title: "Project 4 (reyhanimedia) ",
      live: "https://reyhanimedia.ir", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ahmadrezanouri1", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "/images/reyhanimedia.png",
    },
    {
      title: "Project 5 (IranArmaghan) ",
      live: "https://iranarmaghan.ir", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ahmadrezanouri1", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "/images/2.jpg_i1TGB0m_1.jpg.jpg",
    },
    {
      title: "Project 6 (IranArmaghan) ",
      live: "https://iranarmaghan.ir", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ahmadrezanouri1", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "/images/",
    },
  ],
};
