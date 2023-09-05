import React from 'react';
import { Form, Button, RadioButtonGroup, RadioButton, Stack,} from '@carbon/react';
import { withRouter } from '../../components/withRouter';


class QuizPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: Array(16).fill(""),
            submitted: false,
            answers: ["80", "defender", "22", "433", "4", "ajossa", "satellite", "0", "0", "punainen", "100", "250", "luvaton", "kaikki", "assistant", "management" ],
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
                <div>Mikä on Power-laitteiden tyypillinen käyttöaste?</div>
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
                <div>Kuinka monen kotitalouden sähkönkulutusta vastasi säästö, jos vaihdetaan Intel-pohjaiset x86-palvelimet IBM Poweriin?</div>
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
                <div>Missä tilanteessa Confidential computing suojaa datasi?</div>
                <RadioButtonGroup
                    name="question6"
                    value={this.state.questions[5]}
                    onChange={(e) => this.handleQuestion(5, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-6-1"
                      labelText="Tallennuksessa"
                      value="tallennuksessa"
                    />
                    <RadioButton
                      id="radio-6-2"
                      labelText="Verkossa"
                      value="verkossa"
                    />
                    <RadioButton
                      id="radio-6-3"
                      labelText="Ajossa"
                      value="ajossa"
                    />
                </RadioButtonGroup>
                <div>Millä ratkaisulla voit tuoda Cloudin toiminnallisuudet omaan konesaliin?</div>
                <RadioButtonGroup
                    name="question7"
                    value={this.state.questions[6]}
                    onChange={(e) => this.handleQuestion(6, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-7-1"
                      labelText="IBM Cloud Satellite"
                      value="satellite"
                    />
                    <RadioButton
                      id="radio-7-2"
                      labelText="IBM Space Shuttle"
                      value="shuttle"
                    />
                    <RadioButton
                      id="radio-7-3"
                      labelText="IBM Sky Rocket"
                      value="rocket"
                    />
                </RadioButtonGroup>
                <div>Kuinka paljon sähköä 500 teratavua tallennustilaa vie, kun se säilytetään 10:llä nauhakasetilla?</div>
                <RadioButtonGroup
                    name="question8"
                    value={this.state.questions[7]}
                    onChange={(e) => this.handleQuestion(7, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-8-1"
                      labelText="0 kWh/kk"
                      value="0"
                    />
                    <RadioButton
                      id="radio-8-2"
                      labelText="10 kWh/kk"
                      value="10"
                    />
                    <RadioButton
                      id="radio-8-3"
                      labelText="40 kWh/kk"
                      value="40"
                    />
                </RadioButtonGroup>
                <div>Kuinka paljon sähköä 50 petatavua tallennustilaa vie, kun se säilytetään 1000:lla nauhakasetilla?</div>
                <RadioButtonGroup
                    name="question9"
                    value={this.state.questions[8]}
                    onChange={(e) => this.handleQuestion(8, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-9-1"
                      labelText="0 kWh/kk"
                      value="0"
                    />
                    <RadioButton
                      id="radio-9-2"
                      labelText="100 kWh/kk"
                      value="100"
                    />
                    <RadioButton
                      id="radio-9-3"
                      labelText="400 kWh/kk"
                      value="400"
                    />
                </RadioButtonGroup>
                <div>Mitä näistä LinuxOne ei ole?</div>
                <RadioButtonGroup
                    name="question10"
                    value={this.state.questions[9]}
                    onChange={(e) => this.handleQuestion(9, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-10-1"
                      labelText="Skaalautuvin"
                      value="skaalautuvin"
                    />
                    <RadioButton
                      id="radio-10-2"
                      labelText="Turvallisin"
                      value="turvallisin"
                    />
                    <RadioButton
                      id="radio-10-3"
                      labelText="Luotettavin"
                      value="luotettavin"
                    />
                    <RadioButton
                      id="radio-10-4"
                      labelText="Punainen"
                      value="punainen"
                    />
                </RadioButtonGroup>
                <div>Kuinka monta IBM:n teknologialla toteutettua positiivisen ympäristövaikutuksen tutkimusprojektia tai asiakastyötä aiomme käynnistää vuoteen 2025 mennessä?</div>
                <RadioButtonGroup
                    name="question11"
                    value={this.state.questions[10]}
                    onChange={(e) => this.handleQuestion(10, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-11-1"
                      labelText="50"
                      value="50"
                    />
                    <RadioButton
                      id="radio-11-2"
                      labelText="70"
                      value="70"
                    />
                    <RadioButton
                      id="radio-11-3"
                      labelText="100"
                      value="100"
                    />
                </RadioButtonGroup>
                <div>Kuinka paljon IBM sijoittaa harjoitteluihin ja “new-collar” ohjelmiin vuoteen 2025 mennessä?</div>
                <RadioButtonGroup
                    name="question12"
                    value={this.state.questions[11]}
                    onChange={(e) => this.handleQuestion(11, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-12-1"
                      labelText="500 miljoonaa dollaria"
                      value="50"
                    />
                    <RadioButton
                      id="radio-12-2"
                      labelText="250 miljoonaa dollaria"
                      value="250"
                    />
                    <RadioButton
                      id="radio-12-3"
                      labelText="50 miljoonaa dollaria"
                      value="50"
                    />
                </RadioButtonGroup>
                <div>Mitä tarkoittaa varjodata?</div>
                <RadioButtonGroup
                    name="question13"
                    value={this.state.questions[12]}
                    onChange={(e) => this.handleQuestion(12, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-13-1"
                      labelText="Yhteystietojen lähettäminen yrityksen sähköpostiosoitteesta"
                      value="yhteystiedot"
                    />
                    <RadioButton
                      id="radio-13-2"
                      labelText="Hallitsematon määrä erilaisia valvontalaitteita"
                      value="hallitsematon"
                    />
                    <RadioButton
                      id="radio-13-3"
                      labelText="Luvattomia kopioita yrityksen sensitiivisestä tiedosta"
                      value="luvaton"
                    />
                    <RadioButton
                      id="radio-13-4"
                      labelText="Tuotantoympäristön datan päivitys"
                      value="tuotanto"
                    />
                </RadioButtonGroup>
                <div>Mitkä alla olevista on IBM:n seuraavan sukupolven tekoälyalustan pääosia?</div>
                <RadioButtonGroup
                    name="question14"
                    value={this.state.questions[13]}
                    onChange={(e) => this.handleQuestion(13, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-14-1"
                      labelText="watsonx.data"
                      value="data"
                    />
                    <RadioButton
                      id="radio-14-2"
                      labelText="watsonx.ai"
                      value="ai"
                    />
                    <RadioButton
                      id="radio-14-3"
                      labelText="watsonx.governance"
                      value="governance"
                    />
                    <RadioButton
                      id="radio-14-4"
                      labelText="Kaikki yllä olevat"
                      value="kaikki"
                    />
                </RadioButtonGroup>
                <div>Mikä on IBM:n markkinoiden johtavan keskustelualustan uusi nimi?</div>
                <RadioButtonGroup
                    name="question15"
                    value={this.state.questions[14]}
                    onChange={(e) => this.handleQuestion(14, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-15-1"
                      labelText="Watsonx Assistant"
                      value="assistant"
                    />
                    <RadioButton
                      id="radio-15-2"
                      labelText="ChatGPT"
                      value="chatgpt"
                    />
                    <RadioButton
                      id="radio-15-3"
                      labelText="ACME ChatBot"
                      value="acme"
                    />
                    <RadioButton
                      id="radio-15-4"
                      labelText="GitHub GitChat"
                      value="gitchat"
                    />
                </RadioButtonGroup>
                <div>IBM Event Automation -ratkaisu rakentuu koostettavasta arkkitehtuurista. Mikä kerros mahdollistaa liiketoimintatapahtumien itsepalvelukatalogin, jota käyttäjät voivat hyödyntää tapahtumalähteiden etsimiseen, tutkimiseen ja käyttämiseen turvallisesti?</div>
                <RadioButtonGroup
                    name="question16"
                    value={this.state.questions[15]}
                    onChange={(e) => this.handleQuestion(15, e)}
                    orientation='vertical'
                >
                    <RadioButton
                      id="radio-16-1"
                      labelText="Event Streams"
                      value="streams"
                    />
                    <RadioButton
                      id="radio-16-2"
                      labelText="Event Endpoint Management"
                      value="management"
                    />
                    <RadioButton
                      id="radio-16-3"
                      labelText="Event Processing"
                      value="processing"
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