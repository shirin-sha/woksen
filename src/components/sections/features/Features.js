import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Practical Innovation",
			desc: "We apply modern technology with clear purpose, turning business needs into solutions that are simple, scalable, and measurable.",
			icon: "tji-innovative",
		},
		{
			title: "Proven Delivery",
			desc: "From planning to launch, we follow structured execution, transparent timelines, and quality checks to deliver dependable results.",
			icon: "tji-award",
		},
		{
			title: "Long-Term Support",
			desc: "Our team stays available after go-live with AMC support, upgrades, and improvements to keep your systems running smoothly.",
			icon: "tji-support",
		},
	];

	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{type == 2 ? (
							<div className="sec-heading-wrap">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>WHY WOKSEN
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading">
										<h2 className="sec-title title-anim">
											Delivering Enterprise-Grade Technology with Precision and Trust.
										</h2>
									</div>
									<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text="Schedule a Consultation" url="/contact" />
									</div>
								</div>
							</div>
						) : (
							<div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>WHY WOKSEN
								</span>
								<h2 className="sec-title title-anim">
									Delivering Enterprise-Grade Technology with Precision and Trust.
								</h2>
							</div>
						)}
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className="col-lg-4">
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
