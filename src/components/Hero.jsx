import Button from "./Button"

const Hero = () => {
  return (
    <section className="py-44 bg-gradient-to-r from-[#D52047]/80 to-[#EE3D1B]/80 ">
        <div className="container">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[72px] text-white mb-10">CLOUDBUDGET</h1>
                <p className="text-white text-[24px] font-[500] w-[500px] text-center mb-10">
                    Cloud budget management for everyone. Only <br /> €69.95 a Month After a 7 Day Trial of <br /> Up to €4.99
                </p>
                <Button className={`bg-white text-[#f24b5c] text-sm font-[600] py-4 px-[52px]`}>SING UP</Button>
            </div>
        </div>
    </section>
  )
}

export default Hero
