import React from 'react';

const GuideItem = ({ image, title, description }) => (
  <div className="flex flex-row w-full bg-white  rounded-lg overflow-hidden mb-6 ">
      <div className=" sm:w-1/3">
        <img src={image} alt={title} className="object-cover h-fit" />
      </div>
      <div className="w-2/3 p-6">
        <h3 className="text-2xl font-semibold  text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
  </div>
);

const HomebuyerGuide = () => {
  const guides = [
    {
      image: "data:image/jpeg;base64,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",
      title: "Understanding the Paperwork: A Guide to Homebuyer Agreements",
      description: "Confused about all the agreements you're being asked to sign? No problem - we'll give you a quick overview of all the major paperwork and some common things to watch out for."
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "Mythbusters: Homebuyer Edition",
      description: "There are a lot of dubious claims out there since the NAR settlement came into effect. For example, did you know you don't need to sign exclusive agreements to tour homes or use an agent? We're setting the record straight."
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "Could Kamala pay your down payment?",
      description: "Down payments are expensive, but Kamala Harris has proposed $25k in assistance for first-time homebuyers. Check out more about her plan and other down payment assistance programs here."
    },
    // Add more guide objects as needed
  ];

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <header className="py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-pink-600">bramble</h1>
        <nav>
          <a href="/" className="text-gray-600 hover:text-gray-900">HOMEBUYER GUIDES</a>
        </nav>
      </header>
      
      <main className="py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Bramble Guides</h2>
        <p className="mb-6 text-center max-w-2xl mx-auto">
          Welcome to Bramble Guides, your one-stop-shop for detailed, behind-the-scenes deep dives into everything when buying a home.
        </p>
        
        <div className="mb-8 flex justify-center">
          <input 
            type="email" 
            placeholder="frank@wright.com" 
            className="border border-gray-300 p-2 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
          />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition duration-300">
            GET IN TOUCH
          </button>
        </div>
        <div className='flex flex-column w-full'>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {guides.map((guide, index) => (
              <GuideItem key={index} {...guide} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomebuyerGuide;