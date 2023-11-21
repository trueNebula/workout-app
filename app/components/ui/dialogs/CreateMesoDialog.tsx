"use client"

import { Button } from "@components/shadcn/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@components/shadcn/ui/dialog";

export default function CreateMesoDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="flex justify-center absolute inset-x-0 bottom-16">
					<Button className="">Create Mesocycle</Button>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create new Mesocycle</DialogTitle>
				</DialogHeader>
        
        <DialogFooter>lmao</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
