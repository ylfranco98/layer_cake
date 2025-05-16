"use client";

import { useState } from "react";
import {
  CalendarCheck2,
  ChevronDownIcon,
  HeartPlus,
  MessageSquareQuote,
  Quote,
  Type,
  UserRoundCheck,
} from "lucide-react";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpNarrowWide } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TooltipComponent from "../TooltipComponent";
import { useRouter, useSearchParams } from "next/navigation";
import SwitchComponent from "../SwitchComponent";
import { Separator } from "../ui/separator";

const OrderByButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const order = searchParams.get("order") || "publishedAt"; // Default value
  const orderDirection = searchParams.get("orderDirection") || "desc";
  const [checked, setChecked] = useState<boolean>(orderDirection === "asc");

  const updateOrder = (newOrder: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("order", newOrder); // ✅ Update the `order` value in URL
    router.push(`?${params.toString()}`, { scroll: false }); // ✅ Modify URL without full page reload
  };
  const updateOrderDirection = () => {
    const params = new URLSearchParams(searchParams.toString());
    setChecked((prev) => {
      params.set("orderDirection", `${prev ? "desc" : "asc"}`);
      return !prev;
    });
    router.push(`?${params.toString()}`, { scroll: false }); // ✅ Modify URL without full page reload
  };

  return (
    <DropdownMenu>
      <TooltipComponent text="Sort By">
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="icon-button">
            <ArrowUpNarrowWide className="icon" size={16} aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
      </TooltipComponent>
      <DropdownMenuContent className="dropdown-content !w-fit">
        <SwitchComponent
          type={order}
          checked={checked}
          updateOrderDirection={updateOrderDirection}
        />
        <Separator className="my-1 mx-5 bg-text opacity-50 !w-auto" />
        <DropdownMenuRadioGroup value={order} onValueChange={updateOrder}>
          <DropdownMenuRadioItem value="title" className="dropdown-item">
            <div>
              <MessageSquareQuote className="dropdown-item-icon" />
              <span>Title</span>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="author->name" className="dropdown-item">
            <div>
              <UserRoundCheck className="dropdown-item-icon" />
              <span>Author</span>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="publishedAt" className="dropdown-item">
            <div>
              <CalendarCheck2 className="dropdown-item-icon" />
              <span>Date</span>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="likes"
            disabled
            className="dropdown-item"
          >
            <div>
              <HeartPlus className="dropdown-item-icon" />
              <span>Likes</span>
            </div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderByButton;
