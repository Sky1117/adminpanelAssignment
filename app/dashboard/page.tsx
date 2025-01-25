"use client";
import { useRouter } from "next/navigation";
import AuthWrapper from "../../components/AuthWrapper";
import logo from "../../Img/logo.png";
export default function Dashboard() {
  const router = useRouter();
  return (
    <AuthWrapper>
      <div className="min-h-screen bg-custom-background p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl h-[650px] bg-gray-100 bg-opacity-80 rounded-lg shadow-xl flex overflow-hidden justify-center  ">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg px-12 my-6">
            <div className="text-center">
              <div className="w-50 h-50 mx-auto mb-6">
                <img
                  src={logo.src}
                  alt="Free Shops Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">Welcome</h1>
              <p className="text-[#FF7070] font-medium mb-2">
                to the Free Shops App Admin Panel
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Manage and monitor all aspects of your app seamlessly from one
                place. Use the tools below to get started.
              </p>
              <button
                className="bg-[#00B5B5] text-white px-6 py-2 rounded-md hover:bg-[#009999] transition-colors"
                onClick={() => {
                  router.push("/history");
                }}
              >
                Get Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
