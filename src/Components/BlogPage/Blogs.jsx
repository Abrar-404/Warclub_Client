import { IoIosArrowForward } from 'react-icons/io';
import aboutBg from '../../assets/aboutusbg.png';
import { Link } from 'react-router-dom';
import BlogsCard from './BlogsCard';
import { useEffect, useState } from 'react';
import '../Styles/blogCard.css';
import '../Styles/categoryBtn.css';
import { Search } from 'lucide-react';
import { apiFetch } from '../../Config/apiConfig';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    apiFetch('/blogs')
      .then(res => res.json())
      .then(data => setBlogs(Array.isArray(data) ? data : []))
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(prev => prev === category ? 'All' : category);
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = !searchTerm ||
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description2?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' ||
      blog.title?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      blog.description?.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

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
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => (
              <BlogsCard key={blog._id} blog={blog} />
            ))
          ) : (
            <div className="text-center p-12 bg-[#0F1C23] rounded-3xl border border-gray-800 text-gray-400 max-w-xl mx-auto">
              <p className="text-lg font-semibold text-white mb-2">No articles found</p>
              <p className="text-sm mb-4">No blogs match &quot;{searchTerm || selectedCategory}&quot;</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="px-4 py-2 bg-[#45F882] text-black font-semibold rounded-lg hover:bg-green-400 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        <div className="">
          <div className="blog_card lg:w-full md:mx-auto md:w-[50%] md:justify-center md:flex w-[70%] flex justify-center mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full h-full bg-transparent border-2 py-3 rounded-full border-[#45f882] lg:w-[300px] pl-6 text-white hover:border-green-700 my-3 outline-none"
              placeholder="Search Here"
            />
            <div className="absolute lg:right-10 lg:top-11 md:right-10 md:top-11 right-10 top-11">
              <Search color="#45f882" />
            </div>
          </div>

          <div class="blog_card lg:mx-0 md:mx-10 mx-10 lg:mt-10 md:mt-10 mt-10">
            <div>
              <p className="text-white text-[28px] font-semibold">Categories</p>

              <hr className="h-[2px] mt-2 mb-5 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 border-0 rounded-full" />
            </div>

            <button
              onClick={() => handleCategoryClick('Fantasy')}
              className={`cat_btn w-full ${selectedCategory === 'Fantasy' ? 'ring-2 ring-[#45F882]' : ''}`}
            >
              <svg
                className="cat_svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="cat_span flex justify-between mx-auto w-full">
                <p>Fantasy</p> <p>(1)</p>
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('Gaming')}
              className={`cat_btn w-full mt-4 ${selectedCategory === 'Gaming' ? 'ring-2 ring-[#45F882]' : ''}`}
            >
              <svg
                className="cat_svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="cat_span flex justify-between mx-auto w-full">
                <p>Gaming</p> <p>(1)</p>
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('Live Games')}
              className={`cat_btn w-full mt-4 ${selectedCategory === 'Live Games' ? 'ring-2 ring-[#45F882]' : ''}`}
            >
              <svg
                className="cat_svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="cat_span flex justify-between mx-auto w-full">
                <p>Live Games</p> <p>(1)</p>
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('MX-Xbox')}
              className={`cat_btn w-full mt-4 ${selectedCategory === 'MX-Xbox' ? 'ring-2 ring-[#45F882]' : ''}`}
            >
              <svg
                className="cat_svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="cat_span flex justify-between mx-auto w-full">
                <p>MX-Xbox</p> <p>(1)</p>
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('Shooting')}
              className={`cat_btn w-full mt-4 ${selectedCategory === 'Shooting' ? 'ring-2 ring-[#45F882]' : ''}`}
            >
              <svg
                className="cat_svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="cat_span flex justify-between mx-auto w-full">
                <p>Shooting</p> <p>(1)</p>
              </span>
            </button>

            <button
              onClick={() => handleCategoryClick('Uncategorized')}
              className={`cat_btn w-full mt-4 ${selectedCategory === 'Uncategorized' ? 'ring-2 ring-[#45F882]' : ''}`}
            >
              <svg
                className="cat_svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="cat_span flex justify-between mx-auto w-full">
                <p>Uncategorized</p> <p>(1)</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
