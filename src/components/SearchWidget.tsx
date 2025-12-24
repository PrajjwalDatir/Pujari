"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Search, MapPin, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  lookingFor: z.enum(["pujari", "astrologer"]),
  ritualType: z.string().min(2, "Ritual type is required"),
  location: z.string().min(2, "Location is required"),
});

export default function SearchWidget() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lookingFor: "pujari",
      ritualType: "",
      location: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Matching you with verified Pujaris...", {
        description: `Finding ${values.lookingFor === "pujari" ? "Pujaris" : "Astrologers"} for ${values.ritualType} in ${values.location}`,
        duration: 4000,
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="text-primary w-5 h-5" />
            Find Global Pujari
          </CardTitle>
          <CardDescription>
            Book verified Vedic experts for your rituals.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lookingFor">I am looking for a</Label>
              <Select
                onValueChange={(val) =>
                  form.setValue("lookingFor", val as "pujari" | "astrologer")
                }
                defaultValue="pujari"
              >
                <SelectTrigger id="lookingFor">
                  <SelectValue placeholder="Select Options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pujari">Pujari (Rituals)</SelectItem>
                  <SelectItem value="astrologer">Astrologer (Consultation)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ritualType">Ritual Type</Label>
              <Input
                id="ritualType"
                placeholder="e.g. Satyanarayan Puja, Griha Pravesh"
                {...form.register("ritualType")}
                className="bg-background/50"
              />
              {form.formState.errors.ritualType && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.ritualType.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="City or Zip Code"
                  {...form.register("location")}
                  className="pl-9 bg-background/50"
                />
              </div>
              {form.formState.errors.location && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.location.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 text-lg shadow-lg shadow-primary/25"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Matching..."
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" /> Find Pujari
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
