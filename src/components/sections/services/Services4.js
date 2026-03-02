"use client";
import ServiceCard5 from "@/components/shared/cards/ServiceCard5";
import Link from "next/link";

const Services4 = () => {
	// Custom services data for the three core capabilities
	const services = [
		{
			id: 1,
			title: "Digital Transformation Services",
			desc: "Build, optimize, and scale digital experiences with smart technology, automation, and performance-focused marketing.",
			iconName: "tji-service-1",
			img3: "/images/service/service-6.webp",
		},
		{
			id: 2,
			title: "IT Infrastructure Services",
			desc: "Create a reliable IT foundation with secure networking, systems setup, and proactive maintenance for continuous operations.",
			iconName: "tji-service-2",
			img3: "/images/service/service-6.webp",
		},
		{
			id: 3,
			title: "Business Software Products",
			desc: "Implement ready-to-use business software that simplifies workflows, improves visibility, and accelerates productivity across teams.",
			iconName: "tji-service-3",
			img3: "/images/service/service-6.webp",
		},
	];

	const lastItemIdx = services?.length - 1;
	return (
		<section className="tj-service-section-5 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-4 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>OUR SOLUTION AREAS
							</span>
							<h2 className="sec-title title-anim">
								Three Core Capabilities. One Technology Partner.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard5
											key={idx}
											service={service}
											idx={idx}
											lastItemIdx={lastItemIdx}
										/>
								  ))
								: ""}
						</div>
						{/* <div className="service-bottom-text">
							<p className="desc">
								<span>
									<i className="tji-box"></i>Unlock tailored solutions without
									the wasted effort.{" "}
									<Link href="/contact">Talk to us today</Link>
								</span>
							</p>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services4;
