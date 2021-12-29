import Image from "next/image";

export default function Index() {
    return (
        <>
            <h1>Author List</h1>
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="Your Name" />
        </>
    );
}