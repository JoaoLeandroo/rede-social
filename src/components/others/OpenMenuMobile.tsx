import {
  Menu,
  Settings,
  User,
  Heart,
  BookMarked,
  MessageSquareMore,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const OpenMenuMobile = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-8 h-8 cursor-pointer hover:opacity-75 transition-all duration-200 text-white"/>
          <span className="sr-only">Abrir Menu</span>
        </SheetTrigger>
        <SheetContent>
          <SheetDescription>
            <nav className="flex mt-12 w-full flex-col gap-y-3">
              <Link
                href={"#"}
                className="w-full h-11 bg-emerald-700 rounded-xl text-white hover:bg-emerald-700/90"
              >
                <SheetClose className="w-full h-full flex items-center  gap-4">
                    <div className="w-[30%] flex justify-end">
                        <User className="w-6 h-6"/>
                    </div>
                  <span className="font-medium text-lg">Perfil</span>
                </SheetClose>
              </Link>

              <Link
                href={"#"}
                className="w-full h-11 bg-emerald-700 rounded-xl text-white hover:bg-emerald-700/90"
              >
                <SheetClose className="w-full h-full flex items-center  gap-4 ">
                <div className="w-[30%] flex justify-end">
                        <Heart className="w-6 h-6"/>
                    </div>
                    <span className="font-medium text-lg">Curtidas</span>
                </SheetClose>
              </Link>

              <Link
                href={"#"}
                className="w-full h-11 bg-emerald-700 rounded-xl text-white hover:bg-emerald-700/90"
              >
                <SheetClose className="w-full h-full flex items-center  gap-4 ">
                <div className="w-[30%] flex justify-end">
                        <BookMarked className="w-6 h-6"/>
                    </div>
                    <span className="font-medium text-lg">Favoritos</span>
                </SheetClose>
              </Link>

              <Link
                href={"#"}
                className="w-full h-11 bg-emerald-700 rounded-xl text-white hover:bg-emerald-700/90"
              >
                <SheetClose className="w-full h-full flex items-center  gap-4 ">
                <div className="w-[30%] flex justify-end">
                        <MessageSquareMore className="w-6 h-6"/>
                    </div>
                    <span className="font-medium text-lg">Comentarios</span>
                </SheetClose>
              </Link>

              <Link
                href={"#"}
                className="w-full h-11 bg-emerald-700 rounded-xl text-white hover:bg-emerald-700/90"
              >
                <SheetClose className="w-full h-full flex items-center gap-4 ">
                <div className="w-[30%] flex justify-end">
                        <Settings className="w-6 h-6"/>
                    </div>
                    <span className="font-medium text-lg">Configurações</span>
                </SheetClose>
              </Link>
            </nav>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default OpenMenuMobile;
