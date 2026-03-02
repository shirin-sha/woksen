"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const Process = () => {
	const process = [
		{
			id: 1,
			title: "Discovery & Scope",
			desc: "We clarify objectives, users, and requirements, then define scope, priorities, timeline, and success criteria before development starts.",
		},
		{
			id: 2,
			title: "Build & Implement",
			desc: "Our team designs, develops, configures, and integrates your solution with testing checkpoints to ensure performance and security.",
		},
		{
			id: 3,
			title: "Launch & Optimize",
			desc: "We deploy, validate, and document the delivery, then provide ongoing support, monitoring, and improvements through AMC plans.",
		},
	];
	return (
		<section className="tj-working-process section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								OUR PROCESS
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										Structured Delivery. Predictable Outcomes.
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".5s">
									A clear workflow that reduces risk, improves quality, and keeps every milestone on track.
								</p>
								<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary text={"Contact us Now"} url={"/contact"} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="working-process-area">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard
											key={idx}
											processSingle={processSingle}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Process;
