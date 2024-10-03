import ModelViewer from "components/ModelViewer"
import { useSelector } from "react-redux";
import { RootState } from "store/redux";
import { Pregomesh_bows } from "utils/tests/__models__/__index__"
import { Link } from "./styles";



const ModelViewerContainer = () => {
    const { isLoading } = useSelector((state: RootState) => state.loaderCloSet);
    const product = useSelector((state: RootState) => state.productsData.product);

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
            <ModelViewer glbSrc={Pregomesh_bows} />
        </div>
    )
};

export default ModelViewerContainer;