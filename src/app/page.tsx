import Image from "next/image";
import WidthWrapper from "./components/WidthWrapper";
import Phone from "./components/Phone";
import { Icons } from "./components/Icons";
import { Reviews } from "./components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="bg-slate-50">
            <section>
                <WidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
                    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                            <div className="absolute w-80 left-0 -top-20 hidden lg:block">
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-5" />
                                {/* <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={120}
                                    height={120}
                                    className="w-full"
                                /> */}
                                <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-cyan-500 from-violet-500">
                                    Deco Phone
                                </h1>
                            </div>
                            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                                <span className=" bg-cyan-500 px-2 text-white">
                                    Thiết kế
                                </span>{" "}
                                Ốp điện thoại của bạn
                            </h1>
                            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                                Chọn ảnh, lưu khoảnh khắc, in lên ốp lưng -{" "}
                                <span className="font-semibold">
                                    Deco Phone
                                </span>{" "}
                                : Nơi kỷ niệm tỏa sáng cùng phong cách!
                            </p>
                            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                                <div className="space-y-2">
                                    <li className="flex gap-1.5 items-center text-left">
                                        <span className="icon-[mdi--check-decagram] text-cyan-500 text-2xl"></span>
                                        Chất liệu cao cấp, bền bỉ
                                    </li>
                                    <li className="flex gap-1.5 items-center text-left">
                                        <span className="icon-[mdi--check-decagram] text-cyan-500 text-2xl"></span>
                                        Bảo hành 1 năm
                                    </li>
                                    <li className="flex gap-1.5 items-center text-left">
                                        <span className="icon-[mdi--check-decagram] text-cyan-500 text-2xl"></span>
                                        Hỗ trợ các dòng iPhone hiện đại
                                    </li>
                                </div>
                            </ul>
                            <div className="mt-12 flex sm:flex-row flex-col items-center sm:items-start gap-5">
                                <div className="flex -space-x-4">
                                    <Image
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        src="/users/user-1.png"
                                        alt="user image"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        src="/users/user-2.png"
                                        alt="user image"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        src="/users/user-3.png"
                                        alt="user image"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                                        src="/users/user-4.jpg"
                                        alt="user image"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                                        src="/users/user-5.jpg"
                                        alt="user image"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="flex flex-col justify-between items-center sm:items-start">
                                    <div className="flex  gap-0.5">
                                        <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                        <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                        <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                        <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                        <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                    </div>
                                    <p>
                                        <span className="font-semibold">
                                            1.250
                                        </span>{" "}
                                        Khách hàng đánh giá
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
                        <div className="relative md:max-w-xl">
                            <Image
                                alt=""
                                src="/your-image.png"
                                width={150}
                                height={150}
                                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                            />
                            <Image
                                alt=""
                                width={150}
                                height={150}
                                src="/line.png"
                                className="absolute w-20 -left-6 -bottom-6 select-none"
                            />
                            <Phone
                                className="w-64"
                                imgSrc="/testimonials/1.jpg"
                            />
                        </div>
                    </div>
                </WidthWrapper>
            </section>

            <section className="bg-slate-100 grainy-dark py-24 ">
                <WidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
                    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
                        <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                            Phản hồi của{" "}
                            <span className="relative px-2">
                                khách hàng{" "}
                                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
                            </span>{" "}
                        </h2>

                        <Image
                            src="/logo1.png"
                            alt="Logo"
                            width={120}
                            height={120}
                            className="w-20 order-0 lg:order-2"
                        />
                    </div>

                    <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
                        <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                            <div className="flex gap-0.5 mb-2">
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                            </div>

                            <div className="text-lg leading-8">
                                <p>
                                    Ốp lưng cầm rất chắc chắn và thiết kế của nó
                                    còn được khen nữa. Mình đã dùng chiếc ốp này
                                    được hai tháng rưỡi rồi và hình ảnh vẫn siêu
                                    nét, khác hẳn với chiếc ốp cũ, hình in chỉ
                                    sau vài tuần đã bắt đầu bị phai nhạt sang
                                    màu vàng. Rất thích sản phẩm này!
                                </p>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <Image
                                    className="rounded-full h-12 w-12 object-cover"
                                    src="/users/user-2.png"
                                    alt="user"
                                    width={100}
                                    height={100}
                                />

                                <div className="flex flex-col">
                                    <p className="font-semibold">Thơ Phạm</p>
                                    <div className="flex gap-1.5 items-center text-zinc-600">
                                        <span className="icon-[mdi--check-decagram] text-cyan-500 "></span>

                                        <p className="text-sm">Đã mua hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                            <div className="flex gap-0.5 mb-2">
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                                <span className="icon-[ph--star-fill] text-[#eab308] text-xl"></span>
                            </div>
                            <div className="text-lg leading-8">
                                <p>
                                    Trước đây, tôi thường để điện thoại cạnh
                                    chìa khóa trong túi, điều này đã khiến tất
                                    cả các ốp lưng cũ của tôi bị xước xát khá
                                    nặng. Tuy nhiên, chiếc ốp này trông như mới
                                    sau khoảng nửa năm sử dụng, chỉ trừ một vết
                                    xước nhỏ gần như không nhìn thấy ở góc. Rất
                                    thích!
                                </p>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <Image
                                    className="rounded-full h-12 w-12 object-cover"
                                    src="/users/user-1.png"
                                    alt="user"
                                    width={100}
                                    height={100}
                                />
                                <div className="flex flex-col">
                                    <p className="font-semibold">Nam Nhi</p>
                                    <div className="flex gap-1.5 items-center text-zinc-600">
                                        <span className="icon-[mdi--check-decagram] text-cyan-500 "></span>
                                        <p className="text-sm">Đã mua hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </WidthWrapper>
                <div className="pt-16">
                    <Reviews />
                </div>
            </section>
            <section>
                <WidthWrapper className="py-24">
                    <div className="mb-12 px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl sm:text-center">
                            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                                Tải ảnh lên và thiết kế{" "}
                                <span className="relative px-2 bg-cyan-500 text-white">
                                    ốp lưng
                                </span>{" "}
                                của riêng bạn!
                            </h2>
                        </div>
                    </div>

                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
                            <Image
                                alt=""
                                width={120}
                                height={120}
                                src="/arrow.png"
                                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                            />

                            <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                                <Image
                                    width={500}
                                    height={500}
                                    alt=""
                                    src="/love2.jpg"
                                    className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                                />
                            </div>

                            <Phone className="w-60" imgSrc="/love2.jpg" />
                        </div>
                    </div>

                    <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
                        <li className="w-fit flex items-center gap-1">
                            <span className="icon-[mdi--check-decagram] text-cyan-500 "></span>
                            Chất liệu silicon cao cấp
                        </li>
                        <li className="w-fit flex items-center gap-1">
                            <span className="icon-[mdi--check-decagram] text-cyan-500 "></span>
                            Lớp phủ chống trầy xước và chống vân tay
                        </li>
                        <li className="w-fit flex items-center gap-1">
                            <span className="icon-[mdi--check-decagram] text-cyan-500 "></span>
                            Tương thích sạc không dây
                        </li>
                        <li className="w-fit flex items-center gap-1">
                            <span className="icon-[mdi--check-decagram] text-cyan-500 "></span>
                            Bảo hành in 1 năm
                        </li>

                        <div className="flex justify-center">
                            <Link
                                className={buttonVariants({
                                    size: "lg",
                                    variant: "decophone",
                                    className:
                                        "mx-auto mt-8 flex items-center gap-2",
                                })}
                                href="/configure/upload"
                            >
                                Thiết kế ốp của bạn ngay{" "}
                                <span className="icon-[mage--image-plus] text-lg"></span>
                            </Link>
                        </div>
                    </ul>
                </WidthWrapper>
            </section>
        </div>
    );
}
