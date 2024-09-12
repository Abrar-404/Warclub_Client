import { IoIosArrowForward } from 'react-icons/io';
import aboutBg from '../../assets/aboutusbg.png';
import { Link } from 'react-router-dom';
import BlogsCard from './BlogsCard';
import { useEffect, useState } from 'react';
import '../Styles/blogCard.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <div style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="mx-auto pt-32 pb-32">
          <h1 className="text-white font-bold lg:text-3xl text-center">
            Latest News
          </h1>

          <div className="text-white font-semibold text-sm text-center flex justify-center mx-auto items-center pt-2">
            <h1>
              <Link to="/">
                <span className="text-green-400">Home</span>
              </Link>{' '}
            </h1>
            <div>
              <IoIosArrowForward />
            </div>
            <div>Blogs</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          {blogs?.map(blog => (
            <BlogsCard key={blog._id} blog={blog} />
          ))}
        </div>

        <div>
          <div class="blog_card">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search here..."
                className="w-72 h-12 px-4 pl-8 pr-10 text-white bg-transparent border-2 border-[#45f882] rounded-full outline-none focus:ring-2 focus:ring-green-300 focus:border-[#45f882]"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
