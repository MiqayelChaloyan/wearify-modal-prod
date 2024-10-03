import ModelViewer from "components/ModelViewer"
import { useSelector } from "react-redux";
import { RootState } from "store/redux";
import { DriverCap, Nikeshoes, Pregomesh_bows } from "utils/tests/__models__/__index__"
import { Link } from "./styles";
import { ProdIds } from "utils/helpers/products";



const ModelViewerContainer = () => {
    const { isLoading } = useSelector((state: RootState) => state.loaderCloSet);
    const product = useSelector((state: RootState) => state.productsData.product);
    const endpoint = ProdIds.filter(prod => prod.id === product?.id);

    console.log(endpoint[0])

    return (
        <div>
            {!!isLoading &&
                <Link
                    href={product?.closet_url}
                    target="_blank"
                >
                    Try on-Me
                </Link>
            }
            <ModelViewer glbSrc={endpoint[0]?.model_viewer} />
        </div>
    )
};

export default ModelViewerContainer;