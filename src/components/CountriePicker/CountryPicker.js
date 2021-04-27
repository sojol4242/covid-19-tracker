import { FormControl, NativeSelect } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./CountyrPicker.module.css";
import {fetchCountries} from '../../API/api'
const CountryPicker = ({handleCountryChange}) => {
  const [countries, setCountries] = useState([]);
  
  
 useEffect ( () => {
  
    const fetchCountriesData=async () =>{
      const data= await fetchCountries()
      
      setCountries(data)
       
    }
  
    fetchCountriesData();
    },[setCountries]);
 

  return (
    <FormControl className={styles.formControl}>
      <h4 className={styles.text}>Select desire Country</h4>
      <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">All countries</option>
       {countries.map((country,i) =><option value={country} key={i}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
