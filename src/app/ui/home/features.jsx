"use client";
import { raleway, useIcons } from "@/app/lib/hooks";
import { taskyFeatures } from "@/app/lib/constants";

export default function Features() {
  return (
    <section
      className={`${raleway.className} py-24 bg-green-500 px-6 flex flex-col items-center`}
    >
      <h1 className="text-5xl  font-medium text-center text-white mb-10">
        Why Choose TaskBud?
      </h1>

      <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2  lg:grid-cols-4 md:w-11/12">
        <FeatureGamification />
        <FeatureCollaborate />
        <FeatureCustomThemes />
        <FeatureDailyChallenges />
        <FeatureRealTimeSync />
      </div>
    </section>
  );
}

function FeatureCollaborate() {
  const { GoogleDrive, Trello, Slack, HandshakeMediumSkinTone } = useIcons();

  return (
    <div className="group col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all duration-300">
      {/* Initial content */}
      <h3 className="text-2xl font-medium text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[1].name}
      </h3>
      <p className="text-base font-normal text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[1].description}
      </p>

      <div className="absolute -top-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <HandshakeMediumSkinTone className="size-6" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-white">
          Collaborate Seamlessly
        </h3>
        <p className="text-sm font-normal text-white">
          Integrate with popular productivity tools to boost your workflow.
        </p>
        <div className="flex items-center flex-wrap gap-3 mt-2">
          <GoogleDrive className="size-4" />
          <Slack className="size-4" />
          <Trello className="size-4" />
        </div>
      </div>
    </div>
  );
}

function FeatureGamification() {
  const { Trophy, Medal, Star } = useIcons();
  return (
    <div className="group  col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all duration-300 group-hover:py-12">
      {/* Initial content */}
      <h3 className="text-2xl font-medium text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[0].name}
      </h3>
      <p className="text-base font-normal text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[0].description}
      </p>

      <div className="absolute -top-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <Trophy className="text-white size-5" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-white">Unlock Rewards!</h3>
        <p className="text-sm font-normal text-white">
          Complete tasks and earn points, badges, and trophies. Make task
          management fun and engaging!
        </p>
        <div className="flex items-center flex-wrap gap-5 mt-2">
          <Trophy className="size-5" />
          <Medal className="size-5" />
          <Star className="size-5" />
        </div>
      </div>
    </div>
  );
}

function FeatureCustomThemes() {
  const { Trophy, Medal, Star, ThemeColors } = useIcons();
  return (
    <div className="group  col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all duration-300 group-hover:py-12">
      {/* Initial content */}
      <h3 className="text-2xl font-medium text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[2].name}
      </h3>
      <p className="text-base font-normal text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[2].description}
      </p>

      <div className="absolute -bottom-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <ThemeColors className="size-5" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-white">Custom Themes</h3>
        <p className="text-sm font-normal text-white">
          {" "}
          Personalize your task management experience with a variety of custom
          themes. Choose the look that suits you best!
        </p>
        <div className="flex items-center flex-wrap gap-5 mt-2">
          <div className="w-5 h-5 bg-primary rounded-full border"></div>
          <div className="w-5 h-5 bg-dark rounded-full border"></div>
          <div className="w-5 h-5 bg-gradient-to-tr from-red-800 to-orange-600 rounded-full border"></div>
        </div>
      </div>
    </div>
  );
}

// Daily challenges
function FeatureDailyChallenges() {
  const { Star, ThemeColors } = useIcons();
  return (
    <div className="group  col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all duration-300 group-hover:py-12">
      {/* Initial content */}
      <h3 className="text-2xl font-medium text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[3].name}
      </h3>
      <p className="text-base font-normal text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[3].description}
      </p>

      <div className="absolute -bottom-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <Star className="size-5" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-white">
          More About Daily Challenges
        </h3>
        <p className="text-sm font-normal text-white">
          Stay motivated with new tasks every day and earn rewards for
          completing them. Challenge yourself and compete with friends!
        </p>
        <div className="flex items-center flex-wrap gap-5 mt-2">
          <Star className="size-5" />
        </div>
      </div>
    </div>
  );
}

function FeatureRealTimeSync() {
  const { Sync } = useIcons();
  return (
    <div className="group  col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all duration-300 group-hover:py-12">
      {/* Initial content */}
      <h3 className="text-2xl font-medium text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[4].name}
      </h3>
      <p className="text-base font-normal text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[4].description}
      </p>

      <div className="absolute -bottom-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <Sync className="size-5 text-white" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-white">Real-Time Sync</h3>
        <p className="text-sm font-normal text-white">
          Always stay updated with the latest changes across all your devices.
        </p>
        <div className="flex items-center flex-wrap gap-5 mt-2">
          <Sync className="size-4 text-white" />
        </div>
      </div>
    </div>
  );
}
