// src/components/JobDetails.tsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../../data/blog";
import Button from "../../components/Button";
import axios, { AxiosError, AxiosResponse } from "axios";

interface Blogs {
  id: number;
  title: string;
  content: string;
  author: string;
  publicationDate: string;
  published: boolean;
  image: string;
}

const BlogDetails: React.FC = () => {
  const [dataFromApi, setDataFromApi] = useState<Blogs | null>(null);

  const { id } = useParams<{ id?: string }>();
  const blogId = id ? parseInt(id, 10) : undefined; // Handle the possibility of id being undefined
  const blog = blogId ? blogs.find((j) => j.id === blogId) : undefined;

  useEffect(() => {
    axios
      .get<Blogs[]>(
        `https://uptick-teama-capstone.onrender.com/posts/${blogId}`
      )
      .then((response: AxiosResponse) => {
        // Set the user data in the state
        setDataFromApi(response.data);
        console.log(dataFromApi);
      })
      .catch((error: AxiosError) => {
        console.error("Error fetching data:", error);
      });
  }, [blogId]);

  return (
    <>
      {!dataFromApi ? (
        <div className="p-20">
          <h1 className="text-7xl font-normal mb-5">Blog Not Found</h1>
          <Link to="/blogs">
            <Button title="Return To Blog Lists" />
          </Link>
        </div>
      ) : (
        <div className="p-12 sm:p-32 md:w-4/5 space-y-9">
          <p className="text-lg font-normal">
            Written by{" "}
            <span className="text-lg font-bold">{dataFromApi?.author}</span>
          </p>
          <h2 className="text-5xl font-bold">{dataFromApi?.title}</h2>
          <div className="flex flex-col space-y-4 sm:items-left sm:justify-left  sm:space-y-0">
            <img
              src={dataFromApi?.image}
              alt="JobImage"
              loading="lazy"
              className="p-4 "
            />
          </div>

          <p className="text-base font-normal">{dataFromApi?.content}</p>
        </div>
      )}
    </>
  );
};

export default BlogDetails;