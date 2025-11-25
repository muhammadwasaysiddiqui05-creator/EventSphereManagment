// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
// import BestSelling from '../components/TrendingEvents ';
// import Products from '../components/Products';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import TrendingEvents from '../components/TrendingEvents ';
import NewsAnnouncements from '../components/NewsAnnouncements';
import ClientSection from '../components/Client';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [products,setProducts]= useState([])
  const [categories,setCategories]= useState([])
// api - call to fetch all products


const   getProducts=async ()=>{
  try {
const response= await axios.get("http://localhost:3000/product");
console.log(response.data)
setProducts(response.data.products)
    
  } catch (error) {
    console.log("Something went wrong",error)
  }
}

//Getting unique categories from products
products.map((item)=>{
  let category={
    title:item.category,
  }

  if(!categories.find((cat)=>cat.title===item.category)){
    setCategories([...categories,category])
  }
  console.log(category)
})


useEffect(()=>{
  getProducts();
},[])


  return (
    <div>
      <Banner />
      <Categories categories ={categories}/>
      <Testimonials/>
      <ClientSection/>
      <TrendingEvents />
      <NewsAnnouncements />
      {/* <Products allproducts={products} /> */}
      <Footer/>
    </div>
  );
};

export default Home;
