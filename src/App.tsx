import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            React + TypeScript + Vite + Tailwind CSS v4
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Tailwind utility playground
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A small demo page showing responsive layout, typography, color, spacing,
            borders, shadows, and interactive states using utility classes only.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]" aria-label="Tailwind utility examples">
          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/30">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-inset ring-cyan-400/30">
                  Featured card
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-white">Compose with utilities</h2>
              </div>
              <div className="rounded-2xl bg-cyan-400 p-3 text-slate-950 shadow-lg shadow-cyan-400/20" aria-hidden="true">
                ◆
              </div>
            </div>

            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              The layout adapts at the medium breakpoint, while the card combines background,
              border, radius, padding, shadow, and text utilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300">
                Primary action
              </Button>
              <Button variant="outline" size="lg" className="border-slate-700 bg-transparent font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white">
                Secondary action
              </Button>
            </div>
          </article>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-xl font-semibold text-white">Utility checklist</h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              {['Responsive grid', 'Color and typography', 'Spacing and sizing', 'Hover and focus states'].map((item) => (
                <li className="flex items-center gap-3" key={item}>
                  <span className="flex size-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <Card className="mt-6 border-slate-800 bg-slate-900 text-slate-100">
          <CardHeader>
            <CardTitle className="text-xl text-white">shadcn/ui component set</CardTitle>
            <CardDescription className="text-slate-400">
              Button, Card, and Input are copied into this repository so they can be customized locally.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <label className="flex-1 text-sm font-medium text-slate-300">
                Email address
                <Input
                  className="mt-2 border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
                  type="email"
                  placeholder="you@example.com"
                />
              </label>
              <Button type="button" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Built with Tailwind utilities and shadcn/ui Button.</span>
          <code className="text-cyan-400">@import "tailwindcss";</code>
        </footer>
      </div>
    </main>
  )
}

export default App
