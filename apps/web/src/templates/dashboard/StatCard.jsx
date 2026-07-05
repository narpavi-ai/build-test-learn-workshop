// A single metric card for the Dashboard shape.
// In /3-build: keep the component as-is; update the label/value props in App.jsx.
// Add a `sub` prop for a secondary line (e.g. "vs last month").
import { Card, CardContent } from '@/components/ui/card';

export default function StatCard({ label, value, sub }) {
  return (
    <Card>
      <CardContent className="pt-5 pb-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {label}
        </p>
        <p className="text-3xl font-bold mt-1 tabular-nums">{value}</p>
        {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
      </CardContent>
    </Card>
  );
}
