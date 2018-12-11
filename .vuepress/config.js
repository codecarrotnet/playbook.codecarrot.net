module.exports = {
	title: 'CodeCarrot Playbook',
	description: "It's all about CodeCarrot the way we work.",
	base: '/',
	ga: 'UA-78257614-9',
	head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
	themeConfig: {
		lastUpdated: 'Last Updated',
		serviceWorker: {
			updatePopup: true
		},
		nav: [
			{ text: 'Home', link: '/' },
			{
				text: 'Topics',
				items: [
					{ text: 'Product Design Sprint', link: '/product-design-sprint/' },
					{ text: 'Planning', link: '/planning/adapt-and-process.md' },
					{
						text: 'Choose Platform',
						link: '/choose-platforms/browser-testing-and-support.md'
					},
					{
						text: 'Designing',
						link: '/designing/product-validation.md'
					},
					{
						text: 'Laptop Setup',
						link: '/laptop-setup/automate-your-development-environment.md'
					},
					{
						text: 'Developing',
						link: '/developing/acceptance-tests.md'
					},
					{
						text: 'Production',
						link: '/production/domain-names-and-dns.md'
					},
					{
						text: 'Measuring',
						link: '/measuring/aarrr.md'
					},
					{
						text: 'Our Company',
						link: '/our-company/apprenticeship.md'
					}
				]
			},
			{ text: 'Start a project with us', link: 'https://www.codecarrot.net/' }
		],
		sidebar: {
			'/product-design-sprint/': [
				['', 'Intro to PDS'],
				['phase-0-prepare', 'Phase 0: Prepare'],
				['phase-1-understand', 'Phase 1: Understand'],
				['phase-2-diverge', 'Phase 2: Diverge'],
				['phase-3-converge', 'Phase 3: Converge'],
				['phase-4-prototype', 'Phase 4: Prototype'],
				['phase-5-test-and-learn', 'Phase 5: Test and Learn']
			],
			'/planning/': [
				['adapt-and-process', 'Adapt to the products needs'],
				['daily-standups', 'Daily standups build trust'],
				['in-person-communication', 'In-person communication'],
				['manage-priorities', 'Manage priorities with a lightweight process'],
				['weekly-meetings', 'Weekly meetings'],
				['working-remotely', 'Working remotely']
			],
			'/choose-platforms/': [
				['browser-testing-and-support', 'Browser Testing and Support'],
				[
					'mobile-refers-to-the-user-not-the-device',
					"'Mobile' refers to the user, not the device"
				],
				[
					'native-matters-on-mobile-devices',
					'Native matters on mobile devices'
				],
				[
					'rails-gets-web-products-to-market-quickly',
					'Rails gets web products to market quickly'
				]
			],
			'/designing/': [
				['product-validation', 'Product Validation'],
				['research', 'Research'],
				['sketching-the-interface', 'Sketching the Interface'],
				['test-usability', 'Test Usability Frequently'],
				['interaction-design', 'What is Interaction Design?'],
				['user-interface-design', 'What is User Interface Design?'],
				['visual-design', 'What is Visual Design?'],
				['wireframing', 'Wireframing in HTML and CSS']
			],
			'/laptop-setup/': [
				[
					'automate-your-development-environment',
					'Automate your development environment'
				],
				[
					'share-configuration-with-dotfiles',
					'Share configuration with dotfiles'
				],
				['use-an-extensible-editor', 'Use an extensible editor']
			],
			'/developing/': [
				['acceptance-tests', 'Acceptance Tests'],
				['code-reviews', 'Code Reviews'],
				['continuous-integration', 'Continuous Integration'],
				['pair-programming', 'Pair Programming'],
				['refactoring', 'Refactoring'],
				['style-guide', 'Style Guide'],
				['test-driven-development', 'Test-Driven Development'],
				['version-control', 'Version Control']
			],
			'/production/': [
				['domain-names-and-dns', 'Domain Names and DNS'],
				['error-tracking', 'Error Tracking'],
				['hosting', 'Hosting'],
				['log-collection', 'Log Collection'],
				['payment-processing', 'Payment Processing'],
				['performance-monitoring', 'Performance Monitoring'],
				['production-checklist', 'Production Checklist'],
				['ssl-certificates', 'SSL Certificates'],
				['transactional-email', 'Transactional Email']
			],
			'/measuring/': [
				['aarrr', 'AARRR Framework'],
				['a-b-testing', 'A/B Testing'],
				['feature-flags', 'Feature Flags'],
				['instrumentation', 'Instrumentation'],
				['subscription-metrics', 'Subscription Metrics']
			],
			'/our-company/': [
				['apprenticeship', 'Apprenticeship'],
				['hiring', 'Hiring'],
				['operations', 'Operations'],
				['sales', 'Sales'],
				['sharing', 'Sharing'],
				['time', 'Time'],
				['values', 'Values']
			]
		}
	}
}
