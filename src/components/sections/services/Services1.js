"use client";
import ServiceCard1 from "@/components/shared/cards/ServiceCard1";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services1 = () => {
	// Custom software products data
	const softwareProducts = [
		{
			id: 1,
			title: "Enterprise ERP System",
			desc: "Centralize finance, inventory, purchasing, and reporting in one platform with role-based access and real-time dashboards today.",
			iconName: "tji-service-1",
			img: "/images/service/service-1.webp",
		},
		{
			id: 2,
			title: "Sales CRM System",
			desc: "Capture leads, track pipelines, automate follow-ups, and improve conversions with customer history, tasks, analytics built-in.",
			iconName: "tji-service-2",
			img: "/images/service/service-2.webp",
		},
		{
			id: 3,
			title: "POS System (Grocery & Supermarkets)",
			desc: "Fast billing, barcode scanning, promotions, and multi-branch stock sync designed for groceries and high-volume supermarkets daily.",
			iconName: "tji-service-3",
			img: "/images/service/service-3.webp",
		},
		{
			id: 4,
			title: "Restaurant Management System",
			desc: "Manage orders, tables, kitchen flow, and delivery tracking with menu control, modifiers, and staff permissions easily.",
			iconName: "tji-service-4",
			img: "/images/service/service-4.webp",
		},
		{
			id: 5,
			title: "Retail Management System",
			desc: "Run retail operations with inventory control, pricing, offers, returns, and detailed sales reports across branches securely.",
			iconName: "tji-service-5",
			img: "/images/service/service-5.webp",
		},
		{
			id: 6,
			title: "Laundry Management System",
			desc: "Track garments, generate invoices, manage pickup and delivery, and send status updates for every customer order.",
			iconName: "tji-service-6",
			img: "/images/service/service-6.webp",
		},
		{
			id: 7,
			title: "Clinic/Hospital Management System",
			desc: "Simplify appointments, patient records, billing, and pharmacy workflow with queue management, reminders, and secure access controls.",
			iconName: "tji-service-1",
			img: "/images/service/service-1.webp",
		},
		{
			id: 8,
			title: "School/Institute Management System",
			desc: "Manage admissions, student profiles, fees, attendance, exams, and parent communication with portals and automated notifications included.",
			iconName: "tji-service-2",
			img: "/images/service/service-2.webp",
		},
		{
			id: 9,
			title: "Logistics/Dispatch Management System",
			desc: "Create bookings, assign drivers, optimize routes, track shipments, and capture proof of delivery with live updates.",
			iconName: "tji-service-3",
			img: "/images/service/service-3.webp",
		},
	];

	const services = [...softwareProducts, ...softwareProducts];

	return (
		<section className="tj-service-section overflow-hidden section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span
								className="sub-title text-white wow fadeInUp"
								data-wow-delay=".3s"
							>
								<i className="tji-box"></i>OUR FEATURED SOFTWARE
							</span>
							<h2 className="sec-title text-white title-anim">
								Faster Setup, Smoother <span>Operations</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
							<Swiper
								slidesPerView={1.3}
								spaceBetween={15}
								loop={true}
								speed={1500}
								centeredSlides={true}
								autoplay={{
									delay: 5000,
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								breakpoints={{
									576: {
										slidesPerView: 2,
									},
									768: {
										slidesPerView: 2.3,
									},
									900: {
										slidesPerView: 2.6,
									},
									1024: {
										slidesPerView: 3.2,
									},
									1200: {
										slidesPerView: 3.4,
										spaceBetween: 28,
									},
									1400: {
										slidesPerView: 4.2,
										spaceBetween: 28,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="service-slider"
							>
								{services?.length
									? services?.map((service, idx) => (
											<SwiperSlide key={idx}>
												<ServiceCard1 service={service} idx={idx} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper-pagination-area white-pagination"></div>
							</Swiper>
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

export default Services1;
