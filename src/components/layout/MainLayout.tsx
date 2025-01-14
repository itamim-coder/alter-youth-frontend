import { StickyNavbar } from "../nav/NavBar";

interface RootLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <header
          className="h-screen bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1050&q=80')",
          }}
        >
          <StickyNavbar />
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
              Welcome to Our Website
            </h1>
          </div>
        </header>
      </div>
      <main className="min-h-screen w-full max-w-7xl mx-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
