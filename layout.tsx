import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'JJ & Jerico | 3 April 2027',description:'Join JJ and Jerico in London on 3 April 2027.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
