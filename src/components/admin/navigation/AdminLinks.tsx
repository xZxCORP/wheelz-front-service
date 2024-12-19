import { adminNavLinks } from '../../../router/AdminNavLinks';
import { LinkButton } from '../../shared/LinkButton';

export const AdminLinks = () => {
  return (
    <div className="flex flex-col gap-2">
      {adminNavLinks.map((link) => (
        <LinkButton key={link.url} link={link} />
      ))}
    </div>
  );
};
