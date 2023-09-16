import { headingFont, textFont } from "@utils/fonts";

export default function Title() {
  return (
    <div className="pb-7 flex flex-col items-center">
      <h1
        className={`flex flex-row gap-2 ${headingFont.className} text-7xl pb-3 text-th-text`}
      >
        <div className="text-outline-light text-th-text-secondary">Re</div>
        <div>Racked</div>
      </h1>
      <h2 className={`${textFont.className} font-extrabold`}>
        Your one stop shop for making{" "}
        <span className="text-outline">gains</span>.
      </h2>
    </div>
  );
}
