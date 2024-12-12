import ProductCard from "./ProductCard";
import {motion} from "framer-motion";
const ProductList = ({products}) => {
     const containerVariants = {
          hidden: {opacity: 0, scale: 0.9},
          visible: {
               opacity: 1,
               scale: 1,
               transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.25,
                    ease: "easeInOut",
                    duration: 1,
               },
          },
     };

     const itemVariants = {
          hidden: {opacity: 0, y: 30},
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    ease: "easeInOut",
                    duration: 0.8,
               },
          },
     };

     return (
          <motion.div
               className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-20 mx-auto"
               variants={containerVariants}
               initial="hidden"
               animate="visible">
               {products.map((product) => (
                    <motion.div key={product._id} variants={itemVariants}>
                         <ProductCard key={product._id} product={product} />
                    </motion.div>
               ))}
          </motion.div>
     );
};

export default ProductList;
 