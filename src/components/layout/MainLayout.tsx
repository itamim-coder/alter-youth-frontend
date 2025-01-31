import { StickyNavbar } from "../nav/NavBar";
import heroImage from "../../../public/assets/images/hero_pc.jpg";
import { InputCustomStyles } from "../ui/Input";
import Count from "../ui/Count";

interface RootLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <header className=" relative  hero-bg ">
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-bl from-black to-transparent opacity-60"></div>
          <StickyNavbar />
          <div className="flex max-w-6xl mx-auto items-center justify-between h-full relative z-10 gap-60">
            {/* Left Div: Text Content */}
            <div className="">
              <h1 className="text-white text-4xl md:text-6xl font-semibold">
                Start your Scholarship
              </h1>
              <p className="mt-4 text-white text-lg">
                Directly for students in Government <br /> Primary Schools
                throughout Bangladesh
              </p>
            </div>

            {/* Right Div: Card with Input Field */}
            <div className=" bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-gray-800 text-xl font-semibold mb-4">
                Join the{" "}
                <span className="text-green-500">#alteryouthrevolution</span>
              </h2>
              <form>
                <div className="mb-4">
                  <InputCustomStyles type={"text"} placeholder={"Your Name"} />
                </div>
                <div className="mb-4">
                  <InputCustomStyles
                    type={"email"}
                    placeholder={"Your Email"}
                  />
                </div>
                <div className="mb-4">
                  <InputCustomStyles
                    type={"number"}
                    placeholder={"Your Number"}
                  />
                </div>
                <div className="">
                  <p className="font-semibold">Number of scholarships</p>
                  <Count />
                </div>
              </form>
            </div>
          </div>
        </header>
      </div>
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
