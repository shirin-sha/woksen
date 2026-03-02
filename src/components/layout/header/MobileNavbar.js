import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();

	// Helper function to check if submenu has items (mega menu structure)
	const hasMegaMenuItems = (submenu) => {
		return submenu && submenu.length > 0 && submenu.some(item => item.items && item.items.length > 0);
	};

	// Helper function to check if submenu is simple (no nested items)
	const hasSimpleSubmenu = (submenu) => {
		return submenu && submenu.length > 0 && !submenu.some(item => item.items && item.items.length > 0);
	};

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{navItems.map((navItem, index) => {
								const hasSubmenu = navItem.submenu && navItem.submenu.length > 0;
								const isMegaMenu = hasSubmenu && hasMegaMenuItems(navItem.submenu);
								const isSimpleSubmenu = hasSubmenu && hasSimpleSubmenu(navItem.submenu);

								// Simple link without submenu
								if (!hasSubmenu) {
									return (
										<li key={navItem.id || index} className="mean-last">
											<Link href={navItem?.path || "#"}>
												{navItem?.name}
											</Link>
										</li>
									);
								}

								// Mega menu with categories and items
								if (isMegaMenu) {
									return (
										<MobileMenuItem
											key={navItem.id || index}
											text={navItem?.name}
											url={navItem?.path || "#"}
											submenuClass={"header__mega-menu mega-menu mega-menu-pages"}
										>
											<li>
												<div className="mega-menu-wrapper">
													{navItem?.submenu?.map((pageItem, idx) => (
														<div key={idx} className="mega-menu-pages-single">
															<div className="mega-menu-pages-single-inner">
																<h6 className="mega-menu-title">
																	{pageItem?.name}
																</h6>
																<div className="mega-menu-list">
																	{pageItem?.items?.length
																		? pageItem?.items?.map((item, idx2) => (
																				<Link
																					key={100 + idx2}
																					href={item?.path || "#"}
																					className={item?.isActive ? "active" : ""}
																				>
																					{item?.name}
																					{item?.badge ? (
																						<span
																							className={`mega-menu-badge tj-zoom-in-out-anim ${
																								item?.badge === "HOT"
																									? "mega-menu-badge-hot"
																									: ""
																							}`}
																						>
																							{item?.badge}
																						</span>
																					) : (
																						""
																					)}
																				</Link>
																		  ))
																		: ""}
																</div>
															</div>
														</div>
													))}
												</div>
											</li>
										</MobileMenuItem>
									);
								}

								// Simple submenu
								if (isSimpleSubmenu) {
									return (
										<MobileMenuItem
											key={navItem.id || index}
											text={navItem?.name}
											url={navItem?.path || "#"}
										>
											{navItem?.submenu?.map((item, idx) => (
												<li
													key={idx}
													className={item?.isActive ? "current-menu-item" : ""}
												>
													<Link href={item?.path || "#"}>
														{item?.name}
													</Link>
												</li>
											))}
										</MobileMenuItem>
									);
								}

								return null;
							})}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
