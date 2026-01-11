
import { Link } from '@inertiajs/react'

export default function Layout ({children}) {
    return (
        <>
            <header className="border-base-content/20 bg-base-100 py-0.25 fixed top-0 z-10 w-full border-b">
                <nav className="navbar mx-auto max-w-[1280px] rounded-b-xl px-4 sm:px-6 lg:px-8">
                    <div className="w-full lg:flex lg:items-center lg:gap-2">
                        <div className="navbar-start items-center justify-between max-lg:w-full">
                            <Link className="nav-link" href="/">Logo</Link>
                        </div>
                    </div>
                    <div id="navbar-block-4" className="lg:navbar-center transition-height collapse hidden grow overflow-hidden font-medium duration-300 lg:flex">
                        <div className="text-base-content flex gap-6 text-base max-lg:mt-4 max-lg:flex-col lg:items-center">
                            <Link href="/" className="hover:text-primary nav-link">Home</Link>
                            <Link href="/about" className="hover:text-primary nav-link">About</Link>
                            <Link href="/contacts" className="hover:text-primary nav-link">Contacts</Link>
                        </div>
                    </div>
                    <div className="navbar-end max-lg:hidden">
                        <Link href="/pricing" className="btn btn-primary">Pricing</Link>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}
