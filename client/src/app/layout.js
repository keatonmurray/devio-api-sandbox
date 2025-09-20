import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/index.css';
import { Poppins } from 'next/font/google';

import ClientWrapper from './ClientWrapper';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Devio CMS',
  description: 'Content Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
