const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-gray-200 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            R&D VENTURE <span className="font-bold text-gradient">STUDIO</span>
          </h3>
          <p className="text-gray-600 text-base font-semibold">
            Build. Validate. Spin-Out. Repeat.
          </p>
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 font-semibold">
              © {new Date().getFullYear()} R&D Venture Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
