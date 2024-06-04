import { ReactNode } from "react";
import BlogImage from "../assets/blogImage.png";

export interface Job {
  id: number;
  name?: string;
  role?: string;
  deadline?: string;
  logo?: string;
}

const newJob: Job = {
  id: 1,
  name: "Job Title",
  role: "Job Role",
  deadline: "2023-12-31",
  logo: "logo-url",
} as Job;

export interface Applicant {
  id: number;
  name: string;
  jobId: number;
  status: string;
  deadline: string;
  cv: string;
}

// Sample data
export const jobs: Job[] = [
  {
    id: 1,
    name: "Kuda",
    logo: "https://play-lh.googleusercontent.com/C7ojJSQlm0ae8xRxH7kiET-PxIHSZfk2BQ8-ipu0H7EiUnIcgpgDmHLVfZyIEj7wzxrY=w240-h480-rw",
    role: "Software Engineer",
    deadline: "23-11-2023",
  },
  {
    id: 2,
    name: "Kuda",
    logo: "https://play-lh.googleusercontent.com/C7ojJSQlm0ae8xRxH7kiET-PxIHSZfk2BQ8-ipu0H7EiUnIcgpgDmHLVfZyIEj7wzxrY=w240-h480-rw",
    role: "Mobile Engineer",
    deadline: "23-11-2023",
  },
  {
    id: 3,
    name: "Kuda",
    logo: "https://play-lh.googleusercontent.com/C7ojJSQlm0ae8xRxH7kiET-PxIHSZfk2BQ8-ipu0H7EiUnIcgpgDmHLVfZyIEj7wzxrY=w240-h480-rw",
    role: "Data Science",
    deadline: "23-11-2023",
  },
  {
    id: 4,
    name: "Kuda",
    logo: "https://play-lh.googleusercontent.com/C7ojJSQlm0ae8xRxH7kiET-PxIHSZfk2BQ8-ipu0H7EiUnIcgpgDmHLVfZyIEj7wzxrY=w240-h480-rw",
    role: "Graphic Design",
    deadline: "23-11-2023",
  },
];

export const applicants: Applicant[] = [
  {
    id: 1,
    name: "John Doe",
    jobId: 1,
    status: "accepted",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "23-11-2023",
  },
  {
    id: 2,
    name: "Jane Smith",
    jobId: 2,
    status: "accepted",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "23-01-2303",
  },
  {
    id: 3,
    name: "Bob Johnson",
    jobId: 3,
    status: "rejected",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "23-10-2003",
  },
  {
    id: 4,
    name: "Alice Brown",
    jobId: 4,
    status: "accepted",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "43-11-2003",
  },
  {
    id: 5,
    name: "Charlie Davis",
    jobId: 1,
    status: "pending",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "25-11-2043",
  },
  {
    id: 5,
    name: "Yusuf Abdullahi",
    jobId: 1,
    status: "pending",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "63-11-2033",
  },
  {
    id: 5,
    name: "Dorcas Bamisile",
    jobId: 1,
    status: "rejected",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "23-11-2012",
  },
  {
    id: 5,
    name: "Lambe Boluwatife",
    jobId: 1,
    status: "accepted",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "13-11-2433",
  },
  {
    id: 5,
    name: "Adewusi Mustopha",
    jobId: 1,
    status: "pending",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "44-11-2003",
  },
  {
    id: 5,
    name: "Charlie John",
    jobId: 2,
    status: "accepted",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "73-11-2046",
  },
  {
    id: 5,
    name: "Charlie Davis",
    jobId: 3,
    status: "pending",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "25-11-2043",
  },
  {
    id: 5,
    name: "Yusuf Abdullahi",
    jobId: 3,
    status: "pending",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "63-11-2033",
  },
  {
    id: 5,
    name: "Dorcas Bamisile",
    jobId: 2,
    status: "rejected",
    cv: "/path/to/cv/john_doe_cv.pdf",
    deadline: "23-11-2012",
  },
];
