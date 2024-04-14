"use client";
import { actions } from "@/const/actions";
import {
    KBarAnimator,
    KBarPortal,
    KBarPositioner,
    KBarProvider,
    KBarSearch,
} from "kbar";
import { useRouter } from "next/navigation";


const KeyboardManager = () => {
    const router = useRouter()

    return (
        <KBarProvider actions={actions(router)}>
            <KBarPortal>
                {" "}
                <KBarPositioner className="bg-white dark:bg-slate-500 bg-opacity-30 dark:bg-opacity-30
             backdrop-blur-sm
             h-screen w-screen fixed top-0 left-0">
                    {" "}
                    <KBarAnimator className="w-full max-w-xl">
                        <div
                            className="smooth-shadow dark:shadow-none 
                dark:bg-neutral-900 bg-white
                dark:bg-opacity-75 dark:backdrop-filter dark:backdrop-blur-md
                w-full py-2 px-2 rounded-xl"
                        >
                            <KBarSearch
                                className="w-full p-4 outline-none mb-4 bg-neutral-50 dark:bg-neutral-800 rounded"
                                placeholder="Search"
                            />

                            <div className="mt-2 border-t border-neutral-200 dark:border-neutral-800">
                                {/* <Results /> */}
                            </div>
                        </div>
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
        </KBarProvider>
    );
};

export default KeyboardManager;
