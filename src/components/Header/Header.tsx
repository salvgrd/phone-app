export const Header = (): JSX.Element => {
  const content = ['breadcrumbs', 'Phone App!', 'product count'];

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
