import Button from "./Button"

const SiteHeader = () => {
  return (
    <header className="pt-7 pb-8 bg-gradient-to-r from-[#D52047]/80 to-[#EE3D1B]/80 ">
      <div className="container px-32">
        <div className="flex justify-between items-center">
          <a className="flex gap-2 items-center font-[700] text-white tracking-wider" href="/index.html">
            <img src="/Vector.svg" alt="Cloud logo"/>
            CLOUDBUDGET
          </a>

          <nav>
            <ul className="flex justify-between items-center gap-3 font-[400] font-lato text-sm text-white tracking-wider">
              <li>
                <a href="#">OVERVIEW</a>
                </li>
              <li>
                <a href="#">FEATURES</a>
                </li>
              <li>
                <a href="#">TECHNOLOGY</a>
                </li>
              <li>
                <a href="#">CONTACT</a>
                </li>
              <li>
                <a href="#">SIGN UP</a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-5">
            <div className="flex justify-between items-center gap-3">
              <img src="/emojione-flag-for-flag-united-states.svg" width={32} alt="" />
              <select className="text-sm bg-transparent font-normal text-white">
                <option value="en">EN</option>
              </select>
            </div>

            <Button>LOGIN</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
