import Image from "next/image";
import Layout from "../../components/layout";

export default function Index() {
    return (
        <Layout>
            <h1>Author List</h1>
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="Your Name" />
        </Layout>
    );
}