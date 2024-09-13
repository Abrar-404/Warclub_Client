import { IoIosArrowForward } from 'react-icons/io';
import aboutBg from '../../assets/aboutusbg.png';
import { Link } from 'react-router-dom';
import BlogsCard from './BlogsCard';
import { useEffect, useState } from 'react';
import '../Styles/blogCard.css';
import { Search } from 'lucide-react';

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

      <div className="flex justify-center mx-auto lg:flex-row md:flex-col-reverse flex-col-reverse gap-7 mt-20">
        <div>
          {blogs?.map(blog => (
            <BlogsCard key={blog._id} blog={blog} />
          ))}
        </div>

        <div>
          <div class="blog_card lg:w-full md:mx-auto md:w-[50%] md:justify-center md:flex w-[70%] flex justify-center mx-auto  relative">
            <input
              type="text"
              className="w-full h-full bg-transparent border-2 py-3 rounded-full border-[#45f882] lg:w-[300px] pl-6 text-white hover:border-green-700 my-3"
              placeholder="Search Here"
            />
            <div className="absolute lg:right-10 lg:top-11 md:right-10 md:top-11 right-10 top-11">
              <Search color="#45f882" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
