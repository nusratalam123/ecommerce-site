import Image from "next/image";
export default function Logo({ w, h }: { w: number; h: number }) {
  return (
    <>
      <Image
        src="/assets/logo.jpg"
        width={w}
        height={h}
        alt="Company Logo"
        style={{ border: "1px solid red" }}
      />
    </>
  );
}
