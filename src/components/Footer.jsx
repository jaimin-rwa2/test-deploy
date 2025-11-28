export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-6">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
