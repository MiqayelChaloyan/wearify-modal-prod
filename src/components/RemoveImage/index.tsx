import { IoClose } from 'react-icons/io5';

import { Buttons, Texts, Titles } from 'utils/constants';

import { colors } from 'themes';

import { Box, Div, Button, Container, H2, HorizontalLine, Overlay, Text, Footer, CancelButton, DeleteButton } from './styles';


type Props = {
    handleSubmit: () => void;
    handleDelete: () => void;
};

const RemoveImage = ({ handleSubmit, handleDelete }: Readonly<Props>) => {

    return (
        <>
            <Overlay>
                <div />
            </Overlay>
            <Container>
                <Div>
                    <Box>
                        <H2>{Titles.deleteConfirmation}</H2>
                    </Box>
                    <Box>
                        <Button onClick={handleSubmit}>
                            <IoClose size={25} color={colors.gray} />
                        </Button>
                    </Box>
                </Div>
                <HorizontalLine>
                    <div />
                </HorizontalLine>
                <Text>{Texts.deleteImage}</Text>
                <Footer>
                    <CancelButton onClick={handleSubmit}>
                        {Buttons.cancel}
                    </CancelButton>
                    <DeleteButton onClick={handleDelete}>
                        {Buttons.delete}
                    </DeleteButton>
                </Footer>
            </Container>
        </>
    )
};

export default RemoveImage;