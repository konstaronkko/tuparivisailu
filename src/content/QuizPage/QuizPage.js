import React from 'react';
import { Form, Button, RadioButtonGroup, RadioButton, Stack,} from '@carbon/react';
import { withRouter } from '../../components/withRouter';


class QuizPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: Array(5).fill(""),
            submitted: false,
            answers: ["80", "defender", "22", "433", "4"],
            points: 0
        }
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var points = 0;
        this.state.questions.forEach((val, i) => {
            console.log("arvaus: " + val + " oikea: " + this.state.answers[i])
            if (this.state.answers[i] === val) points += 1;
        });
        points = Math.round((points / this.state.answers.length) * 100);
        console.log("Submittaus, pisteet: " + points);
        this.props.navigate("/score", { state: {points: points}});
        //this.setState({submitted: true, points: points})
    }
    handleQuestion(index, e) {
        console.log("HandleQuestion triggered: ", e)
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
                <div>Mikä on Power-laitteiden hyötysuhde?</div>
                <RadioButtonGroup
                    name="question1"
                    value={this.state.questions[0]}
                    onChange={(e) => this.handleQuestion(0, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-1-1"
                      labelText="80%"
                      value="80"
                    />
                    <RadioButton
                      id="radio-1-2"
                      labelText="50%"
                      value="50"
                    />
                    <RadioButton
                      id="radio-1-3"
                      labelText="100%"
                      value="100"
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
                    labelText="60 kotitalouden verran"
                    value="60"
                  />
                  <RadioButton
                    id="radio-3-2"
                    labelText="15 kotitalouden verran"
                    value="15"
                  />
                  <RadioButton
                    id="radio-3-3"
                    labelText="10 kotitalouden verran"
                    value="10"
                  />
                  <RadioButton
                    id="radio-3-4"
                    labelText="22 kotitalouden verran"
                    value="22"
                  />
                </RadioButtonGroup>
                <div>Montako qubittia on IBM:n uusimmassa Osprey-kvanttisirussa?</div>
                <RadioButtonGroup
                  name="question4"
                  value={this.state.questions[3]}
                  onChange={(e) => this.handleQuestion(3, e)}
                  orientation='vertical'
                >
                  <RadioButton
                    id="radio-4-1"
                    labelText="127"
                    value="127"
                  />
                  <RadioButton
                    id="radio-4-2"
                    labelText="133"
                    value="133"
                  />
                  <RadioButton
                    id="radio-4-3"
                    labelText="433"
                    value="433"
                  />
                  <RadioButton
                    id="radio-4-4"
                    labelText="1121"
                    value="1121"
                  />
                </RadioButtonGroup>
                <div>Montako uutta kvanttikoneen kestävää salausalgoritmia NIST standardoi parhaillaan?</div>
                <RadioButtonGroup
                  name="question5"
                  value={this.state.questions[4]}
                  onChange={(e) => this.handleQuestion(4, e)}
                  orientation='vertical'
                >
                  <RadioButton
                    id="radio-5-1"
                    labelText="Kolmea"
                    value="3"
                  />
                  <RadioButton
                    id="radio-5-2"
                    labelText="Neljää"
                    value="4"
                  />
                  <RadioButton
                    id="radio-5-3"
                    labelText="Viittä"
                    value="5"
                  />
                  <RadioButton
                    id="radio-5-4"
                    labelText="Kuutta"
                    value="6"
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