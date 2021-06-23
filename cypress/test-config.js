module.exports = {
	testUrl: 'http://localhost:3000',
	sizes: [
		{
			name: 'desktop',
			width: 1440,
			height: 600
		},
		{
			name: 'tablet',
			width: 768,
			height: 667
		},
		{
			name: 'mobile',
			width: 320,
			height: 667
		},
	],
	routes: [
		'/',
		'/page1',
		'/page2',
		'/page3',
		'/page4',
	],
	testRoot: './.vrt/',
}