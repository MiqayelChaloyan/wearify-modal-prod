import React, { useState } from 'react';
import { 
    Container, 
    Label, 
    RadioInput, 
    Switch, 
    SwitchesContainer, 
    SwitchText, 
    SwitchWrapper 
} from './styles';
import { useDispatch } from 'react-redux';
import { UPDATE_DATA } from 'store/redux/features/valuesState';

interface ToggleSwitchProps {
    isLoad: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isLoad }) => {
    const [plan, setPlan] = useState<0 | 1>(0);
    const dispatch = useDispatch();

    const handleChangePlan = (value: 0 | 1) => {
        dispatch(UPDATE_DATA({ plan: value }));
        setPlan(value);
    };

    return (
        <Container $isLoad={isLoad}>
            <SwitchesContainer>
                <RadioInput
                    type="radio"
                    id="switch0"
                    name="switchPlan"
                    value="0"
                    checked={plan === 0}
                    onChange={() => handleChangePlan(0)}
                />
                <RadioInput
                    type="radio"
                    id="switch1"
                    name="switchPlan"
                    value="1"
                    checked={plan === 1}
                    onChange={() => handleChangePlan(1)}
                />
                <Label htmlFor="switch0"></Label> {/* Empty Label */}
                <Label htmlFor="switch1"></Label> {/* Empty Label */}
                <SwitchWrapper active={plan}>
                    <Switch>
                        <SwitchText visible={plan === 0}></SwitchText> {/* Empty Switch Text */}
                        <SwitchText visible={plan === 1}></SwitchText> {/* Empty Switch Text */}
                    </Switch>
                </SwitchWrapper>
            </SwitchesContainer>
        </Container>
    );
};

export default ToggleSwitch;
