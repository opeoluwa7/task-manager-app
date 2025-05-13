"use client"

import NavIconButton from "@/components/ui-elements/NavIconButton";
import MyImage from "@/components/ui-elements/Image";


export default function Home() {




return (
  <main className="w-[80%] h-[30rem] main flex flex-col items-center justify-center gap-20 rounded-lg p-6">
    <div className="w-full" >
      < MyImage
        src="/checklist-image.png"
        width={150}
        height={150}
        alt="Picture of a checklist"
      />
    </div>

    <div className="w-full text-center" >
      <h1 className="text-2xl"> Manage your <strong>tasks</strong> and ideas quickly </h1>
      <br />
      <NavIconButton href="/about" text=">" class="btn relative left-[7rem]" />
      
    </div>
    
  </main>

);
}
