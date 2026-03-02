import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About3 from "@/components/sections/about/About3";
import Cta from "@/components/sections/cta/Cta";
import Features from "@/components/sections/features/Features";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import About2 from "@/components/sections/about/About2";
import Process from "@/components/sections/process/Process";
import Services3 from "@/components/sections/services/Services3";
import Strategy from "@/components/sections/strategy/Strategy ";
export default function About() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"About Us"} text={"About Us"} />
						<Features type={2} />
						<About3 type={2} />
						<About2 />
						<Process />
						<Services3 />
						<Strategy />
					<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
