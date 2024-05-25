import Menu from '../../components/sidebar/Menu';
import Recommendation from '../../components/sidebar/Recommendation';
import { Link } from 'react-router-dom';

const Settings = () => {

    return (
        <div className='flex w-full justify-end'>

            <Menu />
            <div className="w-4/5 top-10 h-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 fixed">

                {/* <div className='text-white'><h1>Menu</h1></div> */}
                <Link to='/' class="flex p-6 mx-12 items-center justify-between border-b border-gray-200">
                    <h1>Deactivate Your account</h1>
                    <div class="flex text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </div>
                </Link>

                <Link to='/friends' class="flex p-6 mx-12 items-center justify-between">
                    <h1>Deactivate Your account</h1>
                    <div class="flex text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </div>
                </Link>

            </div>

        </div >
    );
};

export default Settings;