import { Card } from "@/components/ui/card";
import MenuUser from "@/components/others/MenuUser";
import SendPostsMessage from "@/components/others/SendPostsMessage";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full md:max-w-[1920px] px-0 lg:px-10 mx-auto">
      <MenuUser/>

    <section className="w-full mt-20 md:mt-8 flex flex-col gap-2 ml-0 md:ml-24 px-4">

      <div className="w-full flex items-center justify-center">
        <SendPostsMessage/>
      </div>

      <Card className="w-full min-h-[300px] px-2 py-3 border mt-2">
        Card
      </Card>
      <Card className="w-full min-h-[300px] px-2 py-3 border mt-2">
        Card
      </Card>
      <Card className="w-full min-h-[300px] px-2 py-3 border mt-2">
        Card
      </Card>
      <Card className="w-full min-h-[300px] px-2 py-3 border mt-2">
        Card
      </Card>
      <Card className="w-full min-h-[300px] px-2 py-3 border mt-2">
        Card
      </Card>

    </section>
      
    </div>
  );
}
