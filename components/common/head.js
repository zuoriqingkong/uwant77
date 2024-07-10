import React from 'react';

export default function CustomHead() {
	return (
		<>
			<script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-99L8P5T7P5'
			></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-99L8P5T7P5');
        `,
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          (function() {
            const theme = localStorage.getItem('theme') || 'bussiness';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
				}}
			/>
		</>
	);
}
