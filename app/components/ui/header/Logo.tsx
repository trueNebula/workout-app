import Image from "next/image";

const Logo = () => {
  return (
    <div
      className="
      w-10
      h-10
      rounded-full
      gradient
      text-white
      text-xl
      font-bold
      flex
      gap-0.5
      justify-center
      items-center
      cursor-pointer
    "
    >
      {/* <span className="text-outline-light text-th-text-secondary">R</span>
      <span>R</span> */}
      <Image
        src="/logo-icon.png"
        width={32}
        height={32}
        alt="ReRacked Icon"
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
