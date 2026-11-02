import { Toaster as HotToaster, resolveValue, toast, type Toast } from "react-hot-toast"
import { Check, X } from "lucide-react"

import { Spinner } from "@/components/ui/spinner"
import { cn } from "cn"

// Icons mapped to the house tones: cobalt for done, ember for failed, spinner while loading.
function ToastIcon({ type }: { type: Toast["type"] }) {
  if (type === "success") return <Check className="size-4 text-cobalt" />
  if (type === "error") return <X className="size-4 text-destructive" />
  if (type === "loading") return <Spinner className="size-4" />
  return null
}

function Toaster() {
  return (
    <HotToaster position="bottom-left" gutter={8} toastOptions={{ duration: 3500 }}>
      {(t) => (
        <div
          role="status"
          className={cn(
            "flex max-w-sm items-start gap-3 border bg-popover px-4 py-3 text-sm text-popover-foreground",
            t.visible ? "animate-in fade-in-0 slide-in-from-bottom-2" : "animate-out fade-out-0 slide-out-to-bottom-2"
          )}
        >
          {t.type !== "blank" && (
            <span className="mt-0.5 shrink-0">
              <ToastIcon type={t.type} />
            </span>
          )}
          <div className="min-w-0 flex-1">{resolveValue(t.message, t)}</div>
          {t.type !== "loading" && (
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => toast.dismiss(t.id)}
              className="-mr-1 shrink-0 text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
      )}
    </HotToaster>
  )
}

export { Toaster, toast }
