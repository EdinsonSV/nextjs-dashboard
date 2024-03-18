import './ui/global.css';
import { montserrat } from './ui/invoices/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
			{/* <header className='flex justify-center items-center p-4 font-semibold'> 
				Este es el Header
			</header> */}
			<div>
           		{children}
			</div>
			{/* <footer className='flex justify-center items-center p-4 font-semibold'>
				Hecho con ❤️ por Edinson
		  	</footer> */}
      </body>
    </html>
  );
}
