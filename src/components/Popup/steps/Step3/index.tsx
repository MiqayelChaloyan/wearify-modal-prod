import { useSelector } from "react-redux";
import { RootState } from "store/redux";
import { Box, Image1, Image2, Loading, Section, Text } from "./styles";
import { closetData } from "utils/tests/__tests__";
import { FaArrowRight } from "react-icons/fa6";
import { colors } from "themes";
import { Texts } from "utils/constants";
import Loader from "components/Loader";


const Step3 = () => {
    const values = useSelector((state: RootState) => state.values);
    console.log(values, 'values')
    // closetData

    return (
        <div>
            <Section>
                <Box>
                    <Image1 src={closetData.imgPath} alt={closetData.id} />
                </Box>
                <FaArrowRight size={20} color={colors.lightGray} />
                <Box>
                    <Image2 src={values.uploadImage?.source} alt={values.uploadImage?.id} />
                </Box>
            </Section>

            <Loading>
                <Text>{Texts.loading}</Text>
                <Loader/>
            </Loading>
        </div>
    )
};

export default Step3;