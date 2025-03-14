"use client"

import { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/Components/ui/accordion";
import { Button } from "../Components/ui/button";
import { toast } from "sonner";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ReferralModal, ReferralData } from "./ReferralModal/ReferralModal";
import { motion } from "framer-motion";

export default function ReferralScreen() {
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasGeneratedCode, setHasGeneratedCode] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast("Copied to Clipboard", {
      description: "Referral code has been copied to clipboard",
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReferralSubmit = (data: ReferralData) => {
    setReferralCode(data.referralCode);
    setHasGeneratedCode(true);
    toast("Referral Code Generated", {
      description: "Your referral code has been generated successfully!",
      duration: 3000,
    });
  };

  return (
    <div className="flex justify-center w-full min-h-screen pt-4">
      <div className="w-full max-w-[345px] overflow-hidden bg-white shadow-sm">
        <div className="relative bg-gradient-to-l from-blue-600 to-blue-400 px-6 pt-6 pb-7 text-center text-white">
          <h1 className="mb-6 text-2xl font-bold">
            Refer your friends
            <br />
            and Earn
          </h1>

          {/* Gift box and points */}
          <div className="relative mx-auto mb-6">
            {/* Scattered coins */}
            <div className="absolute -left-16 -top-4 h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="absolute -right-20 top-6 h-2 w-2 rounded-full bg-yellow-400"></div>
            <div className="absolute left-16 -top-8 h-2 w-2 rounded-full bg-yellow-400"></div>
            <div className="absolute right-4 -top-12 h-4 w-4 rounded-full bg-yellow-400"></div>
            <div className="absolute -left-12 top-16 h-3 w-3 rounded-full bg-yellow-400"></div>

            {/* Improved gift box
            <div className="relative mx-auto mb-4 h-24 w-24">
              <div className="absolute h-full w-full rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg"></div>
              <div className="absolute left-0 right-0 top-0 h-full w-full border-b-8 border-r-8 border-yellow-600/30 rounded-lg"></div>
              <div className="absolute left-1/2 top-0 h-8 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-purple-500"></div>
              {/* <div className="absolute left-1/2 top-0 h-16 w-1 -translate-x-1/2 border-r-4 border-purple-500"></div> */}


                {/* coins falling */}
              {/* <div className="relative mx-auto mb-6">
          <DotLottieReact
              src="https://lottie.host/d86d61ec-a07e-4587-bddb-64efbb019f92/o1RUkGENQr.lottie"
              loop
              autoplay
            />
          </div>  */}
            <div className="relative mx-auto mb-3 size-70">
            <DotLottieReact
        src="https://lottie.host/59b4bce8-7c03-4980-a195-e062c6aab5f5/Oc0J28ThrP.lottie"
        loop
        autoplay/></div> 


            <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-1">
                <i className="fi fi-bs-indian-rupee-sign text-2xl"></i>
                <i className="fi fi-bs-indian-rupee-sign text-2xl"></i>
                <i className="fi fi-bs-indian-rupee-sign text-2xl"></i>
                <span className="text-3xl font-bold"></span>
              </div>
              <p className="text-sm font-medium">Get Real Cash</p>
            </div>

            {/* Additional scattered coins */}
            <div className="absolute -right-10 bottom-0 h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="absolute left-4 bottom-2 h-2 w-2 rounded-full bg-yellow-400"></div>
            <div className="absolute right-16 bottom-6 h-4 w-4 rounded-full bg-yellow-400"></div>
          </div>

          {/* Explanation text */}
          <p className="mb-6 text-sm font-bold">
            Invite your friends to Join Tap Academy
            <br />
            and, Earn Exciting Rewards!
          </p>

          {hasGeneratedCode ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mx-auto mb-4 w-full max-w-[280px]"
            >
              <div className="flex items-center justify-between rounded-lg bg-white p-3">
                <div className="text-black">
                  <p className="text-xs">Your referral code</p>
                  <p className="text-xl font-bold">{referralCode}</p>
                </div>
                <Button
                  onClick={copyToClipboard}
                  variant="ghost"
                  className={`h-auto rounded-md px-3 py-1 text-xs font-medium text-black border border-black
                    ${copied ? "bg-green-300 border-green-400" : "bg-blue-200"} hover:bg-blue-400`}
                >
                  {copied ? "Copied!" : "Copy Code"}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center mb-4"
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium"
              >
                Refer Now
              </Button>
            </motion.div>
          )}

          {hasGeneratedCode && (
            <>
              <p className="mb-3 text-sm">Share your Referral Code via</p>
              <div className="mx-auto flex max-w-[280px] justify-center gap-2">
                <Button className="h-8 rounded-full bg-[#6494fc] px-2 py-1 text-sm text-white hover:bg-[#0077b5]">
                  <i className="fi fi-brands-telegram text-lg"></i>
                  Telegram
                </Button>

                <Button className="h-8 rounded-full bg-[#1877f2] px-2 py-1 text-sm text-white hover:bg-[#166fe5]">
                  <i className="fi fi-brands-facebook text-lg"></i>
                  Facebook
                </Button>

                <Button className="h-8 rounded-full bg-[#25d366] px-2 py-1 text-sm text-white hover:bg-[#128c7e]">
                  <i className="fi fi-brands-whatsapp text-lg"></i>
                  WhatsApp
                </Button>
              </div>
            </>
          )}
        </div>

        {/* How does it work section */}
        <div className="bg-white px-8 py-6 mt-2 relative">
          <h2 className="mb-6 text-lg font-bold text-gray-800">How Does it Work?</h2>
          <div className="space-y-8 relative">
            {/* Dotted line connector */}
            <div className="absolute left-5 top-[44px] h-[120px] w-0 border-l-2 border-dashed border-blue-300"></div>

            {/* Step 1 */}
            <div className="flex items-start gap-2 relative z-10">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 shadow-sm">
                  <i className="fi fi-rr-key text-lg text-blue-600"></i>
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-sm font-medium text-gray-800">Refer your friend by sharing your unique referral code</h3>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-2 relative z-8">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 shadow-sm">
                  <i className="fi fi-rr-people-roof text-lg text-blue-600"></i>
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-sm font-medium text-gray-800">Your friend joins the Tap Academy Program with the referred code</h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-2 relative z-8">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 shadow-sm">
                  <i className="fi fi-ts-sack-dollar text-lg text-blue-600"></i>
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-sm font-medium text-gray-800">You get ₹1000 discount from your due amount</h3>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white px-9 h-max pb-0 mt-2">
          <h2 className="mb-2 pt-4 text-lg font-bold text-gray-800">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium text-gray-700 py-2.5">
                What is Tap Academy's Referral <br /> and Earn Program?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pb-2.5">
                The Refer and Earn Program lets you earn real cash or discounts by inviting your friends to join our training batches. When your friend enrolls using your referral link, both of you get exciting rewards!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium text-gray-700 py-2.5">How does referral process work?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pb-2.5">
              It's simple! Share your unique referral link with your friends. When they sign up and enroll in a batch using your link, they get a discount on their course fee — and you earn real cash or cashback on your training fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium text-gray-700 py-2.5">
              How much can I earn through referrals?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pb-2.5">
              There's no limit! For every friend who joins using your referral link, you earn a set cashback or discount. The more friends you refer, the more rewards you collect!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium text-gray-700 py-2.5">When will I receive my referral rewards?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pb-2.5">
              You'll receive your rewards once your friend's enrollment and payment are successfully completed. Rewards are either added as cashback to your account or deducted from your pending course fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium text-gray-700 py-2.5">Can my friend get a discount too?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pb-2.5">
              Yes! Your friend also gets an instant discount on their course fee when they use your referral link to enroll in our training batch.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>

      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReferralSubmit}
      />
    </div>
  )
}

