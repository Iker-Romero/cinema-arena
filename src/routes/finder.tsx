import { NavLink } from 'react-router-dom';

import Button from '../../components/button';
import Input from '../../components/input';
import Label from '../../components/label';

const Finder = () => {
  return (
    <>
      <h1>Films & Series Finder</h1>
      <Label targetID="finder" text="Search by title: " />
      <Input type="text" id="finder" />
      <NavLink to="/show-form">
        <Button id="addShow" text="ADD NEW SHOW" color="#db0000" />
      </NavLink>
    </>
  );
};

export default Finder;
