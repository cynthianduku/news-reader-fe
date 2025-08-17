import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <NewsList />
    </div>
  );
};

export default Home;
