import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { usePage } from '@inertiajs/react';

interface AdminContextType {
    isCollapsed: boolean;
    setIsCollapsed: (collapsed: boolean | ((prev: boolean) => boolean)) => void;
    toggleCollapsed: () => void;
    isMobileOpen: boolean;
    setIsMobileOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
    toggleMobileSidebar: () => void;
    closeMobileSidebar: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('admin_sidebar_collapsed') === 'true';
        }
        return false;
    });

    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { url } = usePage();

    // Automatically close mobile sidebar when navigating between pages
    useEffect(() => {
        setIsMobileOpen(false);
    }, [url]);

    const toggleCollapsed = () => {
        setIsCollapsed((prev) => {
            const next = !prev;
            if (typeof window !== 'undefined') {
                localStorage.setItem('admin_sidebar_collapsed', String(next));
            }
            return next;
        });
    };

    const toggleMobileSidebar = () => {
        setIsMobileOpen((prev) => !prev);
    };

    const closeMobileSidebar = () => {
        setIsMobileOpen(false);
    };

    return (
        <AdminContext.Provider
            value={{
                isCollapsed,
                setIsCollapsed,
                toggleCollapsed,
                isMobileOpen,
                setIsMobileOpen,
                toggleMobileSidebar,
                closeMobileSidebar,
            }}
        >
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
}
