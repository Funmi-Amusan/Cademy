// import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      {/* <Header /> */}
      <div className="flex h-full">
        <Sidebar />
        <main className="grow bg-[#F4F6F6] overflow-scroll">
          <div className="py-6">
            <div className="mx-auto px-1 sm:px-6 md:px-4">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
