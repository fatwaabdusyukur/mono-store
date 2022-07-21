import SearchInput from "./../../components/SearchInput";
import banner from "./../../assets/img/jumbotron-banner.jpg";
import CategotyDropdown from "../../components/CategoryDropdown";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="side-content">
        <CategotyDropdown />
      </div>
      <div className="main-content">
        <SearchInput />
        <img
          src={banner}
          className="bg-cover h-[200px] md:h-[300px] lg:h-[400px] w-full rounded-md my-4"
          alt="Banner"
        />
        <div className="flex flex-col items-center md:grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
