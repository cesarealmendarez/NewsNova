import '../styles/globals.css'
import Header from './Header';

export default function RootLayout({ children } : { children : React.ReactNode }){
    return (
        <html>
            <head/>
            <body className="max-w-6xl mx-auto bg-neutral-900 py-4 2xl:py-12 xl:py-12 lg:py-12 md:py-12 space-y-6 border-[12px] border-neutral-900">
                <Header/>
                {children}
            </body>
        </html>
    );
}
