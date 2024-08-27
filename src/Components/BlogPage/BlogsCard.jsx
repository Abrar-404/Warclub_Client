const BlogsCard = ({ blog }) => {
  const { title, description, description2, image } = blog || {};

  return (
    <>
      <div className="text-red-700">{title} BLOGS HERE</div>;
    </>
  );
};

export default BlogsCard;
