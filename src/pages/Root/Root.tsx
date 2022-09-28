import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
