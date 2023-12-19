interface HeaderProps {
  mobileImg: string;
  tabletImg: string;
  desc: string;
}
const Header: React.FC<HeaderProps> = ({ mobileImg, tabletImg, desc }) => {
  return (
    <header className="relative h-auto mr-5 tablet:text-center mb-[60px] laptop:mr-0">
      <div className="relative w-full h-full">
        <picture className="w-full h-full">
          <source media="(max-width: 989px)" srcSet={mobileImg} />
          <source media="(min-width: 990px)" srcSet={tabletImg} />
          <img
            className="w-full h-auto object-cover object-left max-h-full overflow-hidden rounded-header"
            src={tabletImg}
            width={1240}
            height={421}
          />
        </picture>
      </div>

      <h1 className="text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 font-semibold absolute [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] ml-2 text-2xl top-3/4 tablet:ml-0 tablet:text-5xl laptop:text-5xl laptop:top-1/2 tablet:w-4/5 laptop:w-3/4 desktop:w-2/3 desktop:text-6xl">
        {desc}
      </h1>
    </header>
  );
};

export default Header;
