import DisplayShow from '../../components/display-show';
import Input from '../../components/input';
import Label from '../../components/label';

const Finder = () => {
  return (
    <>
      <h1>Films & Series Finder</h1>
      <Label targetID="finder" text="Search by title: " />
      <Input type="text" id="finder" />
    </>
  );
};

export default Finder;
