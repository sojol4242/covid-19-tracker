import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";

import CountryPicker from "./components/CountriePicker/CountryPicker";
import { fetchData } from "./API/api";
import Chart from "./components/Charts/Chart";
import Banner from "./components/Banner";
function App() {
  const [data, setData] = useState();
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      const data = await fetchData();

      setData(data);
    };

    fetchAll();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchAll = async () => {
      const data = await fetchData(country);
      
      setData(data);
      setCountry(country);
    };
    fetchAll();
 
  };

  return (
    <div className={styles.container}>
     <Banner/>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country}/>
      <div className={styles.images}>
        <img src="https://previews.123rf.com/images/nastudio/nastudio2003/nastudio200300074/142813463-virus-green-corona-covid-nineteen-on-a-transparent-background-vector.jpg" alt="background-images"/>
        <img src="https://i.pinimg.com/736x/14/b4/a7/14b4a7ef3aa1006ce0b821d1255e61da.jpg" alt="background-images"/>
        <img src="https://images.vexels.com/media/users/3/199842/isolated/preview/58c3c01f8b3cc4797a8f144124aa7a20-coronavirus-face-mask-icon-by-vexels.png" alt="background-images"/>
        <img src="https://friendlystock.com/wp-content/uploads/2020/04/6-blue-coronavirus-cartoon-clipart.jpg" alt="background-images"/>
        <img src="https://id.univie.ac.at/fileadmin/user_upload/i_zivilrecht/Wendehorst/765px-SARS-CoV-2_without_background.png" alt="background-images"/>
        <img src="https://png.pngtree.com/png-clipart/20200401/original/pngtree-white-medical-mask-isolated-protect-the-face-mask-against-pollution-png-image_5336357.jpg" alt="background-images"/>
      </div>
    </div>
  );
}

export default App;
