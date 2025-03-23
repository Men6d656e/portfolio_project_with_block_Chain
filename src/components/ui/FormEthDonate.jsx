"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


export function FormEthDonate({toogle , donateEth , setethDon}) {
  // ...

    // 1. Define your form.
    const form = useForm({
      defaultValues: {
        Donate: 0,
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
      setethDon(values.Donate);
      donateEth();
      toogle();
    }


  return (
    <Form {...form} className="w-[350px]">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Donate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="my-2">How much you want to donate eth?</FormLabel>
              <FormControl>
                <Input type="number" placeholder="shadcn" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-5">

        <Button className="border" type="submit">Submit</Button>
        <Button className="border bg-white text-black" type="button" onClick={toogle}>Cancel</Button>
        </div>
      </form>
    </Form>
  )
}