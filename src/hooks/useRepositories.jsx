import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);
    const { repositories = null } = data;

    // const [repositories, setRepositories] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await globalThis.fetch(
    //             "http://192.168.100.4:5000/api/repositories"
    //         );
    //         const json = await response.json();
    //         if (json && json.edges.length > 0) {
    //             setRepositories(json.edges.map((e) => e.node));
    //         }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    // useEffect(() => {
    //     repositories && fetchData();
    // }, []);
    const repositoriesNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return { loading, refetch, repositories: repositoriesNodes };
};
export default useRepositories;
