export interface Job {
  id: number;
  imgurl: string;
  title: string;
  writter: string;
  date: string;
  details: string;
  description: string;
}

const jobs: Job[] = [
  {
    id: 1,
    imgurl:
      "https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png",
    title: "Bolt Kenya suspends 5% booking fee",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages. You’ll be expected to ship major features end to end across our JavaScript and Clojure codebase, as well as deal with some of our trickier backend issues as they arise. Some familiarity with machine learning, compiler theory and modern big data infrastructures would be helpful. You should have strong product sensibilities and deeply care about the end user experience. .",
    date: "Aug 20, 2023",
    writter: "Joseph Ojo",
    details: "Bolt Kenya suspends 5% booking fee......",
  },
  {
    id: 2,
    imgurl:
      "https://www.interviewbit.com/blog/wp-content/uploads/2021/06/Backend-Developer-Roles-and-Responsibilities-1024x640.jpg",
    title: "Kenya opens its first smartphone factory.....",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    date: "Aug 20, 2023",
    writter: "Musa Adebayo",
    details: "Kenya opens its first smartphone factory..... ",
  },
  {
    id: 3,
    imgurl:
      "https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png",
    title: "MarketForce reduces operations in five markets",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    date: "Aug 20, 2023",
    writter: "Yusuf Abdullahi",
    details: "MarketForce reduces operations in five markets... ",
  },
  {
    id: 4,
    imgurl:
      "https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png",
    title: "Bolt Kenya suspends 5% booking fee",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages. You’ll be expected to ship major features end to end across our JavaScript and Clojure codebase, as well as deal with some of our trickier backend issues as they arise. Some familiarity with machine learning, compiler theory and modern big data infrastructures would be helpful. You should have strong product sensibilities and deeply care about the end user experience. .",
    date: "Aug 20, 2023",
    writter: "Joseph Ojo",
    details: "Bolt Kenya suspends 5% booking fee......",
  },
  {
    id: 5,
    imgurl:
      "https://www.interviewbit.com/blog/wp-content/uploads/2021/06/Backend-Developer-Roles-and-Responsibilities-1024x640.jpg",
    title: "Kenya opens its first smartphone factory.....",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    date: "Aug 20, 2023",
    writter: "Musa Adebayo",
    details: "Kenya opens its first smartphone factory..... ",
  },
  {
    id: 6,
    imgurl:
      "https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png",
    title: "MarketForce reduces operations in five markets",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    date: "Aug 20, 2023",
    writter: "Yusuf Abdullahi",
    details: "MarketForce reduces operations in five markets... ",
  },
  {
    id: 7,
    imgurl:
      "https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png",
    title: "Bolt Kenya suspends 5% booking fee",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages. You’ll be expected to ship major features end to end across our JavaScript and Clojure codebase, as well as deal with some of our trickier backend issues as they arise. Some familiarity with machine learning, compiler theory and modern big data infrastructures would be helpful. You should have strong product sensibilities and deeply care about the end user experience. .",
    date: "Aug 20, 2023",
    writter: "Joseph Ojo",
    details: "Bolt Kenya suspends 5% booking fee......",
  },
  {
    id: 8,
    imgurl:
      "https://www.interviewbit.com/blog/wp-content/uploads/2021/06/Backend-Developer-Roles-and-Responsibilities-1024x640.jpg",
    title: "Kenya opens its first smartphone factory.....",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    date: "Aug 20, 2023",
    writter: "Musa Adebayo",
    details: "Kenya opens its first smartphone factory..... ",
  },
  {
    id: 9,
    imgurl:
      "https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png",
    title: "MarketForce reduces operations in five markets",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    date: "Aug 20, 2023",
    writter: "Yusuf Abdullahi",
    details: "MarketForce reduces operations in five markets... ",
  },
  // Add more job listings
];

export default jobs;
