import { Container, ProgressBar, ProgressBarContainer } from './styles';

const Loader = () => {

    return (
        <Container>
            <ProgressBarContainer>
                <ProgressBar isActive={true} />
            </ProgressBarContainer>
        </Container>
    )
}

export default Loader;