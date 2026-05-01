import './globals.css';
import RegisterWebComponents from './components/register-webcomponents';

export const metadata = {
  title: 'Notes — Digital Garden',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <RegisterWebComponents />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>{children}</div>
      </body>
    </html>
  );
}
