import { cn } from "lib/utils";

interface SelectableContainerProps {
  className?: string;
  selected: boolean;
  children: React.ReactNode;
}

export default function SelectableContainer({
  className,
  selected,
  children,
}: SelectableContainerProps) {
  return (
		<div
			className={cn(
				`w-14 h-14 cursor-pointer flex justify-center items-center rounded-2xl ${
					selected && "bg-blue-950"
				}`,
				className
			)}
		>
			{children}
		</div>
	);
}
