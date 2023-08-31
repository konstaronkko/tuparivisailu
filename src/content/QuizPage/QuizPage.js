import React from 'react';
import { Form, Button, RadioButtonGroup, RadioButton, Stack,} from '@carbon/react';
import { withRouter } from '../../components/withRouter';


class QuizPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: Array(3).fill(""),
            submitted: false,
            answers: ["antti", "defender", "22"],
            points: 0
        }
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var points = 0;
        this.state.questions.forEach((val, i) => {
            if (this.state.answers[i] === val) points += 1;
        });
        points = (points / this.state.answers.length) * 100;
        console.log("Submittaus, pisteet: " + points);
        this.props.navigate("/score", { state: {points: points}});
        //this.setState({submitted: true, points: points})
    }
    handleQuestion(index, e) {
        console.log("HandleQuestion1 triggered")
        const nextQuestions = this.state.questions.map((c, i) => {
            if (i === index) return e;
            else return c;
        });
        this.setState({questions: nextQuestions})
    }


    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
              <Stack gap={7}>
                <div>Kuka on Suomen paras Mainframe-teksu?</div>
                <RadioButtonGroup
                    name="question1"
                    value={this.state.questions[0]}
                    onChange={(e) => this.handleQuestion(0, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-1-1"
                      labelText="Antti Maasalmi"
                      value="antti"
                    />
                    <RadioButton
                      id="radio-1-2"
                      labelText="Juha Isomäki"
                      value="juha"
                    />
                    <RadioButton
                      id="radio-1-3"
                      labelText="Konsta Rönkkö"
                      value="konsta"
                      disabled
                    />
                </RadioButtonGroup>
                
                <div>Mikä teknologia varmistaa datasi palautettavuuden jopa Ransomware-hyökkäyksessä?</div>
                <RadioButtonGroup
                  name="question2"
                  value={this.state.questions[1]}
                  onChange={(e) => this.handleQuestion(1, e)}
                  orientation='vertical'
                >

                  <RadioButton
                    id="radio-2-1"
                    labelText="IBM Storage Fusion"
                    value="fusion"
                  />
                  <RadioButton
                    id="radio-2-2"
                    labelText="IBM Storage Defender"
                    value="defender"
                  />
                  <RadioButton
                    id="radio-2-3"
                    labelText="IBM Power10"
                    value="power"
                  />
                </RadioButtonGroup>
                <div>Jos vaihdat vanhat Intel-pohjaiset x86 palvelimesi Power10 S1022:een, kuinka monen nelihenkisen kotitalouden verran säästät sähköä vuodessa?</div>
                <RadioButtonGroup
                  name="question3"
                  value={this.state.questions[2]}
                  onChange={(e) => this.handleQuestion(2, e)}
                  orientation='vertical'
                >
                  <RadioButton
                    id="radio-3-1"
                    labelText="Kahden kotitalouden verran"
                    value="2"
                  />
                  <RadioButton
                    id="radio-3-2"
                    labelText="Neljän kotitalouden verran"
                    value="4"
                  />
                  <RadioButton
                    id="radio-3-3"
                    labelText="Kymmenen kotitalouden verran"
                    value="10"
                  />
                  <RadioButton
                    id="radio-3-4"
                    labelText="22 kotitalouden verran"
                    value="22"
                  />
                </RadioButtonGroup>
                <Button type="submit" aria-label="Lähetä">Lähetä</Button>
              </Stack>
            </Form>
            </div>
          );
    }
}


export default withRouter(QuizPage);