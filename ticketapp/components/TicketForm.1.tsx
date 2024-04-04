"use client";
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { ticketSchema } from "@/ValidationSchemas/ticket";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { TicketFormData } from "./TicketForm";

export const TicketForm = () => {
  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
  });

  async function onSubmit(values: z.infer<typeof ticketSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}></form>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ticket Title</FormLabel>
              <FormControl>
                <Input placeholder="Ticket Title..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
};
