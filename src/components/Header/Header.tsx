import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <div className="Header">
      <header className={classes.header}>
        <div className={classes.container}>
          <a href="/" className={classes.link}>
            ToDo
          </a>
        </div>
      </header>
    </div>
  );
};
