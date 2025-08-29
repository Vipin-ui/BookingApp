import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers =()=> {
  return (
    <div className="flex flex-col itmes-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 ">
      <div className="flex flex-col md:flex-row itmes-center justify-between w-full">
        <Title
          align="left"
          title="Exclusive offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View All offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((item) => (
          <div
            // Key={item.id}
            key={item.id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p class="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff}% OFF
            </p>
            <div>
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p>{item.description}</p>
              <p className="text-xs text-white/70 mt-3">
                Expires {item.expiryDate}
              </p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer max:md:mt-12">
              View All Offers
              <img
                className="invert group-hover:translate-x-1 transition-all"
                src={assets.arrowIcon}
                alt="arrow-icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExclusiveOffers



















































  {
    /* <div class="">
   <div class="" ;">
     
      <div>
         <p class="text-2xl font-medium font-playfair">Summer Escape Package</p>
         <p>Enjoy a complimentary night and daily breakfast</p>
         <p class="text-xs text-white/70 mt-3">Expires Aug 31</p>
      </div>
      <button class="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">View Offers<img class="invert group-hover:translate-x-1 transition-all" alt="arrow-icon" src="data:image/svg+xml,%3csvg%20width='15'%20height='11'%20viewBox='0%200%2015%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.999912%205.5L14.0908%205.5'%20stroke='%23000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.94796%201L14.0908%205.5L8.94796%2010'%20stroke='%23000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"></button>
   </div>
   <div class="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center" style="background-image: url(&quot;/assets/exclusiveOfferCardImg2-DnI11DXl.png&quot;);">
      <p class="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">20% OFF</p>
      <div>
         <p class="text-2xl font-medium font-playfair">Romantic Getaway</p>
         <p>Special couples package including spa treatment</p>
         <p class="text-xs text-white/70 mt-3">Expires Sep 20</p>
      </div>
      <button class="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">View Offers<img class="invert group-hover:translate-x-1 transition-all" alt="arrow-icon" src="data:image/svg+xml,%3csvg%20width='15'%20height='11'%20viewBox='0%200%2015%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.999912%205.5L14.0908%205.5'%20stroke='%23000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.94796%201L14.0908%205.5L8.94796%2010'%20stroke='%23000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"></button>
   </div>
   <div class="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center" style="background-image: url(&quot;/assets/exclusiveOfferCardImg3-DCwyl1k9.png&quot;);">
      <p class="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">30% OFF</p>
      <div>
         <p class="text-2xl font-medium font-playfair">Luxury Retreat</p>
         <p>Book 60 days in advance and save on your stay at any of our luxury properties worldwide.</p>
         <p class="text-xs text-white/70 mt-3">Expires Sep 25</p>
      </div>
      <button class="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">View Offers<img class="invert group-hover:translate-x-1 transition-all" alt="arrow-icon" src="data:image/svg+xml,%3csvg%20width='15'%20height='11'%20viewBox='0%200%2015%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.999912%205.5L14.0908%205.5'%20stroke='%23000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.94796%201L14.0908%205.5L8.94796%2010'%20stroke='%23000'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"></button>
   </div> */
  }