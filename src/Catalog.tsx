import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Bold,
  Brain,
  CalendarClock,
  Check,
  Copy,
  Download,
  FileText,
  Folder,
  GitBranch,
  Inbox,
  Italic,
  Plug,
  Search,
  Terminal,
  Trash2,
  Underline,
  Wrench,
  X,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { DirectionProvider } from "@/components/ui/direction"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnaireProgress,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Toaster, toast } from "@/components/ui/toast"
import { Spinner } from "@/components/ui/spinner"
import { Toggle } from "@/components/ui/toggle"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"

import { Row, Spec } from "./spec"

const chartConfig = {
  tokens: { label: "Tokens", color: "var(--cobalt)" },
  calls: { label: "Tool calls", color: "var(--chart-2)" },
} satisfies ChartConfig

const chartData = [
  { day: "Mon", tokens: 120, calls: 40 },
  { day: "Tue", tokens: 210, calls: 55 },
  { day: "Wed", tokens: 180, calls: 32 },
  { day: "Thu", tokens: 260, calls: 70 },
  { day: "Fri", tokens: 150, calls: 48 },
]

const models = ["Claude Opus 5.5", "Claude Sonnet 5.5", "Claude Haiku 5.5", "Claude Fable 5.1"]

export default function Catalog() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 2))
  const [open, setOpen] = useState(false)

  return (
    <>
      <Toaster />

      <Spec id="fields" title="Fields" note="Field groups label, describe and validate. Input groups put affordances inside the box.">
        <Row label="Field set">
          <FieldSet className="w-full max-w-md">
            <FieldLegend>Deployment</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="f-region">Region</FieldLabel>
                <NativeSelect id="f-region" defaultValue="us-east">
                  <NativeSelectOption value="us-east">US East</NativeSelectOption>
                  <NativeSelectOption value="eu-west">EU West</NativeSelectOption>
                  <NativeSelectOption value="ap-south">AP South</NativeSelectOption>
                </NativeSelect>
                <FieldDescription>Where the agent's memory is stored.</FieldDescription>
              </Field>
              <Field data-invalid>
                <FieldLabel htmlFor="f-slug">Slug</FieldLabel>
                <Input id="f-slug" aria-invalid defaultValue="charlie agent" />
                <FieldError>Slugs can't contain spaces.</FieldError>
              </Field>
            </FieldGroup>
          </FieldSet>
        </Row>
        <Row label="Input group">
          <div className="grid w-full max-w-md gap-3">
            <InputGroup>
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search memory" />
              <InputGroupAddon align="inline-end">
                <Kbd>⌘K</Kbd>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="webhook.example.com" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs">Test</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Row>
        <Row label="Combobox">
          <Combobox items={models}>
            <ComboboxInput placeholder="Pick a model" className="w-64" />
            <ComboboxContent>
              <ComboboxEmpty>No model found.</ComboboxEmpty>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Row>
        <Row label="One-time code">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Row>
        <Row label="Calendar">
          <Calendar mode="single" selected={date} onSelect={setDate} className="border" />
        </Row>
      </Spec>

      <Spec id="groups" title="Groups" note="Button groups and toggles keep related actions in one hairline frame.">
        <Row label="Button group">
          <ButtonGroup>
            <Button variant="outline">Day</Button>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
            <ButtonGroupSeparator />
            <Button variant="outline" size="icon" aria-label="Download">
              <Download />
            </Button>
          </ButtonGroup>
        </Row>
        <Row label="Toggle">
          <Toggle aria-label="Bold" variant="outline">
            <Bold />
          </Toggle>
          <Toggle aria-label="Italic" variant="outline" defaultPressed>
            <Italic />
          </Toggle>
          <Toggle aria-label="Underline" variant="outline">
            <Underline />
          </Toggle>
        </Row>
        <Row label="Keys">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
          <span className="text-sm text-muted-foreground">opens the command palette</span>
        </Row>
      </Spec>

      <Spec id="navigation" title="Navigation" note="Breadcrumbs say where you are, pagination how far, menus what else there is.">
        <Row label="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Agents</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Charlie</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Memory</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Row>
        <Row label="Pagination">
          <Pagination className="mx-0 w-auto justify-start">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Row>
        <Row label="Navigation menu">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-56 gap-1 p-1">
                    {["Agents", "Memory", "Schedules"].map((l) => (
                      <li key={l}>
                        <NavigationMenuLink href="#">{l}</NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Row>
        <Row label="Menubar">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Agent</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Duplicate</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Delete</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Memory</MenubarItem>
                <MenubarItem>Activity</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Row>
        <Row label="Sidebar">
          <SidebarProvider className="min-h-0 w-full border">
            <Sidebar collapsible="none" className="h-72 w-56 border-r">
              <SidebarHeader className="border-b px-3 py-2 text-sm font-medium">Charlie</SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {[
                        [Brain, "Memory", "312"],
                        [CalendarClock, "Schedules", "2"],
                        [Plug, "Connections", ""],
                        [Folder, "Channels", ""],
                      ].map(([Icon, l, n]) => (
                        <SidebarMenuItem key={l as string}>
                          <SidebarMenuButton isActive={l === "Memory"}>
                            <Icon />
                            {l as string}
                          </SidebarMenuButton>
                          {n ? <SidebarMenuBadge>{n as string}</SidebarMenuBadge> : null}
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter className="border-t px-3 py-2 text-xs text-muted-foreground">Local</SidebarFooter>
            </Sidebar>
            <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">Content</div>
          </SidebarProvider>
        </Row>
      </Spec>

      <Spec id="disclosure" title="Disclosure" note="Accordions for reference, collapsibles for one thing, hover and context menus for things you reach for.">
        <Row label="Accordion">
          <Accordion type="single" collapsible className="w-full max-w-md" defaultValue="a">
            <AccordionItem value="a">
              <AccordionTrigger>What does the agent remember?</AccordionTrigger>
              <AccordionContent>Facts you tell it, decisions it watched you make, and files it has read.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>Can I delete a memory?</AccordionTrigger>
              <AccordionContent>Yes. Open Memory, pick the fact, and choose Forget.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Row>
        <Row label="Collapsible">
          <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-md">
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                {open ? "Hide" : "Show"} 3 more connections
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 divide-y border text-sm">
              {["Linear", "Notion", "Jira"].map((c) => (
                <div key={c} className="px-3 py-2">
                  {c}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </Row>
        <Row label="Hover card">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@charlie</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 text-sm">
              <p className="font-medium">Charlie</p>
              <p className="mt-1 text-muted-foreground">Running locally. 312 facts. Last active 4 minutes ago.</p>
            </HoverCardContent>
          </HoverCard>
        </Row>
        <Row label="Context menu">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-24 w-full max-w-md items-center justify-center border border-dashed text-sm text-muted-foreground">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Rename</ContextMenuItem>
              <ContextMenuItem>Duplicate</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Row>
      </Spec>

      <Spec id="layout" title="Layout" note="Containers that hold other things: scroll regions, split panes, ratios, carousels, lists, empties.">
        <Row label="Scroll area">
          <ScrollArea className="h-32 w-full max-w-md border">
            <div className="divide-y text-sm">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="px-3 py-2">
                  Memory {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Row>
        <Row label="Resizable">
          <ResizablePanelGroup orientation="horizontal" className="h-32 w-full max-w-md border">
            <ResizablePanel defaultSize={40} className="flex items-center justify-center text-sm text-muted-foreground">
              Memory
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="flex items-center justify-center text-sm text-muted-foreground">
              Chat
            </ResizablePanel>
          </ResizablePanelGroup>
        </Row>
        <Row label="Aspect ratio">
          <AspectRatio ratio={16 / 9} className="w-full max-w-md border bg-surface">
            <div className="grid size-full place-items-center text-sm text-muted-foreground">16 : 9</div>
          </AspectRatio>
        </Row>
        <Row label="Carousel">
          <Carousel className="w-full max-w-xs" opts={{ duration: 18, loop: true }}>
            <CarouselContent>
              {["Memory", "Schedules", "Connections"].map((l) => (
                <CarouselItem key={l}>
                  <div className="flex h-24 items-center justify-center border bg-surface text-sm">{l}</div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Row>
        <Row label="Item list">
          <ItemGroup className="w-full max-w-md border">
            {[
              [GitBranch, "sojak/plinth", "Synced 2 minutes ago"],
              [Terminal, "Local shell", "Allowed: read, write"],
            ].map(([Icon, t, d], i) => (
              <div key={t as string}>
                {i > 0 && <ItemSeparator />}
                <Item>
                  <ItemMedia variant="icon">
                    <Icon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{t as string}</ItemTitle>
                    <ItemDescription>{d as string}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </ItemActions>
                </Item>
              </div>
            ))}
          </ItemGroup>
        </Row>
        <Row label="Empty">
          <Empty className="w-full max-w-md border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox />
              </EmptyMedia>
              <EmptyTitle>No schedules yet</EmptyTitle>
              <EmptyDescription>Schedules run the agent on a timer, even while you're away.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">Add a schedule</Button>
            </EmptyContent>
          </Empty>
        </Row>
        <Row label="Separator">
          <div className="flex h-5 items-center gap-3 text-sm">
            <span>Memory</span>
            <Separator orientation="vertical" />
            <span>Schedules</span>
            <Separator orientation="vertical" />
            <span>Connections</span>
          </div>
        </Row>
        <Row label="Spinner">
          <Spinner />
          <span className="text-sm text-muted-foreground">Syncing memory</span>
        </Row>
        <Row label="Direction">
          <DirectionProvider dir="rtl">
            <div dir="rtl" className="flex w-full max-w-md items-center gap-2 border p-3">
              <Button variant="outline" size="sm">
                <Check data-icon="inline-start" /> Done
              </Button>
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
              <span className="ms-auto text-xs text-muted-foreground">Same buttons, right-to-left</span>
            </div>
          </DirectionProvider>
        </Row>
      </Spec>

      <Spec id="chart" title="Chart" note="Bars in cobalt and a muted second series. Grid lines, no fills, no gradients.">
        <ChartContainer config={chartConfig} className="h-56 w-full max-w-lg">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="tokens" fill="var(--color-tokens)" radius={0} />
            <Bar dataKey="calls" fill="var(--color-calls)" radius={0} />
          </BarChart>
        </ChartContainer>
      </Spec>

      <Spec id="messages" title="Messages" note="Chat primitives: messages with avatars, bubbles in the house tones, markers between turns, and a scroller that knows when you've fallen behind.">
        <Row label="Message">
          <MessageGroup className="w-full max-w-md">
            <Message align="end">
              <MessageContent>
                <Bubble align="end" variant="muted">
                  <BubbleContent>What did we decide about export retries?</BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
            <Message>
              <MessageAvatar className="size-8 self-start rounded-sm bg-cobalt text-xs text-cobalt-foreground group-has-data-[slot=message-footer]/message:translate-y-0">
                C
              </MessageAvatar>
              <MessageContent>
                <Bubble variant="outline">
                  <BubbleContent>Three retries with backoff, then surface the failure in the activity log.</BubbleContent>
                </Bubble>
                <MessageFooter>
                  <Button variant="ghost" size="icon-xs" aria-label="Copy">
                    <Copy />
                  </Button>
                </MessageFooter>
              </MessageContent>
            </Message>
          </MessageGroup>
        </Row>
        <Row label="Bubbles">
          <BubbleGroup className="w-full max-w-md">
            {(["default", "secondary", "muted", "tinted", "outline", "destructive"] as const).map((v) => (
              <Bubble key={v} variant={v}>
                <BubbleContent>{v}</BubbleContent>
              </Bubble>
            ))}
          </BubbleGroup>
        </Row>
        <Row label="Marker">
          <div className="grid w-full max-w-md gap-3">
            <Marker variant="separator">
              <MarkerContent>Today</MarkerContent>
            </Marker>
            <Marker>
              <MarkerIcon>
                <Check />
              </MarkerIcon>
              <MarkerContent>Charlie joined the channel</MarkerContent>
            </Marker>
          </div>
        </Row>
        <Row label="Scroller">
          <div className="w-full max-w-md border">
            <div className="flex items-center justify-between border-b px-3 py-2 text-xs text-muted-foreground">
              <span>Conversation</span>
              <span>24 turns</span>
            </div>
            <MessageScrollerProvider>
              <MessageScroller className="h-40">
                <MessageScrollerViewport className="[scrollbar-color:var(--border)_transparent] [scrollbar-width:thin]">
                  <MessageScrollerContent className="divide-y">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <MessageScrollerItem key={i} className="flex justify-between px-3 py-2 text-sm">
                        <span>Turn {i + 1}</span>
                        <span className="text-xs text-muted-foreground">{i % 2 ? "Charlie" : "You"}</span>
                      </MessageScrollerItem>
                    ))}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          </div>
        </Row>
      </Spec>

      <Spec id="tools" title="Tools" note="What the agent did and what it was given: traces, code, attachments.">
        <Row label="Trace">
          <Trace className="max-w-md">
            <TraceLine>
              <TraceIcon>
                <Search />
              </TraceIcon>
              <TraceTitle>Searched memory for "export retries"</TraceTitle>
              <TraceDescription>3 results</TraceDescription>
            </TraceLine>
            <TraceCollapsible>
              <TraceCollapsibleTrigger>
                <TraceLine status="running">
                  <TraceIcon>
                    <Wrench />
                  </TraceIcon>
                  <TraceTitle>Opening pull request</TraceTitle>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent className="text-sm text-muted-foreground">
                gh pr create --title "Retry export with backoff"
              </TraceCollapsibleContent>
            </TraceCollapsible>
            <TraceLine status="error">
              <TraceIcon>
                <X />
              </TraceIcon>
              <TraceTitle>Slack post failed</TraceTitle>
              <TraceDescription>token expired</TraceDescription>
            </TraceLine>
          </Trace>
        </Row>
        <Row label="Code block">
          <CodeBlock className="w-full max-w-md" size="sm">
            <CodeBlockHeader>
              <CodeBlockTitle>
                <FileText /> retry.ts
              </CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value={`for (let i = 0; i < 3; i++) {\n  if (await tryExport()) break\n  await sleep(2 ** i * 500)\n}`} />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent lineNumbers>{`for (let i = 0; i < 3; i++) {\n  if (await tryExport()) break\n  await sleep(2 ** i * 500)\n}`}</CodeBlockContent>
          </CodeBlock>
        </Row>
        <Row label="Attachment">
          <AttachmentGroup>
            <Attachment>
              <AttachmentMedia>
                <FileText />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>release-notes.md</AttachmentTitle>
                <AttachmentDescription>4 KB</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label="Remove">
                  <X />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
            <Attachment state="uploading">
              <AttachmentMedia>
                <Spinner />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>export.csv</AttachmentTitle>
                <AttachmentDescription>Uploading</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
          </AttachmentGroup>
        </Row>
      </Spec>

      <Spec id="prompts" title="Prompts" note="Ways to ask: a stepped questionnaire, a command palette, a confirm that blocks, a drawer, a toast.">
        <Row label="Questionnaire">
          <Questionnaire className="max-w-md" onSubmit={(e) => e.preventDefault()}>
            <QuestionnaireProgress />
            <QuestionnaireItem name="runtime" required>
              <QuestionnaireTitle>Where should Charlie run?</QuestionnaireTitle>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="local">Locally</QuestionnaireChoice>
                <QuestionnaireChoice value="cloud">On the cloud</QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
            <QuestionnaireActions>
              <QuestionnaireNext />
            </QuestionnaireActions>
          </Questionnaire>
        </Row>
        <Row label="Command">
          <Command className="w-full max-w-md border">
            <CommandInput placeholder="Type a command" />
            <CommandList>
              <CommandEmpty>Nothing matches.</CommandEmpty>
              <CommandGroup heading="Agent">
                <CommandItem>
                  New agent <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>Open memory</CommandItem>
                <CommandItem>Run schedule now</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Row>
        <Row label="Alert dialog">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">
                <Trash2 data-icon="inline-start" /> Forget all memories
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Forget all 312 memories?</AlertDialogTitle>
                <AlertDialogDescription>Charlie starts from nothing. This can't be undone.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep</AlertDialogCancel>
                <AlertDialogAction>Forget</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Row>
        <Row label="Drawer">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Activity</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Activity</DrawerTitle>
                <DrawerDescription>What Charlie did in the last hour.</DrawerDescription>
              </DrawerHeader>
              <div className="divide-y px-4 text-sm">
                {["Synced memory", "Ran schedule: daily digest", "Replied in #ops"].map((a) => (
                  <div key={a} className="py-2">
                    {a}
                  </div>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Row>
        <Row label="Toast">
          <Button variant="outline" size="sm" onClick={() => toast.success("Memory synced")}>
            Success
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.error("Slack token expired")}>
            Error
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast.promise(new Promise((r) => setTimeout(r, 1800)), {
                loading: "Opening pull request",
                success: "Pull request opened",
                error: "Couldn't open pull request",
              })
            }
          >
            Promise
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast("Charlie replied in #ops")}>
            Plain
          </Button>
        </Row>
      </Spec>
    </>
  )
}
