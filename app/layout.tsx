import './globals.scss';

export const metadata = {
  title: {
    default: 'Whaler',
    template: '%s | Whaler',
  },
  generator: 'Whaler',
  applicationName: 'Whaler',
  referrer: 'origin-when-cross-origin',
  keywords: ['最好用的区块链工具箱 - Whaler'],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Whaler',
    description: '最好用的区块链工具箱 - Whaler',
    url: 'https://www.whaler.com/',
    siteName: 'Whaler',
    locale: 'en-US',
    type: 'website',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
