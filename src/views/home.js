import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const Home = () => {
  return (
    <div>
      home
      <Link to={ROUTES.interior_design}>interior design</Link>
    </div>
  )
};

export default Home;