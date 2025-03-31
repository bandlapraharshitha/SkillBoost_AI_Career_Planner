import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];
export const testimonials = [
  {
    user: "Aisha Khan",
    company: "CareerSpark Innovations",
    image: user1,
    text: "This tool pinpointed my skills and suggested perfect career paths. I'm now in a role I love!",
  },
  {
    user: "Arnav Patel",
    company: "SkillBridge Solutions",
    image: user2,
    text: "I was struggling to articulate my skills. This tool provided a clear, concise breakdown, and the job recommendations were incredibly relevant. It's like having a personal career advisor!",
  },
  {
    user: "Divya Reddy",
    company: "JobSight Analytics",
    image: user3,
    text: "The speed and accuracy of this tool are remarkable. It saved me countless hours of research and helped me focus on the most promising opportunities. Highly recommended for any job seeker!",
  },
  {
    user: "Kunal Sharma",
    company: "CareerWise Dynamics",
    image: user4,
    text: "I was impressed by the detailed analysis of my resume. The tool's insights into my transferable skills and industry trends were invaluable. It's a must-have for career advancement.",
  },
  {
    user: "Sneha Menon",
    company: "TalentMatch Creations",
    image: user5,
    text: "Personalized recommendations improved my job search significantly.",
  },
  {
    user: "Vikram Singh",
    company: "FuturePath Systems",
    image: user6,
    text: "This tool pinpointed my skills and suggested perfect career paths. I'm now in a role I love!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
     "The tool's efficiency is remarkable. It quickly analyzed my resume and provided insightful career recommendations, saving me a lot of time and effort. A must-have for any job seeker.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "For a recent graduate like me, this tool was a lifesaver. It helped me understand my skills and how to present them effectively. I feel much more prepared for the job market, thanks to this tool.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "I'm amazed at how accurately this tool identified my skills. The personalized recommendations were perfect, and I've already seen positive results in my job search. Highly recommended!",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Basic Resume Analysis",
      "Skill Identification Report",
      "Limited Career Suggestions",
      "Standard Support",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Advanced Resume Analysis",
      "Detailed Skill Breakdown",
      "Career Recommendations",
      "Resume Template Library",
    ],
    mostPopular: true,
  },
  {
    title: "Professional",
    price: "$50",
    features: [
      "Career Assessment",
      "In-Depth Skill Matching",
      "Industry Trend Reports",
      "Unlimited Resume Revisions",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
