import Layout from "../../components/Layout";
import LoggingIn from '../../components/LoggingIn';
import { useRouter } from "next/router";

export default function NoLogin(props) {
    const router = useRouter();
    const query = router.query;
    console.log(query)
    return (
        <Layout>
            <LoggingIn></LoggingIn>
        </Layout>
    );
}