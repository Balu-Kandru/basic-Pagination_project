import { useEffect, useState } from 'react';
import Pagination from './pages';
import "./style.css";
import Popup from './popup';

const Products = (props) => {
    const [product, setProducts] = useState([]);
    const length = props.category.length;
    const [currentpage, setCurrentpage] = useState(1);
    const posts = 4; // Removed unused `setposts`

    useEffect(() => {
        if (length === 0) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setProducts(json));
        } else {
            fetch(`https://fakestoreapi.com/products/category/${props.category}`)
                .then(res => res.json())
                .then(json => setProducts(json));
        }
    }, [length, props.category]); // Added `props.category` to dependencies

    const indexoflastpost = currentpage * posts;
    const indexoffirstpost = indexoflastpost - posts;
    const currentpost = product.slice(indexoffirstpost, indexoflastpost);

    const pagenate = (num) => {
        setCurrentpage(num);
    };

    return (
        <>
            <div className='main-page'>
                {
                    currentpost.map((data) => {
                        return (
                            <div className="my-div" key={data.id}> {/* Added `key` for list rendering */}
                                <img src={data.image} alt='' />
                                <Popup product={data} />
                            </div>
                        );
                    })
                }
                <Pagination posts={posts} totalposts={product.length} pagenate={pagenate} />
            </div>
        </>
    );
};

export default Products;