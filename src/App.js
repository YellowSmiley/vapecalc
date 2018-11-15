import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pgRatio: 70,
      vgRatio: 30,
      amountToMake: 50,
      flavourRatio: 20,
      nicotineBasePgRatio: 100,
      nicotineBaseVgRatio: 0,
      nicotineBaseStrength: 18,
      desiredNicotineStrength: 4
    };
  }

  handlePgRatioChange(e) {
    const newVgRatio = 100 - e.target.value;
    this.setState({ pgRatio: e.target.value, vgRatio: newVgRatio });
  }

  handleVgRatioChange(e) {
    const newPgRatio = 100 - e.target.value;
    this.setState({ vgRatio: e.target.value, pgRatio: newPgRatio });
  }

  handleNicotineBasePgRatioChange(e) {
    const newNicotineBaseVgRatio = 100 - e.target.value;
    this.setState({
      nicotineBasePgRatio: e.target.value,
      nicotineBaseVgRatio: newNicotineBaseVgRatio
    });
  }

  handleNicotineBaseVgRatioChange(e) {
    const newNicotineBasePgRatio = 100 - e.target.value;
    this.setState({
      nicotineBaseVgRatio: e.target.value,
      nicotineBasePgRatio: newNicotineBasePgRatio
    });
  }

  render() {
    const amountOfNicotine =
      (this.state.desiredNicotineStrength / this.state.nicotineBaseStrength) *
      this.state.amountToMake;

    const pgInNicotineBase =
      (amountOfNicotine / 100) * this.state.nicotineBasePgRatio;

    const vgInNicotineBase =
      (amountOfNicotine / 100) * this.state.nicotineBaseVgRatio;

    const amountOfFlavour =
      (this.state.amountToMake / 100) * this.state.flavourRatio;

    let amountOfPg = (this.state.amountToMake / 100) * this.state.pgRatio;
    amountOfPg = amountOfPg - pgInNicotineBase - amountOfFlavour;

    let amountOfVg = (this.state.amountToMake / 100) * this.state.vgRatio;
    amountOfVg -= vgInNicotineBase;

    let error = null;

    if (
      amountOfNicotine < 0 ||
      amountOfFlavour < 0 ||
      amountOfPg < 0 ||
      amountOfVg < 0
    ) {
      error = (
        <p className="error">
          This is impossible to make. Try lowering the Desired Nicotine
          Strength.
        </p>
      );
    }

    return (
      <div className="app">
        <header>e-Liquid Calculator</header>
        <br />
        <div className="panel-header">Recipe Details</div>
        <div class="wrapper">
          <form>
            <p>
              <label htmlFor="pgRatio">PG Ratio (%)</label>
              <input
                id="pgRatio"
                value={this.state.pgRatio}
                onChange={e => this.handlePgRatioChange(e)}
              />
            </p>
            <p>
              <label htmlFor="vgRatio">VG Ratio (%)</label>
              <input
                id="vgRatio"
                value={this.state.vgRatio}
                onChange={e => this.handleVgRatioChange(e)}
              />
            </p>
            <p>
              <label htmlFor="amountToMake">Amount to Make (ml)</label>
              <input
                id="amountToMake"
                value={this.state.amountToMake}
                onChange={e => this.setState({ amountToMake: e.target.value })}
              />
            </p>
            <p>
              <label htmlFor="flavourRatio">Flavour Ratio (%)</label>
              <input
                id="flavourRatio"
                value={this.state.flavourRatio}
                onChange={e => this.setState({ flavourRatio: e.target.value })}
              />
            </p>
            <p>
              <label htmlFor="nicotineBasePgRatio">
                Nicotine Base PG Ratio (%)
              </label>
              <input
                id="nicotineBasePgRatio"
                value={this.state.nicotineBasePgRatio}
                onChange={e => this.handleNicotineBasePgRatioChange(e)}
              />
            </p>
            <p>
              <label htmlFor="nicotineBaseVgRatio">
                Nicotine Base VG Ratio (%)
              </label>
              <input
                id="nicotineBaseVgRatio"
                value={this.state.nicotineBaseVgRatio}
                onChange={e => this.handleNicotineBaseVgRatioChange(e)}
              />
            </p>
            <p>
              <label htmlFor="nicotineBaseStrength">
                Nicotine Base Strength (mg)
              </label>
              <input
                id="nicotineBaseStrength"
                value={this.state.nicotineBaseStrength}
                onChange={e =>
                  this.setState({ nicotineBaseStrength: e.target.value })
                }
              />
            </p>
            <p>
              <label htmlFor="desiredNicotineStrength">
                Desired Nicotine Strength (mg)
              </label>
              <input
                id="desiredNicotineStrength"
                value={this.state.desiredNicotineStrength}
                onChange={e =>
                  this.setState({ desiredNicotineStrength: e.target.value })
                }
              />
            </p>
          </form>
        </div>
        <br />
        <div className="results">
          {error}
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Amount (ml)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PG</td>
                <td>{amountOfPg}</td>
              </tr>
              <tr>
                <td>VG</td>
                <td>{amountOfVg}</td>
              </tr>
              <tr>
                <td>Nicotine</td>
                <td>{amountOfNicotine}</td>
              </tr>
              <tr>
                <td>Flavour</td>
                <td>{amountOfFlavour}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
