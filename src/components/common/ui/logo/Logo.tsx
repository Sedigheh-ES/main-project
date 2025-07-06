import Link from "next/link";
import { ImageView } from "../../image-view";


export  function Logo() {
  return (
      <Link href={'/'}>
              <ImageView src={"/assets/images/Logo.png"} alt={"Logo"} width={242} height={66} />
      </Link>
  )
}
