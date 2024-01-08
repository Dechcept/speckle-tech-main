import JobPosition from "../Components/career/JobPosition";

const Career = () => {
  return (
    <section className="">
      <div
        className="w-full bg-cover bg-center h-[400px] flex  items-center "
        style={{ backgroundImage: `url("/images/CareerPageTitle.webp")` }}
      >
        <div className="p-20 max-md:p-10">
          <div className=" text-white font-sans text-[56px] max-sm:text-[36px]  font-bold leading-[67.2px] max-sm:leading-[40px] tracking-[2.8px]">
            Grow your career with us
          </div>
          <div className="flex w-fit mt-10 px-8 py-4 max-sm:px-3 max-sm:py-3 justify-center font-medium items-center gap-2  rounded-xl bg-white">
            <h1 className="text-center font-sans text-base tracking-[0.8px]">
              Explore Current Opening
            </h1>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-center ">
          <div className="inline-flex items-start max-lg:items-center justify-center gap-6 my-20 max-lg:flex-col-reverse ">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col  gap-4  ">
                <h1 className="title">LIFE AT SPECKLE</h1>
                <p className="heading">We are focused on your ultimate goal</p>
              </div>
              <p className="para text-[#757575] max-sm:text-sm">
                Speckle Technologies Private Limited is established in 2019 for
                manufacturing speciality grade of Masterbatches for man-made
                fibre and filaments of Polyester (PES), Polyamide (PA) and
                Polypropylene (PP) Polymer. Speckle Technologies has experienced
                team, of having more than 25 years of experience in R&D and
                production of textile and plastic masterbatch business. The
                manufacturing facility is strategically located at Silvassa
                (D&NH DD) which is contributing India’s around 80% of polyester
                yarn production
              </p>
            </div>

            <div
              className="h-[396px] w-[466px]   max-md:w-[366px]  max-md:h-[311px] max-sm:w-full max-sm:bg-center bg-no-repeat  flex-shrink-0 flex justify-center items-center rounded-2xl bg-slate-200 bg-opacity-10"
              style={{ backgroundImage: `url("/images/imageCareer.webp")` }}
            >
              <img
                src="/images/play-circle.webp"
                alt="#img"
                className="h-20 w-20 rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end mb-40 ml-10 max-xl:hidden">
            <img
              src="/images/Ellipse2.webp"
              className="h-[55px] w-[55px]"
              alt="#img"
            />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center gap-[64px] ">
            <div className="fles flex-col items-center gap-6">
              <h1 className="title mb-3">OPEN POSITION</h1>
              <p className="w-[588px] max-sm:w-full heading">
                Job opportunities for you
              </p>
            </div>
            <div className="w-full">
              <JobPosition />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
