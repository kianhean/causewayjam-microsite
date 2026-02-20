import React from "react";

// ─── Icon Components ──────────────────────────────────────────────────────────

function ClockIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-8 h-8"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}

function TrafficLightIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-8 h-8"
		>
			<rect x="6" y="2" width="12" height="20" rx="3" ry="3" />
			<circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
			<circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
			<circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
		</svg>
	);
}

function ShieldIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-8 h-8"
		>
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			<polyline points="9 12 11 14 15 10" />
		</svg>
	);
}

function CloudRainIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-8 h-8"
		>
			<line x1="16" y1="13" x2="16" y2="21" />
			<line x1="8" y1="13" x2="8" y2="21" />
			<line x1="12" y1="15" x2="12" y2="23" />
			<path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
		</svg>
	);
}

function CameraIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-8 h-8"
		>
			<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
			<circle cx="12" cy="13" r="4" />
		</svg>
	);
}

function RouteIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-8 h-8"
		>
			<circle cx="6" cy="19" r="3" />
			<path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
			<circle cx="18" cy="5" r="3" />
		</svg>
	);
}

// ─── Data ────────────────────────────────────────────────────────────────────

interface Feature {
	icon: React.ReactNode;
	title: string;
	description: string;
}

interface Testimonial {
	quote: string;
	author: string;
	context: string;
}

const FEATURES: Feature[] = [
	{
		icon: <ClockIcon />,
		title: "Live Travel Times",
		description: "Real-time wait estimates refreshed every 2 minutes.",
	},
	{
		icon: <TrafficLightIcon />,
		title: "Congestion Status",
		description:
			"Four colour-coded levels: Smooth, Moderate, Heavy, Severe.",
	},
	{
		icon: <ShieldIcon />,
		title: "Smart Buffer Estimates",
		description:
			"Congestion and weather-aware buffers so you arrive with time to spare.",
	},
	{
		icon: <CloudRainIcon />,
		title: "Weather-Aware",
		description:
			"Rain and thunderstorms automatically extend your buffer.",
	},
	{
		icon: <CameraIcon />,
		title: "Live Camera Feed",
		description:
			"Carousel of live checkpoint cameras, pinch-to-zoom up to 4×.",
	},
	{
		icon: <RouteIcon />,
		title: "Fastest Route Highlight",
		description:
			"Shows which crossing — Woodlands or Tuas — saves the most minutes.",
	},
];

const TESTIMONIALS: Testimonial[] = [
	{
		quote:
			"I used to gamble on the crossing time. Now I check JamWatch before I leave.",
		author: "Ravi S.",
		context: "Weekly commuter, JB",
	},
	{
		quote: "The camera feed alone is worth it. No more surprises.",
		author: "Michelle T.",
		context: "Weekend traveller, SG",
	},
	{
		quote: "Tuas vs Woodlands in one tap. Saved me 40 minutes last Friday.",
		author: "Farid A.",
		context: "Daily driver, Skudai",
	},
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function AppStoreButton({ inverted = false }: { inverted?: boolean }) {
	const bg = inverted ? "bg-white" : "bg-jam-navy";
	const text = inverted ? "text-jam-navy" : "text-white";
	return (
		<a
			href="#download"
			className={`inline-flex items-center gap-3 ${bg} ${text} rounded-xl px-6 py-3.5 font-semibold transition-opacity hover:opacity-90`}
		>
			<svg
				viewBox="0 0 24 24"
				className="w-6 h-6 flex-shrink-0"
				fill="currentColor"
			>
				<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
			</svg>
			<span className="leading-tight">
				<span className="block text-xs font-normal opacity-80">
					Download on the
				</span>
				App Store
			</span>
		</a>
	);
}

function GooglePlayButton({ inverted = false }: { inverted?: boolean }) {
	const bg = inverted
		? "bg-white/10 border border-white/20"
		: "bg-white border border-gray-200";
	const text = inverted ? "text-white" : "text-jam-navy";
	return (
		<a
			href="#download"
			className={`inline-flex items-center gap-3 ${bg} ${text} rounded-xl px-6 py-3.5 font-semibold transition-opacity hover:opacity-90`}
		>
			<svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0">
				<path
					d="M3.18 23.76c.35.2.74.24 1.12.12l12.03-6.96-2.56-2.56-10.59 9.4z"
					fill="#EA4335"
				/>
				<path
					d="M22.47 10.27L19.5 8.55l-2.87 2.87 2.87 2.86 2.99-1.73c.85-.49.85-1.79-.02-2.28z"
					fill="#FBBC04"
				/>
				<path
					d="M2.31.36A1.6 1.6 0 0 0 2 1.22v21.56c0 .31.1.6.28.84l.09.09 12.07-12.07v-.28L2.4.27l-.09.09z"
					fill="#4285F4"
				/>
				<path
					d="M16.33 14.79l-3.9-3.9v-.28l3.9-3.9 2.56 1.48-4.56 2.66 4.56 2.66-2.56 1.28z"
					fill="#34A853"
				/>
			</svg>
			<span className="leading-tight">
				<span className="block text-xs font-normal opacity-70">
					Get it on
				</span>
				Google Play
			</span>
		</a>
	);
}

function PhoneMockup() {
	return (
		<div className="relative flex justify-center items-center">
			{/* Phone shell */}
			<div className="relative w-64 h-[520px] bg-jam-navy rounded-[2.5rem] shadow-2xl p-3 ring-4 ring-jam-navy/20">
				{/* Screen */}
				<div className="w-full h-full bg-jam-bg rounded-[2rem] overflow-hidden flex flex-col">
					{/* Status bar */}
					<div className="bg-jam-navy h-8 flex items-center justify-center">
						<div className="w-20 h-4 bg-black rounded-full" />
					</div>

					{/* App content */}
					<div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
						{/* Header */}
						<div className="flex items-center justify-between">
							<span className="text-jam-navy font-bold text-sm">
								Jam<span className="text-jam-orange">Watch</span>
							</span>
							<span className="text-xs text-gray-400">Updated 1m ago</span>
						</div>

						{/* Woodlands card */}
						<div className="bg-white rounded-2xl p-3 shadow-sm">
							<div className="flex justify-between items-start mb-1">
								<span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
									Woodlands
								</span>
								<span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full">
									Moderate
								</span>
							</div>
							<div className="text-3xl font-bold text-jam-navy">28 min</div>
							<div className="text-xs text-gray-400 mt-0.5">
								Checkpoint to CIQ
							</div>
						</div>

						{/* Tuas card */}
						<div className="bg-white rounded-2xl p-3 shadow-sm ring-2 ring-jam-blue/30">
							<div className="flex justify-between items-start mb-1">
								<span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
									Tuas
								</span>
								<span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
									Fastest ✓
								</span>
							</div>
							<div className="text-3xl font-bold text-jam-navy">12 min</div>
							<div className="text-xs text-gray-400 mt-0.5">
								Checkpoint to CIQ
							</div>
						</div>

						{/* Smart buffer */}
						<div className="bg-jam-orange/10 border border-jam-orange/20 rounded-xl p-3 flex items-center gap-2">
							<span className="text-jam-orange text-base">🌧</span>
							<span className="text-xs text-jam-navy font-medium">
								Add 8 min — light rain at Tuas
							</span>
						</div>

						{/* Camera thumbnails */}
						<div className="flex gap-2 mt-1">
							<div className="flex-1 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
								<span className="text-gray-400 text-xs">Woodlands Cam</span>
							</div>
							<div className="flex-1 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
								<span className="text-gray-400 text-xs">Tuas Cam</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative glow */}
			<div className="absolute inset-0 -z-10 bg-jam-blue/10 blur-3xl rounded-full scale-75" />
		</div>
	);
}

function FeatureCard({ icon, title, description }: Feature) {
	return (
		<div className="group bg-jam-bg border border-gray-100 rounded-2xl p-6 transition-all duration-200 hover:border-jam-blue hover:shadow-md">
			<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-jam-blue/10 text-jam-blue mb-4 transition-all duration-200 group-hover:bg-jam-blue group-hover:text-white">
				{icon}
			</div>
			<h3 className="text-jam-navy font-semibold text-lg mb-2">{title}</h3>
			<p className="text-gray-500 text-sm leading-relaxed">{description}</p>
		</div>
	);
}

function TestimonialCard({ quote, author, context }: Testimonial) {
	return (
		<div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
			<div className="text-6xl font-serif text-jam-orange/20 leading-none select-none mb-2">
				"
			</div>
			<p className="text-jam-navy text-sm leading-relaxed flex-1 -mt-4">
				{quote}
			</p>
			<div className="border-t border-gray-100 mt-4 pt-4">
				<div className="font-semibold text-jam-navy text-sm">{author}</div>
				<div className="text-gray-400 text-xs">{context}</div>
			</div>
		</div>
	);
}

// ─── Section Components ───────────────────────────────────────────────────────

function NavBar() {
	return (
		<nav className="sticky top-0 z-50 bg-jam-bg/95 backdrop-blur-sm border-b border-gray-100">
			<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				<a href="#" className="text-xl font-bold">
					<span className="text-jam-navy">Jam</span>
					<span className="text-jam-orange">Watch</span>
				</a>
				<a
					href="#download"
					className="bg-jam-orange text-white rounded-full px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
				>
					Download Now
				</a>
			</div>
		</nav>
	);
}

function HeroSection() {
	return (
		<section className="bg-jam-bg pt-24 pb-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left column */}
					<div>
						<div className="text-jam-orange text-sm font-semibold tracking-widest uppercase mb-4">
							Singapore · Malaysia · Live
						</div>
						<h1 className="text-5xl lg:text-6xl font-bold text-jam-navy leading-tight mb-6">
							Know Before<br />You Go.
						</h1>
						<p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
							Real-time Woodlands and Tuas wait times. No account. No ads. Just
							the queue.
						</p>

						{/* CTA row */}
						<div className="flex flex-col sm:flex-row gap-3 mb-6">
							<AppStoreButton />
							<GooglePlayButton />
						</div>

						<p className="text-sm text-gray-400">
							Free to download · No account required
						</p>
					</div>

					{/* Right column — phone mockup, hidden on mobile */}
					<div className="hidden lg:flex justify-center">
						<PhoneMockup />
					</div>
				</div>
			</div>
		</section>
	);
}

function FeaturesSection() {
	return (
		<section id="features" className="bg-white py-24">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-14">
					<div className="text-jam-orange uppercase tracking-widest text-sm font-semibold mb-3">
						Everything you need
					</div>
					<h2 className="text-4xl font-bold text-jam-navy">
						Your crossing companion.
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{FEATURES.map((feature) => (
						<FeatureCard key={feature.title} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}

function TestimonialsSection() {
	return (
		<section id="testimonials" className="bg-jam-bg py-24">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-14">
					<div className="text-jam-orange uppercase tracking-widest text-sm font-semibold mb-3">
						Trusted by commuters
					</div>
					<h2 className="text-4xl font-bold text-jam-navy">
						What regulars say.
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{TESTIMONIALS.map((t) => (
						<TestimonialCard key={t.author} {...t} />
					))}
				</div>
			</div>
		</section>
	);
}

function FooterSection() {
	return (
		<footer id="download" className="bg-jam-navy py-20">
			<div className="max-w-6xl mx-auto px-6">
				{/* Download CTA */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-white mb-3">
						Ready to beat the jam?
					</h2>
					<p className="text-blue-200 text-lg mb-8">Free on iOS and Android.</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<AppStoreButton inverted />
						<GooglePlayButton inverted />
					</div>
				</div>

				{/* Footer bar */}
				<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-blue-200 text-sm">
						© 2025 JamWatch · Built for SG–MY travellers
					</p>
					<div className="flex gap-6">
						<a
							href="#"
							className="text-blue-300 hover:text-white text-sm transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="mailto:hello@jamwatch.app"
							className="text-blue-300 hover:text-white text-sm transition-colors"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
	return (
		<div className="min-h-screen bg-jam-bg">
			<NavBar />
			<HeroSection />
			<FeaturesSection />
			<TestimonialsSection />
			<FooterSection />
		</div>
	);
}
