import { Tw } from "@/types/tailwindest";

type TailwindClassName = Tw[keyof Tw];

interface StyledElementProps {
  xs?: TailwindClassName | string;
  sm?: TailwindClassName | string;
  md?: TailwindClassName | string;
  lg?: TailwindClassName | string;
  xl?: TailwindClassName | string;
  children: React.ReactNode;
}

type StyledElementPropsWithTag = StyledElementProps & {
  Tag: keyof JSX.IntrinsicElements;
};

const StyledElement: React.FC<StyledElementPropsWithTag> = ({
  Tag,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  const classNames = `${xs ?? ""} ${sm ?? ""} ${md ?? ""} ${lg ?? ""} ${
    xl ?? ""
  }`;

  return <Tag className={classNames}>{children}</Tag>;
};

type StyledElementComponent = React.FC<StyledElementProps>;

const createStyledElementComponent = <T extends keyof JSX.IntrinsicElements>(
  tag: T
): StyledElementComponent => {
  const StyledComponent: StyledElementComponent = (props) => {
    return <StyledElement Tag={tag} {...props} />;
  };

  StyledComponent.displayName = `Styled${tag}`;
  return StyledComponent;
};

const Body = createStyledElementComponent("body");
const Nav = createStyledElementComponent("nav");
const Header = createStyledElementComponent("header");
const Section = createStyledElementComponent("section");
const Div = createStyledElementComponent("div");
const Span = createStyledElementComponent("span");
const H1 = createStyledElementComponent("h1");
const H2 = createStyledElementComponent("h2");
const H3 = createStyledElementComponent("h3");
const P = createStyledElementComponent("p");
const Ul = createStyledElementComponent("ul");

export { Body, Div, Span, Header, Nav, Section, H1, H2, H3, P, Ul };
export type { StyledElementProps };
