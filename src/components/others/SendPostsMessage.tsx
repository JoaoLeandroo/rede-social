import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const SendPostsMessage = () => {
    return ( 
        <div className="max-w-[1000px] w-full flex flex-col items-center">
            <Textarea 
                className="resize-none text-xl h-[150px] mb-3 bg-emerald-400/40 border-2 border-green-500 p-5 placeholder:text-white"
                placeholder="Digite aqui..."
                />
            <Button className="w-full h-11 rounded-b-xl text-xl font-semibold bg-emerald-500 hover:bg-emerald-400">Postar</Button>
        </div>
     );
}
 
export default SendPostsMessage;
