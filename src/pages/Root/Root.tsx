import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { CounterProvider } from '../../store';

export const Root = (): JSX.Element => {
  return (
    <>
      <CounterProvider>
        <>
          <Header />
          <Outlet />
        </>
      </CounterProvider>
    </>
  );
};
