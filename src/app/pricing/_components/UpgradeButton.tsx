import { Zap } from "lucide-react";
import Link from "next/link";

export default function UpgradeButton() {

    const  CHECKOUT_URL = "https://codewithansh.lemonsqueezy.com/buy/52a97a0b-e7a0-43f4-bb3c-a535135e7c87"

  return (
    <Link
      href={CHECKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}