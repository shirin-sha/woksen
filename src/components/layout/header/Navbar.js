import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
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
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems.map((navItem, index) => {
						const activeNav = makeActiveLink(navItem);
						const hasSubmenu = navItem.submenu && navItem.submenu.length > 0;
						const isMegaMenu = hasSubmenu && hasMegaMenuItems(navItem.submenu);
						const isSimpleSubmenu = hasSubmenu && hasSimpleSubmenu(navItem.submenu);

						// Simple link without submenu
						if (!hasSubmenu) {
							return (
								<li key={navItem.id || index} className={activeNav?.isActive ? "current-menu-ancestor" : ""}>
									<Link href={activeNav?.path || "#"}>
										{activeNav?.name}
									</Link>
								</li>
							);
						}

						// Mega menu with categories and items (like Digital Services, Infrastructure Services, Software Products)
						if (isMegaMenu) {
							return (
								<li
									key={navItem.id || index}
									className={`has-dropdown ${activeNav?.isActive ? "current-menu-ancestor" : ""}`}
								>
									<Link href={activeNav?.path || "#"}>{activeNav?.name}</Link>
									<ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
										<li>
											<div className="mega-menu-wrapper">
												{activeNav?.submenu?.map((pageItem, idx) => (
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
									</ul>
								</li>
							);
						}

						// Simple submenu (like Company)
						if (isSimpleSubmenu) {
							return (
								<li
									key={navItem.id || index}
									className={`has-dropdown ${activeNav?.isActive ? "current-menu-ancestor" : ""}`}
								>
									<Link href={activeNav?.path || "#"}>
										{activeNav?.name}
									</Link>
									<ul className="sub-menu">
										{activeNav?.submenu?.map((item, idx) => (
											<li
												key={idx}
												className={item?.isActive ? "current-menu-item" : ""}
											>
												<Link href={item?.path || "#"}>
													{item?.name}
												</Link>
											</li>
										))}
									</ul>
								</li>
							);
						}

						return null;
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
