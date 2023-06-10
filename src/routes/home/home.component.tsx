import React from "react";
import Carousal from "../../components/carousal/carousal.component";
import db from "../../db.json";
const Home: React.FC = () => {
  const { sliding_images } = db;
  return (
    <div>
      <Carousal imageList={sliding_images} intervalTime={5000} />
    </div>
  );
};

export default Home;


