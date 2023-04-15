const Detail = () => {

    const desc = "We encrypt your resume on Lit protocol. People cannot access your file before matching. ";

    return (
        <div className="flex">
            <div className="w-56">
                <p className="whitespace-pre-wrap flex flex-col text-sm">{`${desc}`}</p>
            </div>
            <div className="ml-4">
                <img src="/images/Lit_icon.png" className="w-16"/>
            </div>
        </div>
    );
}

export default Detail;