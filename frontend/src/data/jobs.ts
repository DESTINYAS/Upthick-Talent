export interface Job {
  id: number;
  imgurl: string;
  title: string;
  description: string;
  deadline: string;
  subtitle: string;
  details: string;
  aboutus: string;
  requirements: string[];
  location: string;
}

const jobs: Job[] = [
  {
    id: 1,
    imgurl:
      "https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png",
    title: "Software Engineer (Backend)",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    deadline: "22 November, 2023",
    subtitle: "Job Description/ Requirements",
    details:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages. You’ll be expected to ship major features end to end across our JavaScript and Clojure codebase, as well as deal with some of our trickier backend issues as they arise. Some familiarity with machine learning, compiler theory and modern big data infrastructures would be helpful. You should have strong product sensibilities and deeply care about the end user experience. ",
    requirements: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with frontend frameworks",
      "Able to make good technical judgements and back them up articulately Nice to have",
      "Experience with JDBC and database integrations Nice to have",
      "Experience and knowledge of the Java ecosystem and JVM tuning Nice to have",
      "history of open source contributions Nice to have",
      "experience in JavaScript / Typescript (our frontend is in JS and TS)",
    ],
    aboutus:
      "We're a global team (50% outside the US), fully distributed (from Thailand to California), who get things done asynchronously, with plenty of uninterrupted time, supporting each other to do the best work of our careers. We offer flexibility (define your own schedule and work from wherever you want), autonomy, and an environment that fosters growth, learning, and development. We're relentlessly user-focused and believe in building long-term value, not short-term hacks. And we raised a $30M Series B to take our approach to the next level for years to come.",
    location: "GLOBAL REMOTE ENGINEERING / FULL-TIME (REMOTE) / REMOTE",
  },
  {
    id: 2,
    imgurl:
      "https://www.interviewbit.com/blog/wp-content/uploads/2021/06/Backend-Developer-Roles-and-Responsibilities-1024x640.jpg",
    title: "Software Engineer (Backend)",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    deadline: "22 November, 2023",
    subtitle: "Job Description/ Requirements",
    details:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages. You’ll be expected to ship major features end to end across our JavaScript and Clojure codebase, as well as deal with some of our trickier backend issues as they arise. Some familiarity with machine learning, compiler theory and modern big data infrastructures would be helpful. You should have strong product sensibilities and deeply care about the end user experience. ",
    requirements: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with frontend frameworks",
      "Able to make good technical judgements and back them up articulately Nice to have",
      "Experience with JDBC and database integrations Nice to have",
      "Experience and knowledge of the Java ecosystem and JVM tuning Nice to have",
      "history of open source contributions Nice to have",
      "experience in JavaScript / Typescript (our frontend is in JS and TS)",
    ],
    aboutus:
      "We're a global team (50% outside the US), fully distributed (from Thailand to California), who get things done asynchronously, with plenty of uninterrupted time, supporting each other to do the best work of our careers. We offer flexibility (define your own schedule and work from wherever you want), autonomy, and an environment that fosters growth, learning, and development. We're relentlessly user-focused and believe in building long-term value, not short-term hacks. And we raised a $30M Series B to take our approach to the next level for years to come.",
    location: "GLOBAL REMOTE ENGINEERING / FULL-TIME (REMOTE) / REMOTE",
  },
  {
    id: 3,
    imgurl:
      "https://thetapacademy.com/wp-content/uploads/2023/03/back-end-developer-skills-required-1024x768.png",
    title: "Software Engineer (Backend)",
    description:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages... .",
    deadline: "22 November, 2023",
    subtitle: "Job Description/ Requirements",
    details:
      "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages. You’ll be expected to ship major features end to end across our JavaScript and Clojure codebase, as well as deal with some of our trickier backend issues as they arise. Some familiarity with machine learning, compiler theory and modern big data infrastructures would be helpful. You should have strong product sensibilities and deeply care about the end user experience. ",
    requirements: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with frontend frameworks",
      "Able to make good technical judgements and back them up articulately Nice to have",
      "Experience with JDBC and database integrations Nice to have",
      "Experience and knowledge of the Java ecosystem and JVM tuning Nice to have",
      "history of open source contributions Nice to have",
      "experience in JavaScript / Typescript (our frontend is in JS and TS)",
    ],
    aboutus:
      "We're a global team (50% outside the US), fully distributed (from Thailand to California), who get things done asynchronously, with plenty of uninterrupted time, supporting each other to do the best work of our careers. We offer flexibility (define your own schedule and work from wherever you want), autonomy, and an environment that fosters growth, learning, and development. We're relentlessly user-focused and believe in building long-term value, not short-term hacks. And we raised a $30M Series B to take our approach to the next level for years to come.",
    location: "GLOBAL REMOTE ENGINEERING / FULL-TIME (REMOTE) / REMOTE",
  },
  // Add more job listings
];

export default jobs;
