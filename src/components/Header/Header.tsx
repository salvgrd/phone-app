import { NavLink } from 'react-router-dom';

type HeaderProps = {
  count: number;
  location: string;
};

const parsePath = (path: string): string => {
  return path === '/' ? '' : path;
};

export const Header = ({ count, location }: HeaderProps): JSX.Element => {
  const content = ['Phone App!', `Product count: ${count}`];

  return (
    <header className="m-2 dark:bg-cyan-700 bg-orange-100 rounded flex justify-around">
      <span>
        {location === '/' ? (
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
        {parsePath(location)}
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
