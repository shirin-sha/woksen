"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Services2 = () => {
	const navItems = getNavItems();
	const digitalServices = navItems.find(item => item.name === "Digital Services");
	const categories = digitalServices?.submenu || [];

	return (
		<section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="content-wrap  slidebar-stickiy">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									DIGITAL EXPERTISE
								</span>
								<h2 className="sec-title text-white text-anim">
									Modern Services
									<span>for Smarter Growth.</span>
								</h2>
							</div>
							<div className="wow fadeInUp" data-wow-delay=".6s">
								<ButtonPrimary text={"Explore Services"} url={"/digital-services"} />
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="service-wrapper-2">
							{categories?.length
								? categories?.map((category, idx) => (
										<div key={idx} className="service-item-wrapper tj-fadein-right-on-scroll">
											<div className="service-item style-2">
												<div className="title-area">
													<div className="service-icon">
														<i className={`tji-service-${idx + 1}`}></i>
													</div>
													<h4 className="title">
														{category.name}
													</h4>
												</div>
												<div className="service-content">
													<ul className="list-items">
														{category.items?.length
															? category.items.map((item, itemIdx) => (
																	<li key={itemIdx}>
																		<i className="tji-list"></i>
																		<Link href={item.path || "#"}>{item.name}</Link>
																	</li>
															  ))
															: ""}
													</ul>
												</div>
											</div>
										</div>
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
			<div className="bg-shape-3">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Services2;
