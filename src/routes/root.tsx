import { Outlet } from 'react-router-dom';

import Nav from '../../components/navbar';

const Root = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
