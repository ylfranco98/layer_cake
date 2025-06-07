"use client";

import { useEffect, useId, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  isSameDay,
  endOfMonth,
  endOfYear,
  startOfDay,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, CalendarSearch } from "lucide-react";
import TooltipComponent from "./TooltipComponent";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Group } from "react-aria-components";
import { DateInput, dateInputStyle } from "./ui/datefield-rac";
import { cn } from "@/lib/utils";
import { parseDate } from "@internationalized/date";

export default function CalendarPicker() {
  const idStart = useId();
  const idEnd = useId();
  const today = startOfDay(new Date());
  const yesterday = {
    from: subDays(today, 1),
    to: subDays(today, 1),
  };
  const last7Days = {
    from: subDays(today, 6),
    to: today,
  };
  const last30Days = {
    from: subDays(today, 29),
    to: today,
  };
  const monthToDate = {
    from: startOfMonth(today),
    to: today,
  };
  const lastMonth = {
    from: startOfMonth(subMonths(today, 1)),
    to: endOfMonth(subMonths(today, 1)),
  };
  const yearToDate = {
    from: startOfYear(today),
    to: today,
  };
  const lastYear = {
    from: startOfYear(subYears(today, 1)),
    to: endOfYear(subYears(today, 1)),
  };

  const dateSlots = [
    // {label:"Today" date: today, avalibility: true },
    { label: "Yesterday", date: yesterday, avalibility: true },
    { label: "Last 7 Days", date: last7Days, avalibility: true },
    { label: "Last 30 Days", date: last30Days, avalibility: true },
    { label: "Month to Date", date: monthToDate, avalibility: true },
    { label: "Last Month", date: lastMonth, avalibility: true },
    { label: "Year to Date", date: yearToDate, avalibility: true },
    { label: "Last Year", date: lastYear, avalibility: true },
  ];
  const [month, setMonth] = useState(today);
  const [date, setDate] = useState<DateRange | undefined>(last7Days);
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");

  const handleDayPickerSelect = (date: DateRange | undefined) => {
    if (!date || !date.from || !date.to) {
      setStartDate("");
      setDate(undefined);
    } else {
      setDate(date);
      // setMonth(date);
      setStartDate(format(date.from, "yyyy-MM-dd"));
      setEndDate(format(date.to, "yyyy-MM-dd"));
    }
  };
  const handleInputStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStartDate(value);
    const parsedDate = new Date(value + "T00:00:00"); // ✅ Forces local midnight
    if (value) {
      setDate({ from: parsedDate, to: new Date(endtDate + "T00:00:00") }); // ✅ Forces local midnight });
      setMonth(parsedDate);
    } else {
      setDate(undefined);
    }
  };
  const handleInputEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEndDate(value);

    if (value) {
      const parsedDate = new Date(value + "T00:00:00"); // ✅ Forces local midnight
      setDate({ from: new Date(startDate + "T00:00:00"), to: parsedDate });
      setMonth(parsedDate);
    } else {
      setDate(undefined);
    }
  };

  useEffect(() => {
    setStartDate(format(today, "yyyy-MM-dd"));

    setEndDate(format(today, "yyyy-MM-dd"));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <TooltipComponent text="Pick Date or Date Range">
          <PopoverTrigger asChild>
            <Button variant="outline" className="icon-button">
              <CalendarSearch className="icon" size={16} aria-hidden="true" />
            </Button>
          </PopoverTrigger>
        </TooltipComponent>
        <PopoverContent className="w-fit pink-container !z-200">
          {/* <div className="rounded-md border"> */}
          <div className="flex max-sm:flex-col">
            <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
              <div className="h-full sm:border-e">
                <div className="flex flex-col px-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-none rounded-md w-full font-font default-text ${date?.from && date?.to && isSameDay(date.from, today) && isSameDay(date.to, today) ? "bg-primary shadow-xl" : "bg-transparent shadow-none hover:bg-pink-bg"}`}
                    onClick={() => {
                      setStartDate(format(today, "yyyy-MM-dd"));
                      setEndDate(format(today, "yyyy-MM-dd"));
                      setDate({
                        from: today,
                        to: today,
                      });
                      setMonth(today);
                    }}
                  >
                    Today
                  </Button>
                  {dateSlots.map(({ label, date: dateSlot, avalibility }) => (
                    <Button
                      key={label}
                      variant="outline"
                      size="sm"
                      className={`border-none rounded-md w-full font-font default-text ${date?.from && date?.to && isSameDay(date.from, dateSlot.from) && isSameDay(date.to, dateSlot.to) ? "bg-primary shadow-xl" : "bg-transparent shadow-none hover:bg-pink-bg"}`}
                      onClick={() => {
                        setStartDate(format(dateSlot.from, "yyyy-MM-dd"));
                        setEndDate(format(dateSlot.to, "yyyy-MM-dd"));
                        setDate(dateSlot);
                        setMonth(dateSlot.to);
                      }}
                    >
                      {label}
                    </Button>
                    // {/* <Button
                    //     variant="ghost"
                    //     size="sm"
                    //     className="w-full justify-start"
                    //     onClick={() => {
                    //       setDate(last7Days);
                    //       setMonth(last7Days.to);
                    //     }}
                    //   >
                    //     Last 7 days
                    //   </Button>
                    //   <Button
                    //     variant="ghost"
                    //     size="sm"
                    //     className="w-full justify-start"
                    //     onClick={() => {
                    //       setDate(last30Days);
                    //       setMonth(last30Days.to);
                    //     }}
                    //   >
                    //     Last 30 days
                    //   </Button>
                    //   <Button
                    //     variant="ghost"
                    //     size="sm"
                    //     className="w-full justify-start"
                    //     onClick={() => {
                    //       setDate(monthToDate);
                    //       setMonth(monthToDate.to);
                    //     }}
                    //   >
                    //     Month to date
                    //   </Button>
                    //   <Button
                    //     variant="ghost"
                    //     size="sm"
                    //     className="w-full justify-start"
                    //     onClick={() => {
                    //       setDate(lastMonth);
                    //       setMonth(lastMonth.to);
                    //     }}
                    //   >
                    //     Last month
                    //   </Button>
                    //   <Button
                    //     variant="ghost"
                    //     size="sm"
                    //     className="w-full justify-start"
                    //     onClick={() => {
                    //       setDate(yearToDate);
                    //       setMonth(yearToDate.to);
                    //     }}
                    //   >
                    //     Year to date
                    //   </Button>
                    //   <Button
                    //     variant="ghost"
                    //     size="sm"
                    //     className="w-full justify-start"
                    //     onClick={() => {
                    //       setDate(lastYear);
                    //       setMonth(lastYear.to);
                    //     }}
                    //   >
                    //     Last year
                    //   </Button> */}
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Calendar
                mode="range"
                selected={date}
                // onSelect={(newDate) => {
                //   if (newDate) {
                //     setDate(newDate);
                //   }
                // }}
                onSelect={handleDayPickerSelect}
                month={month}
                onMonthChange={setMonth}
                className="p-2"
                disabled={[
                  { after: today }, // Dates before today
                ]}
              />
              <div className="flex flex-col items-center gap-3 pl-2">
                {/* <Label htmlFor={id} className="text-xs">
                  Enter date
                </Label> */}
                <div className="relative grow w-full ">
                  <div className="flex border-none shadow-xl !bg-pink-bg font-font default-text w-full rounded-md">
                    <span className="flex">
                      <Input
                        id={idStart}
                        type="date"
                        value={startDate}
                        onChange={handleInputStartChange}
                        className="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none border-none bg-transparent shadow-none !w-auto !pr-0 !text-right !flex !justify-end focus-visible:!ring-0"
                        aria-label="Select start date"
                      />
                      -
                      <Input
                        id={idEnd}
                        type="date"
                        value={endtDate}
                        onChange={handleInputEndChange}
                        className="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none border-none bg-transparent shadow-none !w-fit !px-0 !pl-5 focus-visible:!ring-0"
                        aria-label="Select end date"
                      />
                    </span>
                  </div>

                  {/* <Group className={cn(dateInputStyle, "pe-9")}>
                    <DateInput slot="start" unstyled />
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground/70 px-2"
                    >
                      -
                    </span>
                    <DateInput slot="end" unstyled />
                  </Group> */}
                  <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                    <CalendarIcon
                      size={16}
                      aria-hidden="true"
                      className="default-text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
