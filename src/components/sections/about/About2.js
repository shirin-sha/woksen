import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
const About2 = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div className="col-lg-4 col-md-6 order-lg-1 order-3">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".1s"
						>
							<span className="count-icon">
								<i className="tji-complete"></i>
							</span>
							<span className="steps">01.</span>
							<div className="count-inner">
								<span className="count-text">Project Delivery</span>
								<FunfactSingle currentValue={500} symbol="+" />
								<p className="count-desc">Successful implementations across core service areas.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-sm-12 order-lg-2 order-1">
						<div
							className="about-content-area-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="about-content">
							<div className="sec-heading style-2">
								<span className="sub-title">PERFORMANCE SNAPSHOT</span>
								<h2 className="sec-title title-highlight">
									Numbers That Reflect Delivery, Quality, and Ongoing Commitment.
								</h2>
							</div>
							<div className="wow fadeInUp" data-wow-delay=".3s">
								<ButtonPrimary
									text={"View Our Projects"}
									url={"/portfolios"}
									isTextBtn={true}
								/>
							</div>
							</div>
							<div className="video-img wow fadeInRight" data-wow-delay=".7s">
								<Image
									src="/images/about/about-3.webp"
									alt="Image"
									width={120}
									height={320}
								/>
								<PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span>
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-3 order-2">
						<div
							className="customers-box style-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div
								className="customers-bg"
								style={{ backgroundImage: "url('/images/about/about-4.webp')" }}
							></div>
							<div className="customers">
								<ul>
									<li className="wow fadeInLeft" data-wow-delay=".3s">
										<img src="/images/testimonial/client-1.webp" alt="" />
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".4s">
										<img src="/images/testimonial/client-2.webp" alt="" />
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".5s">
										<img src="/images/testimonial/client-3.webp" alt="" />
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".6s">
										<span>
											<i className="tji-plus"></i>
										</span>
									</li>
								</ul>
							</div>
							<h6
								className="customers-text wow fadeInLeft"
								data-wow-delay=".6s"
							>
								Trusted by 100+ client teams worldwide.
							</h6>
							<div className="star-icon zoomInOut">
								<img src="/images/shape/star.svg" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-4 order-4">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<span className="count-icon">
								<i className="tji-worldwide"></i>
							</span>
							<span className="steps">02.</span>
							<div className="count-inner">
								<span className="count-text">Service Verticals</span>
								<FunfactSingle currentValue={3} symbol="" />
								<p className="count-desc">Digital services, infrastructure, and software products.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-5 order-5">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<span className="count-icon">
								<i className="tji-support"></i>
							</span>
							<span className="steps">03.</span>
							<div className="count-inner">
								<span className="count-text">Support Model</span>
								<div className="inline-content">
									<span className="countup-number">AMC</span>
								</div>
								<p className="count-desc">Preventive maintenance with priority response and upgrades.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About2;
