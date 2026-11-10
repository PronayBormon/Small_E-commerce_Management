import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string | null;
    created_at: string | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface UsersPagination {
    data: User[];
    current_page: number;
    last_page: number;
    from: number | null;
    to: number | null;
    total: number;
    links: PaginationLink[];
}

interface Props {
    users: UsersPagination;
    filters: {
        search: string;
    };
}

function formatCreatedAt(date: string | null): string {
    if (!date) {
        return '—';
    }

    return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(new Date(date));
}

export default function Users({ users, filters }: Props) {
    const [search, setSearch] = useState(filters.search);

    const confirmDelete = async (user: User) => {
        const result = await Swal.fire({
            title: 'Delete user?',
            text: `This will permanently delete ${user.name}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#d33',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            router.delete(`/admin/users/${user.id}`, {
                preserveScroll: true,
            });
        }
    };

    useEffect(() => {
        setSearch(filters.search);
    }, [filters.search]);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            if (search !== filters.search) {
                router.get(
                    '/admin/users',
                    { search: search || undefined },
                    {
                        preserveState: true,
                        preserveScroll: true,
                        replace: true,
                    },
                );
            }
        }, 300);

        return () => window.clearTimeout(timeout);
    }, [search, filters.search]);

    console.log('users', users);

    return (
        <>
            <div className="w-full rounded-2xl bg-white">
                <div className="p-4 pb-4 sm:p-6">
                    <div className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
                        <h3 className="text-light-primary-text text-xl font-bold">
                            All Users
                        </h3>
                        <Link
                            className="bg-primary hover:bg-primary-dark inline-flex h-7.5 cursor-pointer items-center justify-center rounded-full px-4 py-1 text-[13px] leading-5.5 font-bold text-white transition-colors focus:outline-none disabled:cursor-not-allowed disabled:bg-[rgba(145,158,171,0.24)] disabled:text-[rgba(145,158,171,0.80)] disabled:opacity-100"
                            href={'/admin/users/create'}
                        >
                            Create User
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                        <div className="relative w-full sm:w-[300px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                                className="text-light-primary-text pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2"
                            >
                                <g clipPath="url(#search_svg__a)">
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M7.333.583a6.75 6.75 0 1 0 4.213 12.022l2.59 2.592a.75.75 0 0 0 1.062-1.06l-2.591-2.592A6.75 6.75 0 0 0 7.334.583zm0 1.5a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5"
                                        clipRule="evenodd"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="search_svg__a">
                                        <path
                                            fill="currentColor"
                                            d="M0 0h16v16H0z"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="relative" data-headlessui-state="">
                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                    placeholder="Search by name or email..."
                                    className="focus:ring-primary text-light-primary-text placeholder:text-light-secondary-text h-9 w-full rounded-full border-none bg-gray-100 py-2 pr-3.5 pl-9 text-sm font-normal ring ring-gray-500/20 transition-all focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&amp;_tr]:border-b">
                                <tr className="data-[state=selected]:bg-muted border-y border-gray-500/20 bg-gray-100 transition-colors hover:bg-gray-100">
                                    <th className="text-light-primary-text [&amp;:has([role=checkbox])]:pr-0 h-12 w-[50px] p-3 pl-6 text-left align-middle text-sm font-semibold whitespace-nowrap first:pl-5 last:pr-5"></th>
                                    <th className="text-light-primary-text [&amp;:has([role=checkbox])]:pr-0 h-12 p-3 text-left align-middle text-sm font-semibold whitespace-nowrap first:pl-5 last:pr-5">
                                        ID
                                    </th>
                                    <th className="text-light-primary-text [&amp;:has([role=checkbox])]:pr-0 h-12 p-3 text-left align-middle text-sm font-semibold whitespace-nowrap first:pl-5 last:pr-5">
                                        User
                                    </th>
                                    <th className="text-light-primary-text [&amp;:has([role=checkbox])]:pr-0 h-12 p-3 text-left align-middle text-sm font-semibold whitespace-nowrap first:pl-5 last:pr-5">
                                        Email
                                    </th>
                                    <th className="text-light-primary-text [&amp;:has([role=checkbox])]:pr-0 h-12 p-3 text-left align-middle text-sm font-semibold whitespace-nowrap first:pl-5 last:pr-5">
                                        Role
                                    </th>
                                    <th className="text-light-primary-text [&amp;:has([role=checkbox])]:pr-0 h-12 p-3 text-left align-middle text-sm font-semibold whitespace-nowrap first:pl-5 last:pr-5">
                                        Date
                                    </th>
                                    <th className="text-light-primary-text [&amp;:has([role=checkbox])]:pr-0 h-12 p-3 pr-6 text-left align-middle text-sm font-semibold whitespace-nowrap first:pl-5 last:pr-5">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&amp;_tr:last-child]:border-0">
                                {users.data.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="data-[state=selected]:bg-muted border-b border-gray-500/20 transition-colors last:border-0 hover:bg-gray-50/50"
                                    >
                                        <td className="[&amp;:has([role=checkbox])]:pr-0 px-3 py-3.5 pl-6 align-middle whitespace-nowrap first:pl-5 last:pr-5">
                                            {' '}
                                        </td>
                                        <td className="[&amp;:has([role=checkbox])]:pr-0 text-light-primary-text px-3 py-3.5 align-middle text-sm font-normal whitespace-nowrap first:pl-5 last:pr-5">
                                            #{user.id}
                                        </td>
                                        <td className="[&amp;:has([role=checkbox])]:pr-0 px-3 py-3.5 align-middle whitespace-nowrap first:pl-5 last:pr-5">
                                            <div className="flex items-center gap-2">
                                                <div className="relative size-8 shrink-0 overflow-hidden">
                                                    <img
                                                        alt="avatar"
                                                        loading="lazy"
                                                        width="32"
                                                        height="32"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="rounded-lg object-cover"
                                                        style={{
                                                            color: 'transparent',
                                                        }}
                                                        src={user.avatar ?? ''}
                                                    />
                                                </div>
                                                <span className="text-light-primary-text text-sm">
                                                    {user.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="[&amp;:has([role=checkbox])]:pr-0 text-light-primary-text px-3 py-3.5 align-middle text-sm whitespace-nowrap first:pl-5 last:pr-5">
                                            {user.email}
                                        </td>
                                        <td className="[&amp;:has([role=checkbox])]:pr-0 text-light-primary-text px-3 py-3.5 align-middle text-sm whitespace-nowrap first:pl-5 last:pr-5">
                                            {user.role}
                                        </td>
                                        <td className="[&amp;:has([role=checkbox])]:pr-0 text-light-primary-text px-3 py-3.5 align-middle text-sm whitespace-nowrap first:pl-5 last:pr-5">
                                            {formatCreatedAt(user.created_at)}
                                        </td>
                                        <td className="[&amp;:has([role=checkbox])]:pr-0 px-3 py-3.5 pr-6 align-middle whitespace-nowrap first:pl-5 last:pr-5">
                                            <div className="flex items-center gap-1">
                                                <Link
                                                    className="text-light-primary-text hover:text-primary inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border-none bg-transparent p-0 font-bold shadow-none transition-colors hover:bg-gray-100 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                                    href={`/admin/users/edit/${user.id}`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 16 16"
                                                        className="size-4"
                                                    >
                                                        <g clipPath="url(#pencil_svg__a)">
                                                            <path
                                                                fill="currentColor"
                                                                fillRule="evenodd"
                                                                d="M10.008.984a2.82 2.82 0 0 1 2.816-.043c.291.162.559.408.874.725l.668.682c.31.322.55.594.706.89a2.95 2.95 0 0 1-.04 2.836c-.221.387-.588.73-1.076 1.2l-6.268 6.038c-.954.919-1.574 1.534-2.37 1.845-.797.312-1.665.276-2.974.241l-.187-.005a4 4 0 0 1-.589-.04 1.16 1.16 0 0 1-.702-.368 1.18 1.18 0 0 1-.28-.734c-.01-.185.008-.404.023-.596l.018-.231c.09-1.146.138-1.895.434-2.574.296-.682.808-1.223 1.58-2.06l6.19-6.706c.46-.498.796-.873 1.177-1.1m4.658 12.935a.75.75 0 1 1 0 1.5H9.333a.75.75 0 0 1 0-1.5zM3.744 9.808c-.84.91-1.136 1.244-1.307 1.64s-.217.846-.314 2.093l-.018.23-.01.119.101.003.187.005c1.433.038 1.94.037 2.39-.138.451-.177.83-.524 1.874-1.528l5.359-5.164-2.983-2.982zm8.352-7.555a1.32 1.32 0 0 0-1.322.02c-.135.081-.285.228-.732.71l3.044 3.044c.428-.414.565-.56.643-.695a1.45 1.45 0 0 0 .02-1.39c-.083-.154-.24-.325-.789-.886-.55-.562-.716-.72-.864-.803"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="pencil_svg__a">
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M0 0h16v16H0z"
                                                                ></path>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        void confirmDelete(user)
                                                    }
                                                    aria-label={`Delete ${user.name}`}
                                                    className="text-light-primary-text inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border-none bg-transparent p-0 font-bold shadow-none transition-colors hover:bg-gray-100 hover:text-red-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-ban h-4 w-4"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M4.929 4.929 19.07 19.071"></path>
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                        ></circle>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {users.data.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={3}
                                            className="text-light-secondary-text px-3 py-8 text-center"
                                        >
                                            No users found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-end border-t border-gray-500/20 p-4 sm:p-6">
                    <nav
                        aria-label="User pagination"
                        className="flex items-center gap-2"
                    >
                        {users.links.map((link, index) => {
                            const isPrevious = index === 0;
                            const isNext = index === users.links.length - 1;
                            const isArrow = isPrevious || isNext;
                            const className = isArrow
                                ? 'w-10 h-7.5 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600'
                                : `w-10 h-7.5 flex items-center justify-center rounded-full text-sm transition-colors ${
                                      link.active
                                          ? 'bg-primary-lighter text-primary-dark font-semibold'
                                          : 'text-gray-600 hover:bg-gray-50 font-medium'
                                  }`;

                            const content = isPrevious ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    className="size-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12.056 4.396a.75.75 0 1 1 .888 1.207v.001l-.002.002-.01.007-.04.03-.155.116a46 46 0 0 0-2.246 1.813c-.615.534-1.21 1.093-1.647 1.587a4.6 4.6 0 0 0-.487.635 1 1 0 0 0-.102.206c.009.027.035.093.102.206q.158.261.487.635c.436.493 1.033 1.052 1.648 1.587a43 43 0 0 0 2.4 1.93l.04.028.01.007.002.002v.001a.75.75 0 1 1-.888 1.207h-.002l-.003-.003-.055-.04-.163-.123a47 47 0 0 1-2.325-1.877c-.634-.55-1.288-1.16-1.79-1.726a6 6 0 0 1-.646-.854c-.157-.26-.322-.607-.322-.98 0-.374.165-.72.322-.98.17-.281.397-.572.647-.854.5-.567 1.155-1.176 1.789-1.727a44 44 0 0 1 2.325-1.877l.163-.122.055-.04q0-.002.003-.003h.002z"
                                    />
                                </svg>
                            ) : isNext ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    className="size-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M6.897 4.555a.75.75 0 0 1 1.048-.159l.002.001.003.002.054.041.164.122a46 46 0 0 1 2.325 1.877c.634.55 1.288 1.16 1.789 1.727.25.282.477.572.646.853.157.26.322.607.323.98 0 .374-.166.72-.323.981a6 6 0 0 1-.646.854c-.501.566-1.155 1.175-1.79 1.726a44 44 0 0 1-2.324 1.877l-.164.122-.054.041-.003.002-.001.001h-.001a.75.75 0 1 1-.889-1.207l.002-.003.01-.007.041-.029.154-.116a46 46 0 0 0 2.245-1.814c.616-.534 1.212-1.093 1.649-1.587a4.6 4.6 0 0 0 .486-.634c.068-.113.094-.18.103-.206a1 1 0 0 0-.103-.206 4.6 4.6 0 0 0-.486-.635c-.437-.494-1.032-1.053-1.648-1.587a43 43 0 0 0-2.246-1.814l-.154-.116-.04-.03q-.008-.003-.01-.006-.002-.001-.003-.002a.75.75 0 0 1-.159-1.049"
                                    />
                                </svg>
                            ) : (
                                link.label
                            );

                            return link.url ? (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    preserveScroll
                                    aria-label={
                                        isPrevious
                                            ? 'Previous page'
                                            : isNext
                                              ? 'Next page'
                                              : `Page ${link.label}`
                                    }
                                    aria-current={
                                        link.active ? 'page' : undefined
                                    }
                                    className={className}
                                >
                                    {content}
                                </Link>
                            ) : (
                                <span
                                    key={link.label}
                                    aria-label={
                                        isPrevious
                                            ? 'Previous page'
                                            : isNext
                                              ? 'Next page'
                                              : undefined
                                    }
                                    aria-current={
                                        link.active ? 'page' : undefined
                                    }
                                    aria-disabled="true"
                                    className={`${className} ${
                                        isArrow
                                            ? 'cursor-not-allowed opacity-50'
                                            : ''
                                    }`}
                                >
                                    {content}
                                </span>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
}
