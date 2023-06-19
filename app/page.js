import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 ">
      <div className="w-full h-full text-center">
        <h1 className="text-7xl font-bold">Buy my stupid shit</h1>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-2 group border-2 hover:border-blue-300 p-10 ">
          <Image
            src="/images/image-1.avif"
            alt="image1"
            width={400}
            height={400}
          />
          <p className="group-hover:text-rose-300">
            expencive stolen picture 1
          </p>
        </div>
        <div className="flex flex-col gap-2 group border-2 hover:border-blue-300 p-10">
          <Image
            src="/images/image-2.avif"
            alt="image1"
            width={400}
            height={400}
          />
          <p className="group-hover:text-rose-300">
            expencive stolen picture 2
          </p>
        </div>
      </div>
    </main>
  );
}
