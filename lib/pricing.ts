export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  popular?: boolean;
  color?: string;
  border?: string;
  highlight?: boolean;
  cta?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Retail",
    price: "₹1,999",
    period: "/month",
    desc: "Perfect for individual traders starting with automation.",
    features: [
      "1 Active Strategy",
      "TradingView Webhooks",
      "1 Broker Connection",
      "Standard Support"
    ],
    color: "text-primary",
    border: "border-white/[0.08]",
    cta: "Start Free Trial",
    highlight: false,
    popular: false
  },
  {
    name: "Professional",
    price: "₹4,999",
    period: "/month",
    desc: "For serious traders managing multiple strategies.",
    features: [
      "5 Active Strategies",
      "Python Strategy Bridge",
      "3 Broker Connections",
      "Priority Support",
      "Backtesting Access"
    ],
    color: "text-primary",
    border: "border-primary/45",
    cta: "Start Free Trial",
    highlight: true,
    popular: true
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    desc: "Custom infrastructure for sub-brokers and firms.",
    features: [
      "Unlimited Strategies",
      "White Label Options",
      "Multi-client Management",
      "24/7 Dedicated Support",
      "Custom API Development"
    ],
    color: "text-secondary",
    border: "border-white/[0.08]",
    cta: "Contact Sales",
    highlight: false,
    popular: false
  }
];
