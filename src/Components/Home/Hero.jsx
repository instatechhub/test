import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaStar,
} from "react-icons/fa";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { City } from "country-state-city";

import "react-datepicker/dist/react-datepicker.css";
import "./Hero.css";
import { FiPhone, FiMap, FiHome, FiMapPin } from "react-icons/fi"
const travelersOptions = [
  { value: "1", label: "1 Adult" },
  { value: "2", label: "2 Adults" },
  { value: "2-1", label: "2 Adults, 1 Child" },
  { value: "2-2", label: "2 Adults, 2 Children" },
];


const tours = [
  { title: "New York Tour", image: "https://blog.thomascook.in/wp-content/uploads/2016/09/thailand_blog-3.jpg" },
  { title: "Turkey Tour", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce0c13e7-2a66-4c7c-a060-76d988028f94/da50dkc-04a01db7-6308-4fb4-a978-ab65bccec026.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NlMGMxM2U3LTJhNjYtNGM3Yy1hMDYwLTc2ZDk4ODAyOGY5NFwvZGE1MGRrYy0wNGEwMWRiNy02MzA4LTRmYjQtYTk3OC1hYjY1YmNjZWMwMjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vdOAHT7e2kUHbocji9MFlE3I2MnlcHd__gIiLYhEUWU" },
  { title: "Turkey Tour", image: "https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg" },
]

const tours1 = [
  { title: "Turkey Tour", image: "https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg" },
  { title: "Turkey Tour", image: "https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg" },
  { title: "Turkey Tour", image: "https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg" },
  { title: "Turkey Tour", image: "https://www.shutterstock.com/image-photo/breathtaking-summer-day-wild-mountains-600w-2499073105.jpg" },
];

const packages = [
  {
    title: 'Pushkar',
    description: 'Aaram Bagh Pushkar is located in the foothills of Aravali, near the Goddess Savitri Temple and 5 km',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1200px-Evening_view%2C_City_Palace%2C_Udaipur.jpg',
  },
  {
    title: 'Goa',
    description: 'The resort offers 65 beautiful rooms and suites. All ground floor rooms provide access to a compact',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1200px-Evening_view%2C_City_Palace%2C_Udaipur.jpg',
  },
  {
    title: 'Udaipur',
    description: 'Located in Udaipur, 200 m from Lake Pichola, Aaram Mahal by Pachar Group provides accommodation with',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1200px-Evening_view%2C_City_Palace%2C_Udaipur.jpg',
  },
  {
    title: 'Bengaluru',
    description: 'Lake facing, Lemon Tree Hotel, City Center Bengaluru, is situated less than 1 km from Commercial Str',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1200px-Evening_view%2C_City_Palace%2C_Udaipur.jpg',
  },
  {
    title: 'Dharamshala',
    description: 'Boasting a garden, bar and views of river, Nishaana – A Luxury Resort in Dharamshala is set in Dharam',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1200px-Evening_view%2C_City_Palace%2C_Udaipur.jpg',
  },
  {
    title: 'Shimla',
    description: 'Marigold Sarovar Portico is located at Mashobra Hills in Shimla. The resort offers a virtual bonanza',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1200px-Evening_view%2C_City_Palace%2C_Udaipur.jpg',
  },
];

const selectStyles = {
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  menu: (base) => ({ ...base, zIndex: 9999 }),
};

const Hero = () => {
  const [destination, setDestination] = useState(null);
  const [travelers, setTravelers] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    const indianCities = City.getCitiesOfCountry("IN");
    if (indianCities && Array.isArray(indianCities)) {
      const options = indianCities.map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCityOptions(options);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="heroContainer">
        <video autoPlay muted loop className="heroVideo">
          <source
            src="https://treehouseluxuryvacations.com/images/tour.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1>Explore Exotic Locations</h1>
          <p>Luxury vacations crafted for unforgettable experiences</p>
        </div>
      </section>

      {/* Search Section */}
      <div className="searchContainer">
        <div className="searchCard">
          <h2 className="searchTitle">
            <FaSearch className="titleIcon" />
            Find Your Perfect Vacation
          </h2>

          <div className="searchForm">
            {/* Destination */}
            <div className="formGroup">
              <div className="inputWithIcon">
                <FaMapMarkerAlt className="inputIcon" />
                <Select
                  className="formInput reactSelect"
                  menuPortalTarget={document.body}
                  styles={selectStyles}
                  options={cityOptions}
                  placeholder="Select"
                  value={destination}
                  onChange={setDestination}
                  isSearchable
                />
              </div>
            </div>

            {/* Depart Date */}
            <div className="formGroup">
              <div className="inputWithIcon">
                <FaCalendarAlt className="inputIcon" />
                <DatePicker
                  selected={departDate}
                  onChange={(date) => setDepartDate(date)}
                  className="formInput"
                  placeholderText="Depart Date"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="formGroup">
              <div className="inputWithIcon">
                <FaCalendarAlt className="inputIcon" />
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  className="formInput"
                  placeholderText="Return Date"
                  dateFormat="dd/MM/yyyy"
                  minDate={departDate || new Date()}
                />
              </div>
            </div>

            {/* Travelers */}
            <div className="formGroup">
              <div className="inputWithIcon">
                <FaUserFriends className="inputIcon" />
                <Select
                  className="formInput reactSelect"
                  menuPortalTarget={document.body}
                  styles={selectStyles}
                  options={travelersOptions}
                  placeholder="Travelers"
                  value={travelers}
                  onChange={setTravelers}
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="searchButton">
              <FaSearch className="searchIcon" />
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="welcomeSection">
        <div className="welcomeContainer">
          <div className="welcomeText">
            <span className="sectionTag">Tour and travels</span>
            <h2 className="sectionTitle">
              Welcome to Tree House Luxury Vacations Pvt. Ltd.
            </h2>
            <p className="sectionText">
              <strong>Tree House Luxury Vacations Pvt. Ltd.</strong> stands as a
              distinguished leader in the global hospitality industry, offering
              an exceptional collection of accommodations celebrated for their
              excellence. Our diverse portfolio features iconic landmarks,
              luxurious resorts, and sophisticated city-center properties.
            </p>
            <p className="sectionText">
              By upholding rigorous company-wide standards, we ensure a
              consistent experience across all our hotels and resorts.
              Centralized procurement guarantees that guests enjoy the same
              premium amenities no matter their destination. These commitments
              and more make every Tree House Luxury Vacations property a truly
              remarkable experience.
            </p>
          </div>
          <div className="welcomeImage">
            <img
              src="https://treehouseluxuryvacations.com/images_new/index.png"
              alt="Luxury vacation"
            />
          </div>
        </div>
      </section>

<section class="vacation-gallery">
  <div class="vacation-card">
    <img src="https://miro.medium.com/v2/resize:fit:4000/1*BFo1H50wagEG88xhCex9ZA.jpeg" alt="Palm Swing" />
  </div>
  <div class="vacation-card">
    <img src="https://miro.medium.com/v2/resize:fit:4000/1*BFo1H50wagEG88xhCex9ZA.jpeg" alt="Cruise Ship" />
  </div>
  <div class="vacation-card">
    <img src="https://miro.medium.com/v2/resize:fit:4000/1*BFo1H50wagEG88xhCex9ZA.jpeg" alt="Beach Hut" />
  </div>
  <div class="vacation-card">
    <img src="https://miro.medium.com/v2/resize:fit:4000/1*BFo1H50wagEG88xhCex9ZA.jpeg" alt="Beach Dinner" />
  </div>
</section>

<section className="company-intro">
      <div className="company-intro__text">
        <h4 className="company-intro__brand">Tree House luxury vacations Pvt. Ltd.</h4>
        <h2 className="company-intro__heading">
          We're truly dedicated to making<br /> your travel experience exceptional.
        </h2>
        <p className="company-intro__desc">
          At Tree House Luxury Vacations, we believe that every journey should be a seamless blend of luxury and comfort from beginning to end. As a leading name in the holiday hospitality industry, we specialize in curating unforgettable luxury vacations across India and around the world. Whether you desire a tranquil retreat amidst nature, a thrilling adventure, or an enriching cultural exploration, we meticulously plan and execute every detail to deliver a flawless and memorable experience.
        </p>

        <div className="company-intro__features">
          <ul>
            <li>› Safety Travel System</li>
            <li>› Expert Trip Planning</li>
            <li>› Right Solution & Guide</li>
          </ul>
          <ul>
            <li>› Budget-Friendly Tour</li>
            <li>› Fast Communication</li>
            <li>› 24/7 Customer Support</li>
          </ul>
        </div>
      </div>
      <div className="company-intro__image">
        <img src="https://treehouseluxuryvacations.com/images_new/logo_icon.png" alt="Tree House Logo" />
      </div>
            <div className="company-intro__divider"></div>
    </section>

    <section className="services-section">
      <div className="service-card">
        <FiPhone className="service-icon" />
        <h3>Advice & Support</h3>
        <p>Travel worry free knowing that we're here if you need us, 24 hours a day</p>
      </div>

      <div className="service-card">
        <FiMap className="service-icon" />
        <h3>Air Ticketing</h3>
        <p>Travel worry free knowing that we're here if you need us, 24 hours a day</p>
      </div>

      <div className="service-card">
        <FiHome className="service-icon" />
        <h3>Hotel Services</h3>
        <p>Travel worry free knowing that we're here if you need us, 24 hours a day</p>
      </div>

      <div className="service-card">
        <FiMapPin className="service-icon" />
        <h3>Tour Packages</h3>
        <p>Travel worry free knowing that we're here if you need us, 24 hours a day</p>
      </div>
    </section>

     <section className="tours-section">
      <div className="floating-dots"></div>
      <div className="title">
        <h2>
          <span className="highlight">Best Holidays Trips</span> In The World
        </h2>
        <p>
          Travel has helped us to understand the meaning of life and it has
          helped us become better people. Each time we travel, we see the world
          with new eyes.
        </p>
        <div className="divider">------</div>
      </div>

      <div className="tours-grid">
        {tours.map((tour, index) => (
         <div className="tour-card" key={index}>
  <img src={tour.image} alt={tour.title} />
  <div className="hover-overlay">
    <button className="book-btn">Book Now ➜</button>
  </div>
  <div className="tour-info">
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} color="#ffc107" size={14} />
      ))}
    </div>
    <p>{tour.title}</p>
  </div>
</div>
        ))}
      </div>

       <div className="tours-grid">
        {tours1.map((tour, index) => (
           <div className="tour-card1" key={index}>
  <img src={tour.image} alt={tour.title} />
  <div className="hover-overlay">
    <button className="book-btn">Book Now ➜</button>
  </div>
  <div className="tour-info">
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} color="#ffc107" size={14} />
      ))}
    </div>
    <p>{tour.title}</p>
  </div>
</div>
        ))}
      </div>
    </section>

     <section className="packages-section">
      <div className="title">
        <h2>
          Perfect <span className="highlight">Tour Packages</span>
        </h2>
        <p>
          Travel has helped us to understand the meaning of life and it has helped us become<br />
          better people. Each time we travel, we see the world with new eyes.
        </p>
        <div className="divider">------</div>
      </div>

      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
  <div className="image-container">
    <img src={pkg.image} alt={pkg.title} />
    <div className="image-gradient"></div> {/* gradient overlay */}
  </div>
  <div className="package-content">
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} color="#ffc107" size={14} />
      ))}
    </div>
    <h4>{pkg.title}</h4>
    <p>{pkg.description}</p>
  </div>
</div>

        ))}
      </div>
    </section>
    </>
  );
};

export default Hero;
