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
        this.handleNick = this.handleNick.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNick(e) {
        this.setState({nickname: e.target.value});
    }

    handleEmail(e) {
        this.setState({email: e.target.value});
    }

    async handleSubmit(e) {
        e.preventDefault();
        var newScore = {
            nickname: this.state.nickname,
            email: this.state.email,
            score: this.props.location.state.points
        };

        await fetch("https://application-cd.16z6uixp5cb8.eu-de.codeengine.appdomain.cloud/record", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newScore),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
        this.setState({email: "", nickname: ""});
        this.props.navigate("/results");
    }

    render() {
        return(
            <Stack gap={7}>
                <h3>Hienoa, sait {this.props.location.state.points}% vastauksista oikein!</h3>
                <div>Mikäli haluat osallistua arvontaan, täytä vielä alla oleva lomake:</div>
                <Form onSubmit={this.handleSubmit}>
                    <TextInput 
                        className='registration-input' 
                        id='nickname' 
                        labelText="Nimimerkki"
                        placeholder="Keksi itsellesi nimimerkki tulostaulukkoa varten"
                        onChange={(e) => this.handleNick(e)} />
                    <TextInput 
                        className='registration-input' 
                        id='email' 
                        labelText="Sähköpostiosoite"
                        placeholder="Anna sähköpostisi, jotta voimme tavoittaa sinut mikäli et ole palkintojenjaossa" 
                        onChange={(e) => this.handleEmail(e)} />
                    <Button type="submit">Lähetä</Button>
                </Form>
                <div>Etkö ole tyytyväinen tulokseesi? Kokeile visailua uudestaan!</div>
                <Button as={Link} to="/quiz">Takaisin visaan</Button>
            </Stack>
        );
    }
}

export default withRouter(ScorePage);