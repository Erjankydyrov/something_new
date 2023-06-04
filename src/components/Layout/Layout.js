import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";

function Layout({ children }) {
  return (
    <div className={classes.Layout}>
      <Toolbar />
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
