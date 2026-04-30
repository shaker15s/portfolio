const config = {
  title: "Shaker Abdallah | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Shaker Abdallah, a Full-Stack Developer and Engineering Student specializing in Python (Django) and React.js. Discover interactive 3D experiences, gamified web interfaces, and production-grade e-commerce platforms. Let's build something amazing together!",
    short:
      "Discover the portfolio of Shaker Abdallah, a full-stack developer creating interactive web experiences, 3D animations, and scalable web platforms.",
  },
  keywords: [
    "Shaker Abdallah",
    "portfolio",
    "full-stack developer",
    "Python",
    "Django",
    "React.js",
    "web development",
    "3D animations",
    "interactive websites",
    "Sara 3D Surprise",
    "Valentine Interactive",
    "Digital Bookstore",
    "web design",
    "GSAP",
    "Three.js",
    "Framer Motion",
    "Tailwind CSS",
    "HTML5 Canvas",
    "JavaScript",
    "Computer Vision",
    "OpenCV",
  ],
  author: "Shaker Abdallah",
  email: "shakerabdallah66@gmail.com",
  site: "https://shaker17s.github.io/3d_portfolio",

  // for github stars button
  githubUsername: "shaker17s",
  githubRepo: "3d_portfolio",


  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/ShakerAbda48240",
    linkedin: "https://www.linkedin.com/in/shaker-abdallah-79b0a1339/",
    instagram: "https://www.instagram.com/s_h_a_k_err/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Shaker17s",
  },
};
export { config };
