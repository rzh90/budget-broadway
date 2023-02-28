function PageTitle({title, children}) {
    return (
        <>
            <div className="text-center mb-6">
                <h1 className="text-4xl text-bbblue mb-2">{title}</h1>
                <p className="text-xl">{children}</p>
            </div>
        </>
    )
}

export default PageTitle