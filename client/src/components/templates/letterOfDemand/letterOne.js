import React, { Component } from 'react';

class LetterOne extends Component {
  constructor() {
    super();
    this.state={}
  }
    
  render() {
    return (
      <div>
        <h1>Sample Letter One</h1>
        <p>
      <strong><u>IF YOU ARE ACTING FOR INSURERS + NO PERSONAL INJURY</u></strong>
  </p>
  <p>
      Dear Mr <span className="last-name">Surname</span>
  </p>
  <p>
      <strong></strong>
  </p>
  <p>
      <strong>
          RECOVERY AGAINST <span className="last-name">[ NAME OF TORTFEASOR ]</span> FOR ACCIDENT INVOLVING <span className="vehicle-numberone">[ VEH
          NO. ]</span> and <span className="vehicle-numbertwo">[ VEH NO. ]</span> ALONG <span className="road-name">[ WHICH ROAD ]</span> ON <span className="date">[ DATE OF ACCIDENT ]</span>.
      </strong>
  </p>
  <p>
      <strong></strong>
  </p>
  <p>
      We act for <span className="insurance-company">[ NAME OF INSURANCE COMPANY ]</span>, the motor insurer [ VEH NO. ]
      ("our client").
  </p>
  <p>
      We are instructed that on <span className="date">[ DATE OF ACCIDENT ]</span> at about [ TIME OF ACCIDENT
      ] hours, there was an accident involving <span className="vehicle-numberone">[ VEH NO. ]</span> and
      <span className="vehicle-numbertwo">[ VEH NO. ]</span>, at <span className="road-name">[ WHICH ROAD ]</span>.
  </p>
  <p>
      We are instructed by our client that the said accident was caused by you,
      in the driving, management and/or control of your vehicle. As a result of
      the accident, the owner of <span className="vehicle-numberone">[ VEH NO. ]</span> suffered loss, damage and expense
      and he made a claim under his insurance policy for repair works to be
      carried out. As the motor insurer of <span className="vehicle-numberone">[ VEH NO. ]</span>, our client was called
      upon to indemnify and pay the following under the policy: -
  </p>
  <table border="1" cellSpacing="0" cellPadding="0">
      <tbody>
          <tr>
              <td width="315" valign="top">
                  <p>
                      Details
                  </p>
              </td>
              <td width="315" valign="top">
                  <p>
                      Amount (S$)
                  </p>
              </td>
          </tr>
          <tr>
              <td width="315" valign="top">
                  <p>
                      Cost of Repairs
                  </p>
                  <p>
                      Loss of use (5 days)
                  </p>
              </td>
              <td width="315" valign="top">
                  <p>
                      3,950.00
                  </p>
                  <p>
                      600.00 [FORMULA OF $120 PER DAY / OR JUST WHACK VALUE]
                  </p>
              </td>
          </tr>
          <tr>
              <td width="315" valign="top">
                  <p>
                      Total
                  </p>
              </td>
              <td width="315" valign="top">
                  <p>
                      <u>$4550.00</u>
                  </p>
              </td>
          </tr>
      </tbody>
  </table>
  <p>
      We enclose herewith copies of the following documents in support of our
      client's claim:
  </p>
  <p>
      1. Motor discharge voucher signed by the owner of XXX
  </p>
  <p>
      2. Photograph of a written note admitting liability by the pillion rider,
      one Jessica Ang Kai Wen.
  </p>
  <p>
      3. Repair invoice from C L Auto Pte Ltd dated XXX
  </p>
  <p>
      4. Singapore Accident Statement lodged by the owner of SJT XXX dated XXX
  </p>
  <p>
      5. Singapore Police Report dated XXX.
  </p>
  <p>
      Further, we are instructed to demand legal fees incurred by our client at
      this stage of the proceedings.
  </p>
  <table border="1" cellSpacing="0" cellPadding="0">
      <tbody>
          <tr>
              <td width="315" valign="top">
                  <p>
                      Costs and Disbursements
                  </p>
              </td>
              <td width="315" valign="top">
                  <p>
                      $1000.00
                  </p>
              </td>
          </tr>
      </tbody>
  </table>
  <p>
      Kindly let us know within <strong>fourteen (14) days</strong> from the date
      hereof whether you are prepared to settle our client's claim, failing which
      we have our client's instructions to commence legal proceedings against
      you, in which case, please let us know whether you would appoint solicitors
      to accept service of proceedings on behalf of yourself.
  </p>


      </div>
    );
  }
}

export default LetterOne;