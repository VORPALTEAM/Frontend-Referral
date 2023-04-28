import { PromoItemData } from "types";

export const steps : PromoItemData[] = [
    {
        id: 1,
        icon: "/images/referral/promo/step_one.png",
        heading: "Get a referral link",
        description: "Connect a wallet and generate your referral link in the Referral section",
        expHeading: "Farms Referral Rewards",
        expDescription: "Gain 5% from your friends earnings on Farms! Your rewards will be displayed on the referral balance at the moment your invited friends withdraw their earned Vorpal tokens",
        expLink: "/",
        expLinkText: "Read more",
        textIcon: true
    },
    {
        id: 2,
        icon: "/images/referral/promo/step_two.png",
        heading: "Invite friends",
        description: "Invite your friends to register via your referral link",
        expHeading: "Launchpools Referral Rewards",
        expDescription: "Get 5% of from friends’ profit obtained in Launchpools! The reward is only valid for the pool in which BSW is staked in return for more VRP",
        expLink: "/",
        expLinkText: "Read more",
        textIcon: true
    },
    {
        id: 3,
        icon: "/images/referral/promo/step_three.png",
        heading: "Earn crypto",
        description: "Receive referral rewards in Vorpal tokens from your friends’ VRP and VAO buyings",
        expHeading: "Swaps Referral Rewards",
        expDescription: "Get 3% from friends’ investments each time your friend makes a buying! Receive your reward through vesting the same as he",
        expLink: "/",
        expLinkText: "Read more",
        textIcon: true
    }
]