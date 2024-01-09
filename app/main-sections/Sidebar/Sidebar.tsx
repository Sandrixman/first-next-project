import { Suspense } from "react";
import { BuildMenu } from "@/app/main-components";
import { getCourses, getServices } from "@/api/api";
import { Search } from "@/components";
import style from "./Sidebar.module.css";

export async function Sidebar() {
    const courses = await getCourses();
    const services = await getServices();

    return (
        <nav className={style.sidebar}>
            <Search />

            <Suspense fallback={<div>Loading...</div>}>
                <BuildMenu courses={courses} services={services} />
            </Suspense>
        </nav>
    );
}
