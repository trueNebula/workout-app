import Container from "./Container";

interface BarContainerProps {
  className: String;
  borderPlacement: String;
  children: React.ReactNode;
}

const BarContainer: React.FC<BarContainerProps> = ({
  className,
  borderPlacement,
  children,
}) => {
  return (
    <div className={`${className} w-full bg-th-background z-10 shadow-sm`}>
      <div
        className={`

      border-${borderPlacement}-[1px]
      border-neutral-800
      `}
      >
        <Container>
          <ul
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
            px-5
          "
          >
            {children}
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default BarContainer;
