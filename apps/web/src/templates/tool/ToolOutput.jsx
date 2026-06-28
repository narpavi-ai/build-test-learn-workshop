// The output side of the Tool shape.
// In /5-build: update item.* field names to match the data model.
// The top result is shown prominently; the rest appear as a compact list.
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function ToolOutput({ results }) {
  if (!results || results.length === 0) return null;

  const [featured, ...rest] = results;
  const featuredTags = (featured.tags || '').split(',').map(t => t.trim()).filter(Boolean);

  return (
    <div className="mt-6 space-y-4 animate-fade-in">

      {/* ── Featured result ── */}
      <Card className="border-primary/25 shadow-sm shadow-primary/10">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <CardTitle className="text-lg leading-snug">{featured.title}</CardTitle>
            {featuredTags.length > 0 && (
              <div className="flex gap-1 flex-wrap">
                {featuredTags.map(t => <Badge key={t} variant="muted">{t}</Badge>)}
              </div>
            )}
          </div>
          {featured.blurb && (
            <p className="text-muted-foreground text-sm">{featured.blurb}</p>
          )}
        </CardHeader>
        {featured.body && (
          <>
            <Separator />
            <CardContent className="pt-4">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{featured.body}</p>
              {/* Add extra fields here — e.g.:
                  {featured.prep_time && <p className="mt-3 text-sm"><strong>Time:</strong> {featured.prep_time}</p>} */}
            </CardContent>
          </>
        )}
      </Card>

      {/* ── Secondary results ── */}
      {rest.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Also relevant
          </p>
          <div className="space-y-2">
            {rest.map(item => {
              const tags = (item.tags || '').split(',').map(t => t.trim()).filter(Boolean);
              return (
                <Card key={item.id} className="py-0">
                  <CardContent className="py-3 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{item.title}</p>
                      {item.blurb && (
                        <p className="text-xs text-muted-foreground line-clamp-1">{item.blurb}</p>
                      )}
                    </div>
                    {tags[0] && <Badge variant="muted" className="shrink-0">{tags[0]}</Badge>}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
