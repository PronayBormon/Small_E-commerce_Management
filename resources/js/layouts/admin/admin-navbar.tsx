import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Check,
    ChevronDown,
    Globe,
    HelpCircle,
    Inbox,
    LayoutDashboard,
    LogOut,
    Mail,
    Search,
    Settings,
    Shield,
    User as UserIcon,
} from 'lucide-react';
import { useAdmin } from './admin-context';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { User } from '@/types';

const languages = [
    { code: 'en', name: 'English', flag: '/backend/images/flag/GB.svg' },
    { code: 'es', name: 'Spanish', flag: '/backend/images/flag/ES.svg' },
    { code: 'fr', name: 'French', flag: '/backend/images/flag/FR.svg' },
    { code: 'de', name: 'German', flag: '/backend/images/flag/DE.svg' },
    { code: 'ar', name: 'Arabic', flag: '/backend/images/flag/SA.svg' },
];

export default function AdminNavbar() {
    const { toggleMobileSidebar } = useAdmin();
    const page = usePage<{ auth?: { user?: User } }>();
    const user = page.props?.auth?.user;

    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
    const [searchQuery, setSearchQuery] = useState('');

    const userName = user?.name || 'John Smith';
    const userEmail = user?.email || 'admin@sellzy.com';
    const userRole = (user as { role?: string })?.role || 'Master';
    const userAvatar = user?.avatar || '/backend/_next/image1a84.png';

    return (
        <header className="bg-white border-b z-30 px-4 lg:px-6 xl:px-10 py-3.5 border-gray-100 flex items-center justify-between sticky top-0 shadow-xs">
            {/* Left side: Hamburger & Search */}
            <div className="flex items-center gap-4">
                {/* Mobile Hamburger Button */}
                <button
                    type="button"
                    onClick={toggleMobileSidebar}
                    className="xl:hidden p-2 text-light-primary-text hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 32 32"
                        className="size-5.5"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M26.667 16H13.333M26.667 6.667H5.333M26.667 25.333H5.333"
                        />
                    </svg>
                </button>

                {/* Search Bar */}
                <div className="relative hidden md:block">
                    <Search className="absolute size-4 text-light-secondary-text left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="pl-10 pr-4 ring-1 ring-gray-500/20 py-2 w-[280px] lg:w-[344px] bg-gray-100 border-none rounded-full text-sm text-light-primary-text placeholder:text-light-disabled-text focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Right side: Language, Inbox, Notifications, User Profile */}
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Language Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 justify-center p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-700 focus:outline-none transition-colors cursor-pointer"
                        >
                            <span className="w-6 h-6 rounded-md overflow-hidden relative block shadow-2xs border border-gray-100">
                                <img
                                    alt={currentLanguage.name}
                                    className="object-cover w-full h-full"
                                    src={currentLanguage.flag}
                                    onError={(e) => {
                                        // Fallback icon if flag SVG not found
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </span>
                            <ChevronDown className="size-4 text-light-secondary-text hidden sm:block" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 bg-white shadow-lg border border-gray-100 rounded-xl p-1">
                        <DropdownMenuLabel className="text-xs text-light-disabled-text font-semibold px-2 py-1 uppercase">
                            Select Language
                        </DropdownMenuLabel>
                        {languages.map((lang) => (
                            <DropdownMenuItem
                                key={lang.code}
                                onClick={() => setCurrentLanguage(lang)}
                                className={`flex items-center justify-between px-2 py-1.5 text-sm rounded-lg cursor-pointer ${currentLanguage.code === lang.code
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'text-light-primary-text hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-5 h-4 rounded overflow-hidden relative block border border-gray-100">
                                        <img
                                            alt={lang.name}
                                            className="object-cover w-full h-full"
                                            src={lang.flag}
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </span>
                                    <span>{lang.name}</span>
                                </div>
                                {currentLanguage.code === lang.code && (
                                    <Check className="size-4 text-primary" />
                                )}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Inbox / Messages Link */}
                <Link
                    href="/admin/inbox"
                    title="Inbox"
                    className="relative size-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-light-primary-text"
                    >
                        <path
                            fill="currentColor"
                            d="M8.14 1.394a28 28 0 0 1 3.718 0c3.87.257 6.937 3.38 7.19 7.283.047.724.047 1.473 0 2.197-.252 3.903-3.32 7.026-7.19 7.283a28 28 0 0 1-3.717 0 4.8 4.8 0 0 1-1.474-.338c-.16-.066-.277-.112-.366-.146q-.087.06-.233.168c-.681.502-1.542.854-2.755.824-.234-.006-.506-.01-.728-.054-.258-.05-.594-.178-.804-.536-.23-.392-.134-.785-.052-1.014.081-.227.222-.491.357-.747.39-.737.466-1.29.284-1.63-.695-1.053-1.325-2.358-1.419-3.81a17 17 0 0 1 0-2.197c.253-3.903 3.32-7.026 7.19-7.283M11.76 2.89a27 27 0 0 0-3.519 0c-3.102.206-5.587 2.715-5.792 5.883-.042.659-.042 1.344 0 2.003.063.965.448 1.9.968 2.757l.23.362.033.053c.59 1.07.152 2.273-.266 3.066l-.078.15h.016c.86.021 1.398-.216 1.827-.532.149-.11.289-.213.405-.288.095-.061.289-.184.53-.214.251-.031.491.054.595.09.143.051.325.127.53.212.303.124.668.205 1.002.227 1.154.077 2.363.077 3.519 0 3.102-.206 5.587-2.715 5.792-5.883.042-.66.042-1.344 0-2.003-.205-3.168-2.69-5.677-5.792-5.883m1.157 8.442a.75.75 0 0 1 0 1.5H7.083a.75.75 0 0 1 0-1.5zM10 7.166a.75.75 0 0 1 0 1.5H7.083a.75.75 0 1 1 0-1.5z"
                        />
                    </svg>
                    <span className="absolute top-[2px] right-0 h-4.5 w-4.5 flex items-center justify-center rounded-full bg-warning text-[10px] font-bold text-light-primary-text">
                        5
                    </span>
                </Link>

                {/* Notifications Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            aria-label="Notifications"
                            className="relative size-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                                className="w-5 h-5 text-light-primary-text"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M4.299 9.576c-.062 1.163.009 2.401-1.03 3.181a1.92 1.92 0 0 0-.769 1.537c0 .832.652 1.54 1.5 1.54h12c.849 0 1.5-.708 1.5-1.54 0-.605-.285-1.174-.768-1.537-1.04-.78-.97-2.018-1.03-3.181a5.71 5.71 0 0 0-11.403 0"
                                />
                                <path
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    d="M8.75 2.604c0 .69.56 1.563 1.25 1.563s1.25-.872 1.25-1.563c0-.69-.56-.937-1.25-.937s-1.25.247-1.25.937Z"
                                />
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12.5 15.833a2.5 2.5 0 0 1-5 0"
                                />
                            </svg>
                            <span className="absolute top-[2px] right-0 h-4.5 w-4.5 flex items-center justify-center rounded-full bg-error text-[10px] font-bold text-white">
                                8
                            </span>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 bg-white shadow-xl border border-gray-100 rounded-2xl p-0 overflow-hidden">
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-sm text-light-primary-text">Notifications</h4>
                                <p className="text-xs text-light-secondary-text">You have 8 unread notifications</p>
                            </div>
                            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                                8 New
                            </span>
                        </div>
                        <div className="max-h-64 overflow-y-auto divide-y divide-gray-50">
                            <div className="p-3 hover:bg-gray-50 flex items-start gap-3 cursor-pointer transition-colors">
                                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                    <Mail className="size-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-light-primary-text truncate">
                                        New customer order #73425
                                    </p>
                                    <p className="text-[11px] text-light-secondary-text">5 minutes ago</p>
                                </div>
                            </div>
                            <div className="p-3 hover:bg-gray-50 flex items-start gap-3 cursor-pointer transition-colors">
                                <div className="size-8 rounded-full bg-warning/10 text-warning-dark flex items-center justify-center shrink-0 mt-0.5">
                                    <UserIcon className="size-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-light-primary-text truncate">
                                        New seller registered: TechWorld
                                    </p>
                                    <p className="text-[11px] text-light-secondary-text">1 hour ago</p>
                                </div>
                            </div>
                            <div className="p-3 hover:bg-gray-50 flex items-start gap-3 cursor-pointer transition-colors">
                                <div className="size-8 rounded-full bg-success/10 text-success-dark flex items-center justify-center shrink-0 mt-0.5">
                                    <Shield className="size-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-light-primary-text truncate">
                                        System security backup completed
                                    </p>
                                    <p className="text-[11px] text-light-secondary-text">3 hours ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 border-t border-gray-100 bg-gray-50/50 text-center">
                            <Link
                                href="/admin/support"
                                className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors block py-1"
                            >
                                View all notifications
                            </Link>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* User Profile Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2.5 p-1 sm:px-2 sm:py-1.5 rounded-full hover:bg-gray-100 focus:outline-none transition-colors cursor-pointer group"
                        >
                            <span className="h-8 w-8 sm:h-9 sm:w-9 relative rounded-full overflow-hidden block border-2 border-primary/20 group-hover:border-primary transition-colors shrink-0 shadow-2xs">
                                <img
                                    alt={userName}
                                    width={36}
                                    height={36}
                                    className="object-cover w-full h-full"
                                    src={userAvatar}
                                    onError={(e) => {
                                        // Fallback to static image
                                        e.currentTarget.src = '/backend/_next/image1a84.png';
                                    }}
                                />
                            </span>
                            <span className="hidden text-left md:block min-w-0 max-w-[120px]">
                                <span className="text-sm font-semibold text-light-primary-text block truncate leading-tight">
                                    {userName}
                                </span>
                                <span className="text-[11px] font-medium text-light-secondary-text block capitalize truncate">
                                    {userRole}
                                </span>
                            </span>
                            <ChevronDown className="size-4 text-light-secondary-text transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        className="w-64 bg-white shadow-xl border border-gray-100 rounded-2xl p-1.5 z-50 animate-in fade-in-50 zoom-in-95"
                    >
                        {/* User Summary Header */}
                        <div className="p-3 bg-gray-50/80 rounded-xl mb-1 flex items-center gap-3">
                            <span className="h-10 w-10 relative rounded-full overflow-hidden block border-2 border-primary/30 shrink-0">
                                <img
                                    alt={userName}
                                    className="object-cover w-full h-full"
                                    src={userAvatar}
                                    onError={(e) => {
                                        e.currentTarget.src = '/backend/_next/image1a84.png';
                                    }}
                                />
                            </span>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-bold text-light-primary-text truncate leading-snug">
                                    {userName}
                                </p>
                                <p className="text-xs text-light-secondary-text truncate">
                                    {userEmail}
                                </p>
                                <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                                    {userRole}
                                </span>
                            </div>
                        </div>

                        <DropdownMenuSeparator className="my-1 bg-gray-100" />

                        {/* Navigation Options */}
                        <DropdownMenuGroup className="space-y-0.5">
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/admin/dashboard"
                                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-light-primary-text hover:bg-gray-100 rounded-lg cursor-pointer transition-colors font-medium"
                                >
                                    <LayoutDashboard className="size-4 text-primary" />
                                    Dashboard
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/admin/users"
                                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-light-primary-text hover:bg-gray-100 rounded-lg cursor-pointer transition-colors font-medium"
                                >
                                    <UserIcon className="size-4 text-blue-500" />
                                    User Management
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/admin/inbox"
                                    className="flex items-center justify-between px-3 py-2 text-sm text-light-primary-text hover:bg-gray-100 rounded-lg cursor-pointer transition-colors font-medium"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <Inbox className="size-4 text-amber-500" />
                                        Messages
                                    </div>
                                    <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-warning text-light-primary-text">
                                        5
                                    </span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/admin/settings/general"
                                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-light-primary-text hover:bg-gray-100 rounded-lg cursor-pointer transition-colors font-medium"
                                >
                                    <Settings className="size-4 text-gray-500" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/admin/support"
                                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-light-primary-text hover:bg-gray-100 rounded-lg cursor-pointer transition-colors font-medium"
                                >
                                    <HelpCircle className="size-4 text-teal-600" />
                                    Help & Support
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator className="my-1 bg-gray-100" />

                        {/* Log out Action */}
                        <DropdownMenuItem asChild>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg cursor-pointer transition-colors font-medium"
                            >
                                <LogOut className="size-4 text-red-500" />
                                Log out
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}