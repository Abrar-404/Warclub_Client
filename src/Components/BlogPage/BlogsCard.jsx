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

        <div>
          <User />
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
