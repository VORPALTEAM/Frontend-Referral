import { FooterLinkType } from "types";

const socials = [
    {
      label: "Twitter",
      icon: "Twitter",
      href: "https://twitter.com/VorpalDAO",
    },
    {
      label: "Telegram",
      icon: "Telegram",
      href: "https://t.me/VorpalAnnouncements",
    },
    {
      label: "Reddit",
      icon: "Reddit",
      href: "https://www.reddit.com/user/VorpalDAO",
    },
    {
      label: "Discord",
      icon: "Discord",
      href: "https://discord.gg/epUsWEPaDA",
    },
    {
        label: "Linkedin",
        icon: "Linkedin",
        href: "https://www.linkedin.com/company/vorpaldao",
    },
    {
        label: "Youtube",
        icon: "Youtube",
        href: "https://www.youtube.com/@vorpaldao",
    },
    {
        label: "Vimeo",
        icon: "Vimeo",
        href: "https://vimeo.com/vorpaldao",
    }
  ];

export const footerLinks: FooterLinkType[] = [
    {
      label: "About",
      items: [
        {
          label: "Contact",
          href: "",
        },
        {
          label: "Blog",
          href: "https://vorpaldao.medium.com/",
        },
        {
          label: "Community",
          href: "https://discord.gg/epUsWEPaDA",
        },
        {
          label: "VORPAL",
          href: "",
        },
        {
          label: "—",
        },
        {
          label: "Online Store",
          href: "",
          isHighlighted: true,
        },
      ],
    },
    {
      label: "Help",
      items: [
        {
          label: "Customer",
          href: "",
        },
        {
          label: "Troubleshooting",
          href: "",
        },
        {
          label: "Guides",
          href: "",
        },
      ],
    },
    {
      label: "Developers",
      items: [
        {
          label: "Github",
          href: "https://github.com/VORPALTEAM",
        },
        {
          label: "LitePaper",
          href: "https://drive.google.com/file/d/1cIb9qYmjKwp0Br5g-tJvyCzQ6V_5iW8T/view?usp=sharing",
        },
        {
          label: "Blog",
          href: "https://vorpaldao.medium.com/",
        },
        {
          label: "Audits",
          href: "",
        },
        {
          label: "Careers",
          href: "",
        },
      ],
    },
    {
        label: "Socials",
        items: socials
    }
  ];
  