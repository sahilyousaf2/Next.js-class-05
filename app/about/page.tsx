import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto pt-8">
        <h1 className="text-3xl text-center mb-8 font-bold">About</h1>
        <div className="grid grid-cols-[60%_auto]">
          <div className=" p-6">

            <h2 className="text-2xl font-bold mt-14">Sahil Yousaf</h2>
            <p className="text-[15px] text-gray-500">
              I'm Frontend Developer | ❇️ 1+ year of Tech Experience | ✨ Building products with HTML, CSS, Typescript and CLI Application | 🌱 Contributing open-source | 🤖 Learning Cloud Native Applied Generative AI | I'm students on-site at GIAIC.
            </p>
          </div>
          <div>
            <Image className='mx-auto rounded-md hover:scale-105 duration-300 hover:shadow-2xl' src={"/men.jpg"} height={100} width={300} alt='men'></Image>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
