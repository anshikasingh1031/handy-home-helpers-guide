
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToolProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description?: string;
  icon?: React.ReactNode;
}

const Tool = React.forwardRef<HTMLDivElement, ToolProps>(
  ({ className, name, description, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center p-4 border rounded-lg bg-background hover:bg-accent/10 transition-colors cursor-pointer",
          className
        )}
        {...props}
      >
        <div className="mb-2 text-accent1 h-12 w-12 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-medium text-center">{name}</h3>
        {description && <p className="text-sm text-muted-foreground text-center mt-1">{description}</p>}
      </div>
    )
  }
)
Tool.displayName = "Tool"

export { Tool }
