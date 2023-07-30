import { Link } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";
import "./category.css";


const Category = () => {
    const categoriesData = useCategory();
    console.log(categoriesData)

    return (
    <div className="categories">
        <h1>categories</h1>
        <ul className="categories_list">
            {categoriesData?.map(({_id, thumbnail, category}) => (
                <Link key={_id} to={`/categories/${category}`}>
                    <img className="categories_img" src={thumbnail} alt="" />
                    <h3>{category}</h3>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Category;
