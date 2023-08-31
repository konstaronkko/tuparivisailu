import React from 'react';
import { withRouter } from '../../components/withRouter';
import { Link } from 'react-router-dom';
import { Form, TextInput, Button, Stack } from '@carbon/react';


class ScorePage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            nickname: "",
            email: ""
        }
    }

    render() {
        return(
            <Stack gap={7}>
                <h3>Hienoa, sait {Math.round(this.props.location.state.points)}% vastauksista oikein!</h3>
                <div>Mikäli haluat osallistua arvontaan, täytä vielä alla oleva lomake:</div>
                <Form>
                    <TextInput 
                        classname='registration-input' 
                        id='nickname' 
                        labelText="Nimimerkki"
                        placeholder="Keksi itsellesi nimimerkki tulostaulukkoa varten" />
                    <TextInput 
                        classname='registration-input' 
                        id='email' 
                        labelText="Sähköpostiosoite"
                        placeholder="Anna sähköpostisi, jotta voimme tavoittaa sinut mikäli et ole palkintojenjaossa" />
                    <Button>Lähetä</Button>
                </Form>
                <div>Etkö ole tyytyväinen tulokseesi? Kokeile visailua uudestaan!</div>
                <Button as={Link} to="/quiz">Takaisin visaan</Button>
            </Stack>
        );
    }
}

export default withRouter(ScorePage);