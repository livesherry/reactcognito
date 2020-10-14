import Layout from "../components/Layout";
import Confirm from "../components/Confirm";
import { useRouter } from "next/router";

export default function ConfirmPage(props){
    const router = useRouter();
    return (
        <Layout>
            <Confirm username={router.query.user}></Confirm>
        </Layout>
    );
}