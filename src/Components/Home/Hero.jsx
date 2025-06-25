import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { City } from "country-state-city";

import "react-datepicker/dist/react-datepicker.css";
import "./Hero.css";

const travelersOptions = [
  { value: "1", label: "1 Adult" },
  { value: "2", label: "2 Adults" },
  { value: "2-1", label: "2 Adults, 1 Child" },
  { value: "2-2", label: "2 Adults, 2 Children" },
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
                  placeholder="Select Destination"
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
                  placeholder="Travelers (Adults/Children)"
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
    </>
  );
};

export default Hero;
