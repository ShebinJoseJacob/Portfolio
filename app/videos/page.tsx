import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Videos from "@/components/Videos";

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <main className="pt-20">
        <Videos />
      </main>
      <Footer />
    </div>
  );
}
