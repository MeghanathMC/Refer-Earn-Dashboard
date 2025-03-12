"use client";

import { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/Components/ui/accordion";
// import { Button } from "@/components/ui/button";
import { Button } from "../Components/ui/button";
import { toast } from "sonner";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ReferralScreen: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const referralCode: string = "ABCDG123";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast("Copied to Clipboard",{
    
      description: "Referral code has been copied to clipboard",
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto w-full max-w-[375px] overflow-hidden rounded-[40px] bg-white shadow-xl">
      {/* Phone notch */}
      <div className="absolute left-1/2 top-0 h-7 w-1/3 -translate-x-1/2 rounded-b-xl bg-black"></div>

      {/* Purple gradient header */}
      <div className="relative bg-gradient-to-b from-purple-500 to-purple-600 px-6 pb-10 pt-14 text-center text-white">
        <h1 className="mb-5 text-3xl font-bold">
          Refer your friends
          <br />
          and Earn
        </h1>

        {/* Gift box and points */}
        <div className="relative mx-auto mb-2">
          {/* Scattered coins */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="absolute h-5 w-5 rounded-full bg-yellow-400"></div>
          ))}

          {/* Gift box */}
          {/* <div className="relative mx-auto mb-4 h-24 w-24">
            <div className="absolute h-full w-full rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg"></div>
          </div> */}

          {/* <div className="relative mx-auto mb-6">
          <DotLottieReact
            src="https://lottie.host/d86d61ec-a07e-4587-bddb-64efbb019f92/o1RUkGENQr.lottie"
            loop
            autoplay
          />
        </div> */}
          <div className="relative mx-auto mb-3 size-70">
          <DotLottieReact
      src="https://lottie.host/59b4bce8-7c03-4980-a195-e062c6aab5f5/Oc0J28ThrP.lottie"
      loop
      autoplay
    />
        
        </div>

          <div className="relative flex flex-col items-center">
            <div className="flex items-center gap-1">
              <div className="h-5 w-5 rounded-full bg-yellow-400 shadow-md"></div>
              <span className="text-4xl font-bold">1000</span>
            </div>
            <p className="text-m font-medium">Real Cash</p>
          </div>
        </div>

        {/* Referral code section */}
        <div className="relative mx-auto mb-4 w-full max-w-[280px]">
          <div className="border-t-2 border-dashed border-white/50"></div>
          <div className="flex items-center justify-between rounded-lg bg-purple-700 p-3">
            <div>
              <p className="text-xs text-purple-200">Your referral code</p>
              <p className="text-xl font-bold">{referralCode}</p>
            </div>
            <Button onClick={copyToClipboard}  variant="ghost"  className={`h-auto rounded-md px-3 py-1 text-xs font-medium text-white 
         ${copied ? "bg-green-600" : "bg-purple-600"} hover:bg-purple-500`}>
          {copied ? "Copied!" : "Copy Code"}
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white px-6 py-8 border rounded-lg" >
          <h2 className="mb-4 text-lg font-bold text-gray-800">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left font-medium text-gray-700">
                What is Tap Academy's Referral and Earn Program?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
                The Refer and Earn Program lets you earn real cash or discounts by inviting your friends to join our training batches. When your friend enrolls using your referral link, both of you get exciting rewards!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left font-medium text-gray-700">How does referral process work?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
              It’s simple! Share your unique referral link with your friends. When they sign up and enroll in a batch using your link, they get a discount on their course fee — and you earn real cash or cashback on your training fee.
              </AccordionContent>
            </AccordionItem>

            


            <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left font-medium text-gray-700">
              How much can I earn through referrals?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
              There’s no limit! For every friend who joins using your referral link, you earn a set cashback or discount. The more friends you refer, the more rewards you collect!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left font-medium text-gray-700"> When will I receive my referral rewards?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
              You’ll receive your rewards once your friend’s enrollment and payment are successfully completed. Rewards are either added as cashback to your account or deducted from your pending course fee.
              </AccordionContent>
              
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left font-medium text-gray-700">  Can my friend get a discount too?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
              Yes! Your friend also gets an instant discount on their course fee when they use your referral link to enroll in our training batch.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ReferralScreen;
