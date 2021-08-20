import Head from "next/head";

export default function blog() {
  return (
    <div>
      <Head>
        <title>Transcend</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Transcend Cyberprise is Tunisian Software Company"/>
      </Head>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Blog
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            From whiteboard to product launch, we give you the fuel to go from ground zero to zero gravity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}