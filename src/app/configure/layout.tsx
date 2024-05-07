import { ReactNode } from "react";
import WidthWrapper from "../components/WidthWrapper";
import Steps from "../components/Steps";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <WidthWrapper className="flex-1 flex flex-col">
            <Steps />
            {children}
        </WidthWrapper>
    );
};

export default Layout;
