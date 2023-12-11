'use client'
import { FC } from "react";
import UpdateBuses from "@/app/components/UpdateBus";

interface PageProps {
  params: {
    busId: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <div>
      <UpdateBuses busId={params.busId} />
    </div>
  );
};
export default Page;