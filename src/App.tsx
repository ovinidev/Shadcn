import { Button } from "@components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@components/ui/drawer";
import { useState } from "react";

interface DrawerTestProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

const DrawerTest = ({ isOpen, onOpenChange }: DrawerTestProps) => {
	return (
		<Drawer open={isOpen} onOpenChange={onOpenChange} direction="right">
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Are you absolutely sure?</DrawerTitle>
					<DrawerDescription>This action cannot be undone.</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="bg-slate-400">
			Olá Inclus
			{Array.from({ length: 15 }).map((_, i) => {
				return (
					<Button
						key={i}
						variant="outline"
						className="bg-green-400"
						onClick={() => setIsOpen(true)}
					>
						Abrir
					</Button>
				);
			})}
			<DrawerTest isOpen={isOpen} onOpenChange={setIsOpen} />
		</div>
	);
}
