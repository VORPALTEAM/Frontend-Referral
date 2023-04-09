import { AnchorHTMLAttributes, HTMLAttributes, SVGAttributes } from "react";
import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  SpaceProps,
  GridProps as _GridProps,
} from "styled-system";

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    HTMLAttributes<HTMLDivElement> {}

export interface FlexProps extends BoxProps, FlexboxProps {}

export interface GridProps extends FlexProps, _GridProps {}

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
    color?: string;
    fontSize?: string;
    fontFamily?: string;
    bold?: boolean;
    small?: boolean;
    ellipsis?: boolean;
    textTransform?: "uppercase" | "lowercase" | "capitalize";
  }
  

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
  }

export type stringAction = {
    type: string,
    payload: string
}

export type numberAction = {
    type: string,
    payload: number
}

export type stringArrAction = {
    type: string,
    payload: string[]
  }

export type FooterLinkType = {
    label: string;
    items: { label: string; href?: string; isHighlighted?: boolean }[];  
}

export type FooterProps = {
    items: FooterLinkType[];
    buyCakeLabel: string;
    isDark: boolean;
    toggleTheme: (isDark: boolean) => void;
    cakePriceUsd?: number;
    currentLang: string;
} & FlexProps;

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
    spin?: boolean;
  }
  
export type IconComponentType = {
    iconName: string;
    isActive?: boolean;
    height?: string;
    width?: string;
    activeColor?: string;
    activeBackgroundColor?: string;
  } & SvgProps;

export type PromoItemData = {
    id: number,
    icon: string,
    heading: string,
    description: string,
    expHeading: string,
    expDescription: string,
    expLink: string,
    expLinkText: string,
    textIcon: boolean
}

export type MediaQueries = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    nav: string;
    mobile: string;
    pc: string;
  };

export type KPI = {
   refNumber: number;
   balanceLocked: number;
   balanceAvailable: number;
}

export type KPIAction = {
   type: string;
   payload: KPI
}

export type modals = 'none' | 'generate' | 'withdraw' | "link" | "note" | "history"