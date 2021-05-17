import React, {ChangeEvent} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export interface EulaState {
  acceptedTermsOfService: boolean;
}

export class Eula extends React.Component<{}, EulaState> {
  constructor() {
    super({});
    this.state = {acceptedTermsOfService: false};
  }

  updateValue(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      acceptedTermsOfService: event.target.checked,
    });
  }

  render() {
    return (
      <div>
        <h1>EULA</h1>
        <p>
          Do you agree to give Coach Adam Collins and Coach Peter Koutras 50% of
          all future earnings?
        </p>
        <input
          type="checkbox"
          onChange={event => this.updateValue(event)}
        />
        <br/>
        <MyLink isDisabled={!this.state.acceptedTermsOfService} to="/feed">
          I aggree
        </MyLink>
      </div>
    );
  }
}

export interface MyLinkProps {
  isDisabled: boolean;
  to: string;
}

export class MyLink extends React.Component<MyLinkProps> {
  render() {
    if(this.props.isDisabled) {
      return this.renderDisabledLink();
    } else {
      return this.renderActvieLink();
    }
  }

  private renderDisabledLink() {
    return <span>{this.props.children}</span>
  }

  private renderActvieLink() {
    return <Link to={this.props.to}>{this.props.children}</Link>
  }
}
