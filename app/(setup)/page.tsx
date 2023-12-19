import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import InitalModal from "@/components/modals/inital-modal";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitalModal />;
};

export default SetupPage;
