import { H1, Header } from "../StyledElement/StyledElement";

interface HeaderImgProps {
  mobileImg: string;
  tabletImg: string;
  desc: string;
}
const HeaderImg: React.FC<HeaderImgProps> = ({
  mobileImg,
  tabletImg,
  desc,
}) => {
  return (
    <Header
      xs="relative h-auto mr-5 mb-[60px]"
      md="md:text-center"
      lg="lg:mr-0"
    >
      <div className="relative w-full h-full">
        <picture className="w-full h-full">
          <source media="(max-width: 989px)" srcSet={mobileImg} />
          <source media="(min-width: 990px)" srcSet={tabletImg} />
          <img
            className="w-full h-auto object-cover object-left max-h-full overflow-hidden rounded-header filter brightness-75"
            src={tabletImg}
            width={1240}
            height={421}
          />
        </picture>
      </div>

      <H1
        xs={
          `absolute font-semibold left-1/2 ml-2 text-2xl w-full z-10 [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] ` +
          `transform -translate-x-1/2 -translate-y-1/2 top-3/4`
        }
        sm="sm:ml-0 sm:text-5xl sm:w-4/5"
        lg="lg:text-5xl lg:top-1/2 lg:w-3/4"
        xl="xl:w-2/3 xl:text-[54px]"
      >
        {desc}
      </H1>
    </Header>
  );
};

export default HeaderImg;
