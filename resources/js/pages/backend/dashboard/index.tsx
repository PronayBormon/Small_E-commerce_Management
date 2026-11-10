export default function index() {
    return (
        <>
            <div className="space-y-6 bg-white p-4  sm:p-6 rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div
                        className="bg-[rgba(160,226,224,0.60)] p-6 rounded-2xl flex flex-col justify-between relative">
                        <div>
                            <p
                                className="text-sm  font-semibold text-light-secondary-text mb-2">
                                Total Sales</p>
                            <h3
                                className="text-2xl font-dm-sans font-bold text-light-primary-text">
                                $4,876</h3>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 flex items-center gap-1 bg-white px-2 py-1 font-normal text-xs rounded-full ">
                            <span
                                className="text-xs font-bold text-primary">+0.1%</span><span
                                    className="text-primary"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 16 16"
                                        width="16" height="16">
                                    <path fill="currentColor"
                                        d="M14 4.667a.5.5 0 0 0 0-.14.4.4 0 0 0-.033-.114 1 1 0 0 0-.06-.093.5.5 0 0 0-.094-.113l-.08-.047a.5.5 0 0 0-.126-.067h-.133a.5.5 0 0 0-.14-.093H10a.667.667 0 0 0 0 1.333h1.887L9.22 8.473 6.34 6.76a.67.67 0 0 0-.853.147l-3.333 4a.666.666 0 1 0 1.026.853L6.147 8.2l2.847 1.707a.67.67 0 0 0 .846-.14l2.827-3.3V8A.667.667 0 1 0 14 8z">
                                    </path>
                                </svg></span></div>
                    </div>
                    <div
                        className="bg-[rgba(255,235,105,0.60)] p-6 rounded-2xl flex flex-col justify-between relative">
                        <div>
                            <p
                                className="text-sm  font-semibold text-light-secondary-text mb-2">
                                Total Orders</p>
                            <h3
                                className="text-2xl font-dm-sans font-bold text-light-primary-text">
                                1M</h3>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 flex items-center gap-1 bg-white px-2 py-1 font-normal text-xs rounded-full ">
                            <span
                                className="text-xs font-bold text-error">-0.1%</span><span
                                    className="text-error"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 16 16"
                                        width="16" height="16">
                                    <path fill="currentColor"
                                        d="M14 11.333a.5.5 0 0 1 0 .14.4.4 0 0 1-.033.114 1 1 0 0 1-.06.093.5.5 0 0 1-.094.113l-.08.047a.5.5 0 0 1-.126.067h-.133a.5.5 0 0 1-.14.093H10a.667.667 0 0 1 0-1.333h1.887L9.22 7.527 6.34 9.24a.67.67 0 0 1-.853-.147l-3.333-4A.667.667 0 1 1 3.18 4.24L6.147 7.8l2.847-1.707a.67.67 0 0 1 .846.14l2.827 3.3V8A.667.667 0 1 1 14 8z">
                                    </path>
                                </svg></span></div>
                    </div>
                    <div
                        className="bg-[rgba(255,192,145,0.60)] p-6 rounded-2xl flex flex-col justify-between relative">
                        <div>
                            <p
                                className="text-sm  font-semibold text-light-secondary-text mb-2">
                                Total Customers</p>
                            <h3
                                className="text-2xl font-dm-sans font-bold text-light-primary-text">
                                50,000</h3>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 flex items-center gap-1 bg-white px-2 py-1 font-normal text-xs rounded-full ">
                            <span
                                className="text-xs font-bold text-primary">+0.1%</span><span
                                    className="text-primary"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 16 16"
                                        width="16" height="16">
                                    <path fill="currentColor"
                                        d="M14 4.667a.5.5 0 0 0 0-.14.4.4 0 0 0-.033-.114 1 1 0 0 0-.06-.093.5.5 0 0 0-.094-.113l-.08-.047a.5.5 0 0 0-.126-.067h-.133a.5.5 0 0 0-.14-.093H10a.667.667 0 0 0 0 1.333h1.887L9.22 8.473 6.34 6.76a.67.67 0 0 0-.853.147l-3.333 4a.666.666 0 1 0 1.026.853L6.147 8.2l2.847 1.707a.67.67 0 0 0 .846-.14l2.827-3.3V8A.667.667 0 1 0 14 8z">
                                    </path>
                                </svg></span></div>
                    </div>
                    <div
                        className="bg-[rgba(255,214,239,0.60)] p-6 rounded-2xl flex flex-col justify-between relative">
                        <div>
                            <p
                                className="text-sm  font-semibold text-light-secondary-text mb-2">
                                Shipping Delays</p>
                            <h3
                                className="text-2xl font-dm-sans font-bold text-light-primary-text">
                                500</h3>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 flex items-center gap-1 bg-white px-2 py-1 font-normal text-xs rounded-full ">
                            <span
                                className="text-xs font-bold text-error">-0.1%</span><span
                                    className="text-error"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 16 16"
                                        width="16" height="16">
                                    <path fill="currentColor"
                                        d="M14 11.333a.5.5 0 0 1 0 .14.4.4 0 0 1-.033.114 1 1 0 0 1-.06.093.5.5 0 0 1-.094.113l-.08.047a.5.5 0 0 1-.126.067h-.133a.5.5 0 0 1-.14.093H10a.667.667 0 0 1 0-1.333h1.887L9.22 7.527 6.34 9.24a.67.67 0 0 1-.853-.147l-3.333-4A.667.667 0 1 1 3.18 4.24L6.147 7.8l2.847-1.707a.67.67 0 0 1 .846.14l2.827 3.3V8A.667.667 0 1 1 14 8z">
                                    </path>
                                </svg></span></div>
                    </div>
                    <div
                        className="bg-[rgba(146,189,245,0.60)] p-6 rounded-2xl flex flex-col justify-between relative">
                        <div>
                            <p
                                className="text-sm  font-semibold text-light-secondary-text mb-2">
                                Refund Requests</p>
                            <h3
                                className="text-2xl font-dm-sans font-bold text-light-primary-text">
                                4,876</h3>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 flex items-center gap-1 bg-white px-2 py-1 font-normal text-xs rounded-full ">
                            <span
                                className="text-xs font-bold text-primary">+0.1%</span><span
                                    className="text-primary"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 16 16"
                                        width="16" height="16">
                                    <path fill="currentColor"
                                        d="M14 4.667a.5.5 0 0 0 0-.14.4.4 0 0 0-.033-.114 1 1 0 0 0-.06-.093.5.5 0 0 0-.094-.113l-.08-.047a.5.5 0 0 0-.126-.067h-.133a.5.5 0 0 0-.14-.093H10a.667.667 0 0 0 0 1.333h1.887L9.22 8.473 6.34 6.76a.67.67 0 0 0-.853.147l-3.333 4a.666.666 0 1 0 1.026.853L6.147 8.2l2.847 1.707a.67.67 0 0 0 .846-.14l2.827-3.3V8A.667.667 0 1 0 14 8z">
                                    </path>
                                </svg></span></div>
                    </div>
                    <div
                        className="bg-[rgba(250,184,81,0.60)] p-6 rounded-2xl flex flex-col justify-between relative">
                        <div>
                            <p
                                className="text-sm  font-semibold text-light-secondary-text mb-2">
                                Stock Products</p>
                            <h3
                                className="text-2xl font-dm-sans font-bold text-light-primary-text">
                                4,876</h3>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 flex items-center gap-1 bg-white px-2 py-1 font-normal text-xs rounded-full ">
                            <span
                                className="text-xs font-bold text-error">-0.1%</span><span
                                    className="text-error"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 16 16"
                                        width="16" height="16">
                                    <path fill="currentColor"
                                        d="M14 11.333a.5.5 0 0 1 0 .14.4.4 0 0 1-.033.114 1 1 0 0 1-.06.093.5.5 0 0 1-.094.113l-.08.047a.5.5 0 0 1-.126.067h-.133a.5.5 0 0 1-.14.093H10a.667.667 0 0 1 0-1.333h1.887L9.22 7.527 6.34 9.24a.67.67 0 0 1-.853-.147l-3.333-4A.667.667 0 1 1 3.18 4.24L6.147 7.8l2.847-1.707a.67.67 0 0 1 .846.14l2.827 3.3V8A.667.667 0 1 1 14 8z">
                                    </path>
                                </svg></span></div>
                    </div>
                    <div
                        className="bg-[rgba(158,232,114,0.60)] p-6 rounded-2xl flex flex-col justify-between relative">
                        <div>
                            <p
                                className="text-sm  font-semibold text-light-secondary-text mb-2">
                                Abandoned Carts</p>
                            <h3
                                className="text-2xl font-dm-sans font-bold text-light-primary-text">
                                4,876</h3>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 flex items-center gap-1 bg-white px-2 py-1 font-normal text-xs rounded-full ">
                            <span
                                className="text-xs font-bold text-primary">+0.1%</span><span
                                    className="text-primary"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 16 16"
                                        width="16" height="16">
                                    <path fill="currentColor"
                                        d="M14 4.667a.5.5 0 0 0 0-.14.4.4 0 0 0-.033-.114 1 1 0 0 0-.06-.093.5.5 0 0 0-.094-.113l-.08-.047a.5.5 0 0 0-.126-.067h-.133a.5.5 0 0 0-.14-.093H10a.667.667 0 0 0 0 1.333h1.887L9.22 8.473 6.34 6.76a.67.67 0 0 0-.853.147l-3.333 4a.666.666 0 1 0 1.026.853L6.147 8.2l2.847 1.707a.67.67 0 0 0 .846-.14l2.827-3.3V8A.667.667 0 1 0 14 8z">
                                    </path>
                                </svg></span></div>
                    </div>
                    <div
                        className="bg-[rgba(116,202,255,0.60)] p-6 rounded-2xl flex flex-col justify-between relative">
                        <div>
                            <p
                                className="text-sm  font-semibold text-light-secondary-text mb-2">
                                Payment Failures</p>
                            <h3
                                className="text-2xl font-dm-sans font-bold text-light-primary-text">
                                4,876</h3>
                        </div>
                        <div
                            className="absolute bottom-6 right-6 flex items-center gap-1 bg-white px-2 py-1 font-normal text-xs rounded-full ">
                            <span
                                className="text-xs font-bold text-error">-0.1%</span><span
                                    className="text-error"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 16 16"
                                        width="16" height="16">
                                    <path fill="currentColor"
                                        d="M14 11.333a.5.5 0 0 1 0 .14.4.4 0 0 1-.033.114 1 1 0 0 1-.06.093.5.5 0 0 1-.094.113l-.08.047a.5.5 0 0 1-.126.067h-.133a.5.5 0 0 1-.14.093H10a.667.667 0 0 1 0-1.333h1.887L9.22 7.527 6.34 9.24a.67.67 0 0 1-.853-.147l-3.333-4A.667.667 0 1 1 3.18 4.24L6.147 7.8l2.847-1.707a.67.67 0 0 1 .846.14l2.827 3.3V8A.667.667 0 1 1 14 8z">
                                    </path>
                                </svg></span></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="sm:col-span-2 order-1">
                            <div
                                className="bg-white border border-gray-300 rounded-2xl w-full">
                                <div
                                    className="px-4 sm:px-6 py-4 flex items-start justify-between">
                                    <div>
                                        <h3
                                            className="text-lg font-bold leading-7 text-light-primary-text">
                                            Order Status</h3>
                                    </div>
                                </div>
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                    <div
                                        className="flex flex-col md:flex-row  justify-between gap-8">
                                        <div
                                            className="w-full md:w-1/2 space-y-2">
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#2CD9C5" }}></span><span
                                                            className="text-sm text-light-primary-text">New
                                                        Shipment</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">60</span>
                                            </div>
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#2D99FF" }}></span><span
                                                            className="text-sm text-light-primary-text">Processing</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">24</span>
                                            </div>
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#FFEF5A" }}></span><span
                                                            className="text-sm text-light-primary-text">Delivered</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">14</span>
                                            </div>
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#E02D69" }}></span><span
                                                            className="text-sm text-light-primary-text">Cancelled</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">5</span>
                                            </div>
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#FF6C40" }}></span><span
                                                            className="text-sm text-light-primary-text">Failed
                                                        Delivery</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">10</span>
                                            </div>
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#826AF9" }}></span><span
                                                            className="text-sm text-light-primary-text">Pending
                                                        shipments</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">6</span>
                                            </div>
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#CB0233" }}></span><span
                                                            className="text-sm text-light-primary-text">Returned</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">16</span>
                                            </div>
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#056D6E" }}></span><span
                                                            className="text-sm text-light-primary-text">Refunded</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">18</span>
                                            </div>
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <div
                                                    className="flex items-center gap-3">
                                                    <span className="w-3 h-3 rounded-full shrink-0"
                                                        style={{ backgroundColor: "#00AAEC" }}></span><span
                                                            className="text-sm text-light-primary-text">Stuck
                                                        orders</span>
                                                </div><span
                                                    className="text-sm leading-5.5 text-light-primary-text">24</span>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full md:w-1/2 flex justify-center items-center">
                                            <div
                                                className="relative w-full ">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 order-4 lg:order-2">
                            <div
                                className="bg-white border border-gray-300 rounded-2xl w-full">
                                <div
                                    className="px-4 sm:px-6 py-4 flex items-start justify-between">
                                    <div>
                                        <h3
                                            className="text-lg font-bold leading-7 text-light-primary-text">
                                            Top Countries By sales
                                        </h3>
                                        <p
                                            className="text-sm text-light-secondary-text mt-1">
                                            Total Sale 300M</p>
                                    </div>
                                </div>
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                    <div className="space-y-10 pt-6">
                                        <div
                                            className="flex items-center justify-between gap-4">
                                            <div
                                                className="flex items-center gap-4">
                                                <div
                                                    className="w-8 h-6 relative rounded overflow-hidden  shrink-0">
                                                    <img alt="Canada"
                                                        loading="lazy"
                                                        width="32"
                                                        height="24"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="object-cover"
                                                        style={{ color: "transparent" }}
                                                        srcSet="/_next/image?url=%2Fimages%2Fflag%2Fflag-1.png&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fflag%2Fflag-1.png&w=64&q=75 2x"
                                                        src="_next/image9d91.png?url=%2Fimages%2Fflag%2Fflag-1.png&w=64&q=75" />
                                                </div><span
                                                    className="font-semibold font-dm-sans text-light-primary-text text-sm">Canada</span>
                                            </div>
                                            <div
                                                className="flex-1 h-7 max-w-[80px]">

                                            </div>
                                            <div className="text-right">
                                                <span
                                                    className="font-semibold text-sm text-light-primary-text">2400k</span>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center justify-between gap-4">
                                            <div
                                                className="flex items-center gap-4">
                                                <div
                                                    className="w-8 h-6 relative rounded overflow-hidden  shrink-0">
                                                    <img alt="Korean"
                                                        loading="lazy"
                                                        width="32"
                                                        height="24"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="object-cover"
                                                        style={{ color: "transparent" }}
                                                        srcSet="/_next/image?url=%2Fimages%2Fflag%2Fflag-2.png&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fflag%2Fflag-2.png&w=64&q=75 2x"
                                                        src="_next/image95bb.png?url=%2Fimages%2Fflag%2Fflag-2.png&w=64&q=75" />
                                                </div><span
                                                    className="font-semibold font-dm-sans text-light-primary-text text-sm">Korean</span>
                                            </div>
                                            <div
                                                className="flex-1 h-7 max-w-[80px]">

                                            </div>
                                            <div className="text-right">
                                                <span
                                                    className="font-semibold text-sm text-light-primary-text">200k</span>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center justify-between gap-4">
                                            <div
                                                className="flex items-center gap-4">
                                                <div
                                                    className="w-8 h-6 relative rounded overflow-hidden  shrink-0">
                                                    <img alt="France"
                                                        loading="lazy"
                                                        width="32"
                                                        height="24"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="object-cover"
                                                        style={{ color: "transparent" }}
                                                        srcSet="/_next/image?url=%2Fimages%2Fflag%2Fflag-3.png&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fflag%2Fflag-3.png&w=64&q=75 2x"
                                                        src="_next/image2899.png?url=%2Fimages%2Fflag%2Fflag-3.png&w=64&q=75" />
                                                </div><span
                                                    className="font-semibold font-dm-sans text-light-primary-text text-sm">France</span>
                                            </div>
                                            <div
                                                className="flex-1 h-7 max-w-[80px]">

                                            </div>
                                            <div className="text-right">
                                                <span
                                                    className="font-semibold text-sm text-light-primary-text">300k</span>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center justify-between gap-4">
                                            <div
                                                className="flex items-center gap-4">
                                                <div
                                                    className="w-8 h-6 relative rounded overflow-hidden  shrink-0">
                                                    <img alt="German"
                                                        loading="lazy"
                                                        width="32"
                                                        height="24"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="object-cover"
                                                        style={{ color: "transparent" }}
                                                        srcSet="/_next/image?url=%2Fimages%2Fflag%2Fflag-4.png&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fflag%2Fflag-4.png&w=64&q=75 2x"
                                                        src="_next/imagefcc7.png?url=%2Fimages%2Fflag%2Fflag-4.png&w=64&q=75" />
                                                </div><span
                                                    className="font-semibold font-dm-sans text-light-primary-text text-sm">German</span>
                                            </div>
                                            <div
                                                className="flex-1 h-7 max-w-[80px]">

                                            </div>
                                            <div className="text-right">
                                                <span
                                                    className="font-semibold text-sm text-light-primary-text">48000k</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2 order-2 lg:order-3">
                            <div
                                className="bg-white border border-gray-300 rounded-2xl w-full">
                                <div
                                    className="px-4 sm:px-6 py-4 flex items-start justify-between">
                                    <div>
                                        <h3
                                            className="text-lg font-bold leading-7 text-light-primary-text">
                                            Accommodation Revenue
                                        </h3>
                                        <p
                                            className="text-sm text-light-secondary-text mt-1">
                                            (+43%) than last year
                                        </p>
                                    </div>
                                </div>
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                    <div className="-ml-5 -mb-5">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 order-3">
                            <div
                                className="bg-white border border-gray-300 rounded-2xl w-full">
                                <div
                                    className="px-4 sm:px-6 py-4 flex items-start justify-between">
                                    <div>
                                        <h3
                                            className="text-lg font-bold leading-7 text-light-primary-text">
                                            Order Fulfillment Status
                                        </h3>
                                    </div>
                                </div>
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                    <div className="space-y-6 pt-3">
                                        <div className="space-y-3">
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <span
                                                    className="font-semibold text-light-primary-text leading-5.5">Shipped
                                                    orders</span>
                                                <div
                                                    className="flex items-center gap-1">
                                                    <span
                                                        className="font-semibold text-light-primary-text leading-5.5">30</span><span
                                                            className="text-light-secondary-text">(30%)</span>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full h-2 rounded-full overflow-hidden bg-info-lighter h-2">
                                                <div className="h-full rounded-full transition-all duration-300 ease-in-out bg-info"
                                                    style={{ width: "30%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <span
                                                    className="font-semibold text-light-primary-text leading-5.5">Delivered</span>
                                                <div
                                                    className="flex items-center gap-1">
                                                    <span
                                                        className="font-semibold text-light-primary-text leading-5.5">40</span><span
                                                            className="text-light-secondary-text">(56%)</span>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full h-2 rounded-full overflow-hidden bg-primary-lighter h-2">
                                                <div className="h-full rounded-full transition-all duration-300 ease-in-out bg-primary"
                                                    style={{ width: "56%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <span
                                                    className="font-semibold text-light-primary-text leading-5.5">Pending
                                                    shipments</span>
                                                <div
                                                    className="flex items-center gap-1">
                                                    <span
                                                        className="font-semibold text-light-primary-text leading-5.5">20</span><span
                                                            className="text-light-secondary-text">(56%)</span>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full h-2 rounded-full overflow-hidden bg-warning-lighter h-2">
                                                <div className="h-full rounded-full transition-all duration-300 ease-in-out bg-warning"
                                                    style={{ width: "56%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <span
                                                    className="font-semibold text-light-primary-text leading-5.5">Stuck
                                                    orders</span>
                                                <div
                                                    className="flex items-center gap-1">
                                                    <span
                                                        className="font-semibold text-light-primary-text leading-5.5">10</span><span
                                                            className="text-light-secondary-text">(10%)</span>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full h-2 rounded-full overflow-hidden bg-gray-200 h-2">
                                                <div className="h-full rounded-full transition-all duration-300 ease-in-out bg-gray-900"
                                                    style={{ width: "10%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div
                                                className="flex items-center justify-between text-sm">
                                                <span
                                                    className="font-semibold text-light-primary-text leading-5.5">Back
                                                    Product</span>
                                                <div
                                                    className="flex items-center gap-1">
                                                    <span
                                                        className="font-semibold text-light-primary-text leading-5.5">2</span><span
                                                            className="text-light-secondary-text">(02%)</span>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full h-2 rounded-full overflow-hidden bg-error-lighter h-2">
                                                <div className="h-full rounded-full transition-all duration-300 ease-in-out bg-error"
                                                    style={{ width: "2%" }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 sm:mt-6">
                    <div className=" border border-gray-500/20 rounded-2xl w-full">
                        <div className="px-6 py-4">
                            <h3 className="text-lg text-light-primary-text font-bold">
                                Recent Orders</h3>
                        </div>
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&_tr]:border-b">
                                    <tr
                                        className="transition-colors data-[state=selected]:bg-muted border-b px-2 border-[rgba(145,158,171,0.20)] hover:bg-transparent">
                                        <th
                                            className="p-3 first:pl-5 last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 whitespace-nowrap font-semibold text-sm text-light-primary-text h-auto">
                                            Order ID</th>
                                        <th
                                            className="p-3 first:pl-5 last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 whitespace-nowrap font-semibold text-sm text-light-primary-text h-auto">
                                            Customer ID</th>
                                        <th
                                            className="p-3 first:pl-5 last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 whitespace-nowrap font-semibold text-sm text-light-primary-text h-auto">
                                            Order Date</th>
                                        <th
                                            className="p-3 first:pl-5 last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 whitespace-nowrap font-semibold text-sm text-light-primary-text h-auto">
                                            Items</th>
                                        <th
                                            className="p-3 first:pl-5 last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 whitespace-nowrap font-semibold text-sm text-light-primary-text h-auto">
                                            Price</th>
                                        <th
                                            className="p-3 first:pl-5 whitespace-nowrap last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 font-semibold text-sm text-light-primary-text h-auto">
                                            Status</th>
                                        <th
                                            className="p-3 first:pl-5 whitespace-nowrap last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 font-semibold text-sm text-light-primary-text h-auto">
                                            Action</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #254830</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #57390</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            12 Sept, 2027</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            1</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            $20</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-warning-alpha-16 text-warning-dark">Pending</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ring ring-[rgba(255,72,66,0.48)] text-error hover:bg-error-lighter/20 px-4 py-1 h-7.5 text-[13px] leading-5.5">Cancel</button>
                                        </td>
                                    </tr>
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #254831</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #57391</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            12 Sept, 2027</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            2</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            $40</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-warning-alpha-16 text-warning-dark">Processing</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ring ring-[rgba(255,72,66,0.48)] text-error hover:bg-error-lighter/20 px-4 py-1 h-7.5 text-[13px] leading-5.5">Cancel</button>
                                        </td>
                                    </tr>
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #254832</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #57392</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            12 Sept, 2027</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            3</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            $60</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-warning-alpha-16 text-warning-dark">Processing</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ring ring-[rgba(255,72,66,0.48)] text-error hover:bg-error-lighter/20 px-4 py-1 h-7.5 text-[13px] leading-5.5">Cancel</button>
                                        </td>
                                    </tr>
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #254833</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #57393</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            12 Sept, 2027</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            4</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            $80</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-warning-alpha-16 text-warning-dark">Pending</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ring ring-[rgba(255,72,66,0.48)] text-error hover:bg-error-lighter/20 px-4 py-1 h-7.5 text-[13px] leading-5.5">Cancel</button>
                                        </td>
                                    </tr>
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #254834</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            #57394</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            12 Sept, 2027</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            5</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4 text-sm text-light-secondary-text">
                                            $100</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-warning-alpha-16 text-warning-dark">Processing</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-4">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ring ring-[rgba(255,72,66,0.48)] text-error hover:bg-error-lighter/20 px-4 py-1 h-7.5 text-[13px] leading-5.5">Cancel</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="p-4 sm:p-6 flex justify-end border-t border-[rgba(145,158,171,0.20)]">
                            <div className="flex items-center gap-2 "><button
                                disabled
                                className="w-10 h-7.5 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 20 20"
                                    className="size-5">
                                    <path fill="currentColor"
                                        d="M12.056 4.396a.75.75 0 1 1 .888 1.207v.001l-.002.002-.01.007-.04.03-.155.116a46 46 0 0 0-2.246 1.813c-.615.534-1.21 1.093-1.647 1.587a4.6 4.6 0 0 0-.487.635 1 1 0 0 0-.102.206c.009.027.035.093.102.206q.158.261.487.635c.436.493 1.033 1.052 1.648 1.587a43 43 0 0 0 2.4 1.93l.04.028.01.007.002.002v.001a.75.75 0 1 1-.888 1.207h-.002l-.003-.003-.055-.04-.163-.123a47 47 0 0 1-2.325-1.877c-.634-.55-1.288-1.16-1.79-1.726a6 6 0 0 1-.646-.854c-.157-.26-.322-.607-.322-.98 0-.374.165-.72.322-.98.17-.281.397-.572.647-.854.5-.567 1.155-1.176 1.789-1.727a44 44 0 0 1 2.325-1.877l.163-.122.055-.04q0-.002.003-.003h.002z">
                                    </path>
                                </svg></button>
                                <div className="flex items-center gap-1"><button
                                    className="w-10 h-7.5 flex items-center justify-center rounded-full text-sm transition-colors bg-primary-lighter text-primary-dark font-semibold">1</button><button
                                        className="w-10 h-7.5 flex items-center justify-center rounded-full text-sm transition-colors text-gray-600 hover:bg-gray-50 font-medium">2</button><button
                                            className="w-10 h-7.5 flex items-center justify-center rounded-full text-sm transition-colors text-gray-600 hover:bg-gray-50 font-medium">3</button>
                                </div><button
                                    className="w-10 h-7.5 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 20 20"
                                        className="size-5">
                                        <path fill="currentColor"
                                            d="M6.897 4.555a.75.75 0 0 1 1.048-.159l.002.001.003.002.054.041.164.122a46 46 0 0 1 2.325 1.877c.634.55 1.288 1.16 1.789 1.727.25.282.477.572.646.853.157.26.322.607.323.98 0 .374-.166.72-.323.981a6 6 0 0 1-.646.854c-.501.566-1.155 1.175-1.79 1.726a44 44 0 0 1-2.324 1.877l-.164.122-.054.041-.003.002-.001.001h-.001a.75.75 0 1 1-.889-1.207l.002-.003.01-.007.041-.029.154-.116a46 46 0 0 0 2.245-1.814c.616-.534 1.212-1.093 1.649-1.587a4.6 4.6 0 0 0 .486-.634c.068-.113.094-.18.103-.206a1 1 0 0 0-.103-.206 4.6 4.6 0 0 0-.486-.635c-.437-.494-1.032-1.053-1.648-1.587a43 43 0 0 0-2.246-1.814l-.154-.116-.04-.03q-.008-.003-.01-.006-.002-.001-.003-.002a.75.75 0 0 1-.159-1.049">
                                        </path>
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 sm:mt-6">
                    <div className=" border border-gray-500/20 rounded-2xl w-full">
                        <div className="px-6 py-4">
                            <h3 className="text-lg text-light-primary-text font-bold">
                                Stock Update</h3>
                        </div>
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&_tr]:border-b">
                                    <tr
                                        className="transition-colors data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] hover:bg-transparent">
                                        <th
                                            className="p-3 first:pl-5 whitespace-nowrap last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 font-semibold text-sm text-light-primary-text h-auto">
                                            Product Name</th>
                                        <th
                                            className="p-3 first:pl-5 whitespace-nowrap last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 font-semibold text-sm text-light-primary-text h-auto">
                                            Category</th>
                                        <th
                                            className="p-3 first:pl-5 last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 whitespace-nowrap font-semibold text-sm text-light-primary-text h-auto">
                                            Current Stock</th>
                                        <th
                                            className="p-3 first:pl-5 whitespace-nowrap last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 font-semibold text-sm text-light-primary-text h-auto">
                                            Status</th>
                                        <th
                                            className="p-3 first:pl-5 whitespace-nowrap last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 font-semibold text-sm text-light-primary-text h-auto">
                                            Vendor</th>
                                        <th
                                            className="p-3 first:pl-5 whitespace-nowrap last:pr-5 text-left align-middle [&:has([role=checkbox])]:pr-0 py-3 font-semibold text-sm text-light-primary-text h-auto">
                                            Action</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <div
                                                className="flex items-center gap-4">
                                                <div
                                                    className="w-10 h-10 rounded-lg relative overflow-hidden shrink-0">
                                                    <img alt="Product 1"
                                                        loading="lazy"
                                                        width="40"
                                                        height="40"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="object-cover w-auto h-auto"
                                                        style={{ color: "transparent" }}
                                                        srcSet="/_next/image?url=%2Fimages%2Fproducts%2F05.png&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fproducts%2F05.png&w=96&q=75 2x"
                                                        src="_next/imageb349.png?url=%2Fimages%2Fproducts%2F05.png&w=96&q=75" />
                                                </div>
                                                <div>
                                                    <div
                                                        className="font-semibold text-light-primary-text text-sm">
                                                        Product
                                                        1
                                                    </div>
                                                    <div
                                                        className="text-sm text-light-secondary-text">
                                                        ID:
                                                        #23453
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text">
                                            Cloth</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text pl-8">
                                            3</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-error-alpha-16 text-error-dark">Low
                                                Stock</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text">
                                            G-Shop</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:cursor-not-allowed bg-primary text-white hover:bg-primary-dark disabled:bg-[rgba(145,158,171,0.24)] disabled:text-[rgba(145,158,171,0.80)] disabled:opacity-100 px-4 py-1 h-7.5 text-[13px] leading-5.5">Order
                                                Now</button>
                                        </td>
                                    </tr>
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <div
                                                className="flex items-center gap-4">
                                                <div
                                                    className="w-10 h-10 rounded-lg relative overflow-hidden shrink-0">
                                                    <img alt="Product 2"
                                                        loading="lazy"
                                                        width="40"
                                                        height="40"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="object-cover w-auto h-auto"
                                                        style={{ color: "transparent" }}
                                                        srcSet="/_next/image?url=%2Fimages%2Fproducts%2F06.png&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fproducts%2F06.png&w=96&q=75 2x"
                                                        src="_next/imagea7a2.png?url=%2Fimages%2Fproducts%2F06.png&w=96&q=75" />
                                                </div>
                                                <div>
                                                    <div
                                                        className="font-semibold text-light-primary-text text-sm">
                                                        Product
                                                        2
                                                    </div>
                                                    <div
                                                        className="text-sm text-light-secondary-text">
                                                        ID:
                                                        #23454
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text">
                                            Cloth</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text pl-8">
                                            6</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-primary-alpha-16 text-primary-dark">In
                                                Stock</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text">
                                            G-Shop</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:cursor-not-allowed bg-primary text-white hover:bg-primary-dark disabled:bg-[rgba(145,158,171,0.24)] disabled:text-[rgba(145,158,171,0.80)] disabled:opacity-100 px-4 py-1 h-7.5 text-[13px] leading-5.5">Order
                                                Now</button>
                                        </td>
                                    </tr>
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <div
                                                className="flex items-center gap-4">
                                                <div
                                                    className="w-10 h-10 rounded-lg relative overflow-hidden shrink-0">
                                                    <img alt="Product 3"
                                                        loading="lazy"
                                                        width="40"
                                                        height="40"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="object-cover w-auto h-auto"
                                                        style={{ color: "transparent" }}
                                                        srcSet="/_next/image?url=%2Fimages%2Fproducts%2F07.png&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fproducts%2F07.png&w=96&q=75 2x"
                                                        src="_next/image25d2.png?url=%2Fimages%2Fproducts%2F07.png&w=96&q=75" />
                                                </div>
                                                <div>
                                                    <div
                                                        className="font-semibold text-light-primary-text text-sm">
                                                        Product
                                                        3
                                                    </div>
                                                    <div
                                                        className="text-sm text-light-secondary-text">
                                                        ID:
                                                        #23455
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text">
                                            Cloth</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text pl-8">
                                            9</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-error-alpha-16 text-error-dark">Low
                                                Stock</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text">
                                            G-Shop</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:cursor-not-allowed bg-primary text-white hover:bg-primary-dark disabled:bg-[rgba(145,158,171,0.24)] disabled:text-[rgba(145,158,171,0.80)] disabled:opacity-100 px-4 py-1 h-7.5 text-[13px] leading-5.5">Order
                                                Now</button>
                                        </td>
                                    </tr>
                                    <tr
                                        className="data-[state=selected]:bg-muted border-b border-[rgba(145,158,171,0.20)] last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <div
                                                className="flex items-center gap-4">
                                                <div
                                                    className="w-10 h-10 rounded-lg relative overflow-hidden shrink-0">
                                                    <img alt="Product 4"
                                                        loading="lazy"
                                                        width="40"
                                                        height="40"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className="object-cover w-auto h-auto"
                                                        style={{ color: "transparent" }}
                                                        srcSet="/_next/image?url=%2Fimages%2Fproducts%2F08.png&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fproducts%2F08.png&w=96&q=75 2x"
                                                        src="_next/imageee01.png?url=%2Fimages%2Fproducts%2F08.png&w=96&q=75" />
                                                </div>
                                                <div>
                                                    <div
                                                        className="font-semibold text-light-primary-text text-sm">
                                                        Product
                                                        4
                                                    </div>
                                                    <div
                                                        className="text-sm text-light-secondary-text">
                                                        ID:
                                                        #23456
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text">
                                            Cloth</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text pl-8">
                                            12</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <span
                                                className="px-2 py-1 h-5.5 inline-flex items-center justify-center font-public-sans rounded-full text-xs font-medium bg-primary-alpha-16 text-primary-dark">In
                                                Stock</span>
                                        </td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap text-sm text-light-secondary-text">
                                            G-Shop</td>
                                        <td
                                            className="px-3 first:pl-5 last:pr-5 align-middle [&:has([role=checkbox])]:pr-0 py-2.5 whitespace-nowrap">
                                            <button
                                                className="rounded-full inline-flex items-center justify-center cursor-pointer font-bold transition-colors focus:outline-none disabled:cursor-not-allowed bg-primary text-white hover:bg-primary-dark disabled:bg-[rgba(145,158,171,0.24)] disabled:text-[rgba(145,158,171,0.80)] disabled:opacity-100 px-4 py-1 h-7.5 text-[13px] leading-5.5">Order
                                                Now</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="p-4 sm:p-6 border-t border-[rgba(145,158,171,0.20)] flex justify-end">
                            <div className="flex items-center gap-2 "><button
                                disabled
                                className="w-10 h-7.5 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 20 20"
                                    className="size-5">
                                    <path fill="currentColor"
                                        d="M12.056 4.396a.75.75 0 1 1 .888 1.207v.001l-.002.002-.01.007-.04.03-.155.116a46 46 0 0 0-2.246 1.813c-.615.534-1.21 1.093-1.647 1.587a4.6 4.6 0 0 0-.487.635 1 1 0 0 0-.102.206c.009.027.035.093.102.206q.158.261.487.635c.436.493 1.033 1.052 1.648 1.587a43 43 0 0 0 2.4 1.93l.04.028.01.007.002.002v.001a.75.75 0 1 1-.888 1.207h-.002l-.003-.003-.055-.04-.163-.123a47 47 0 0 1-2.325-1.877c-.634-.55-1.288-1.16-1.79-1.726a6 6 0 0 1-.646-.854c-.157-.26-.322-.607-.322-.98 0-.374.165-.72.322-.98.17-.281.397-.572.647-.854.5-.567 1.155-1.176 1.789-1.727a44 44 0 0 1 2.325-1.877l.163-.122.055-.04q0-.002.003-.003h.002z">
                                    </path>
                                </svg></button>
                                <div className="flex items-center gap-1"><button
                                    className="w-10 h-7.5 flex items-center justify-center rounded-full text-sm transition-colors bg-primary-lighter text-primary-dark font-semibold">1</button><button
                                        className="w-10 h-7.5 flex items-center justify-center rounded-full text-sm transition-colors text-gray-600 hover:bg-gray-50 font-medium">2</button><button
                                            className="w-10 h-7.5 flex items-center justify-center rounded-full text-sm transition-colors text-gray-600 hover:bg-gray-50 font-medium">3</button><button
                                                className="w-10 h-7.5 flex items-center justify-center rounded-full text-sm transition-colors text-gray-600 hover:bg-gray-50 font-medium">4</button>
                                </div><button
                                    className="w-10 h-7.5 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 20 20"
                                        className="size-5">
                                        <path fill="currentColor"
                                            d="M6.897 4.555a.75.75 0 0 1 1.048-.159l.002.001.003.002.054.041.164.122a46 46 0 0 1 2.325 1.877c.634.55 1.288 1.16 1.789 1.727.25.282.477.572.646.853.157.26.322.607.323.98 0 .374-.166.72-.323.981a6 6 0 0 1-.646.854c-.501.566-1.155 1.175-1.79 1.726a44 44 0 0 1-2.324 1.877l-.164.122-.054.041-.003.002-.001.001h-.001a.75.75 0 1 1-.889-1.207l.002-.003.01-.007.041-.029.154-.116a46 46 0 0 0 2.245-1.814c.616-.534 1.212-1.093 1.649-1.587a4.6 4.6 0 0 0 .486-.634c.068-.113.094-.18.103-.206a1 1 0 0 0-.103-.206 4.6 4.6 0 0 0-.486-.635c-.437-.494-1.032-1.053-1.648-1.587a43 43 0 0 0-2.246-1.814l-.154-.116-.04-.03q-.008-.003-.01-.006-.002-.001-.003-.002a.75.75 0 0 1-.159-1.049">
                                        </path>
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}