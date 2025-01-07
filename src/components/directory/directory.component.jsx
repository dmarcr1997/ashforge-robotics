import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = () => {
      const categories = [
    {
      id: 1,
      title: "3d Printing",
      imageLocation: "/images/3dprinting.jpg",
    },
    {
      id: 2,
      title: "Design Services",
      imageLocation: "/images/design.jpg",
    },
    { id: 3, title: "Robotics", imageLocation: "/images/robotics.jpg" },
    {
      id: 4,
      title: "Embedded Systems",
      imageLocation: "/images/emsys.jpg",
    },
    {
      id: 5,
      title: "Software Engineering",
      imageLocation: "/images/software.jpg",
    },
  ];
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
