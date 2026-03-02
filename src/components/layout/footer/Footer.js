import Link from "next/link";

const Footer = () => {
	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo.png" alt="Woksen Logo" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Woksen Technology Solutions delivers digital services, IT infrastructure, and software products with proven delivery and reliable long term support.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Digital Services</h5>
								<ul>
									<li>
										<Link href="/digital-services">Web, Mobile & Software Development</Link>
									</li>
									<li>
										<Link href="/digital-services">Cloud, IT Support & Consulting</Link>
									</li>
									<li>
										<Link href="/digital-services">Cybersecurity & Performance</Link>
									</li>
									<li>
										<Link href="/digital-services">Digital Marketing, Branding & Growth</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Infrastructure Services</h5>
								<ul>
									<li>
										<Link href="/infrastructure-services">Network & Cabling</Link>
									</li>
									<li>
										<Link href="/infrastructure-services">Servers, Storage & Backup</Link>
									</li>
									<li>
										<Link href="/infrastructure-services">Office IT & End-User Setup</Link>
									</li>
									<li>
										<Link href="/infrastructure-services">Security, POS & Communications</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Software Products</h5>
								<ul>
									<li>
										<Link href="/software-products">Core Business Management</Link>
									</li>
									<li>
										<Link href="/software-products">F&B & Retail Systems</Link>
									</li>
									<li>
										<Link href="/software-products">Service & Operations Management</Link>
									</li>
									<li>
										<Link href="/software-products">Healthcare, Education & Productivity</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="mailto:sales@woksen.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">sales@woksen.com</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@woksen.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@woksen.com</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text">
									<p>
										&copy; 2026 Woksen All right reserved.
									</p>
								</div>
							</div>
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
		</footer>
	);
};

export default Footer;
