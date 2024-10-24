import { H4 } from '../../shared/typography/Typography';
import { IssueItem } from './IssueItem';

interface Props {
  items: string[];
  title: string;
  type: 'risk' | 'issue';
}

export const IssuesList = ({ items, title, type }: Props) => {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-col">
      <H4 className="mb-2 text-secondary-800">{title}</H4>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <IssueItem key={item} text={item} type={type} />
        ))}
      </div>
    </div>
  );
};
