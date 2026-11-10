import { Link, useForm } from '@inertiajs/react';
import { Eye, EyeOff, Trash2, UploadCloud, RefreshCw } from 'lucide-react';
import { ChangeEvent, DragEvent, FormEventHandler, useEffect, useRef, useState } from 'react';

export default function Create() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'admin',
        status: 'active',
        image: null as File | null,
    });

    // Cleanup object URL on unmount or when previewUrl changes
    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleFile = (file: File | undefined) => {
        if (!file) return;

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
        setData('image', file);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        handleFile(file);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            handleFile(file);
        }
    };

    const handleRemoveImage = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(null);
        setData('image', null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/users/store', {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
                handleRemoveImage();
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-2xl mx-auto p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Link
                            className="text-light-primary-text hover:bg-gray-200 size-8 rounded-full flex items-center justify-center transition-colors"
                            href="/admin/users"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="m2.876 12 .005.115.002.014.003.048c.042.404.22.755.366.997.185.308.43.617.687.908.518.585 1.186 1.207 1.825 1.762a45 45 0 0 0 2.508 2.016l.045.034.012.008.003.002.001.001h.001v.001a1.126 1.126 0 0 0 1.334-1.812l-.002-.001-.01-.008-.039-.028a44 44 0 0 1-2.379-1.912c-.392-.34-.771-.69-1.104-1.02H20a1.126 1.126 0 0 0 0-2.25H6.134c.333-.33.712-.679 1.104-1.02a43 43 0 0 1 2.378-1.912l.04-.028.009-.008h.002l.089-.074a1.125 1.125 0 0 0-1.423-1.74v.002h-.002l-.003.003-.012.009-.045.033a32 32 0 0 0-.745.57c-.478.372-1.119.887-1.763 1.446-.64.555-1.307 1.177-1.824 1.762-.257.291-.501.6-.687.908-.146.242-.324.593-.366.997l-.003.047a1 1 0 0 0-.007.13"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <h2 className="text-lg sm:text-xl font-bold text-light-primary-text">
                            Create New User
                        </h2>
                    </div>
                </div>

                {/* Status dropdown */}
                <div className="relative z-20">
                    <select
                        id="status"
                        name="status"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        className="relative h-7.5 flex items-center justify-between cursor-pointer rounded-full border border-primary text-[13px] font-bold bg-[rgba(0,171,85,0.08)] text-primary px-3 py-1 text-left focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Basic Information Form */}
            <div className="bg-white rounded-2xl p-4 mb-4 sm:mb-6 sm:p-6 border border-gray-500/20">
                <h2 className="text-lg font-bold text-light-primary-text mb-4 sm:mb-6">
                    Basic Information
                </h2>

                {/* Upload Image Dropzone & Preview */}
                <div className="mb-4 sm:mb-6">
                    <div className="w-full mx-auto">
                        <input
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                        />

                        {!previewUrl ? (
                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                                className={`group relative flex h-full min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center transition-all ${isDragging
                                        ? 'border-primary bg-primary/5 scale-[0.99]'
                                        : 'border-gray-500/30 bg-white hover:bg-gray-50 hover:border-primary/50'
                                    }`}
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-light-primary-text group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <UploadCloud className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-semibold text-light-primary-text">
                                            Upload User image
                                        </p>
                                        <p className="text-xs text-light-secondary-text">
                                            Allowed *.jpeg, *.jpg, *.png, *.gif
                                            <br />
                                            Max size of 3.1 MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="relative flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50/50 p-6 text-center">
                                <div className="relative group">
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className="h-36 w-36 object-cover rounded-2xl shadow-sm border border-gray-200"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="absolute -top-2 -right-2 p-1.5 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors focus:outline-none"
                                        title="Remove Image"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                                    >
                                        <RefreshCw className="w-3.5 h-3.5" />
                                        Change Image
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 rounded-full hover:bg-red-100 transition-colors"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                        Remove
                                    </button>
                                </div>

                                {data.image && (
                                    <p className="mt-2 text-xs text-light-secondary-text">
                                        {data.image.name} ({(data.image.size / (1024 * 1024)).toFixed(2)} MB)
                                    </p>
                                )}
                            </div>
                        )}

                        {errors.image && (
                            <p className="mt-1.5 ml-2 text-xs text-red-500">{errors.image}</p>
                        )}
                    </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-4 sm:space-y-6">
                    {/* User Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="relative">
                            <input
                                id="user_name"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className={`block px-3.5 py-4 w-full h-14 text-sm text-light-primary-text bg-transparent rounded-full border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-500/20 focus:border-primary'
                                    } appearance-none focus:outline-none focus:ring-0 peer`}
                                placeholder=" "
                            />
                            <label
                                htmlFor="user_name"
                                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left left-3.5 bg-white peer-placeholder-shown:bg-transparent peer-focus:bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-light-disabled-text peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text ${errors.name ? 'text-red-500 peer-focus:text-red-500' : 'text-primary peer-focus:text-primary'
                                    }`}
                            >
                                Name
                            </label>
                            {errors.name && (
                                <p className="mt-1.5 ml-3.5 text-xs text-red-500">{errors.name}</p>
                            )}
                        </div>

                        <div className="relative">
                            <input
                                id="user_email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className={`block px-3.5 py-4 w-full h-14 text-sm text-light-primary-text bg-transparent rounded-full border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-500/20 focus:border-primary'
                                    } appearance-none focus:outline-none focus:ring-0 peer`}
                                placeholder=" "
                            />
                            <label
                                htmlFor="user_email"
                                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left left-3.5 bg-white peer-placeholder-shown:bg-transparent peer-focus:bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-light-disabled-text peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text ${errors.email ? 'text-red-500 peer-focus:text-red-500' : 'text-primary peer-focus:text-primary'
                                    }`}
                            >
                                Email
                            </label>
                            {errors.email && (
                                <p className="mt-1.5 ml-3.5 text-xs text-red-500">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    {/* Password & Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className={`block px-3.5 pr-11 py-4 w-full h-14 text-sm text-light-primary-text bg-transparent rounded-full border ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-500/20 focus:border-primary'
                                    } appearance-none focus:outline-none focus:ring-0 peer`}
                                placeholder=" "
                            />
                            <label
                                htmlFor="password"
                                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left left-3.5 bg-white peer-placeholder-shown:bg-transparent peer-focus:bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-light-disabled-text peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text ${errors.password ? 'text-red-500 peer-focus:text-red-500' : 'text-primary peer-focus:text-primary'
                                    }`}
                            >
                                Password
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-light-primary-text transition-colors p-1 focus:outline-none"
                                tabIndex={-1}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                            {errors.password && (
                                <p className="mt-1.5 ml-3.5 text-xs text-red-500">{errors.password}</p>
                            )}
                        </div>

                        <div className="relative">
                            <select
                                id="role"
                                name="role"
                                value={data.role}
                                onChange={(e) => setData('role', e.target.value)}
                                className={`block px-3.5 py-4 w-full h-14 text-sm text-light-primary-text bg-transparent rounded-full border ${errors.role ? 'border-red-500 focus:border-red-500' : 'border-gray-500/20 focus:border-primary'
                                    } appearance-none focus:outline-none focus:ring-0 peer cursor-pointer`}
                            >
                                <option value="admin">Admin</option>
                                <option value="super_admin">Super Admin</option>
                                <option value="user">User</option>
                                <option value="manager">Manager</option>
                                <option value="shop_owner">Shop Owner</option>
                            </select>
                            <label
                                htmlFor="role"
                                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left left-3.5 bg-white px-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-pointer ${errors.role ? 'text-red-500' : 'text-primary'
                                    }`}
                            >
                                Role
                            </label>
                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M14.47 6.97a.75.75 0 1 1 1.06 1.06l-4.293 4.293c-.151.152-.318.32-.476.44a1.3 1.3 0 0 1-.64.273l-.121.007a1.23 1.23 0 0 1-.76-.28c-.16-.12-.326-.288-.477-.44L4.47 8.03a.75.75 0 1 1 1.06-1.06l4.293 4.293.177.174.177-.174z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            {errors.role && (
                                <p className="mt-1.5 ml-3.5 text-xs text-red-500">{errors.role}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
                <Link
                    href="/admin/users"
                    className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:cursor-not-allowed border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:text-[rgba(145,158,171,0.80)] disabled:border-[rgba(145,158,171,0.24)] disabled:opacity-100 py-1 h-9 text-sm leading-6 px-6"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-all focus:outline-none disabled:cursor-not-allowed bg-primary text-white hover:bg-primary-dark disabled:bg-[rgba(145,158,171,0.24)] disabled:text-[rgba(145,158,171,0.80)] disabled:opacity-100 py-1 h-9 text-sm leading-6 px-6 gap-2"
                >
                    {processing && (
                        <svg
                            className="animate-spin -ml-1 mr-1 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    )}
                    {processing ? 'Saving...' : 'Save'}
                </button>
            </div>
        </form>
    );
}