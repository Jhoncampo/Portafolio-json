const Section = ({
    children,
    title,
}: {
    children?: React.ReactNode;
    title?: string;
}) => {
    return (
        <section className="max-w-[700px] mx-auto mb-16">
            {title && <h2 className="text-xl font-medium">{title}</h2>}
            {children}
        </section>
    );
};

export default Section;
