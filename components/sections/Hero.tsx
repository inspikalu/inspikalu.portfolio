import Image from 'next/image';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-7 h-full">
      <h1 className="col-span-2 text-4xl font-bold mb-6">
        Okereke Clement Kalu
      </h1>

      <div className="h-full flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-4">
          Fullstack Developer (Frontend Heavy)
        </h2>
        <p className="mb-4">
          I am a fullstack developer with a frontend heavy focus. I have
          experience with React, Next.js, and Tailwind CSS. I am also
          proficient in TypeScript and Rust.
        </p>
        <p>
          I&apos;m Passionate about building software that is both functional
          and visually appealing. I am also interested in learning new
          concepts in software development generally
        </p>
      </div>
      <div className="relative flex items-center w-full h-64 md:h-full">
        <div className="aspect-square w-full relative">
          <Image
            src={"/inspikalu.jpg"}
            alt="Okereke Clement Kalu"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* <div className="h-full relative flex items-center w-full">
        <div className="aspect-square w-full relative">
          <Image
            src={"/inspikalu.jpg"}
            alt="Okereke Clement Kalu"
            fill
            className="object-cover"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;