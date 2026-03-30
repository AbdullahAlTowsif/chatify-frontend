import { Outlet } from "react-router"
import CommonLayout from "./CommonLayout"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react";

export const Common = () => {
    const {checkAuth} = useAuthStore();

    useEffect (() => {
        checkAuth();
    }, [checkAuth]);
    return (
        <div>
            <CommonLayout >
                <Outlet />
            </CommonLayout>

        </div>
    )
}
