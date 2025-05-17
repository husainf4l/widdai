"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Solutions", href: "/solutions" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Disclosure
			as="nav"
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-secondary-dark/90 backdrop-blur-md" : "bg-transparent"
			}`}
		>
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex items-center">
								<Link
									href="/"
									className="flex-shrink-0 flex items-center gap-3 group"
								>
									<Image
										src="/widd-logo.webp"
										alt="WIDD.AI Logo"
										width={60}
										height={60}
										className="rounded-full drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
										priority
									/>
								</Link>
							</div>
							<div className="hidden sm:ml-6 sm:flex sm:items-center">
								<div className="flex space-x-8">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
							<div className="flex items-center sm:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as={Link}
									href={item.href}
									className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
