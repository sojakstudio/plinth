import { useEffect, useState } from "react"
import {
  Bell,
  Brain,
  CalendarClock,
  Check,
  ChevronDown,
  Copy,
  Folder,
  MoreHorizontal,
  Plug,
  Plus,
  Search,
  Send,
  Settings2,
  Trash2,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Catalog from "./Catalog"
import { Row, Spec } from "./spec"

const nav = [
  ["Foundations", ["color", "type", "shape"]],
  ["Controls", ["buttons", "inputs", "selection"]],
  ["Display", ["status", "tabs", "table", "cards"]],
  ["Overlays", ["overlays", "feedback", "prompts"]],
  ["Forms", ["fields", "groups"]],
  ["Navigation", ["navigation", "disclosure"]],
  ["Layout", ["layout", "chart"]],
  ["Chat", ["messages", "tools"]],
] as const

const accents = ["cobalt", "ember", "moss", "violet", "mono"] as const
type Accent = (typeof accents)[number]

const swatches = [
  ["Background", "bg-background"],
  ["Surface", "bg-surface"],
  ["Muted", "bg-muted"],
  ["Border", "bg-border"],
  ["Foreground", "bg-foreground"],
  ["Cobalt", "bg-cobalt"],
  ["Ember", "bg-ember"],
]

function Mockup() {
  const items = [
    ["Refactor the payment webhook handler", "3 weeks", true],
    ["Write tests for the export flow", "1 month", false],
    ["Update the onboarding copy", "1 month", false],
    ["Draft Q3 release notes", "2 days", true],
  ] as const
  return (
    <div className="grid overflow-hidden rounded-md border bg-surface text-xs sm:grid-cols-[13rem_1fr]">
      <aside className="hidden border-r sm:block">
        <div className="flex items-center gap-2 border-b px-3 py-2.5">
          <Avatar className="size-5 rounded-sm">
            <AvatarFallback className="rounded-sm bg-cobalt text-[9px] text-cobalt-foreground">C</AvatarFallback>
          </Avatar>
          <span className="font-medium">Charlie</span>
          <MoreHorizontal className="ml-auto size-3.5 text-muted-foreground" />
        </div>
        <ul className="p-1.5 text-muted-foreground">
          {[
            [Brain, "Memory"],
            [CalendarClock, "Schedules"],
            [Plug, "Connections"],
            [Folder, "Channels"],
          ].map(([Icon, l]) => (
            <li key={l as string} className="flex items-center gap-2 px-2 py-1.5 first:bg-muted first:text-foreground">
              <Icon className="size-3.5" /> {l as string}
            </li>
          ))}
        </ul>
        <div className="border-t p-1.5">
          {items.map(([t, when, done]) => (
            <div key={t} className="px-2 py-1.5">
              <p className="truncate">{t}</p>
              <p className="mt-0.5 text-muted-foreground">
                {when}
                {done ? " · done" : ""}
              </p>
            </div>
          ))}
        </div>
      </aside>
      <div className="flex min-h-72 flex-col">
        <div className="flex items-center gap-2 border-b px-3 py-2.5 text-muted-foreground">
          <Plus className="size-3.5" /> New chat
          <Badge variant="outline" className="ml-auto h-4 gap-1 px-1.5 text-[10px]">
            <span className="size-1.5 rounded-full bg-ember" /> live
          </Badge>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="max-w-[80%] self-end rounded-sm bg-muted px-3 py-2">
            What did we decide about the export retry logic?
          </div>
          <div className="max-w-[85%] rounded-sm border px-3 py-2 leading-relaxed">
            Three retries with backoff, then surface the failure in the activity log. You rejected silent
            drop on 14 Oct. Want me to open the PR?
          </div>
          <div className="mt-auto flex gap-2">
            <Input placeholder="Message Charlie" className="h-8 text-xs" />
            <Button size="sm" variant="accent">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [dark, setDark] = useState(true)
  const [accent, setAccent] = useState<Accent>("cobalt")
  const [progress, setProgress] = useState(62)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    document.documentElement.dataset.accent = accent
  }, [dark, accent])

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-20 flex h-14 items-center gap-6 border-b bg-background px-6">
        <a href="#" className="flex items-center gap-2 font-medium">
          <span className="grid size-5 place-items-center border-2 border-foreground">
            <span className="size-1.5 bg-foreground" />
          </span>
          Plinth
        </a>
        <nav className="hidden gap-5 text-sm text-muted-foreground md:flex">
          {nav.map(([g]) => (
            <a key={g} href={`#${g.toLowerCase()}`} className="hover:text-foreground">
              {g}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button variant="secondary" size="sm">
            GitHub
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl border-x">
        <section className="rails relative border-b px-6 pt-24 pb-16">
          <div className="grid size-12 place-items-center border-2 border-foreground">
            <span className="size-4 bg-foreground" />
          </div>
          <h1 className="mt-10 text-5xl font-medium tracking-tight sm:text-7xl">Plinth UI</h1>
          <p className="mt-6 max-w-[42ch] text-lg leading-snug text-muted-foreground sm:text-xl">
            A square-cornered design system for agent tooling. Built on shadcn, tuned for dense screens, lit
            for the dark.
          </p>
          <div className="mt-10 flex gap-2">
            <Button size="lg">Use the kit</Button>
            <Button size="lg" variant="outline">
              Read the tokens
            </Button>
          </div>
          <div className="mt-16">
            <Mockup />
          </div>
        </section>

        <div className="overflow-hidden border-b py-3 font-pixel text-xl whitespace-nowrap text-foreground/80 uppercase">
          <div className="marquee-track flex w-max gap-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-10">
                Plinth UI <span className="size-3 border-2 border-current" /> Stateful components
                <span className="size-3 border-2 border-current" />
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[11rem_1fr]">
          <aside className="hidden border-r md:block">
            <div className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-6 py-8 text-sm">
              {nav.map(([g, ids]) => (
                <div key={g} id={g.toLowerCase()} className="mb-6 scroll-mt-14">
                  <p className="mb-2 font-medium">{g}</p>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {ids.map((id) => (
                      <li key={id}>
                        <a href={`#${id}`} className="capitalize hover:text-foreground">
                          {id}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          <div>
            <Spec
              id="color"
              title="Color"
              note="Seven roles. Cobalt is the only hue that means action; ember only ever means attention or loss."
            >
              <div className="grid grid-cols-4 gap-px border bg-border sm:grid-cols-7">
                {swatches.map(([n, c]) => (
                  <div key={n} className="bg-background p-2">
                    <div className={`aspect-square ${c}`} />
                    <p className="mt-2 text-xs">{n}</p>
                  </div>
                ))}
              </div>
            </Spec>

            <Spec
              id="type"
              title="Type"
              note="One family, Instrument Sans. Size and weight carry hierarchy; no second face except the pixel marquee."
            >
              <div className="space-y-6">
                <p className="text-5xl font-medium tracking-tight">Agents that remember</p>
                <p className="text-2xl font-medium tracking-tight">Memory is a first-class object</p>
                <p className="max-w-[60ch] text-base leading-relaxed">
                  Body text sits at 16px with a line length under seventy characters. It is set in the same
                  family as the display sizes so the page reads as one voice.
                </p>
                <p className="text-sm text-muted-foreground">Secondary text at 14px, muted.</p>
                <p className="text-xs text-muted-foreground">Captions and table meta at 12px.</p>
              </div>
            </Spec>

            <Spec
              id="shape"
              title="Shape"
              note="Radius is 2px everywhere, so edges read as cut rather than rounded. Depth comes from borders, never shadows."
            >
              <Row label="Radius">
                <div className="size-12 border bg-surface" />
                <span className="text-xs text-muted-foreground">2px, one value</span>
              </Row>
              <Row label="Elevation">
                <div className="size-12 border bg-surface" />
                <div className="size-12 border-2 bg-surface" />
                <span className="text-xs text-muted-foreground">1px rest, 2px raised</span>
              </Row>
              <Row label="Spacing">
                {[4, 8, 12, 16, 24, 32].map((s) => (
                  <div key={s} className="bg-cobalt" style={{ width: s, height: 16 }} />
                ))}
              </Row>
            </Spec>

            <Spec
              id="buttons"
              title="Buttons"
              note="Square, normal weight, generous padding. Default is a pale fill; outline is a hairline. Cobalt is a separate accent variant for the one action that must win."
            >
              <Row label="Variants">
                <Button>Try Plinth</Button>
                <Button variant="outline">Install the CLI</Button>
                <Button variant="accent">Save changes</Button>
                <Button variant="secondary">Duplicate</Button>
                <Button variant="ghost">Dismiss</Button>
                <Button variant="destructive">Delete agent</Button>
                <Button variant="link">Learn more</Button>
              </Row>
              <Row label="Pair">
                <div className="grid w-full grid-cols-2 gap-3">
                  <Button size="xl">Try Plinth</Button>
                  <Button size="xl" variant="outline">
                    Install the CLI
                  </Button>
                </div>
              </Row>
              <Row label="Sizes">
                <Button size="xs">Extra small</Button>
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra large</Button>
              </Row>
              <Row label="With icon">
                <Button>
                  <Plus data-icon="inline-start" /> New agent
                </Button>
                <Button variant="outline">
                  <Copy data-icon="inline-start" /> Copy ID
                </Button>
                <Button variant="outline" size="icon" aria-label="Notifications">
                  <Bell />
                </Button>
              </Row>
              <Row label="Disabled">
                <Button disabled>Save changes</Button>
                <Button variant="outline" disabled>
                  Cancel
                </Button>
              </Row>
            </Spec>

            <Spec
              id="inputs"
              title="Inputs"
              note="Fields sit on the surface tone, one step lighter than the page, with a 4px corner. Focus is a cobalt ring, errors swap the border to ember. The composer is the field that does the most work."
            >
              <div className="grid max-w-xl gap-8">
                <div className="rounded-[6px] border bg-surface">
                  <div className="relative">
                    <Textarea
                      aria-label="Message"
                      rows={2}
                      placeholder="Type a message to start a new conversation"
                      className="min-h-0 resize-none rounded-none border-0 bg-transparent px-4 pt-4 pr-12 pb-4 focus-visible:ring-0"
                    />
                    <Button variant="ghost" size="icon-sm" aria-label="Send" className="absolute top-3 right-3">
                      <Send />
                    </Button>
                  </div>
                  <div className="flex h-8 items-center gap-3 px-3 pb-1 text-xs text-muted-foreground">
                    <Button variant="ghost" size="icon-xs" aria-label="Attach">
                      <Plus />
                    </Button>
                    <span className="h-4 w-px bg-border" />
                    <Folder className="size-3.5" />
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-ember" /> Local
                    </span>
                    <span className="ml-auto">Opus 5</span>
                    <span>High</span>
                    <Settings2 className="size-3.5" />
                  </div>
                </div>
              </div>
              <div className="mt-8 grid max-w-md gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Agent name</Label>
                  <Input id="name" placeholder="Charlie" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="search">Search memory</Label>
                  <div className="relative">
                    <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="search" placeholder="Find a fact" className="pl-8" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="model">Model</Label>
                  <Select defaultValue="opus">
                    <SelectTrigger id="model" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="opus">Claude Opus 5.5</SelectItem>
                      <SelectItem value="sonnet">Claude Sonnet 5.5</SelectItem>
                      <SelectItem value="haiku">Claude Haiku 5.5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="persona">Persona</Label>
                  <Textarea id="persona" rows={3} placeholder="Describe how this agent should behave" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="key">API key</Label>
                  <Input id="key" aria-invalid defaultValue="sk-…" />
                  <p className="text-xs text-destructive">This key was revoked. Paste a new one.</p>
                </div>
              </div>
            </Spec>

            <Spec
              id="selection"
              title="Selection"
              note="Checks, radios and switches share the same 2px corner and cobalt fill."
            >
              <Row label="Checkbox">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox defaultChecked /> Remember across sessions
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox /> Share with team
                </label>
              </Row>
              <Row label="Radio">
                <RadioGroup defaultValue="local" className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <RadioGroupItem value="local" /> Run locally
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <RadioGroupItem value="cloud" /> Run on cloud
                  </label>
                </RadioGroup>
              </Row>
              <Row label="Switch">
                <label className="flex items-center gap-2 text-sm">
                  <Switch defaultChecked /> Notifications
                </label>
              </Row>
              <Row label="Toggle group">
                <ToggleGroup type="single" defaultValue="week" variant="outline">
                  <ToggleGroupItem value="day">Day</ToggleGroupItem>
                  <ToggleGroupItem value="week">Week</ToggleGroupItem>
                  <ToggleGroupItem value="month">Month</ToggleGroupItem>
                </ToggleGroup>
              </Row>
              <Row label="Slider">
                <Slider defaultValue={[40]} className="w-56" />
              </Row>
            </Spec>

            <Spec
              id="status"
              title="Status"
              note="Badges are squared pills. A dot carries the live state; the word says what it is."
            >
              <Row label="Badges">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Revoked</Badge>
              </Row>
              <Row label="Live state">
                <Badge variant="outline" className="gap-1.5">
                  <span className="size-1.5 rounded-full bg-ember" /> Running
                </Badge>
                <Badge variant="outline" className="gap-1.5">
                  <span className="size-1.5 rounded-full bg-cobalt" /> Idle
                </Badge>
                <Badge variant="outline" className="gap-1.5">
                  <span className="size-1.5 rounded-full bg-muted-foreground" /> Paused
                </Badge>
              </Row>
              <Row label="Avatar">
                <Avatar>
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-sm">
                  <AvatarFallback className="rounded-sm bg-cobalt text-cobalt-foreground">PL</AvatarFallback>
                </Avatar>
              </Row>
            </Spec>

            <Spec
              id="tabs"
              title="Tabs"
              note="The line variant is the house style: an underline, no pill background."
            >
              <Tabs defaultValue="memory">
                <TabsList variant="line">
                  <TabsTrigger value="memory">Memory</TabsTrigger>
                  <TabsTrigger value="schedules">Schedules</TabsTrigger>
                  <TabsTrigger value="connections">Connections</TabsTrigger>
                </TabsList>
                <TabsContent value="memory" className="pt-4 text-sm text-muted-foreground">
                  312 facts, last updated 4 minutes ago.
                </TabsContent>
                <TabsContent value="schedules" className="pt-4 text-sm text-muted-foreground">
                  Two recurring jobs. Next run at 09:00.
                </TabsContent>
                <TabsContent value="connections" className="pt-4 text-sm text-muted-foreground">
                  GitHub connected. Slack not connected.
                </TabsContent>
              </Tabs>
            </Spec>

            <Spec
              id="table"
              title="Table"
              note="Rows divide with 1px rules, header in muted text. No zebra striping."
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Agent</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>Memory</TableHead>
                    <TableHead className="text-right">Last active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    ["Charlie", "Running", "312 facts", "4 min ago"],
                    ["Ada", "Idle", "1,204 facts", "2 h ago"],
                    ["Mo", "Paused", "48 facts", "3 d ago"],
                  ].map(([a, s, m, t]) => (
                    <TableRow key={a}>
                      <TableCell className="font-medium">{a}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="gap-1.5">
                          <span
                            className={`size-1.5 rounded-full ${
                              s === "Running" ? "bg-ember" : s === "Idle" ? "bg-cobalt" : "bg-muted-foreground"
                            }`}
                          />
                          {s}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{m}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{t}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Spec>

            <Spec
              id="cards"
              title="Cards"
              note="Cards are rare. Use one when content is a self-contained object you can act on, not for layout."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Connect Slack</CardTitle>
                    <CardDescription>Let Charlie read and reply in channels you pick.</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button size="sm">Connect</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>GitHub</CardTitle>
                    <CardDescription>Connected to sojak/plinth.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-cobalt" /> Synced 2 minutes ago
                  </CardContent>
                </Card>
              </div>
            </Spec>

            <Spec
              id="overlays"
              title="Overlays"
              note="Dialogs for decisions, sheets for editing, popovers for glances. All square, all bordered."
            >
              <Row label="Dialog">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">
                      <Trash2 data-icon="inline-start" /> Delete agent
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Delete Charlie?</DialogTitle>
                      <DialogDescription>
                        Its 312 memories go with it. This can't be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline">Keep</Button>
                      <Button variant="destructive">Delete</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </Row>
              <Row label="Sheet">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Edit persona</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Persona</SheetTitle>
                      <SheetDescription>How Charlie talks and what it prioritises.</SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 px-4">
                      <Textarea rows={6} defaultValue="Direct. Short sentences. Ask before opening PRs." />
                      <Button>Save changes</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </Row>
              <Row label="Popover">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      Usage <ChevronDown data-icon="inline-end" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-64 gap-0 p-0 text-sm">
                    <div className="flex items-baseline justify-between px-3 py-2.5">
                      <span className="font-medium">Usage this month</span>
                      <span className="text-muted-foreground">24%</span>
                    </div>
                    <div className="px-3 pb-3">
                      <Progress value={24} className="h-1.5 rounded-none" />
                    </div>
                    <dl className="border-t">
                      {[
                        ["Tokens", "1.2M of 5M"],
                        ["Agents", "3 of 10"],
                        ["Resets", "in 12 days"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between px-3 py-2 not-last:border-b">
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="border-t p-1.5">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Manage plan
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </Row>
              <Row label="Menu">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="More">
                      <MoreHorizontal />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Row>
              <Row label="Tooltip">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Copy">
                      <Copy />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy agent ID</TooltipContent>
                </Tooltip>
              </Row>
            </Spec>

            <Spec
              id="feedback"
              title="Feedback"
              note="Alerts say what happened and what to do. Progress is a flat bar. Skeletons match the shape they replace."
            >
              <div className="grid gap-5">
                <Alert>
                  <Check />
                  <AlertTitle>Memory synced</AlertTitle>
                  <AlertDescription>312 facts are up to date across local and cloud.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <Bell />
                  <AlertTitle>Slack disconnected</AlertTitle>
                  <AlertDescription>The token expired. Reconnect in Connections to resume replies.</AlertDescription>
                </Alert>
                <div className="flex items-center gap-4">
                  <Progress value={progress} className="flex-1" />
                  <Button variant="outline" size="sm" onClick={() => setProgress((p) => (p >= 100 ? 0 : p + 19))}>
                    Advance
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="size-8" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-40" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              </div>
            </Spec>
            <Catalog />
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-6xl border-x border-t px-6 py-8 text-sm text-muted-foreground">
        Plinth UI. shadcn components, squared off.
      </footer>

      <div className="fixed right-6 bottom-6 z-30 flex items-stretch border bg-surface text-sm">
        <div className="flex items-center gap-2 border-r px-3">
          {accents.map((a) => (
            <button
              key={a}
              onClick={() => setAccent(a)}
              aria-label={`${a} accent`}
              aria-pressed={accent === a}
              data-accent={a}
              className={`size-4 bg-cobalt outline-offset-2 aria-pressed:outline-2 aria-pressed:outline-foreground`}
            />
          ))}
        </div>
        {(["light", "dark"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setDark(m === "dark")}
            className={`px-4 py-2 capitalize ${
              (m === "dark") === dark ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  )
}
