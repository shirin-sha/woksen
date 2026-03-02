import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const items = [
		{
			title: "What services does Woksen provide?",
			desc: "Woksen Technology Solutions delivers digital services, IT infrastructure services, and ready software products. We support strategy, design, development, implementation, integrations, and long-term maintenance under AMC.",
			initActive: true,
		},
		{
			title: "How do I get started with Woksen?",
			desc: "Share your requirements through the contact form or call us. We will schedule a short discussion, understand your goals, and propose the best approach with scope, timeline, and cost.",
			initActive: false,
		},
		{
			title: "How do you ensure project success?",
			desc: "We follow a structured process with clear milestones, documented scope, and regular updates. Quality checks, testing, and review cycles are included to ensure stable delivery and smooth handover.",
			initActive: false,
		},
		{
			title: "How long will my project take?",
			desc: "Timelines depend on the project scope and integrations. After requirement confirmation, we share a delivery plan with phases and target dates, then proceed with weekly progress tracking.",
			initActive: false,
		},
		{
			title: "Can I track project progress?",
			desc: "Yes. You will receive status updates and milestone reports. For ongoing support, we can also manage tasks through a ticketing system for transparent tracking and response times.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim">
										Need Help? Start Here.
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									We stay ahead of curve, leveraging <br /> cutting-edge are
									technologies and <br /> strategies to competitive
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Need Help? Start Here.
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Get Started Consultation! </h4>
										<span className="call-icon">
											<i className="tji-email"></i>
										</span>
										<Link className="number" href="mailto:info@woksen.com">
											<span>info@woksen.com</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
