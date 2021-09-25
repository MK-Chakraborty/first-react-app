import React, { useEffect, useState } from 'react';
import CountryData from '../CountryData/CountryData';

const DataContainer = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://covid-api.mmediagroup.fr/v1/cases')
            .then(response => response.json())
            .then(data => {
                const dataArray = [];
                for (let e in data) {
                    dataArray.push(data[e])
                }
                dataArray.pop();
                return dataArray;
            })
            .then(dataArray => setCountries(dataArray));
    }, [])
    return (
        <div className='container'>
            <div className="row py-5">
                <h2 className='text-center fs-2 fw-bold text-warning pb-5 text-capitalize'>Covid-19 Records for all countries</h2>
                <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-12 offset-lg-0">
                    <div className="d-flex justify-content-evenly flex-wrap">

                        {
                            countries.map(country => <CountryData key={country.All.long} country={country}  ></CountryData>)
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DataContainer;