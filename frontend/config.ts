import Placeholder1 from "@/assets/placeholders/bear-1.png";
import Placeholder2 from "@/assets/placeholders/bear-2.png";
import Placeholder3 from "@/assets/placeholders/bear-3.png";

export const config: Config = {
  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com/",
    discord: "https://discord.com",
    homepage: "/",
  },

  defaultCollection: {
    name: "Scholarship Programs",
    description: "A blockchain-powered platform for managing transparent and secure scholarship programs.",
    image: Placeholder1,
  },

  ourStory: {
    title: "Our Story",
    subTitle: "Innovative Scholarship Platform on Aptos",
    description:
      "Welcome to Aptos Scholarships, where we bridge the gap between ambition and opportunity. Our blockchain-powered scholarship platform revolutionizes how students and donors connect, ensuring transparency, security, and fairness in the distribution of educational funds. Join us and be a part of a community committed to fostering the leaders of tomorrow.",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3],
  },

  ourTeam: {
    title: "Our Team",
    members: [
      {
        name: "Alex",
        role: "Blockchain Developer",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },
      {
        name: "Jordan",
        role: "Marketing Specialist",
        img: Placeholder2,
      },
      {
        name: "Taylor",
        role: "Community Manager",
        img: Placeholder3,
        socials: {
          twitter: "https://twitter.com",
        },
      },
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "Is this project free for creators and applicants?",
        description:
          "Yes! This project is completely free to use, and you can create as many scholarships as you want.",
      },
      {
        title: "How to create scholarships?",
        description:
          "To create a scholarship, first, initialize the scholarship from the Scholarship Provider Dashboard. Then you can create scholarships by filling out the form and submitting it. Make sure to fill the form correctly, as it is not reversible.",
      },
      {
        title: "How does the distribution of scholarships work?",
        description:
          "It's really simple! Once you successfully apply for a scholarship and your GPA is above the required threshold, you will receive the scholarship amount in your account.",
      },
      {
        title: "Can I get my money back after the scholarship distribution?",
        description:
          "You will receive your full refund if you close the scholarship or after the distribution of the scholarship, the remaining funds will be returned to you.",
      },
      {
        title: "What if I want to close a scholarship for some reason?",
        description:
          "We anticipated this need when building the platform. You can close any scholarships you've created, and once closed, the remaining funds will be returned to your account.",
      },
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3],
};

export interface Config {
  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
