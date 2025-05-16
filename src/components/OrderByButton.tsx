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

const OrderByButton = () => {
  const [framework, setFramework] = useState("date");

  return (
    <DropdownMenu>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="icon-button">
                <ArrowUpNarrowWide
                  className="icon"
                  size={16}
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className="dark p-4 text-md bg-primary-light font-semibold text-black/60">
            Sort By
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="dropdown-content">
        <DropdownMenuRadioGroup value={framework} onValueChange={setFramework}>
          <DropdownMenuRadioItem value="title" className="dropdown-item">
            <div>
              <MessageSquareQuote className="dropdown-item-icon" />
              <span>Title</span>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="author" className="dropdown-item">
            <div>
              <UserRoundCheck className="dropdown-item-icon" />
              <span>Author</span>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="date" className="dropdown-item">
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
