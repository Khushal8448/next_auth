import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

const user = async () => {
  const data = await getServerSession(NEXT_AUTH);
  console.log(data);

  return (
    <div>
      <Appbar />
      User component
      {JSON.stringify(data?.user)}
    </div>
  );
};

export default user;
