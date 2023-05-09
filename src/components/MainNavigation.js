import { Form } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Form action='/ChatGPT-gh-pages/logout' method='post'>
              <button>Logout</button>
            </Form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
