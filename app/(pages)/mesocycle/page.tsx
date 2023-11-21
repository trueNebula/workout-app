import CreateMesoDialog from "@components/ui/dialogs/CreateMesoDialog";
import { headingFont } from "@utils/fonts";

export default function MesoPage() {
  return (
		<div>
			<h1 className={`${headingFont.className}`}>Hello Meso</h1>
      <CreateMesoDialog />
		</div>
	);
}
