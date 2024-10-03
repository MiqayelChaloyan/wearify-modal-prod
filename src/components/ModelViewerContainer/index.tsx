import ModelViewer from "components/ModelViewer"
import { useSelector } from "react-redux";
import { RootState } from "store/redux";
import { DriverCap, Nikeshoes, Pregomesh_bows } from "utils/tests/__models__/__index__"
import { Box, Button, Link } from "./styles";
import { ProdIds } from "utils/helpers/products";
import { useEffect, useState } from "react";



const ModelViewerContainer = () => {
    const { isLoading } = useSelector((state: RootState) => state.loaderCloSet);
    const product = useSelector((state: RootState) => state.productsData.product);
    const endpoint = ProdIds.filter(prod => prod.id === product?.id);


    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        setIsOpen(true)
    };

    useEffect(() => {
        setIsOpen(false)
    }, [])


    return (
        <div>
            {isOpen && (
                <Box>
                    <img src='https://drive.google.com/thumbnail?id=1Pxce-U7OWTaCQUSWZPfOVs19-gQ7rEjd' alt='QR'/>
                </Box>
            )}
            
            {isLoading ? (
                endpoint[0].productId === '7872547586231' ? (
                    <Button onClick={handleChange}>
                        Try on-Me
                    </Button>
                ) : (
                    <Link href={product?.closet_url} target="_blank">
                        Try on-Me
                    </Link>
                )
            ) : null}

            <ModelViewer glbSrc={endpoint[0]?.model_viewer} />
        </div>
    )
};

export default ModelViewerContainer;