import { Container, ProgressBar, ProgressBarContainer } from './styles';


interface Props {
    isActive: boolean;
    duration: number;
};

const Loader = ({ isActive, duration }: Readonly<Props>) => {
    return (
        <Container>
            <ProgressBarContainer>
                <ProgressBar duration={duration} isactive={isActive} />
            </ProgressBarContainer>
        </Container>
    )
}

export default Loader;