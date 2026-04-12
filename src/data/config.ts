const config = {
  title: "Shaker Abdallah | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Shaker Abdallah, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Shaker Abdallah, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Shaker Abdallah",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
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
    linkedin: "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHgNMRbEm5qBQAAAZ2DEbUIiBKqrm3HtQPNEcBjP9Fo6nXXuQGgB4hQFHEFKNeJm9k8USVqILtdm_aotypfJZGDxGbDnEPvKgmabmobsMXuFFslTu58izh4NhLBF2PetIIFd3Q=&original_referer=https://github.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshaker-abdallah-79b0a1339%2F",
    instagram: "https://www.instagram.com/s_h_a_k_err/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Shaker17s",
  },
};
export { config };
