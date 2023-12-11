'use client'
import { FC } from "react";
import ViewBus from "@/app/components/ViewBus";

interface PageProps {
  params: {
    bus: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <div>
      <ViewBus viewBus={params.bus} />
    </div>
  );
};
export default Page;