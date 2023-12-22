
const UserProfile = () => {
 
    return (
        <div>
            <div className="card w-96 bg-base-100 items-center shadow-xl">
                <div className='w-24 rounded-full'>
                <figure><img className='w-24 h-24 rounded-full' src='' alt="profile image" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Profile picture</h2>
                    <p className="">Name</p>
                    <p className="">title</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;