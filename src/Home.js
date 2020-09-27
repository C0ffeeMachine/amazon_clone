import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""/>

            <div className="home__row">
                <Product
                    id="1"
                    title="The Indian Polity"
                    price={10}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQT4t76AjQISjklgnJYwbqdyH1OFs07qVxEMVOw8PSqHcR_H2N_p26uXsU93W48DyRnOTZ0bgEMAmic4HDGJW78tGOBcw9UINfXdlz7zfF1ci3dqbtTwQ_u&usqp=CAc"
                />
                <Product
                    id="2"
                    title="Skullcandy Jib Wired in-Earphone with Mic (Purple/Black)"
                    price={20}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71rvKVQF7jL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={180}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Tablets/Apple_Project_Eye/AMZ_FamilyStripe_iPad_Pro_12.9_inch._CB420185341_.png"
                />
                <Product
                    id="4"
                    title="HP OMEN X-ap046TX 17-inch FHD Gaming Laptop (Intel Core i7-7820HK/32GB/1TB HDD + 1TB SSD/GTX 1080 8 GB GDDR5X Graphics/G-SYNC/VR Ready/Windows 10), Shadow Black"
                    price={400}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61q1tWRapeL._SL1500_.jpg"
                />
                <Product
                    id="5"
                    title="Eagletail India Anime Series Saying OK Printed Ceramic Coffee Mug"
                    price={6}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71McIXcf-aL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)"
                    price={150}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
