import React, { useEffect, useState } from 'react'
import "./Product.css"
import Sidebar from './sidebar/Sidebar'
import ProductDisplay from './productdisplay/ProductDisplay'

const Product = () => {
  const [prodList, setProdList] = useState([])
  const [activeCate, setActiveCate] = useState("all")
  const [activeCompany, setActiveCompany] = useState("all")
  const [maxPrice, setMaxPrice] = useState(0)
  const [price, setPrice] = useState(0)
  const [categoryFilteredList, setCategoryFilteredList] = useState([])
  const [companyFilteredList, setCompanyFilteredList] = useState([])
  const [finalFilteredList, setFinalFilteredList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://www.course-api.com/react-store-products");
        const data = await res.json();
        console.log(data);
        setProdList(data)
        setMaxPrice(Math.max(...data.map(item => item.price)))
        // setCategoryFilteredList(data)
        setFinalFilteredList(data)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    // priceRange();
  }, [])

  useEffect(() => {
    applyFilters()
  }, [activeCate, activeCompany, prodList, price])


  const handleCategory = (category) => {
    setActiveCate(category)
    // const new_List = (prodList.length !== 0) && prodList.filter((item) => {
    //   if (category === "all") {
    //     return prodList
    //   }
    //   return item.category === category
    // })
    // // console.log(new_List)
    // setCategoryFilteredList(new_List)
  }

  const handleCompany = (compVal) => {
    setActiveCompany(compVal)
    // const companyFilterList = (prodList.length !== 0) && prodList.filter((item) => {
    //   if (compVal === "all") {
    //     return prodList
    //   }
    //   return item.company === compVal
    // })
    // // console.log(companyFilterList)
    // setCompanyFilteredList(companyFilterList)
  }

  const applyFilters = () => {
    let newFilteredList = prodList

    if (price !== maxPrice) {
      console.log("price")
      newFilteredList = (prodList.length !== 0) && prodList.filter((item) => {
        return item.price <= price
      })
    }

    if (activeCate !== "all") {
      console.log("Category")
      newFilteredList = (prodList.length !== 0) && prodList.filter((item) => {
        return item.category === activeCate
      })
    } else if (activeCate === "all") {
      setFinalFilteredList(prodList)
    }

    if (activeCompany !== "all") {
      console.log("company")
      newFilteredList = (prodList.length !== 0) && prodList.filter((item) => {
        return item.company === activeCompany
      })
    } else if (activeCompany === "all") {
      setFinalFilteredList(prodList)
    }

    console.log(newFilteredList)
    setFinalFilteredList(newFilteredList)

  }

  // const priceRange = () => {
  //   let priceArr = []
  //   prodList.map((each) => {
  //     return priceArr.push(each.price)
  //   })
  //   // console.log(priceArr)
  //   const maxprice = Math.max(...priceArr)
  //   // console.log("maxprice", maxprice)
  //   setMaxPrice(maxprice)
  // }

  const handleClearFilters = () => {
    setActiveCate("all")
    setActiveCompany("all")
    setPrice(0)
  }

  const handlePriceRange = (value) => {
    // console.log(e.target.value);
    setPrice(value)
    // const priceFilteredList = prodList.filter((item) => {
    //   return item.price <= value
    // })
    // console.log("target price:", value)
    // console.log(priceFilteredList)
  };


  return (
    <div>
      <h1 className='product-head'>Products</h1>
      <div className='products-box'>
        <Sidebar handleCategory={handleCategory} handleCompany={handleCompany} activeCate={activeCate} price={price} handleClearFilters={handleClearFilters} handlePriceRange={handlePriceRange} maxPrice={maxPrice} />
        {/* <ProductDisplay prodCatList={categoryFilteredList} prodCompList={companyFilteredList} /> */}
        <ProductDisplay finalFilteredList={finalFilteredList} />
      </div>
    </div>
  )
}

export default Product