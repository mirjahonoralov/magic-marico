import { stepDetailType, stepInfoType } from "src/types/pricingTypes";

import stepOneInfoImg from "@assets/stepOneInfoImg.png";
import emoji1 from "@assets/emoji/1.svg";
import emoji2 from "@assets/emoji/2.svg";
import emoji3 from "@assets/emoji/3.svg";

export const menus = [
  {
    path: "about",
    name: "About",
  },
  {
    path: "pricing",
    name: "Pricing",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "sign-in",
    name: "Sign In",
  },
];

export const stepInfo: stepInfoType[] = [
  {
    order: 1,
    title: "Connect Your Content",
    desc: "Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.",
    url: "/pricing",
  },
  {
    order: 2,
    title: "Share Your Homepage",
    desc: "Share your Wavium homepage link with your followers, and we'll handle the rest.",
  },
  {
    order: 3,
    title: "Send Emails & Text Messages",
    desc: "No more going through a social platform. Reach and engage your audience directly over email and text massage.",
  },
];

export const stepsDetailInfo: stepDetailType[] = [
  {
    name: "Your Homepage",
    title: "Your Content. All in",
    markedWord: "One Spot",
    descriptions: [
      "Bring all of your content together into one homepage.",
      "Your page automatically updates whenever you create.",
    ],
    demoUrl: "/pricing",
    startUrl: "/pricing",
    photo: stepOneInfoImg,
  },
  {
    name: "Create & Share",
    title: "Reach Your Audience",
    markedWord: "Directly.",
    descriptions: [
      "Embed content or create something new to share.",
      "Share content over email, text message or your homepage.",
    ],
    demoUrl: "/pricing",
    startUrl: "/pricing",
    photo: stepOneInfoImg,
  },
];

export const reasons = [
  {
    icon: emoji1,
    title: "Reduced Anxiety",
    desc: "Never worry about losing your audience.",
  },
  {
    icon: emoji2,
    title: "Lower Workload",
    desc: "Just share one link. We'll handle the rest.",
  },
  {
    icon: emoji3,
    title: "More Time",
    desc: "Spend less time on marketing tools",
  },
];
