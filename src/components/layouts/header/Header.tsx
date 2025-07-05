import { ImageView } from "@/components/common";

export  function Header() {
  return (
    <header className="mb-[33px]">
      <div className=" container flex items-center justify-between">
        <ImageView src={"/assets/images/Logo.png"} alt={"Logo"} width={125} height={75} />

      </div>

    </header>
  )
}
