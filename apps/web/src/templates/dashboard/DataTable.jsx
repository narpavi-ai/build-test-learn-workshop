// A simple data table for the Dashboard shape.
// In /3-build: rename the column headers (<th>) and field references (item.*)
// to match the data model. Add or remove <td> columns as needed.
import { Badge } from '@/components/ui/badge';

export default function DataTable({ items }) {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border py-12 text-center text-sm text-muted-foreground">
        No records match your filter.
      </div>
    );
  }

  return (
    <div className="rounded-xl border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              {/* In /3-build: rename these headers to match your columns */}
              <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Name</th>
              <th className="text-left px-4 py-3 font-semibold text-muted-foreground hidden sm:table-cell">
                Description
              </th>
              <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Tags</th>
              <th className="text-left px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap hidden md:table-cell">
                Added
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              const tags = (item.tags || '').split(',').map(t => t.trim()).filter(Boolean);
              return (
                <tr
                  key={item.id}
                  className={`border-b border-border last:border-0 hover:bg-muted/30 transition-colors ${
                    i % 2 === 1 ? 'bg-muted/10' : ''
                  }`}
                >
                  {/* In /3-build: rename item.title → item.<your-field> */}
                  <td className="px-4 py-3 font-medium">{item.title}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate hidden sm:table-cell">
                    {item.blurb}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1 flex-wrap">
                      {tags.map(t => (
                        <Badge key={t} variant="muted" className="text-xs">{t}</Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap hidden md:table-cell">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
