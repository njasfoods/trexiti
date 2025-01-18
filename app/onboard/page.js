"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    projectType: "",
    businessStage: "",
    budget: "",
    timeline: "",
    goals: [],
    description: "",
  });

  const totalSteps = 5;

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Welcome to Trexiti! Let&apos;s get to know you better.
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) =>
                    updateFormData("businessName", e.target.value)
                  }
                  placeholder="Your Business Name"
                />
              </div>
              <div>
                <Label htmlFor="contactName">Contact Person</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) =>
                    updateFormData("contactName", e.target.value)
                  }
                  placeholder="Your Name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              What type of project are you looking to start?
            </h2>
            <div className="space-y-4">
              <RadioGroup
                value={formData.projectType}
                onValueChange={(value) => updateFormData("projectType", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="web-development"
                    id="web-development"
                  />
                  <Label htmlFor="web-development">Web Development</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="digital-marketing"
                    id="digital-marketing"
                  />
                  <Label htmlFor="digital-marketing">Digital Marketing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both">
                    Both Web Development & Digital Marketing
                  </Label>
                </div>
              </RadioGroup>

              <div className="mt-6">
                <Label htmlFor="businessStage">
                  What stage is your business in?
                </Label>
                <Select
                  value={formData.businessStage}
                  onValueChange={(value) =>
                    updateFormData("businessStage", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select business stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Just an Idea</SelectItem>
                    <SelectItem value="startup">Startup Phase</SelectItem>
                    <SelectItem value="established">
                      Established Business
                    </SelectItem>
                    <SelectItem value="expanding">Looking to Expand</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Let&apos;s talk about your budget and timeline
            </h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="budget">What&apos;s your budget range?</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => updateFormData("budget", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                    <SelectItem value="over-20k">Over $20,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timeline">When do you want to launch?</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => updateFormData("timeline", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">As soon as possible</SelectItem>
                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="6-plus-months">6+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              What are your main goals?
            </h2>
            <div className="space-y-4">
              <Label>Select all that apply:</Label>
              <div className="space-y-2">
                {[
                  "Increase online visibility",
                  "Generate more leads",
                  "Improve brand awareness",
                  "Increase sales",
                  "Expand to new markets",
                  "Improve user experience",
                  "Launch new products/services",
                ].map((goal) => (
                  <div key={goal} className="flex items-center">
                    <input
                      type="checkbox"
                      id={goal}
                      checked={formData.goals.includes(goal)}
                      onChange={(e) => {
                        const newGoals = e.target.checked
                          ? [...formData.goals, goal]
                          : formData.goals.filter((g) => g !== goal);
                        updateFormData("goals", newGoals);
                      }}
                      className="mr-2"
                    />
                    <Label htmlFor={goal}>{goal}</Label>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="description">
                  Tell us more about your project
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    updateFormData("description", e.target.value)
                  }
                  placeholder="Share any additional details, requirements, or questions you have..."
                  rows={6}
                />
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index < totalSteps - 1 ? "flex-1" : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index + 1 <= step
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {index + 1 <= step ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    {index < totalSteps - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          index + 1 < step ? "bg-purple-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
              )}
              <div className="flex-1" />
              <Button
                onClick={handleNext}
                className="flex items-center bg-purple-600 hover:bg-purple-700"
              >
                {step === totalSteps ? "Submit" : "Next"}{" "}
                {step !== totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
