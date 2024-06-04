import styles from "../../../styles/beginners-page.module.css";
import Image from "../../../assets/beginnerKids.png";

import { chooses } from "../../../data/data";
import Button from "../../../components/Button";

interface PreFooterProps {
  heading: string;
  paragraph: string;
}

const PreFooter = ({ heading, paragraph }: PreFooterProps) => {
  return (
    <div className="sm:w-full p-28 pl-10 pr-10 text-black sm:space-y-6  flex items-center justify-center flex-col">
      <h1 className="text-center font-bold text-6xl mb-4">
        {heading}
      </h1>
      <h6 className="text-lg font-normal sm:w-1/3 text-center">{paragraph}</h6>
      <div>
        <Button title="Contact Us" />
      </div>
    </div>
  );
};

export default PreFooter;