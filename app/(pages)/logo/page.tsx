import Logo from "@components/ui/header/Logo";
import { headingFont } from "@utils/fonts";

export default async function HomePage() {
	return (
		<div>
			<h1 className={`${headingFont.className}`}>
				<div
					className="
      w-10
      h-10
      text-white
      text-xl
      font-bold
      flex
      gap-0.5
      justify-center
      items-center
      cursor-pointer
    "
				>
					<span className="text-outline-light text-th-text-secondary">R</span>
					<span>R</span>
				</div>
			</h1>
		</div>
	);
}
