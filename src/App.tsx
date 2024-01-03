import { PlusIcon } from '@heroicons/react/16/solid';
import Navbar from './components/navbar';
import Content from './components/content';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="flex size-full flex-col bg-zinc-800 text-white">
      <Navbar />
      <Content>
        <div className="mx-20 flex">
          <h3 className="inline-flex flex-wrap items-center text-4xl">
            React <PlusIcon className="h-8 w-8" strokeWidth={1.2} />
            Tailwind <PlusIcon className="h-8 w-8" strokeWidth={1.2} /> Vite
          </h3>
        </div>
      </Content>
      <Footer />
    </div>
  );
}
