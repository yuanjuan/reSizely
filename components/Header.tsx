/**
 * 根据配置来实现顶部导航栏
 * @constructor
 */

import Link from "next/link";

export default function Header() {
	return (
		<ul className="flex flex-row">
			<li className="px-6 py-3">
				<Link href="/category/tops">
				Tops
				</Link>
			</li>
			<li className="px-6 py-3">
				<Link href="/category/bottoms">
					Bottoms
				</Link>
				</li>
			<li className="px-6 py-3">
				<Link href="/category/dresses">
					Dresses
				</Link>
			</li>
		</ul>
	)
}