import React from 'react';
import { recovery } from '../recoveryData';

const CountryData = (props) => {
    let { confirmed, deaths, recovered, country, population, sq_km_area, life_expectancy, continent, location, capital_city, updated } = props.country.All;
    if (country === undefined) {
        country = 'Unavailable';
    }
    if (updated === undefined) {
        updated = '1 hour ago ...'
    }

    recovered = recovery(confirmed);

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
            <div className="card text-dark bg-warning my-4 w-100">
                <div className="card-header">{country}s' Covid-19 Data</div>
                <div className="card-body">
                    <h3 className="card-title fs-3 fw-bold text-center py-3 mb-3"><span className='border-0 border-bottom border-success border-3'>{country}</span>
                    </h3>
                    <h5 className="card-text fs-5 text-center">Confirmed Cases <i className="fas fa-head-side-cough"></i> - {confirmed}</h5>
                    <h5 className="card-text fs-5 text-center">Recovered <i className="fas fa-head-side-mask"></i> - {recovered}</h5>
                    <h5 className="card-text fs-5 text-center">Total Deaths <i className="fas fa-head-side-cough-slash"></i> - {deaths}</h5>
                    <h5 className="card-text fs-5 text-center">Continent <i className="fas fa-globe-asia"></i> - {continent}</h5>
                    <h5 className="card-text fs-5 text-center">Region <i className="far fa-flag"></i> - {location}</h5>
                    <h5 className="card-text fs-5 text-center">Capital <i className="fas fa-city"></i> - {capital_city}</h5>
                    <h5 className="card-text fs-5 text-center">Population <i className="fas fa-users"></i> - {population}</h5>
                    <h5 className="card-text fs-5 text-center">Area <i className="fas fa-route"></i> - {sq_km_area}</h5>
                    <h5 className="card-text fs-5 text-center">Avg Life Expentancy <i className="fas fa-heartbeat"></i> - {life_expectancy}</h5>
                </div>
                <div className="card-footer"><p className='card-text'>Last Updated: {updated}</p></div>
            </div>
        </div>
    );
};

export default CountryData;