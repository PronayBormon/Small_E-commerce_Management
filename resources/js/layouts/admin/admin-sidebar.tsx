import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import type { ComponentType } from 'react';
import { useAdmin } from './admin-context';
import {
    DashboardIcon,
    DropdownArrowIcon,
    ManageProductIcon,
    ShopSettingsIcon,
    SidebarCloseIcon,
    SidebarCollapseIcon,
    UsersIcon,
} from '@/components/icons/admin-sidebar-icons';

export interface SubMenuItem {
    title: string;
    href: string;
}

export interface MenuItem {
    title: string;
    href?: string;
    icon: ComponentType<{ className?: string }>;
    children?: SubMenuItem[];
}

export interface MenuSection {
    sectionTitle: string;
    items: MenuItem[];
}

const dashboardItem: MenuItem = {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: DashboardIcon,
};

const menuSections: MenuSection[] = [
    {
        sectionTitle: 'USER MANAGEMENT',
        items: [
            {
                title: 'Users',
                href: '/admin/users',
                icon: UsersIcon,
            },
            {
                title: 'Shops',
                href: '/admin/shops',
                icon: ShopSettingsIcon,
            },
        ],
    },
    {
        sectionTitle: 'PRODUCT MANAGEMENT',
        items: [
            {
                title: 'Manage Product',
                icon: ManageProductIcon,
                children: [
                    { title: 'Catalog Products', href: '/admin/catalog-products' },
                    { title: 'Shop Products', href: '/admin/shop-products' },
                ],
            },
        ],
    },
];

export default function AdminSidebar() {
    const page = usePage();
    const currentUrl = page?.url ? page.url.split('?')[0] : '';
    const { isCollapsed, toggleCollapsed, isMobileOpen, closeMobileSidebar, setIsCollapsed } = useAdmin();

    const isUrlActive = (href?: string) => {
        if (!href || href === '#' || href === 'javascript:void(0);') return false;
        const targetUrl = href.split('?')[0];
        if (targetUrl === '/admin/dashboard' || targetUrl === '/dashboard' || targetUrl === '/') {
            return currentUrl === targetUrl || currentUrl === '/admin/dashboard' || currentUrl === '/dashboard';
        }
        return currentUrl === targetUrl || currentUrl.startsWith(targetUrl + '/');
    };

    const [openMenu, setOpenMenu] = useState<string | null>('Manage Product');

    const handleMenuClick = (itemTitle: string) => {
        if (isCollapsed) {
            setIsCollapsed(false);
            setOpenMenu(itemTitle);
        } else {
            setOpenMenu(openMenu === itemTitle ? null : itemTitle);
        }
    };

    const isDashboardActive = isUrlActive(dashboardItem.href);

    return (
        <aside
            className={`h-screen shrink-0 fixed left-0 top-0 z-50 flex flex-col transition-all duration-300 bg-primary-darker ${
                isMobileOpen ? 'translate-x-0 w-[280px]' : '-translate-x-full xl:translate-x-0'
            } ${isCollapsed ? 'xl:w-[80px]' : 'xl:w-[280px]'}`}
        >
            {/* Header / Logo */}
            <div className="p-4 flex items-center relative gap-2 shrink-0 h-[70px]">
                {/* Full Logo - visible when expanded */}
                <Link
                    className={`transition-all duration-300 ${
                        isCollapsed ? 'xl:opacity-0 xl:invisible xl:pointer-events-none' : 'opacity-100 visible'
                    }`}
                    href={dashboardItem.href || '/admin/dashboard'}
                >
                    <img
                        alt="Logo"
                        loading="lazy"
                        width="114"
                        height="37"
                        decoding="async"
                        data-nimg="1"
                        className="max-w-none"
                        style={{ color: 'transparent' }}
                        src="/backend/images/logo/logo-white.svg"
                    />
                </Link>

                {/* Icon Logo - visible when collapsed on desktop */}
                <Link
                    className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 hidden xl:flex justify-center items-center ${
                        isCollapsed ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
                    href={dashboardItem.href || '/admin/dashboard'}
                >
                    <img
                        alt="Logo"
                        loading="lazy"
                        width="32"
                        height="32"
                        decoding="async"
                        data-nimg="1"
                        className="max-w-none"
                        style={{ color: 'transparent' }}
                        src="/backend/images/logo/logo-white-icon.svg"
                    />
                </Link>

                {/* Desktop Collapse Toggle Button */}
                <button
                    type="button"
                    onClick={toggleCollapsed}
                    aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    className={`hidden xl:inline-flex size-8 absolute -right-4 top-1/2 -translate-y-1/2 rounded-full justify-center items-center shadow-md z-50 transition-all duration-300 bg-white text-light-primary-text cursor-pointer hover:bg-gray-100 ${
                        isCollapsed ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                    <SidebarCollapseIcon className="size-5" />
                </button>

                {/* Mobile Close Button */}
                <button
                    type="button"
                    onClick={closeMobileSidebar}
                    aria-label="Close sidebar"
                    className="xl:hidden absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-md text-white hover:bg-white/10 cursor-pointer"
                >
                    <SidebarCloseIcon className="size-6" />
                </button>
            </div>

            {/* Navigation Menu List */}
            <div
                className={`p-4 pb-10 flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar-white transition-all duration-300 ${
                    isCollapsed ? 'xl:px-2' : 'px-4'
                }`}
            >
                {/* Dashboard Single Item */}
                <Link
                    title={dashboardItem.title}
                    className={`flex items-center gap-3 py-2.5 rounded-lg mb-6 transition-all duration-300 ${
                        isCollapsed ? 'xl:justify-center xl:px-2' : 'px-4'
                    } ${
                        isDashboardActive
                            ? 'bg-primary-dark text-white font-medium shadow-sm'
                            : 'text-white hover:bg-white/5'
                    }`}
                    href={dashboardItem.href || '/admin/dashboard'}
                >
                    <dashboardItem.icon className="w-5.5 h-5.5 shrink-0" />
                    <span
                        className={`font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                            isCollapsed ? 'xl:hidden' : 'inline'
                        }`}
                    >
                        {dashboardItem.title}
                    </span>
                </Link>

                {/* Looped Sections */}
                {menuSections.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="mb-6">
                        {section.sectionTitle && (
                            <>
                                <div
                                    className={`text-xs font-medium tracking-wider mb-3 uppercase whitespace-nowrap transition-all duration-300 text-warning-light px-4 ${
                                        isCollapsed ? 'xl:hidden' : 'block'
                                    }`}
                                >
                                    {section.sectionTitle}
                                </div>
                                {isCollapsed && (
                                    <div className="hidden xl:block my-3 mx-2 border-t border-white/10" />
                                )}
                            </>
                        )}
                        <div className="space-y-1">
                            {section.items.map((item, itemIdx) => {
                                const Icon = item.icon;
                                const hasChildren = Boolean(item.children && item.children.length > 0);
                                const isChildActive = Boolean(
                                    item.children?.some((child) => isUrlActive(child.href))
                                );
                                const isOpen = (openMenu === item.title || isChildActive) && !isCollapsed;

                                if (hasChildren) {
                                    return (
                                        <div key={itemIdx}>
                                            <button
                                                type="button"
                                                title={item.title}
                                                onClick={() => handleMenuClick(item.title)}
                                                className={`w-full font-semibold flex items-center rounded-lg transition-colors py-2 justify-between cursor-pointer ${
                                                    isCollapsed ? 'xl:justify-center xl:px-2' : 'px-4'
                                                } ${
                                                    isOpen || isChildActive
                                                        ? 'bg-primary-lighter text-primary-dark'
                                                        : 'text-white hover:bg-white/5'
                                                }`}
                                            >
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <span className="shrink-0">
                                                        <Icon className="size-5.5" />
                                                    </span>
                                                    <span
                                                        className={`font-medium text-sm whitespace-nowrap truncate ${
                                                            isCollapsed ? 'xl:hidden' : 'inline'
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <DropdownArrowIcon
                                                    className={`shrink-0 size-4 transition-transform duration-300 ${
                                                        isCollapsed ? 'xl:hidden' : 'inline'
                                                    } ${
                                                        isOpen
                                                            ? 'rotate-90 text-primary-dark'
                                                            : 'text-white'
                                                    }`}
                                                />
                                            </button>

                                            {/* Submenu Accordion */}
                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${
                                                    isCollapsed ? 'xl:hidden' : ''
                                                } ${
                                                    isOpen
                                                        ? 'grid-rows-[1fr] opacity-100 mt-1'
                                                        : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                                                }`}
                                            >
                                                <div className="overflow-hidden min-h-0 relative space-y-0">
                                                    {/* Connecting vertical line */}
                                                    <div className="absolute left-[30px] top-[22px] bottom-[22px] w-[2px] z-0 bg-gray-500/20" />

                                                    {item.children?.map((child, childIdx) => {
                                                        const isChildActiveItem = isUrlActive(child.href);
                                                        return (
                                                            <Link
                                                                key={childIdx}
                                                                className={`relative block pl-[50px] py-2 text-sm transition-colors z-10 ${
                                                                    isChildActiveItem
                                                                        ? 'text-primary-light font-medium'
                                                                        : 'text-white hover:text-primary-light'
                                                                }`}
                                                                href={child.href}
                                                            >
                                                                <div
                                                                    className={`absolute left-[27px] top-[14px] w-2 h-2 rounded-full z-20 transition-colors ${
                                                                        isChildActiveItem
                                                                            ? 'bg-primary-light'
                                                                            : 'bg-gray-500/20'
                                                                    }`}
                                                                />
                                                                {child.title}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                const isActive = isUrlActive(item.href);

                                return (
                                    <div key={itemIdx}>
                                        <Link
                                            title={item.title}
                                            className={`flex items-center rounded-lg transition-colors py-2 group justify-between ${
                                                isCollapsed ? 'xl:justify-center xl:px-2' : 'px-4'
                                            } ${
                                                isActive
                                                    ? 'bg-primary-dark text-white font-medium shadow-sm'
                                                    : 'text-white hover:bg-white/5'
                                            }`}
                                            href={item.href || '#'}
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <span className="shrink-0">
                                                    <Icon className="size-5.5" />
                                                </span>
                                                <span
                                                    className={`font-medium text-sm whitespace-nowrap truncate ${
                                                        isCollapsed ? 'xl:hidden' : 'inline'
                                                    }`}
                                                >
                                                    {item.title}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}