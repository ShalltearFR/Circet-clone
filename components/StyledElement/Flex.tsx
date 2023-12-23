import { StyledElementProps } from "./StyledElement";

type FlexProps = {
  column?: boolean;
  row?: boolean;
  rowReverse?: boolean;
  colReverse?: boolean;
  grow?: boolean;
  grow0?: boolean;
  shrink?: boolean;
  shrink0?: boolean;
  wrap?: boolean;
  wrapReverse?: boolean;
  noWrap?: boolean;
  flex1?: boolean;
  flexAuto?: boolean;
  flexNone?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & StyledElementProps;


const Flex: React.FC<FlexProps> = ({
  column,
  row,
  rowReverse,
  colReverse,
  grow,
  grow0,
  shrink,
  shrink0,
  wrap,
  wrapReverse,
  noWrap,
  flex1,
  flexAuto,
  flexNone,
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  const classNames = `${xs ?? ""} ${sm ?? ""} ${md ?? ""} ${lg ?? ""} ${xl ?? ""}`;

  return (
    <div
      className={`flex${column ? " flex-col" : ""}${row ? " flex-row" : ""}${
        rowReverse ? " flex-row-reverse" : ""
      }${colReverse ? " flex-col-reverse" : ""}${colReverse ? " flex-" : ""}${
        grow ? " flex-grow" : ""
      }${grow0 ? " flex-grow-0" : ""}${shrink ? " flex-shrink" : ""}${
        shrink0 ? " flex-shrink-0" : ""
      }${wrap ? " flex-wrap" : ""}${wrapReverse ? " flex-wrap-reverse" : ""}${
        noWrap ? " flex-nowrap" : ""
      }${flex1 ? " flex-1" : ""}${flexAuto ? " flex-auto" : ""}${
        flexNone ? " flex-none" : ""
      } ${classNames}
    `}
    >
      {children}
    </div>
  );
};

export default Flex;
