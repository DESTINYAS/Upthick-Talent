import React, { useState, useEffect } from "react";
import Dots from "../../assets/dots.png";
import Plus from "../../assets/plus.png";
import ModalOptions from "./ModalOptions";
import JobCreationForm from "./BlogCreationForm";
import BlogImage from "../../assets/blogImage.png";
import Loader from "../../components/Loader";

import axios from "axios";
import moment from "moment";

interface JobApplicantCount {
  [key: number]: number;
}

interface Blogs {
  id: number;
  title: string;
  content: string;
  author: string;
  publicationDate: string;
  published: boolean;
  image: string;
}

const BlogList: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJobCreationFormOpen, setIsJobCreationFormOpen] = useState(false);

  const [dataFromApi, setDataFromApi] = useState<Blogs[] | null>(null);

  useEffect(() => {
    axios
      .get<Blogs[]>(
        "https://upthick-talent-teama.onrender.com/posts?skip=0&take=10000"
      )
      .then((response) => {
        // Set the user data in the state
        setDataFromApi(response.data);
        console.log(dataFromApi);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleBlogClick = (blogId: number) => {
    setSelectedProgram(blogId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
    setIsModalOpen(false);
  };

  const handleOpenApplication = () => {
    console.log("Open Application");
    handleCloseModal();
  };

  const handleCloseApplication = () => {
    console.log("Close Application");
    handleCloseModal();
  };

  const handleViewDetails = () => {
    console.log("View Applicant Details");
    handleCloseModal();
  };

  const handleAddNewJob = () => {
    setIsJobCreationFormOpen(true);
  };

  // const jobApplicantCount: JobApplicantCount = jobs.reduce(
  //   (countMap, job) => ({
  //     ...countMap,
  //     [job.id]: applicants.filter((applicant) => applicant.jobId === job.id)
  //       .length,
  //   }),
  //   {}
  // );

  return (
    <div className="p-8 h-140 overflow-y-auto">
      <div className="flex flex-row justify-between mb-6">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
        <button
          className="flex flex-row p-1 justify-end items-end sm:px-3 sm:py-3 mr-4 text-base font-semibold h-12 rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30"
          onClick={handleAddNewJob}
        >
          <img src={Plus} alt="Plus" /> Add New
        </button>
      </div>
      {dataFromApi ? (
        <div className="blog-lists">
          <div className="blog-lists-head">
            <h6 className="h6">Listed Blog Post</h6>
            <h6 className="h6">Published Date</h6>
          </div>
          {dataFromApi.map((blog) => (
            <div className="blog-item" key={blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt="Blog Image" className="item-image" />
              </div>
              <div className="blog-content">
                <small>
                  Written by <b>{blog.author}</b>
                </small>
                <h4>
                  {blog.title.length > 35
                    ? blog.title.substring(0, 35) + "..."
                    : blog.title}
                </h4>
                <h6>
                  {" "}
                  {blog.content.length > 100
                    ? blog.content.substring(0, 100) + "..."
                    : blog.content}
                </h6>
              </div>
              <div className="blog-date">
                <h6>{moment(blog.publicationDate).format("Do MMM. YYYY")}</h6>
              </div>
              <div className="blog-menu">
                <button onClick={() => handleBlogClick(blog.id)}>
                  {" "}
                  <img src={Dots} alt="Blog menu icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
      <ModalOptions
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOpenApplication={handleOpenApplication}
        onCloseApplication={handleCloseApplication}
        jobId={selectedProgram}
      />
      <JobCreationForm
        isOpen={isJobCreationFormOpen}
        onClose={() => setIsJobCreationFormOpen(false)}
      />
    </div>
  );
};

export default BlogList;
