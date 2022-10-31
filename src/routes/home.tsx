import { NavLink } from 'react-router-dom';

import CustomButton from '../../components/custom-button';

const Home = () => {
  return (
    <>
      <div className="front-page">
        <img
          src="https://res.cloudinary.com/dvwva99mi/image/upload/v1667232937/Cinema-Arena/cinema.png"
          alt="Cinema objects draw"
          className="home-image"
        />
        <div>
          <p className="home-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora
            earum minima in corporis magni architecto beatae fuga dolorem sit vero veniam
            suscipit eos, error deserunt? Neque eum ab consectetur?
          </p>
          <NavLink to="/finder">
            <CustomButton id="go" text="GO" color="#db0000" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
