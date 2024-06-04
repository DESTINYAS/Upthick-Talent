import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import styles from "../../styles/home-page.modulus.css";

interface Blogs {
  id: number;
  title: string;
  content: string;
  author: string;
  publicationDate: string;
  published: boolean;
  image: string;
}

const BlogPreview: React.FC = () => {
  const [dataFromApi, setDataFromApi] = useState<Blogs[] | null>(null);
  useEffect(() => {
    axios
      .get<Blogs[]>("https://uptick-teama-capstone.onrender.com/posts")
      .then((response: AxiosResponse) => {
        // Set the user data in the state
        setDataFromApi(response.data);
        console.log(dataFromApi);
      })
      .catch((error: AxiosError) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mx-6 my-16 space-y-4  sm:mx-16 sm:my-24">
      <h1 className="text-5xl font-normal">Blog</h1>
      <h1 className="text-5xl font-bold">Latest Updates</h1>
      <div className="border-t-2 border-gray-500">
        <p className="text-2xl font-semibold my-6 pl-6">Filter and sort</p>
      </div>

      <div className="flex flex-wrap px-2 justify-center">
        <div className={styles.homeBlog}>
          <div className={styles.cards}>
            {dataFromApi?.map((blog) => (
              <div className={styles.card} key={blog.id}>
                <div className={styles.box}>
                  <img
                    src={blog.image}
                    alt="blog image"
                    className={styles.imageCard}
                    loading="lazy"
                  />
                </div>
                <h2>
                  {" "}
                  {blog.title.length > 35
                    ? blog.title.substring(0, 35) + "..."
                    : blog.title}
                </h2>
                <h6>
                  {" "}
                  {blog.content.length > 100
                    ? blog.content.substring(0, 100) + "..."
                    : blog.content}
                </h6>
                <Link to={`/blogs/${blog.id}`}>
                  <p className="text-right px-8 text-base font-semibold text-upticklightb80 ml-4 mt-5 mb-5">
                    Learn More
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;