import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
import {
  Settings,
  User,
  Heart,
  BookMarked,
  MessageSquareMore,
} from "lucide-react";
import OpenMenuMobile from "./OpenMenuMobile";

const MenuUser = () => {
  return (
    <div className="w-full md:w-auto fixed top-0 z-50 bg-orange-400">
      <nav className="md:hidden sticky top-0 flex shadow-lg w-full h-full border-b border-orange-500 p-2 items-center justify-between mx-auto">
        <div className="flex items-end gap-x-2">
          <span className="w-11 h-11 bg-orange-500 rounded-full p-2 border border-white"></span>
          <div>
            <h2 className="text-white">Joao Leandro</h2>
            <p className="text-xs leading-3">Gold Medal</p>
          </div>
        </div>

        <OpenMenuMobile/>
      </nav>

      <aside className="hidden md:block min-h-screen border-r border-orange-500/60 shadow-xl">
      <div className="flex flex-col items-start gap-x-2 p-3">
          <span className="w-11 h-11 bg-orange-500 rounded-full p-2 mt-2 border border-white"></span>
          <div className="select-none">
            <h2 className="text-white text-xs">Joao Leandro</h2>
            <p className="text-xs leading-3">Gold Medal</p>
        </div>

          <nav className="mt-12 w-full flex flex-col items-center gap-4">
            <TooltipProvider>

                <Tooltip>
                <TooltipTrigger>
                    <Link href={"#"}>
                        <User className="w-8 h-8 hover:opacity-75 text-white"/>
                        <span className="sr-only">Perfil de usuario</span>
                    </Link>
                    <TooltipContent side="right">
                        Perfil Usuario
                    </TooltipContent>
                </TooltipTrigger>
                </Tooltip>

                <Tooltip>
                <TooltipTrigger>
                    <Link href={"#"}>
                        <Heart className="w-8 h-8 hover:opacity-75 text-white"/>
                        <span className="sr-only">Curtidas</span>
                    </Link>
                    <TooltipContent side="right">
                        Curtidas
                    </TooltipContent>
                </TooltipTrigger>
                </Tooltip>


                <Tooltip>
                <TooltipTrigger>
                    <Link href={"#"}>
                        <MessageSquareMore className="w-8 h-8 hover:opacity-75 text-white"/>
                        <span className="sr-only">Seus comentarios</span>
                    </Link>
                    <TooltipContent side="right">
                        Comentarios
                    </TooltipContent>
                </TooltipTrigger>
                </Tooltip>


                <Tooltip>
                <TooltipTrigger>
                    <Link href={"#"}>
                        <BookMarked className="w-8 h-8 hover:opacity-75 text-white"/>
                        <span className="sr-only">Seus favorito</span>
                    </Link>
                    <TooltipContent side="right">
                        Favoritos
                    </TooltipContent>
                </TooltipTrigger>
                </Tooltip>

                <Tooltip>
                <TooltipTrigger>
                    <Link href={"#"}>
                        <Settings className="w-8 h-8 hover:opacity-75 text-white"/>
                        <span className="sr-only">Configurações</span>
                    </Link>
                    <TooltipContent side="right">
                        Configurações
                    </TooltipContent>
                </TooltipTrigger>
                </Tooltip>


            </TooltipProvider>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default MenuUser;
