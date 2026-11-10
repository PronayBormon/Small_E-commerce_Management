import type { BreadcrumbItem } from '@/types';
import AdminSidebar from './admin/admin-sidebar';
import AdminNavbar from './admin/admin-navbar';
import { AdminProvider, useAdmin } from './admin/admin-context';

function AdminLayoutContent({
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    const { isCollapsed, isMobileOpen, closeMobileSidebar } = useAdmin();

    return (
        <div className="min-h-screen flex flex-col bg-[rgba(0,171,85,0.08)]">
            {/* Mobile Backdrop Overlay */}
            {isMobileOpen && (
                <div
                    onClick={closeMobileSidebar}
                    className="fixed inset-0 bg-black/50 z-40 xl:hidden backdrop-blur-xs transition-opacity duration-300"
                    aria-hidden="true"
                />
            )}

            <div className="xl:flex min-h-screen">
                <AdminSidebar />
                <div
                    className={`flex-1 min-w-0 flex flex-col transition-[margin] duration-300 ml-0 ${
                        isCollapsed ? 'xl:ml-[80px]' : 'xl:ml-[280px]'
                    }`}
                >
                    <AdminNavbar />
                    <main className="flex-1 py-4 px-4 lg:p-6 xl:px-10 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default function AdminLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <AdminProvider>
            <AdminLayoutContent breadcrumbs={breadcrumbs}>
                {children}
            </AdminLayoutContent>
        </AdminProvider>
    );
}
