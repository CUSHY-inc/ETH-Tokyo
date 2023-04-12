import Avatar from "../common/Avatar";

const Describe = () => {

    const desc = "Sarah is a biblical name, and it means\nPrincess/Mother.\nI'm a single mother of a beautiful\ndaughter named Bellavita.\nI named her after the famous Italian\nmovie, La Vita e Bella;\nit maens Life is Beautiful. And that is\nhow I see life."
    const image = "/images/metamask.png"

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative z-10">
                <Avatar image={image} />
            </div>
            <div className="relative -top-4 rounded-lg w-90 bg-gray-200">
                <div className="py-6 px-6">
                <p className="whitespace-pre-wrap text-center flex flex-col justify-center items-center">{`${desc}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Describe;