import { Link } from 'react-router-dom';

import { adminNavLinks } from '../../../router/AdminNavLinks';
import { Button } from '../../shared/button/Button';

export const AdminLinks = () => {
  return (
    <div className="flex flex-col gap-2">
      {adminNavLinks.map((link) => (
        <Button
          key={link.url}
          buttonStyle={{ rounded: 'lg', size: 'lg', color: 'secondary' }}
          asChild
        >
          <Link to={link.url}>{link.title}</Link>
        </Button>
      ))}
    </div>
  );
};
