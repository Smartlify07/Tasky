"use client";

import { Lato } from "next/font/google";

import { taskyFeatures } from "@/app/lib/constants";
import { FaHandshake } from "react-icons/fa";
import { useIcons } from "@/app/lib/hooks";
import { Fade, Zoom } from "react-awesome-reveal";
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Features() {
  return (
    <section className={`${lato.className} py-20`}>
      <h1 className="text-5xl text-dark font-medium text-center mb-10">
        Why Choose TaskBud?
      </h1>

      <Zoom cascade>
        <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2  lg:grid-cols-4">
          <FeatureGamification />
          <FeatureCollaborate />
          <FeatureCustomThemes />
          <FeatureDailyChallenges />
          <FeatureRealTimeSync />
        </div>
      </Zoom>
    </section>
  );
}

function FeatureCollaborate() {
  const { GoogleDrive, Trello, Slack } = useIcons();

  return (
    <div className="group col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all duration-300">
      {/* Initial content */}
      <h3 className="text-2xl font-medium text-dark transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[1].name}
      </h3>
      <p className="text-base font-normal text-tertiary transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[1].description}
      </p>

      <div className="absolute -top-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <FaHandshake className="text-dark text-2xl" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-dark">
          Collaborate Seamlessly
        </h3>
        <p className="text-sm font-normal text-tertiary">
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
      <h3 className="text-2xl font-medium text-dark transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[0].name}
      </h3>
      <p className="text-base font-normal text-tertiary transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[0].description}
      </p>

      <div className="absolute -top-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <Trophy className="text-dark size-5" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-dark">Unlock Rewards!</h3>
        <p className="text-sm font-normal text-tertiary">
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
      <h3 className="text-2xl font-medium text-dark transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[2].name}
      </h3>
      <p className="text-base font-normal text-tertiary transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[2].description}
      </p>

      <div className="absolute -bottom-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <ThemeColors className="size-5" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-dark">Custom Themes</h3>
        <p className="text-sm font-normal text-tertiary">
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
      <h3 className="text-2xl font-medium text-dark transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[3].name}
      </h3>
      <p className="text-base font-normal text-tertiary transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[3].description}
      </p>

      <div className="absolute -bottom-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <Star className="size-5" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-dark">
          More About Daily Challenges
        </h3>
        <p className="text-sm font-normal text-tertiary">
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
      <h3 className="text-2xl font-medium text-dark transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[4].name}
      </h3>
      <p className="text-base font-normal text-tertiary transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        {taskyFeatures[4].description}
      </p>

      <div className="absolute -bottom-3 right-0 flex items-center justify-center rotate-45 rounded-md bg-primary bg-opacity-20 border w-10 h-10 transition-opacity duration-300 opacity-100 ">
        <Sync className="size-5" />
      </div>

      {/* Content to show on hover */}

      <div className="absolute left-[9%] inset-0 flex flex-col gap-1 cursor-pointer  justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-medium text-dark">Real-Time Sync</h3>
        <p className="text-sm font-normal text-tertiary">
          Always stay updated with the latest changes across all your devices.
        </p>
        <div className="flex items-center flex-wrap gap-5 mt-2">
          <Sync className="size-4" />
        </div>
      </div>
    </div>
  );
}
