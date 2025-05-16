import { useId, useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  ArrowDown10,
  ArrowDownAZ,
  ArrowUp10,
  ArrowUpAZ,
  CalendarArrowDown,
  CalendarArrowUp,
} from "lucide-react";

const SwitchComponent = ({
  type,
  checked,
  updateOrderDirection,
}: {
  type: string;
  checked: boolean;
  updateOrderDirection: () => void;
}) => {
  const id = useId();

  const iconMapDown: Record<string, React.ElementType> = {
    likes: ArrowDown10,
    publishedAt: CalendarArrowDown, // Example: Add more dynamic types
  };
  const iconMapUp: Record<string, React.ElementType> = {
    likes: ArrowUp10,
    publishedAt: CalendarArrowUp, // Example: Add more dynamic types
  };
  const IconDown = iconMapDown[type] || ArrowDownAZ; // Default icon
  const IconUp = iconMapUp[type] || ArrowUpAZ; // Default icon

  return (
    <div className="flex gap-2 p-2 bg-pink-bg rounded-md">
      <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id={id}
          checked={checked}
          onCheckedChange={updateOrderDirection}
          className="peer data-[state=unchecked]:bg-pink-bg absolute inset-0 h-[inherit] w-auto rounded-md [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:rounded-sm [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full "
        />
        <span className="pointer-events-none relative ms-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full peer-data-[state=unchecked]:rtl:-translate-x-full gap-2">
          <span className="uppercase flex gap-2 items-center dropdown-item ">
            Desc
          </span>
          <IconDown className="dropdown-item-icon !size-6" />
        </span>
        <span className="peer-data-[state=checked]:text-background pointer-events-none relative me-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full gap-2">
          <IconUp className="dropdown-item-icon !size-6" />
          <span className="uppercase flex gap-2 items-center dropdown-item ">
            Asc
          </span>
        </span>
      </div>
    </div>
  );
};
export default SwitchComponent;
