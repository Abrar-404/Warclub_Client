import { User } from 'lucide-react';
import '../Styles/blogCard.css';

const BlogsCard = ({ blog }) => {
  const { title, description, description2, image } = blog || {};

  return (
    <>
      <div class="blog_card mb-8 lg:mx-0 md:mx-10 mx-10">
        <div class="blog_card-image">
          <img
            src={image}
            alt=""
            className="lg:w-full md:w-full lg:h-[370px] md:h-[370px] p-2 rounded-3xl"
          />
        </div>

        <div className="ml-2 flex mx-auto gap-4">
          <div className="flex justify-start gap-1 items-center">
            <User size="16px" color="#45f882" />
            <p className="text-[12px] text-gray-400">By Warclub</p>
          </div>

          <p className="text-gray-400"> |</p>
          <div className="flex justify-start gap-1 items-center">
            <User size="16px" color="#45f882" />
            <p className="text-[12px] text-gray-400">By Warclub</p>
          </div>

          <p className="text-gray-400"> |</p>

          <div className="flex justify-start gap-1 items-center">
            <User size="16px" color="#45f882" />
            <p className="text-[12px] text-gray-400">By Warclub</p>
          </div>
        </div>

        <p class="blog_card-title">{title}</p>
        <p class="blog_card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi
          nec magna tristique, non lobortis.
        </p>
      </div>
    </>
  );
};

export default BlogsCard;
