"use client";
import { Progress } from "@/components/ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import Dropzone, { FileRejection } from "react-dropzone";

const UploadPage = () => {
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(20);
    const router = useRouter();
    const { toast } = useToast();
    const { startUpload, isUploading } = useUploadThing("imageUploader", {
        onClientUploadComplete: ([data]) => {
            const configId = data.serverData.configId;
            startTransition(() => {
                router.push(`/configure/design?id=${configId}`);
            });
        },
        onUploadProgress(p) {
            setUploadProgress(p);
        },
    });

    const onDropRejected = (rejectedFiles: FileRejection[]) => {
        const [file] = rejectedFiles;
        setIsDragOver(false);

        toast({
            title: `${file.file.type} loại ảnh không được hỗ trợ.`,
            description: "Vui lòng chọn hình ảnh PNG, JPG hoặc JPEG.",
            variant: "destructive",
        });
    };

    const onDropAccepted = (acceptedFiles: File[]) => {
        startUpload(acceptedFiles, { configId: undefined });
        setIsDragOver(false);
    };

    const [isPending, startTransition] = useTransition();
    return (
        <div
            className={cn(
                "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
                {
                    "ring-blue-900/25 bg-blue-900/10": isDragOver,
                }
            )}
        >
            <div className="relative flex flex-1 flex-col items-center justify-center w-full">
                <Dropzone
                    onDropRejected={onDropRejected}
                    onDropAccepted={onDropAccepted}
                    accept={{
                        "image/png": [".png"],
                        "image/jpeg": [".jpeg"],
                        "image/jpg": [".jpg"],
                    }}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div
                            className="w-full h-full flex-1 flex flex-col items-center justify-center"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {isDragOver ? (
                                <span className="icon-[lucide--square-dashed-mouse-pointer] text-3xl"></span>
                            ) : isUploading || isPending ? (
                                <Loader2 className="animate-spin h-6 w-6 text-cyan-500 mb-2" />
                            ) : (
                                <span className="icon-[mage--image-plus] text-3xl text-cyan-500"></span>
                            )}
                            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                                {isUploading ? (
                                    <div className="flex flex-col items-center">
                                        <p>Đang tải lên...</p>
                                        <Progress
                                            value={uploadProgress}
                                            className="mt-2 w-40 h-2 bg-gray-300 "
                                        />
                                    </div>
                                ) : isPending ? (
                                    <div className="flex flex-col items-center">
                                        <p>
                                            Đang chuyển hướng, vui lòng chờ...
                                        </p>
                                    </div>
                                ) : isDragOver ? (
                                    <p>
                                        <span className="font-semibold">
                                            Thả tệp
                                        </span>{" "}
                                        Tải lên
                                    </p>
                                ) : (
                                    <p>
                                        <span className="font-semibold">
                                            Nhấn để tải lên
                                        </span>{" "}
                                        hoặc kéo và thả
                                    </p>
                                )}
                            </div>
                            {isPending ? null : (
                                <p className="text-xs text-zinc-500">
                                    PNG, JPG, JPEG
                                </p>
                            )}
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    );
};

export default UploadPage;