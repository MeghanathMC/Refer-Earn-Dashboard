import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { toast } from "sonner";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (referralData: ReferralData) => void;
}

export interface ReferralData {
  friendName: string;
  friendEmail: string;
  friendPhone: string;
  courseName: string;
  referralCode: string;
}

interface ValidationErrors {
  friendName?: string;
  friendEmail?: string;
  friendPhone?: string;
  courseName?: string;
}

export function ReferralModal({ isOpen, onClose, onSubmit }: ReferralModalProps) {
  const [formData, setFormData] = useState<ReferralData>({
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    courseName: "",
    referralCode: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Name validation
    if (formData.friendName.trim().length < 3) {
      newErrors.friendName = "Name must be at least 3 characters long";
    }
    if (!/^[a-zA-Z\s]*$/.test(formData.friendName)) {
      newErrors.friendName = "Name should only contain letters and spaces";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.friendEmail)) {
      newErrors.friendEmail = "Please enter a valid email address";
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(formData.friendPhone)) {
      newErrors.friendPhone = "Phone number must be 10 digits";
    }

    // Course validation
    if (!formData.courseName) {
      newErrors.courseName = "Please select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateReferralCode = async () => {
    if (!validateForm()) {
      toast.error("Please fix the errors before generating code");
      return;
    }

    setIsGenerating(true);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    
    // Animated code generation
    for (let i = 0; i < 7; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
      setFormData(prev => ({ ...prev, referralCode: code }));
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    setIsGenerating(false);
    toast.success("Referral code generated successfully!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && formData.referralCode) {
      onSubmit(formData);
      onClose();
      toast.success("Referral details submitted successfully!");
    } else if (!formData.referralCode) {
      toast.error("Please generate a referral code first");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] w-[95%] max-h-[90vh] overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed !m-0 p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-blue-600">
            Refer a Friend
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 mt-4 sm:mt-6">
          {/* Friend's Name Input */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center">
              Friend's Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter friend's full name"
              className={`w-full rounded-lg border ${
                errors.friendName ? 'border-red-500' : 'border-gray-300'
              } px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
              value={formData.friendName}
              onChange={(e) =>
                setFormData({ ...formData, friendName: e.target.value })
              }
            />
            {errors.friendName && (
              <p className="text-red-500 text-[10px] sm:text-xs mt-1 animate-slideDown">{errors.friendName}</p>
            )}
          </div>

          {/* Friend's Email Input */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center">
              Friend's Email
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="Enter friend's email"
              className={`w-full rounded-lg border ${
                errors.friendEmail ? 'border-red-500' : 'border-gray-300'
              } px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
              value={formData.friendEmail}
              onChange={(e) =>
                setFormData({ ...formData, friendEmail: e.target.value })
              }
            />
            {errors.friendEmail && (
              <p className="text-red-500 text-[10px] sm:text-xs mt-1 animate-slideDown">{errors.friendEmail}</p>
            )}
          </div>

          {/* Friend's Phone Input */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center">
              Friend's Phone Number
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              required
              maxLength={10}
              placeholder="Enter 10-digit phone number"
              className={`w-full rounded-lg border ${
                errors.friendPhone ? 'border-red-500' : 'border-gray-300'
              } px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
              value={formData.friendPhone}
              onChange={(e) =>
                setFormData({ ...formData, friendPhone: e.target.value.replace(/\D/g, '').slice(0, 10) })
              }
            />
            {errors.friendPhone && (
              <p className="text-red-500 text-[10px] sm:text-xs mt-1 animate-slideDown">{errors.friendPhone}</p>
            )}
          </div>

          {/* Course Selection */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center">
              Course Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              required
              className={`w-full rounded-lg border ${
                errors.courseName ? 'border-red-500' : 'border-gray-300'
              } px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white`}
              value={formData.courseName}
              onChange={(e) =>
                setFormData({ ...formData, courseName: e.target.value })
              }
            >
              <option value="">Select a course</option>
              <option value="Full Stack Development">Java Full Stack Development</option>
              <option value="Data Science">Python</option>
              <option value="Cloud Computing">Cloud Computing</option>
              {/* <option value="Artificial Intelligence">Artificial Intelligenc</option> */}
            </select>
            {errors.courseName && (
              <p className="text-red-500 text-[10px] sm:text-xs mt-1 animate-slideDown">{errors.courseName}</p>
            )}
          </div>

          {/* Generate Code Button */}
          <div className="flex justify-center pt-2 sm:pt-3">
            <Button
              type="button"
              onClick={generateReferralCode}
              disabled={isGenerating}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-102 active:scale-98 font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {isGenerating ? "Generating..." : "Generate Referral Code"}
            </Button>
          </div>

          {/* Generated Code Display */}
          {formData.referralCode && (
            <div className="animate-slideUp p-3 sm:p-4 bg-blue-50 rounded-lg text-center border border-blue-100">
              <p className="text-xs sm:text-sm text-blue-600 font-medium">Generated Referral Code:</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-700 mt-1 tracking-wider animate-fadeIn">
                {formData.referralCode}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-3 sm:pt-4">
            <Button
              type="submit"
              className="w-full bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-102 active:scale-98 font-medium shadow-md hover:shadow-lg"
            >
              Done
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 