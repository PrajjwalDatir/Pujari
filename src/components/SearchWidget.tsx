"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Sparkles, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { joinWaitlistAction } from "@/app/actions/waitlist";
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

const searchSchema = z.object({
  lookingFor: z.enum(["pujari", "astrologer"]),
  ritualType: z.string().min(2, "Ritual type is required"),
  location: z.string().min(2, "Location is required"),
});

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type SearchValues = z.infer<typeof searchSchema>;

export default function SearchWidget() {
  const [step, setStep] = useState<"search" | "waitlist" | "success">("search");
  const [searchData, setSearchData] = useState<SearchValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const searchForm = useForm<SearchValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      lookingFor: "pujari",
      ritualType: "",
      location: "",
    },
  });

  const waitlistForm = useForm<{ email: string }>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSearch = async (values: SearchValues) => {
    setIsSubmitting(true);
    // Simulate "No matches found" transition
    setTimeout(() => {
      setSearchData(values);
      setStep("waitlist");
      setIsSubmitting(false);
      toast.info("Database updating...", {
        description: `Currently 0 verified Pujaris in ${values.location}. Join the priority waitlist!`,
      });
    }, 1200);
  };

  const onJoinWaitlist = async (values: { email: string }) => {
    if (!searchData) return;
    setIsSubmitting(true);

    try {
      const result = await joinWaitlistAction({
        email: values.email,
        lookingFor: searchData.lookingFor,
        ritualType: searchData.ritualType,
        location: searchData.location,
      });

      if (!result.success) throw new Error(result.error);

      setStep("success");
      toast.success("Added to Sacred Waitlist!", {
        description: `We've sent a confirmation email to ${values.email}.`,
      });
    } catch (error: any) {
      toast.error("Failed to join waitlist", {
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          {step === "search" && (
            <motion.div
              key="search"
              initial={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="flex-1 flex flex-col"
            >
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
                <form onSubmit={searchForm.handleSubmit(onSearch)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="lookingFor">I am looking for a</Label>
                    <Select
                      onValueChange={(val) =>
                        searchForm.setValue("lookingFor", val as "pujari" | "astrologer")
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
                      {...searchForm.register("ritualType")}
                      className="bg-background/50"
                    />
                    {searchForm.formState.errors.ritualType && (
                      <p className="text-sm text-destructive">
                        {searchForm.formState.errors.ritualType.message}
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
                        {...searchForm.register("location")}
                        className="pl-9 bg-background/50"
                      />
                    </div>
                    {searchForm.formState.errors.location && (
                      <p className="text-sm text-destructive">
                        {searchForm.formState.errors.location.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 text-lg shadow-lg shadow-primary/25"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Searching..."
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" /> Find Pujari
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </motion.div>
          )}

          {step === "waitlist" && (
            <motion.div
              key="waitlist"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Priority Waitlist</CardTitle>
                <CardDescription>
                  We are expanding! Be the first to know when verified Pujaris are available for <strong>{searchData?.ritualType}</strong> in <strong>{searchData?.location}</strong>.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm text-muted-foreground italic">
                    "Trusted by 10,000+ families for spiritual guidance."
                  </p>
                </div>
                
                <form onSubmit={waitlistForm.handleSubmit(onJoinWaitlist)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        {...waitlistForm.register("email")}
                        className="pl-9 bg-background/50"
                      />
                    </div>
                    {waitlistForm.formState.errors.email && (
                      <p className="text-sm text-destructive">
                        {waitlistForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join Priority List"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <button 
                    type="button" 
                    onClick={() => setStep("search")}
                    className="w-full text-sm text-muted-foreground hover:text-primary transition-colors text-center"
                  >
                    ← Back to search
                  </button>
                </form>
              </CardContent>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">You&apos;re in!</h2>
              <p className="text-muted-foreground max-w-[250px]">
                Thank you for your faith. We will contact you at <strong>{waitlistForm.getValues("email")}</strong> as soon as a matching Pujari is verified.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setStep("search");
                  searchForm.reset();
                  waitlistForm.reset();
                }}
              >
                Back home
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
