import type { Dispatch, SetStateAction } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "@/components/ui/button";

const LoginModal = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <DialogContent className="absolute z-[9999999]">
                <DialogHeader>
                    <div className="relative mx-auto w-24 h-24 mb-2">
                        <Image
                            src="/logo1.png"
                            alt="snake image"
                            className="object-contain"
                            fill
                        />
                    </div>
                    <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
                        Đăng nhập để tiếp tục
                    </DialogTitle>
                    <DialogDescription className="text-base text-center py-2">
                        <span className="font-medium text-zinc-900">
                            Mẫu thiết kế của bạn đã được lưu!
                        </span>{" "}
                        Vui lòng đăng nhập hoặc tạo tài khoản để hoàn tất việc
                        mua hàng của bạn.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
                    <LoginLink
                        className={buttonVariants({ variant: "outline" })}
                    >
                        Đăng nhập
                    </LoginLink>
                    <RegisterLink
                        className={buttonVariants({ variant: "default" })}
                    >
                        Đăng ký
                    </RegisterLink>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
