import { ProductModel } from "@/interfaces/product.interface";
import { Product } from "./Product/Product";
import style from "./CoursesSection.module.css";

interface CoursesProps {
    products: ProductModel[];
}

export const CoursesSection = ({ products }: CoursesProps) => {
    return (
        <section className={style.coursesSection}>
            {products.map(({ ...props }) => (
                <Product layout key={props._id} {...props} />
            ))}
        </section>
    );
};
