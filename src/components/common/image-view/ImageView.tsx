import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  classname?: string;
}
export function ImageView({ src='', alt, width, height, classname = "" }: Props) {
  const isRemote = src.substring(0,8) === "/uploads";
    if (src.length > 0) {
      return (
    <Image
      className={classname}
      src={`${isRemote ? "https://nest.navaxcollege.com" + src : src}`}
      alt={alt}
      width={width}
      height={height}
    />)
  } else
    return (
      <Image
        className={classname}
        src={"/assets/images/logo.png"}
        alt={alt}
        width={width}
        height={height}
      />
    );
}
