import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

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
  const { t } = useLanguage();
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
      newErrors.role = t("error.role");
    }
    if (!formData.name.trim()) {
      newErrors.name = t("error.name");
    }
    if (!formData.email.trim()) {
      newErrors.email = t("error.emailRequired");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("error.emailInvalid");
    }
    if (!formData.message.trim()) {
      newErrors.message = t("error.messageRequired");
    } else if (formData.message.trim().length < 5) {
      newErrors.message = t("error.messageShort");
    }
    if (!formData.consent) {
      newErrors.consent = t("error.consent");
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
      setSubmitError(t("error.submit"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.role &&
    formData.name.trim() &&
    validateEmail(formData.email) &&
    formData.message.trim().length >= 5 &&
    formData.consent;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] card-glass text-foreground max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-8 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-accent" />
            </div>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-2xl font-bold text-center">{t("modal.successTitle")}</DialogTitle>
              <DialogDescription className="text-muted-foreground text-center text-base">
                {t("modal.successBody")}
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 btn-liquid"
            >
              {t("modal.close")}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-2xl font-bold">{t("modal.title")}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {t("modal.subtitle")}
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
                <Label className="text-sm font-medium">{t("modal.roleLabel")} <span className="text-destructive">*</span></Label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: "brand" })}
                    className={`flex-1 py-3 px-4 rounded-lg border transition-all text-sm font-medium ${
                      formData.role === "brand"
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-white/14 bg-black/40 text-foreground/80 hover:border-accent/40"
                    }`}
                  >
                    {t("modal.role.brand")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: "creator" })}
                    className={`flex-1 py-3 px-4 rounded-lg border transition-all text-sm font-medium ${
                      formData.role === "creator"
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-white/14 bg-black/40 text-foreground/80 hover:border-accent/40"
                    }`}
                  >
                    {t("modal.role.creator")}
                  </button>
                </div>
                {errors.role && <p className="text-destructive text-xs mt-1">{errors.role}</p>}
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  {t("modal.nameLabel")} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  ref={firstInputRef}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#050915] text-foreground border border-white/12 focus:border-accent focus:ring-2 focus:ring-accent/30 placeholder:text-muted-foreground/80 rounded-xl px-4 py-3 shadow-[0_0_0_1px_rgba(0,0,0,0.6)]"
                  placeholder={t("modal.namePlaceholder")}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  {t("modal.emailLabel")} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#050915] text-foreground border border-white/12 focus:border-accent focus:ring-2 focus:ring-accent/30 placeholder:text-muted-foreground/80 rounded-xl px-4 py-3 shadow-[0_0_0_1px_rgba(0,0,0,0.6)]"
                  placeholder={t("modal.emailPlaceholder")}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  {t("modal.companyLabel")}
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-[#050915] text-foreground border border-white/12 focus:border-accent focus:ring-2 focus:ring-accent/30 placeholder:text-muted-foreground/80 rounded-xl px-4 py-3 shadow-[0_0_0_1px_rgba(0,0,0,0.6)]"
                  placeholder={t("modal.companyPlaceholder")}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  {t("modal.messageLabel")} <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#050915] text-foreground border border-white/12 focus:border-accent focus:ring-2 focus:ring-accent/30 placeholder:text-muted-foreground/80 rounded-xl px-4 py-3 min-h-[120px] resize-none shadow-[0_0_0_1px_rgba(0,0,0,0.6)]"
                  placeholder={t("modal.messagePlaceholder")}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              {/* GDPR Consent */}
              <div className="mt-4 rounded-xl bg-black/40 border border-white/10 px-4 py-3 space-y-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked === true })
                    }
                    className="mt-0.5 h-5 w-5 border-white/40 data-[state=checked]:bg-accent data-[state=checked]:border-accent shadow-[0_0_0_1px_rgba(0,0,0,0.9)]"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    {t("modal.consentLabel").replace(t("modal.privacyPolicy") + ".", "").replace("Privacy Policy.", "")}
                    <Link
                      to="/privacy"
                      className="text-accent underline-offset-2 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t("modal.privacyPolicy")}
                    </Link>
                    . <span className="text-accent">*</span>
                  </Label>
                </div>
                {errors.consent && <p className="text-xs text-red-400">{errors.consent}</p>}
                <p className="text-xs text-muted-foreground/80">
                  {t("modal.consentHelper")}
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-base font-medium disabled:opacity-50 btn-liquid"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t("modal.sending")}
                  </>
                ) : (
                  t("modal.submit")
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
