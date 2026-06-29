// Full detail view for one item, shown after a card is clicked.
// Fields rendered: item.title, item.blurb, item.tags, item.body.
// When you rename/add columns, update the item.* references and add new <p> rows.
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';

export default function Detail({ item, onBack }) {
  if (!item) return null;
  const tags = (item.tags || '').split(',').map(t => t.trim()).filter(Boolean);
  return (
    <div className="animate-fade-in">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-4 -ml-2 text-muted-foreground">
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        Back to results
      </Button>
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl">{item.title}</CardTitle>
          <p className="text-muted-foreground">{item.blurb}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map(t => <Badge key={t} variant="muted">{t}</Badge>)}
            </div>
          )}
        </CardHeader>
        <Separator />
        <CardContent className="pt-5">
          <p className="text-sm leading-relaxed whitespace-pre-wrap text-foreground/80">{item.body}</p>
          {/* Add extra fields here — e.g.:
              {item.prep_time && <p className="mt-3 text-sm"><strong>Prep:</strong> {item.prep_time}</p>} */}
        </CardContent>
      </Card>
    </div>
  );
}
