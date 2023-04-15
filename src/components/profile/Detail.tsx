const Detail = () => {

    const desc = "We store your private information\non encrypted way.";
    const descCheck = "Check detail>"

    return (
        <div className="flex">
            <div className="w-fit">
                <p className="whitespace-pre-wrap flex flex-col text-sm">{`${desc}`}</p>
                <p className="text-blue-700 text-sm">{`${descCheck}`}</p>
            </div>
            <div className="ml-4">
                <img src="/images/phone.png" className="w-16"/>
            </div>
        </div>
    );
}

export default Detail;