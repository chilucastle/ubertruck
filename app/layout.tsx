import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'UberTruck 24/7 | MVP', description: 'Prototipo de alquiler de maquinaria y transporte pesado bajo demanda.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
