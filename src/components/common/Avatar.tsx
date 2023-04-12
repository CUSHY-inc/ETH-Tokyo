const Avatar = ({ w='w-8', ringColor='ring-gray-200', ringOffsetBase='ring-offset-base-100', ringOffset='ring-offset-4', image='' }) => {

    console.log(w);

    return (
        <div className="avatar">
            <div className={`${w} ${ringColor} ${ringOffsetBase} ${ringOffset} rounded-full ring`}>
                <img src={`${image}`} />
            </div>
        </div>
    );
}

export default Avatar;