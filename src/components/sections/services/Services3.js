"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard3 from "@/components/shared/cards/ServiceCard3";

const Services3 = () => {
	// Custom high-level service themes
	const services = [
		{
			id: 1,
			title: "Build Digital Experiences",
			desc: "From concept to launch, we create digital platforms that are fast, user-friendly, and conversion-focused.",
		},
		{
			id: 2,
			title: "Run IT with Confidence",
			desc: "We manage cloud, email, security, and ongoing support to reduce downtime and operational risk.",
		},
		{
			id: 3,
			title: "Strengthen Your IT Foundation",
			desc: "We build resilient infrastructure that supports growth, performance, and secure access across teams.",
		},
		{
			id: 4,
			title: "Standardize with Software",
			desc: "We implement business systems that automate workflows, reduce manual work, and improve reporting accuracy.",
		},
	];

	return (
		<section className="tj-service-section service-3 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-3 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>WHAT WE DELIVER
							</span>
							<h2 className="sec-title title-anim">
								One Partner for Business Technology, From Setup to Support.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper">
							{services.map((service, idx) => (
								<ServiceCard3 key={service.id} service={service} idx={idx} />
							))}
						</div>
						<div
							className="service-btn-area text-center wow fadeInUp"
							data-wow-delay=".3s"
						>
							<ButtonPrimary text={"More Services"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services3;
