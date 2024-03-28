import { Priority } from "@prisma/client";
import { Flame } from "lucide-react";
import React from "react";

interface Props {
  priority: Priority;
}

const priorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  HIGH: { label: "High", level: 3 },
  MEDIUM: { label: "Medium", level: 2 },
  LOW: { label: "Low", level: 1 },
};

const TicketPriority = ({ priority }: Props) => {
  return (
    <>
      <Flame className="text-red-500" />
      <Flame className="text-red-500" />
      <Flame className="text-red-500" />
    </>
  );
};

export default TicketPriority;
