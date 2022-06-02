import useFetch from "../hooks/useFetch";

const CountryList = () => {
  const response = useFetch();
  console.log(response);
  useFetch();
  return (
    <div className="content">
    {
        <h1>Contenido</h1>
    }
    </div>
  )
}

export default CountryList;