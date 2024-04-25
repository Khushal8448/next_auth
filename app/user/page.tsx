import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";

const user = async () => {
  const data = await getServerSession();
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
