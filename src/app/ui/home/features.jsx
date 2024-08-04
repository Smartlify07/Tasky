import { Lato } from "next/font/google";
import { taskyFeatures } from "@/app/lib/constants";
import {
  FaHandshake,
  FaTrophy,
  FaTrello,
  FaSlack,
  FaGoogleDrive,
} from "react-icons/fa";
import Image from "next/image";
import { useIcons } from "@/app/lib/hooks";
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Features() {
  const features = [...taskyFeatures];
  const { GoogleDrive, Trello, Slack } = useIcons();
  return (
    <section className={`${lato.className} py-20`}>
      <h1 className="text-5xl text-dark font-medium text-center mb-10">
        Why Choose TaskBud?
      </h1>

      <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2  lg:grid-cols-4">
        <div className="col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all">
          <h3 className="text-2xl font-medium text-dark">{features[0].name}</h3>
          <p className="text-base font-normal text-tertiary">
            {features[0].description}
          </p>

          <div className=" absolute -top-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10">
            <FaTrophy className="text-yellow-400 text-xl" />
          </div>
        </div>

        <div className="group col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all duration-300">
          {/* Initial content */}
          <h3 className="text-2xl font-medium text-dark transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            {features[1].name}
          </h3>
          <p className="text-base font-normal text-tertiary transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            {features[1].description}
          </p>

          <div className="absolute -top-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
            <FaHandshake className="text-dark text-2xl" />
          </div>

          {/* Content to show on hover */}

          <div className="absolute left-[9%] inset-0 flex flex-col gap-1  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-2xl font-medium text-dark">
              Collaborate Seamlessly
            </h3>
            <p className="text-base font-normal text-tertiary">
              Integrate with popular productivity tools to boost your workflow.
            </p>
            <div className="flex items-center flex-wrap gap-3 mt-2">
              <GoogleDrive className="size-4" />
              <Slack className="size-4" />
              <Trello className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
