import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home-page.module.css";
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

const BlogPreview: React.FC = () => {
  const [dataFromApi, setDataFromApi] = useState<Blogs[] | null>(null);
  useEffect(() => {
    axios
      .get<Blogs[]>("https://uptick-teama-capstone.onrender.com/posts")
      .then((response: AxiosResponse) => {
        setDataFromApi(response.data);
        console.log(dataFromApi);
      })
      .catch((error: AxiosError) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const latestBlogs = dataFromApi?.slice(0, 6);

  return (
    <div className="mx-6 my-16 space-y-10  sm:mx-16 sm:my-24">
      <div className="border-l-4 border-upticklightb80 space-y-4 ml-2 pl-4">
        <h1 className="text-5xl text-white font-normal">Blog</h1>
        <h1 className="text-5xl text-white font-bold">Latest Updates</h1>
      </div>

      <div className={styles.homeBlog}>
        <div className={styles.cards}>
          {latestBlogs?.map((blog) => (
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
  );
};

export default BlogPreview;