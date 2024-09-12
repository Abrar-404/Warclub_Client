import '../Styles/blogCard.css';

const BlogsCard = ({ blog }) => {
  const { title, description, description2, image } = blog || {};

  return (
    <>
      <div class="blog_card">
        <div class="blog_card-image"></div>
        <p class="blog_card-title">{title}</p>
        <p class="blog_card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi
          nec magna tristique, non lobortis.
        </p>
        <p class="blog_footer">
          Written by <span class="by-name">John Doe</span> on{' '}
          <span class="date">25/05/23</span>
        </p>
      </div>
    </>
  );
};

export default BlogsCard;
