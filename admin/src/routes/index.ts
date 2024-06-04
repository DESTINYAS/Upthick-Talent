import { lazy } from "react";

const TechList = lazy(() => import("../pages/Program/UptickTech/TechList"));
const BusinessList = lazy(
  () => import("../pages/Program/UptickBusiness/BusinessList")
);
const MapList = lazy(() => import("../pages/Program/UptickMap/MapList"));
const BlogList = lazy(() => import("../pages/blogs/BlogList"));
const JobList = lazy(() => import("../pages/job/JobList"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const JobDetails = lazy(() => import("../pages/job/JobDetails"));
const BlogDetails = lazy(() => import("../pages/blogs/BlogDetails"));
const TechDetails = lazy(
  () => import("../pages/Program/UptickTech/TechDetails")
);

const coreRoutes = [
  {
    path: "/talent-tech",
    title: "Talent Tech",
    component: TechList,
  },
  {
    path: "/talent-tech/:id",
    title: "Talent Tech Details",
    component: TechDetails,
  },
  {
    path: "/talent-business",
    title: "Talent Business",
    component: BusinessList,
  },
  {
    path: "/talent-map",
    title: "Talent Map",
    component: MapList,
  },
  {
    path: "/jobs",
    title: "Job List",
    component: JobList,
  },
  {
    path: "/blogs",
    title: "Blog Lists",
    component: BlogList,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/joblist/:jobId",
    title: "Job Details",
    component: JobDetails,
  },
  {
    path: "/bloglist/:jobId",
    title: "Blog Details",
    component: BlogDetails,
  },
];

const routes = [...coreRoutes];
export default routes;
