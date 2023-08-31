export default function FooterComponent() {
    return(
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">The Zeppelin Projecft</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://localhost:3000/about" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="https://localhost:3000/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="https://localhost:3000/licensing" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="https://localhost:3000/contact" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
    )


}