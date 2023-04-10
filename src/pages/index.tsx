import Image from 'next/image';
import bgTop from '../assets/cherry-top.png';
import bgRight from '../assets/cherry-right.png';
import bgBottom from '../assets/cherry-bottom.png';
import bgLeft from '../assets/cherry-left.png';

export default function Home() {
  return (
    <div className="h-screen w-full grid grid-cols-layout grid-rows-layout">
      <div className="col-start-2 row-start-1 relative">
        <Image src={bgTop} fill alt="background cherry-blossom photo"></Image>
      </div>
      <div className="col-start-3 row-span-3 relative">
        <Image src={bgRight} fill alt="background cherry-blossom photo"></Image>
      </div>
      <div className="col-start-2 row-start-3 relative">
        <Image src={bgBottom} fill alt="background cherry-blossom photo"></Image>
      </div>
      <div className="col-start-1 row-start-1 row-span-3 relative">
        <Image src={bgLeft} fill alt="background cherry-blossom photo"></Image>
      </div>
      <div className="flex bg-dark col-start-2 row-start-2 border border-soft-white">
        <main>
          {/* Section INFO */}
          {/* Section SKILLS */}
          {/* Section WORK */}
          {/* Section CONTACT */}
        </main>
        {/* NAV*/}
        <nav className="flex self-end justify-around items-center h-20 w-full px-10 text-soft-white font-main">
          <p className=" text-xl uppercase">about</p>
          <span className="bg-soft-white w-1/12 h-0.5"></span>
          <p className="text-xl uppercase">skills</p>
          <span className="bg-soft-white w-1/12 h-0.5"></span>
          <p className="text-xl uppercase">work</p>
          <span className="bg-soft-white w-1/12 h-0.5"></span>
          <p className="text-xl uppercase">contact</p>
        </nav>
      </div>
    </div>
  );
}
