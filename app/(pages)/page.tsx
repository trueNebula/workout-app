import { headingFont } from "@utils/fonts";
import getCurrentUser from "@actions/getCurrentUser";

export default async function HomePage() {
  return (
    <div>
      <h1 className={`${headingFont.className}`}>Hello Home</h1>
    </div>
  );
}
