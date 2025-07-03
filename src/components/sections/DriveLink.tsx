import { useEffect, useState } from "react";
import { client } from "../../libs/sanityClient";
import { Button } from "../shared/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

interface ClientDrive {
  buttonText: string;
  driveLink: string;
}

export const DriveLink = () => {
  const [data, setData] = useState<ClientDrive | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "clientDrive"][0]{buttonText, driveLink}`)
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <section className="w-full flex justify-center px-4 pt-12">
      <a
        href={data.driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <Button className="flex items-center gap-2 px-6 py-3 text-white text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 rounded-xl shadow-lg transition-all duration-300 ease-in-out">
          <FaCloudUploadAlt className="w-5 h-5" />
          <span>{data.buttonText}</span>
        </Button>
      </a>
    </section>
  );
};
