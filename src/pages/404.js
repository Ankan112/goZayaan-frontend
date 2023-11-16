import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Image
          src={"/images/notFound.png"}
          alt="404"
          height={500}
          width={500}
        ></Image>{" "}
        <br />
        <p className="mt-5 text-center">
          <Link href={"/"}>Go Home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
