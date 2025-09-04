import type { Metadata } from 'next'
import '@/Styles/globals.scss'
import { SmoothScroll } from '@/components/SmoothScroll/SmoothScroll'

export const metadata: Metadata = {
	title: 'ТРИУМФ',
	description: 'Продюссерский центр',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              var dealerName = 'YandexTicketsDealer';
              var dealer = window[dealerName] = window[dealerName] || [];
              dealer.push(['setDefaultClientKey', 'eb7453e7-cb8a-4d3b-8227-1317a3433247']);
              
              (function () {
                var rnd = '?' + new Date().getTime() * Math.random();
                var script = document.createElement('script');
                var target = document.getElementsByTagName('script')[0];
                script.async = true;
                script.src = 'https://widget.afisha.yandex.ru/dealer/dealer.js' + rnd;
                target.parentNode.insertBefore(script, target);
              })();
            `,
					}}
				/>
			</head>
			<body>
				<SmoothScroll />
				{children}
			</body>
		</html>
	)
}
