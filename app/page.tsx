import SandwichGallery from '@/components/SandwichGallery';
import './globals.css';

export const metadata = {
  title: 'Rotating Sandwiches',
  description: "that's it - an endless sideways gallery",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#1a1a1a]">
      <header className="bg-black text-white py-5 px-6 text-center shadow-lg z-20">
        <h1 className="text-4xl font-bold tracking-[0.2em] mb-1">
          ROTATING SANDWICHES
        </h1>
        <p className="text-sm text-gray-400 italic">
          that&apos;s it – an endless sideways gallery of sandwiches
          <br/>
          email: rotating.sandwiches.inquiries@gmail.com
        </p>
      </header>
      
      <SandwichGallery />
    </main>
  );
}
