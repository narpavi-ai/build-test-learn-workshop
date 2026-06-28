// A single result card. Click it to open the detail view.
// Fields rendered: item.title (headline), item.blurb (one-liner), item.tags (pills).
// When you rename columns, update the three item.* references below.
import { Card as UICard, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Card({ item, onOpen }) {
  const tags = (item.tags || '').split(',').map(t => t.trim()).filter(Boolean);
  return (
    <button className="text-left w-full group" onClick={() => onOpen(item.id)}>
      <UICard className="h-full transition-all duration-150 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-primary/30 cursor-pointer">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">{item.title}</CardTitle>
          <CardDescription className="line-clamp-2">{item.blurb}</CardDescription>
        </CardHeader>
        {tags.length > 0 && (
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1.5">
              {tags.map(t => <Badge key={t} variant="muted">{t}</Badge>)}
            </div>
          </CardContent>
        )}
      </UICard>
    </button>
  );
}
