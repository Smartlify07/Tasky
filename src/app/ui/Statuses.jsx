import { useIcons } from "../lib/hooks";

export default function Status({ status }) {
  if (status === "pending") {
    return <PendingStatus />;
  } else if (status === "inprogress") {
    return <InProgressStatus />;
  } else {
    console.log(status);
    return <CompletedStatus />;
  }
}

const InProgressStatus = () => {
  const { ArrowPath } = useIcons();
  return (
    <span className=" flex  text-sm items-center   gap-1 text-yellow-500 transition-all rounded-sm cursor-pointer ">
      In progress <ArrowPath className="size-5" />
    </span>
  );
};
const PendingStatus = () => {
  const { Clock } = useIcons();
  return (
    <span className=" flex  text-sm items-center   gap-1 text-gray-400 transition-all rounded-sm cursor-pointer">
      Pending <Clock className="size-5" />
    </span>
  );
};

const CompletedStatus = () => {
  const { Check } = useIcons();

  return (
    <span className=" cursor-pointer flex items-center   gap-1 text-sm  text-green-500 transition-all rounded-sm ">
      Complete <Check className="size-5" />
    </span>
  );
};
