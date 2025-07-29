import Image from "next/image";

interface Props {
  src?: string | null;
  alt: string;
  width: number;
  height: number;
  classname?: string;
}
export function ImageView({ src = '', alt, width, height, classname = "" }: Props) {
  const imagesrc = src ? (src.startsWith('/uploads') ? "https://nest.navaxcollege.com" + src : src) : "";
  
    if (imagesrc.length >0) {
      return (
    <Image
      className={classname}
      src={imagesrc}
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
