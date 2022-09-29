import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CounterContext } from '../../store';

const parsePath = (path: string): string => {
  return path === '/' ? '' : path;
};

export const Header = (): JSX.Element => {
  const location = useLocation();
  const { count } = useContext(CounterContext);
  const content = ['Phone App!', `product count: ${count}`];

  return (
    <header className="m-2 dark:bg-cyan-700 bg-orange-100 rounded flex justify-around">
      <span>
        {location.pathname === '/' ? (
          'Home'
        ) : (
          <NavLink
            to="/"
            className={({ isActive }): string | undefined =>
              isActive ? 'underline' : undefined
            }
            end
          >
            Home
          </NavLink>
        )}
        {parsePath(location.pathname)}
      </span>
      {content.map(text => (
        <span
          key={text.toLowerCase().replaceAll(' ', '-')}
          className="inline-flex items-center"
        >
          {text}
        </span>
      ))}
    </header>
  );
};
