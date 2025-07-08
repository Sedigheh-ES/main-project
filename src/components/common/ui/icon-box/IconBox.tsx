import Link from "next/link";

interface Props {
  icon: string;
  size?: number;
  link?: string;
  title?: string;
  hideTitleOnMobile?: boolean;
  badge?: number;
  linkClassName?: string;
  titleClassName?: string;
  path?:number
}
export function IconBox({ icon, size = 22, link, title, hideTitleOnMobile = false, badge = 0, linkClassName = '', titleClassName = '', path = 0 }: Props) {
  let span = [];
  for (let i = 1; i <= path; i++){
    span.push(<span className={`path${i}`}></span>)
  }
  return (
    <>
      {
        badge ?
          <div className="relative">
            <span className="absolute bg-green-600 rounded-full flex justify-center items-center text-white px-3 py-1 -top-[10px] -right-[10px]  w-[20px] h-[20px] text-sm">{badge}</span>
            <Link href={link ?? '#'} >
              <i className={`${icon} text-[${size}px] ${linkClassName}`}>
            {span}
            </i> </Link>
          </div>
          :

          <Link href={link ?? '#'} > <i className={`${icon} text-[${size}px]`}></i></Link>

      }

      {title && <div className={`${hideTitleOnMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName} ${linkClassName}`} > {title}</div>}

    </>


  )
}
