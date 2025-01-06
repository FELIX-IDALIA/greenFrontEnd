const Footer = () => {
    return (
<footer className="bg-white text-gray-700 py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/*Branding*/}
      <div>
        <h1 className="text-lg font-medium">Green</h1>
        <p className="text-sm text-gray-400">
            "Green" is more than just a live-streaming app—it’s a place where life and connection happen in real-time. 
            Whether you're sharing a moment, watching a friend, or meeting new people, 
            it’s all about the experience of being alive, engaged, and connected.
        </p>
      </div>

      {/*Navigation Links*/}
      <div className="flex flex-col space-y-2">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Our Team</a>
        <a href="#" className="hover:underline">Careers</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>

      {/*Social Media*/} 
    
      <div className="flex flex-col space-y-2">
        <a href="#" className="hover:text-blue-400">Facebook</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
        <a href="#" className="hover:text-blue-400">Instagram</a>
      </div>
      
    </div>
    
    

    {/* Copyright */}
    <div className="mt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Green. All rights reserved.
    </div>
  </div>
</footer>
    );

};

export default Footer;

  
  
  
  