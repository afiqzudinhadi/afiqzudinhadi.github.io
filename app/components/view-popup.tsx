import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "@remix-run/react";

export function ViewPopup() {
	let navigate = useNavigate();
	const triggerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			triggerRef.current?.click();
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					style={{ display: "none" }}
					id="auto-dialog-trigger"
					ref={triggerRef}
				></Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Change view</DialogTitle>
					<DialogDescription>
						Would you like to stick with a normal portfolio view or a more
						exciting view?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="sm:justify-start">
					<Button type="button" onClick={() => navigate("/fun")}>
						Take me to fun land
					</Button>
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Stick to current view
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
