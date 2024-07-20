// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addCart } from '../redux/action'; 
// import { Button } from 'flowbite-react';
// import { ClipLoader } from 'react-spinners';

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const componentMounted = useRef(true);

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         if (componentMounted.current) {
//           const products = await response.json();
//           setData(products);
//           setFilter(products);
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setLoading(false);
//       }
//     };

//     getProducts();

//     return () => {
//       componentMounted.current = false;
//     };
//   }, []);

//   const Loading = () => (
//     <div className="flex justify-center items-center h-full">
//         <ClipLoader color="#000" size={50} />
//       </div>
//   );

//   const filterProduct = (cat) => {
//     const updatedList = data.filter((x) => x.category === cat);
//     setFilter(updatedList);
//   };

//   const ShowProducts = () => (
//     <>
//       <div className="text-center">
//         <button
//           type="button"
//           className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
//           onClick={() => setFilter(data)}
//         >
//           All
//         </button>
//         <button
//           type="button"
//           className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
//           onClick={() => filterProduct("men's clothing")}
//         >
//           Men Clothing
//         </button>
//         <button
//           type="button"
//           className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
//           onClick={() => filterProduct("women's clothing")}
//         >
//           Women Clothing
//         </button>
//         <button
//           type="button"
//           className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
//           onClick={() => filterProduct("jewelery")}
//         >
//           Jewelery
//         </button>
//         <button
//           type="button"
//           className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
//           onClick={() => filterProduct("electronics")}
//         >
//           Electronics
//         </button>
//       </div>
//       <div className="flex flex-wrap justify-center gap-4 mt-20 text-center">
//         {filter.map((products) => (
//           <div key={products.id} className="w-full sm:w-1/2 md:w-1/4">
//             <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//               <NavLink to="#">
//                 <img
//                   className="p-8 rounded-t-lg h-[250px] w-full object-contain"
//                   src={products.image}
//                   alt={products.title.substring(0, 12)}
//                 />
//               </NavLink>
//               <div className="px-5 pb-5">
//                 <NavLink to="#">
//                   <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//                     {products.title.substring(0, 12)}
//                   </h5>
//                 </NavLink>
//                 <div className="flex items-center mt-2.5 mb-5">
//                   <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                   </div>
//                   <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//                   {products.rating.rate} ({products.rating.count})
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                     ${products.price}
//                   </span>
//                   <NavLink
//                     to={`/products/${products.id}`}
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Add to cart
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );

//   return (
//     <div>
//       <h1 className="text-5xl font-extrabold dark:text-white text-center mt-20 mb-20">
//         Latest Products
//       </h1>
//       {loading ? <Loading /> : <ShowProducts />}
//     </div>
//   );
// };

// export default Products;
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action'; 
import { ClipLoader } from 'react-spinners';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (componentMounted.current) {
          const products = await response.json();
          setData(products);
          setFilter(products);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => (
    <div className="flex justify-center items-center h-full">
      <ClipLoader color="#000" size={50} />
    </div>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="text-center mb-8">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => filterProduct("men's clothing")}
        >
          Men Clothing
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => filterProduct("women's clothing")}
        >
          Women Clothing
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {filter.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
              <NavLink to={`/products/${product.id}`}>
                <img
                  className="p-4 h-[250px] w-full object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </NavLink>
              <div className="p-4">
                <NavLink to={`/products/${product.id}`}>
                  <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </NavLink>
                <div className="flex items-center mt-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div>
      <h1 className="text-4xl font-extrabold dark:text-white text-center mt-16 mb-8">
        Latest Products
      </h1>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
