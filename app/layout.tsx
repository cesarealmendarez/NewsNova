import '../styles/globals.css'
import Header from './Header';

export default function RootLayout({ children } : { children : React.ReactNode }){
    return (
        <html>
            <head/>
            <body className="max-w-6xl mx-auto bg-neutral-900 px-4 py-12 space-y-6">
                <Header/>
                {children}
            </body>
        </html>
    );
}
