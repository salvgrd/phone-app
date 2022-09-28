import { useLocation } from 'react-router-dom';

const parsePathContent = (path: string): string => {
  return path === '/' ? 'Home' : path;
};

export const Header = (): JSX.Element => {
  const location = useLocation();
  const content = [
    parsePathContent(location.pathname),
    'Phone App!',
    'product count',
  ];

  return (
    <header className="m-2 dark:bg-cyan-700 bg-orange-100 rounded flex justify-around">
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
