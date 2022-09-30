import { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { CounterContext } from '../../store';

export const Root = (): JSX.Element => {
  const { count } = useContext(CounterContext);
  const { pathname } = useLocation();

  return (
    <>
      <Header location={pathname} count={count} />
      <Outlet />
    </>
  );
};
