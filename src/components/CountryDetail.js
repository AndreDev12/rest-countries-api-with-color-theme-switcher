import { useNavigate } from "react-router-dom";

const CountryDetail = () => {
  const navigate = useNavigate();
//   console.log(navigate);
  return (
    <main className="main-country-detail">
        <div className="container">
            <button onClick={() => {navigate("/countries")}}>Back</button>
        </div>
    </main>
  )
}

export default CountryDetail;