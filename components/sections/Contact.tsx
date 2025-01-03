import { Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import Line from "../ui/Line";

export default function Contact() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold mb-3">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            {
              icon: <Phone className="w-5 h-5" />,
              url: "tel:+2341234567890",
              text: "+234 123 456 7890",
            },
            {
              icon: <Globe className="w-5 h-5" />,
              url: "https://inspikalu.com",
              text: "https://inspikalu.com",
            },
            {
              icon: <Mail className="w-5 h-5" />,
              url: "mailto:inspikalu@gmail.com",
              text: "inspikalu@gmail.com",
            },
          ].map((contact, index) => {
            return (
              <Link
                href={contact.url}
                key={index}
                className="flex items-center gap-3 w-full border-2 border-gray-600 p-2"
              >
                {contact.icon}
                {contact.text}
              </Link>
            );
          })}
        </div>
      </section>
      <Line />
      <section className="w-full bg-secondary p-3">
        <h3 className="flex items-center justify-start gap-2 text-textPrimary">
          <Globe /> <span>Socials</span>
        </h3>
        <div className="flex items-center mt-2 text-textSecondary text-sm">
          <Link
            href="https://X.com/inspikalu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 border-r px-2"
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com/inspikalu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 border-r px-2"
          >
            Instagram
          </Link>
          <Link
            href="https://linkedin.com/in/inspikalu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 px-2"
          >
            LinkedIn
          </Link>
        </div>
      </section>
    </>
  );
}
