const Section = ({
    children,
    title,
}: {
    children?: React.ReactNode;
    title?: string;
}) => {
    return (
        <section className="max-w-[700px] mx-auto mb-12 print:mb-6">
            {title && <h2 className="text-xl mb-2 font-medium">{title}</h2>}
            {children}
        </section>
    );
};

export default Section;
