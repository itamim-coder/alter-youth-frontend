import { StickyNavbar } from "../nav/NavBar";
import heroImage from "../../../public/assets/images/hero_pc.jpg";
import { InputCustomStyles } from "../ui/Input";

interface RootLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <header
          className="h-[85vh] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${heroImage.src})`, // Accessing the image URL directly
          }}
        >
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
                throughout
                Bangladesh
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
                  <InputCustomStyles />
              
                </div>
                <div className="mb-4">
                  <InputCustomStyles />
              
                </div>
                <div className="mb-4">
                  <InputCustomStyles />
              
                </div>
                <div className="mb-4">
                  <InputCustomStyles />
              
                </div>
                {/* <button
                  type="submit"
                  className=" bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Submit Application
                </button> */}
              </form>
            </div>
          </div>
        </header>
      </div>
      <main className="min-h-screen w-full max-w-7xl mx-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
