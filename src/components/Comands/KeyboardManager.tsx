"use client";
import { actions } from "@/const/actions";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaGithub, FaInstagram } from "react-icons/fa";
import {
    KBarAnimator,
    KBarPortal,
    KBarPositioner,
    KBarProvider,
    KBarSearch,
    KBarResults,
    useMatches,
} from "kbar";
import { useRouter } from "next/navigation";

const KeyboardManager = () => {
    const router = useRouter();

    return (
        <>
            <KBarProvider actions={actions(router)}>
                <KBarPortal>
                    {" "}
                    <KBarPositioner
                        className="bg-white bg-opacity-20
             backdrop-blur-[0px]
             h-screen w-screen fixed top-0 left-0"
                    >
                        {" "}
                        <KBarAnimator className="w-full shadow-2xl shadow-gray-500  max-w-xl">
                            <div className="bg-white rounded-lg p-4">
                                <KBarSearch
                                    className="w-full p-4 outline-none mb-4 bg-neutral-50 rounded"
                                    placeholder="holaaaaaaaaaaa"
                                />

                                <div className="mt-2 border-t border-neutral-200 dark:border-neutral-800">
                                    <Results />
                                </div>
                            </div>
                        </KBarAnimator>
                    </KBarPositioner>
                </KBarPortal>
            </KBarProvider>
            <div className="personalizda fixed bottom-0 text-center border-t bg-white text-black border-[#c2c0c0] py-2 px-4 w-full hidden md:block print:hidden">
                Pulsa{" "}
                <kbd className="bg-gray-400 rounded py-[2px] px-1">Ctrl</kbd> +{" "}
                <kbd className="bg-gray-400 rounded py-[2px] px-1">K</kbd> para
                abrir la paleta
            </div>
        </>
    );
};

export default KeyboardManager;

const Results = () => {
    const { results } = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) =>
                typeof item === "string" ? (
                    <div className="text-sm py-2 text-gray-600">{item}</div>
                ) : (
                    <div
                        className="flex items-center rounded-lg gap-2 p-3 cursor-pointer"
                        style={{
                            background: active ? "#eee" : "transparent",
                        }}
                    >
                        {item?.id === "home" && <GoHome />}
                        {item?.id === "email" && <MdOutlineMailOutline />}
                        {item?.id === "github" && <FaGithub />}
                        {item?.id === "instagram" && <FaInstagram />}
                        {item.name}
                    </div>
                )
            }
        />
    );
};
