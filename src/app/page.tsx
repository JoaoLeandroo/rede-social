import { Card } from "@/components/ui/card";
import MenuUser from "@/components/others/MenuUser";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full md:max-w-[1920px] px-0 lg:px-10 mx-auto">
      <MenuUser/>

    <section className="w-full mt-16 flex flex-col gap-2 ml-0 md:ml-24 px-4">
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
