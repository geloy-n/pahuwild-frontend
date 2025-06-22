import Link from "next/link";
import { Badge } from "../ui/badge";
import { APP_NAME } from "@/lib/constants";
import Logo from "./logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="wrapper px-6 py-10 flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
        <div className="max-w-sm">
          <div>
            <Logo />
          </div>
          <p className="text-gray-400 mt-2">
            Your gateway to wilderness adventures and peaceful retreats.
          </p>
          <div className="flex space-x-2 mt-2">
            <Badge variant="secondary" className="bg-green-800 text-green-100">
              Eco-Friendly
            </Badge>
            <Badge variant="secondary" className="bg-amber-800 text-amber-100">
              Sustainable
            </Badge>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-1">
          <h2 className="font-bold mb-2">Quick Links</h2>
          <Link
            href="/cabins"
            className="text-gray-400 hover:text-white transition"
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition"
          >
            About Us
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Amenities */}
        <div className="flex flex-col gap-1">
          <h2 className="font-bold mb-2">Amenities</h2>
          <p className="text-gray-400">WiFi Available</p>
          <p className="text-gray-400">Comfortable Beds</p>
          <p className="text-gray-400">Parking Included</p>
          <p className="text-gray-400">Kitchen Facilities</p>
        </div>

        {/* Social Media Links (Contact Info) */}
        <div className="flex flex-col">
          <h2 className="font-bold mb-2">Contact Info</h2>
          <div className="flex gap-3">
            {["facebook", "twitter", "instagram"].map((platform, idx) => (
              <div
                key={idx}
                className="border p-2 rounded-full hover:bg-gray-800 transition"
              >
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-${platform}-icon lucide-${platform}`}
                  >
                    {platform === "facebook" && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    )}
                    {platform === "twitter" && (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    )}
                    {platform === "instagram" && (
                      <>
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </>
                    )}
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper p-5 border-t border-gray-700 text-center text-sm text-gray-400">
        {currentYear} &copy; {APP_NAME}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
