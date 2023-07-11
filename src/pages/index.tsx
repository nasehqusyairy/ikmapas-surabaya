import MainFooter from "@/components/footers/mainFooter";
import NewsSection from "@/components/landing/newsSection";
import AboutSection from "@/components/landing/aboutSection";
import ContactSection from "@/components/landing/contactSection";
import GallerySection from "@/components/landing/gallerySection";
import HeroSection from "@/components/landing/heroSection";
import MainNavbar from "@/components/navbars/navbarLayout";
import ProfileVideoSection from "@/components/landing/profileVideoSection";
import NavbarItems from "@/components/navbars/navbarLinks";

export default function Home() {
  return (
    <main>
      <MainNavbar >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavbarItems />
      </MainNavbar>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <NewsSection />
      <ProfileVideoSection />
      <MainFooter />
    </main>
  );
}
