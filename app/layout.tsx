import '../styles/globals.css'
import Header from './Header';

export default function RootLayout({ children } : { children : React.ReactNode }){
    return (
        <html>
            <head/>
            <body className="max-w-6xl mx-auto bg-neutral-900 px-4 py-4 2xl:py-12 xl:py-12 lg:py-12 md:py-12 space-y-6">
                <Header/>
                {children}
            </body>
        </html>
    );
}
