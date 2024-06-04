export interface Program {
  id: number;
  name: string;
}

export interface Applicant {
  cv: string | undefined;
  phone: string;
  email: string;
  id: number;
  name: string;
  programId: number;
  status: string;
  date: string;
}

// Sample data
export const programs: Program[] = [
  { id: 1, name: "Software Engineer" },
  { id: 2, name: "Mobile Engineer" },
  { id: 3, name: "Data Science" },
  { id: 4, name: "Graphic Design" },
];

export const applicants: Applicant[] = [
  {
    id: 1,
    name: "John Doe",
    programId: 1,
    status: "accepted",
    date: "23-11-2023",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    programId: 2,
    status: "accepted",
    date: "23-01-2303",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 3,
    name: "Bob Johnson",
    programId: 3,
    status: "rejected",
    date: "23-10-2003",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 4,
    name: "Alice Brown",
    programId: 4,
    status: "accepted",
    date: "43-11-2003",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Charlie Davis",
    programId: 1,
    status: "pending",
    date: "25-11-2043",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Yusuf Abdullahi",
    programId: 1,
    status: "pending",
    date: "63-11-2033",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Dorcas Bamisile",
    programId: 1,
    status: "rejected",
    date: "23-11-2012",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Lambe Boluwatife",
    programId: 1,
    status: "accepted",
    date: "13-11-2433",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Adewusi Mustopha",
    programId: 1,
    status: "pending",
    date: "44-11-2003",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Charlie John",
    programId: 2,
    status: "accepted",
    date: "73-11-2046",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Charlie Davis",
    programId: 3,
    status: "pending",
    date: "25-11-2043",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Yusuf Abdullahi",
    programId: 3,
    status: "pending",
    date: "63-11-2033",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
  {
    id: 5,
    name: "Dorcas Bamisile",
    programId: 2,
    status: "rejected",
    date: "23-11-2012",
    email: "temidayoabdullah@gmail.com",
    phone: "08146454063",
    cv: "",
  },
];
