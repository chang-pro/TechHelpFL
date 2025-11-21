"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdvancedServicesRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/additional-services");
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
            <p className="text-slate-600 dark:text-slate-400">Redirecting to Additional Services...</p>
        </div>
    );
}

