import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import WidthWrapper from "../WidthWrapper";
import { buttonVariants } from "@/components/ui/button";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const isAdmin = user?.email === process.env.ADMIN_EMAIL;
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <WidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        href="/"
                        className="flex items-center gap-3 text-xl z-40 font-semibold"
                    >
                        <Image
                            src="/logo2.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="w-full"
                        />
                        <span className={`flex items-center gap-1`}>
                            Deco<span className="text-cyan-500">phone</span>
                        </span>
                    </Link>
                    <div className="h-full flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link
                                    href="/api/auth/logout"
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost",
                                    })}
                                >
                                    Đăng xuất
                                </Link>
                                {isAdmin ? (
                                    <Link
                                        href="/api/auth/logout"
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost",
                                        })}
                                    >
                                        Dashboard ✨
                                    </Link>
                                ) : null}
                                <Link
                                    href="/configure/upload"
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "decophone",
                                        className:
                                            "hidden sm:flex items-center gap-1 bg-cyan-500",
                                    })}
                                >
                                    Tạo mẫu
                                    <span className="icon-[mage--image-plus] text-lg"></span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/api/auth/register"
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost",
                                    })}
                                >
                                    Đăng ký
                                </Link>
                                <Link
                                    href="/api/auth/login"
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost",
                                    })}
                                >
                                    Đăng nhập
                                </Link>
                                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                                <Link
                                    href="/configure/upload"
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "decophone",
                                        className:
                                            "hidden sm:flex items-center gap-1 bg-cyan-500",
                                    })}
                                >
                                    Tạo mẫu
                                    <span className="icon-[mage--image-plus] text-lg"></span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </WidthWrapper>
        </nav>
    );
};

export default Navbar;
