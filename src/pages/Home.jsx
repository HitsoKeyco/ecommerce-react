import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import '../components/Home/styles/Home.css'
import { useState } from "react";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import '../pages/styles/HomePage.css'
import Footer from "../components/shared/Footer";

const Home = () => {

    //el useSelector va al index de  la store a traer las variables
    const products = useSelector(states => states.products)

    const [inputValue, SetInputValue] = useState("")
    const [priceMinMax, setPriceMinMax] = useState({ min: 0, max: Infinity})

    const handleSearchName = (e) => {
        SetInputValue(e.target.value.toLowerCase());
    };

    const cbFilter = prod => prod.title.toLowerCase().includes(inputValue)

    const cbFilterPrice = prod => {
            const condMin = priceMinMax.min <= prod.price
            const condMax = prod.price <= priceMinMax.max
        return condMin && condMax
    }

    return (
        <>
            <div className="body_container_products">
                <div className="home_input_container_search">
                        <input
                        id="search_product"
                        name="search_product" 
                        className="input_home_search"
                        value={inputValue}
                        placeholder="Search product" 
                        type="text" 
                        onChange={handleSearchName} />
                </div>
                <aside>
                <FilterPrice priceMinMax={priceMinMax} setPriceMinMax={setPriceMinMax}/>
                <FilterCategory products={products}/>
                </aside>
                <div className="container_products">
                
                    {
                        products?.filter(cbFilter).filter(cbFilterPrice).map((prod) => (
                            <CardProduct
                                key={prod.id}
                                prod={prod}
                            />
                        ))
                    }
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </>
    )
}

export default Home