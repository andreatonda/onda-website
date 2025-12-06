import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Loader2, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  role: "brand" | "creator" | "";
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  role?: string;
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/manrbvok";

export const ConsultationModal = ({ open, onOpenChange }: ConsultationModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    role: "",
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setFormData({
          role: "",
          name: "",
          email: "",
          company: "",
          message: "",
          consent: false,
        });
        setErrors({});
        setIsSuccess(false);
        setSubmitError(null);
      }, 300);
    }
  }, [open]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.role) {
      newErrors.role = "Please select whether you are a Brand or Creator.";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be filled.";
    }
    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy policy to continue.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: formData.role,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          consent: formData.consent,
          source: "meetonda.com consultation modal",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitError(
        "Something went wrong while sending your request. Please try again or email us directly at andre@meetonda.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.role &&
    formData.name.trim() &&
    validateEmail(formData.email) &&
    formData.message.trim().length >= 20 &&
    formData.consent;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border/50 text-foreground max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-8 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-accent" />
            </div>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-2xl font-bold text-center">Thank you!</DialogTitle>
              <DialogDescription className="text-muted-foreground text-center text-base">
                We've received your request and will get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-2xl font-bold">Book a consultation</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Tell us a bit about yourself and we'll get back to you shortly.
              </DialogDescription>
            </DialogHeader>

            {submitError && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-sm text-destructive">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">I am a <span className="text-destructive">*</span></Label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: "brand" })}
                    className={`flex-1 py-3 px-4 rounded-lg border transition-all text-sm font-medium ${
                      formData.role === "brand"
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border/50 hover:border-accent/50 text-foreground"
                    }`}
                  >
                    Brand
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: "creator" })}
                    className={`flex-1 py-3 px-4 rounded-lg border transition-all text-sm font-medium ${
                      formData.role === "creator"
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border/50 hover:border-accent/50 text-foreground"
                    }`}
                  >
                    Creator
                  </button>
                </div>
                {errors.role && <p className="text-destructive text-xs mt-1">{errors.role}</p>}
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  ref={firstInputRef}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border/50 focus:border-accent"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border/50 focus:border-accent"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company / Brand / Channel name
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-background border-border/50 focus:border-accent"
                  placeholder="Optional"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border/50 focus:border-accent min-h-[100px] resize-none"
                  placeholder="Tell us about your brand or channel, your category, and what you're looking for in Europe."
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              {/* GDPR Consent */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked === true })
                    }
                    className="mt-0.5 border-border/50 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the processing of my personal data according to the{" "}
                    <Link
                      to="/privacy"
                      className="text-accent hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Privacy Policy
                    </Link>
                    . <span className="text-destructive">*</span>
                  </Label>
                </div>
                {errors.consent && <p className="text-destructive text-xs mt-1">{errors.consent}</p>}
                <p className="text-xs text-muted-foreground pl-6">
                  We use your information only to respond to your enquiry. You can request deletion of your data at any time.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-base font-medium disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send request"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
